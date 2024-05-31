import { CHAT_HISTORY_CONVERSATION_LIMIT } from "../constants";
import { QUICK_ACTIONS } from "../prompts/debug_prompts";
import { AssistantAnswer, USER_INTENT } from "../types";

// ReAct agent history is string, according to the docs:
// https://js.langchain.com/v0.1/docs/modules/agents/agent_types/react/#using-with-chat-history
// TODO:
//	- 	Add sessions support
//	- 	We can use UserMessage and SystemMessage classes to make it more readable
//			but in the end it has to render to a string
export let chatHistory: string[] = [];
export const stringifyHistory = (history: string[]) => history.join('\n');

// Track used quick actions so we can alter them as the conversation progresses
export const usedHelp: Record<string, number> ={
	...QUICK_ACTIONS.reduce((acc, { label }) => ({ ...acc, [label]: 0 }), {}),
}

export const increaseHelpCounter = (userIntent: USER_INTENT) => {
	const needsMoreDetailsQuickAction = QUICK_ACTIONS.find((action) => action.key === 'more_details');
	const needsAnotherSuggestionQuickAction = QUICK_ACTIONS.find((action) => action.key === 'another_suggestion');
	if (!needsMoreDetailsQuickAction || !needsAnotherSuggestionQuickAction) {
		return;
	}
	switch (userIntent) {
		case USER_INTENT.NEEDS_MORE_DETAILS:
			usedHelp[needsMoreDetailsQuickAction.label]++;
			break;
		case USER_INTENT.NEEDS_ANOTHER_SUGGESTION:
			usedHelp[needsAnotherSuggestionQuickAction.label]++;
			break;
	}
	console.log('>> 🎰 USED QUICK ACTIONS <<', usedHelp);
}

export const resetSuggestionsCounter = (label: string) => {
	if (label in usedHelp) {
		usedHelp[label] = 0;
	}
}

export const checkIfAllHelpUsed = () => {
	// Check if any of the quick actions have been used more than three times
	return QUICK_ACTIONS.some(({ label }) => usedHelp[label] >= 3);
}

export const getHumanMessages = (history: string[]) => {
	return history.filter((message, index) => message.startsWith('Human:'));
};

export const getLastAssistantMessage = (history: string[]) => {
	const assistantMessages = history.filter((message, index) => message.startsWith('Assistant:'));
	return assistantMessages[assistantMessages.length - 1];
}

export const getLastFollowUpQuestion = (history: string[]) => {
	const lastAssistantMessage = getLastAssistantMessage(history);
	if (lastAssistantMessage && lastAssistantMessage.startsWith('Assistant: ')) {
		try {
			const parsedMessage: AssistantAnswer = JSON.parse(lastAssistantMessage.replace('Assistant: ', ''));
			return parsedMessage.followUp;
		} catch (error) {
			return null;
		}
	}
	return null;
}

export const addConversationToHistory = (userMessage: string, systemMessage: string) => {
	// If history has more than 5 conversations, remove the first one
	if (chatHistory.length >= CHAT_HISTORY_CONVERSATION_LIMIT * 2) {
		chatHistory.shift();
		chatHistory.shift();
	}
	chatHistory.push(`Human: ${userMessage}`);
	chatHistory.push(`Assistant: ${systemMessage}`);
};

export const clearChatHistory = () => {
	chatHistory = [];
	for (const key in usedHelp) {
		usedHelp[key] = 0;
	}
	QUICK_ACTIONS.forEach((action) => {
		action.disabled = false;
	})
}
