import type { Migration } from '@/databases/types';

import { InitialMigration1588102412422 } from './1588102412422-InitialMigration';
import { WebhookModel1592445003908 } from './1592445003908-WebhookModel';
import { CreateIndexStoppedAt1594825041918 } from './1594825041918-CreateIndexStoppedAt';
import { MakeStoppedAtNullable1607431743769 } from './1607431743769-MakeStoppedAtNullable';
import { AddWebhookId1611071044839 } from './1611071044839-AddWebhookId';
import { CreateTagEntity1617213344594 } from './1617213344594-CreateTagEntity';
import { AddWaitColumn1621707690587 } from './1621707690587-AddWaitColumn';
import { AddExecutionEntityIndexes1644421939510 } from './1644421939510-AddExecutionEntityIndexes';
import { CreateUserManagement1646992772331 } from './1646992772331-CreateUserManagement';
import { LowerCaseUserEmail1648740597343 } from './1648740597343-LowerCaseUserEmail';
import { CommunityNodes1652254514001 } from './1652254514001-CommunityNodes';
import { AddUserSettings1652367743993 } from './1652367743993-AddUserSettings';
import { AddAPIKeyColumn1652905585850 } from './1652905585850-AddAPIKeyColumn';
import { IntroducePinData1654089251344 } from './1654089251344-IntroducePinData';
import { CreateProcessedDataTable1721319360300 } from './1721319360300-CreateProcessedDataTable';
import { CreateCredentialsUserRole1660062385367 } from './1660062385367-CreateCredentialsUserRole';
import { CreateWorkflowsEditorRole1663755770892 } from './1663755770892-CreateWorkflowsUserRole';
import { WorkflowStatistics1664196174000 } from './1664196174000-WorkflowStatistics';
import { CreateCredentialUsageTable1665484192211 } from './1665484192211-CreateCredentialUsageTable';
import { RemoveCredentialUsageTable1665754637024 } from './1665754637024-RemoveCredentialUsageTable';
import { AddTriggerCountColumn1669823906993 } from './1669823906993-AddTriggerCountColumn';
import { MessageEventBusDestinations1671535397530 } from './1671535397530-MessageEventBusDestinations';
import { DeleteExecutionsWithWorkflows1673268682475 } from './1673268682475-DeleteExecutionsWithWorkflows';
import { AddStatusToExecutions1674138566000 } from './1674138566000-AddStatusToExecutions';
import { MigrateExecutionStatus1676996103000 } from './1676996103000-MigrateExecutionStatus';
import { UpdateRunningExecutionStatus1677237073720 } from './1677237073720-UpdateRunningExecutionStatus';
import { CreateVariables1677501636752 } from './1677501636752-CreateVariables';
import { CreateExecutionMetadataTable1679416281777 } from './1679416281777-CreateExecutionMetadataTable';
import { AddUserActivatedProperty1681134145996 } from './1681134145996-AddUserActivatedProperty';
import { RemoveSkipOwnerSetup1681134145997 } from './1681134145997-RemoveSkipOwnerSetup';
import { MigrateIntegerKeysToString1690000000002 } from './1690000000002-MigrateIntegerKeysToString';
import { SeparateExecutionData1690000000010 } from './1690000000010-SeparateExecutionData';
import { FixMissingIndicesFromStringIdMigration1690000000020 } from './1690000000020-FixMissingIndicesFromStringIdMigration';
import { RemoveResetPasswordColumns1690000000030 } from './1690000000030-RemoveResetPasswordColumns';
import { AddMfaColumns1690000000030 } from './1690000000040-AddMfaColumns';
import { ExecutionSoftDelete1693491613982 } from './1693491613982-ExecutionSoftDelete';
import { DropRoleMapping1705429061930 } from './1705429061930-DropRoleMapping';
import { AddActivatedAtUserSetting1717498465931 } from './1717498465931-AddActivatedAtUserSetting';
import { UniqueWorkflowNames1620821879465 } from '../common/1620821879465-UniqueWorkflowNames';
import { UpdateWorkflowCredentials1630330987096 } from '../common/1630330987096-UpdateWorkflowCredentials';
import { AddNodeIds1658930531669 } from '../common/1658930531669-AddNodeIds';
import { AddJsonKeyPinData1659888469333 } from '../common/1659888469333-AddJsonKeyPinData';
import { AddWorkflowVersionIdColumn1669739707124 } from '../common/1669739707124-AddWorkflowVersionIdColumn';
import { RemoveWorkflowDataLoadedFlag1671726148419 } from '../common/1671726148419-RemoveWorkflowDataLoadedFlag';
import { CreateLdapEntities1674509946020 } from '../common/1674509946020-CreateLdapEntities';
import { PurgeInvalidWorkflowConnections1675940580449 } from '../common/1675940580449-PurgeInvalidWorkflowConnections';
import { CreateWorkflowNameIndex1691088862123 } from '../common/1691088862123-CreateWorkflowNameIndex';
import { CreateWorkflowHistoryTable1692967111175 } from '../common/1692967111175-CreateWorkflowHistoryTable';
import { DisallowOrphanExecutions1693554410387 } from '../common/1693554410387-DisallowOrphanExecutions';
import { AddWorkflowMetadata1695128658538 } from '../common/1695128658538-AddWorkflowMetadata';
import { ModifyWorkflowHistoryNodesAndConnections1695829275184 } from '../common/1695829275184-ModifyWorkflowHistoryNodesAndConnections';
import { AddGlobalAdminRole1700571993961 } from '../common/1700571993961-AddGlobalAdminRole';
import { RemoveFailedExecutionStatus1711018413374 } from '../common/1711018413374-RemoveFailedExecutionStatus';
import { MoveSshKeysToDatabase1711390882123 } from '../common/1711390882123-MoveSshKeysToDatabase';
import { RemoveNodesAccess1712044305787 } from '../common/1712044305787-RemoveNodesAccess';
import { CreateProject1714133768519 } from '../common/1714133768519-CreateProject';
import { MakeExecutionStatusNonNullable1714133768521 } from '../common/1714133768521-MakeExecutionStatusNonNullable';
import { AddConstraintToExecutionMetadata1720101653148 } from '../common/1720101653148-AddConstraintToExecutionMetadata';
import { CreateInvalidAuthTokenTable1723627610222 } from '../common/1723627610222-CreateInvalidAuthTokenTable';
import { RefactorExecutionIndices1723796243146 } from '../common/1723796243146-RefactorExecutionIndices';
import { CreateAnnotationTables1724753530828 } from '../common/1724753530828-CreateExecutionAnnotationTables';

const sqliteMigrations: Migration[] = [
	InitialMigration1588102412422,
	WebhookModel1592445003908,
	CreateIndexStoppedAt1594825041918,
	AddWebhookId1611071044839,
	MakeStoppedAtNullable1607431743769,
	CreateTagEntity1617213344594,
	UniqueWorkflowNames1620821879465,
	AddWaitColumn1621707690587,
	UpdateWorkflowCredentials1630330987096,
	AddExecutionEntityIndexes1644421939510,
	CreateUserManagement1646992772331,
	LowerCaseUserEmail1648740597343,
	AddUserSettings1652367743993,
	CommunityNodes1652254514001,
	AddAPIKeyColumn1652905585850,
	IntroducePinData1654089251344,
	CreateProcessedDataTable1721319360300,
	AddNodeIds1658930531669,
	AddJsonKeyPinData1659888469333,
	CreateCredentialsUserRole1660062385367,
	CreateWorkflowsEditorRole1663755770892,
	CreateCredentialUsageTable1665484192211,
	RemoveCredentialUsageTable1665754637024,
	AddWorkflowVersionIdColumn1669739707124,
	WorkflowStatistics1664196174000,
	AddTriggerCountColumn1669823906993,
	RemoveWorkflowDataLoadedFlag1671726148419,
	MessageEventBusDestinations1671535397530,
	DeleteExecutionsWithWorkflows1673268682475,
	CreateLdapEntities1674509946020,
	PurgeInvalidWorkflowConnections1675940580449,
	AddStatusToExecutions1674138566000,
	MigrateExecutionStatus1676996103000,
	UpdateRunningExecutionStatus1677237073720,
	CreateVariables1677501636752,
	CreateExecutionMetadataTable1679416281777,
	AddUserActivatedProperty1681134145996,
	MigrateIntegerKeysToString1690000000002,
	SeparateExecutionData1690000000010,
	RemoveSkipOwnerSetup1681134145997,
	FixMissingIndicesFromStringIdMigration1690000000020,
	RemoveResetPasswordColumns1690000000030,
	CreateWorkflowNameIndex1691088862123,
	AddMfaColumns1690000000030,
	CreateWorkflowHistoryTable1692967111175,
	DisallowOrphanExecutions1693554410387,
	ExecutionSoftDelete1693491613982,
	AddWorkflowMetadata1695128658538,
	ModifyWorkflowHistoryNodesAndConnections1695829275184,
	AddGlobalAdminRole1700571993961,
	DropRoleMapping1705429061930,
	RemoveFailedExecutionStatus1711018413374,
	MoveSshKeysToDatabase1711390882123,
	RemoveNodesAccess1712044305787,
	CreateProject1714133768519,
	MakeExecutionStatusNonNullable1714133768521,
	AddActivatedAtUserSetting1717498465931,
	AddConstraintToExecutionMetadata1720101653148,
	CreateInvalidAuthTokenTable1723627610222,
	RefactorExecutionIndices1723796243146,
	CreateAnnotationTables1724753530828,
];

export { sqliteMigrations };
