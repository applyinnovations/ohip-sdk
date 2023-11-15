/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AttachmentType } from './AttachmentType';
import type { BlockAccessExclusionsType } from './BlockAccessExclusionsType';
import type { BlockAlternateDateType } from './BlockAlternateDateType';
import type { BlockDetailsType } from './BlockDetailsType';
import type { BlockInstructionTypeBlockProfiles } from './BlockInstructionTypeBlockProfiles';
import type { BlockInstructionTypeBlockSecurity } from './BlockInstructionTypeBlockSecurity';
import type { BlockInstructionTypeComments } from './BlockInstructionTypeComments';
import type { BlockInstructionTypeExternalAttributes } from './BlockInstructionTypeExternalAttributes';
import type { BlockInstructionTypeGenericRoomAllocations } from './BlockInstructionTypeGenericRoomAllocations';
import type { BlockInstructionTypeRoomAllocations } from './BlockInstructionTypeRoomAllocations';
import type { BlockInventoryItemType } from './BlockInventoryItemType';
import type { BlockOwnersType } from './BlockOwnersType';
import type { BlockPackageType } from './BlockPackageType';
import type { BlockReservationDetailsType } from './BlockReservationDetailsType';
import type { BlockRestrictionsType } from './BlockRestrictionsType';
import type { BlockStatisticsSummaryType } from './BlockStatisticsSummaryType';
import type { BlockStatisticsType } from './BlockStatisticsType';
import type { BlockTraceType } from './BlockTraceType';
import type { BlockWashScheduleType } from './BlockWashScheduleType';
import type { CateringType } from './CateringType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import type { IndicatorType } from './IndicatorType';
import type { MasterBlockInfoType } from './MasterBlockInfoType';
import type { MasterSubBlockBaseInfoType } from './MasterSubBlockBaseInfoType';
import type { RateProgramType } from './RateProgramType';
import type { ReservationPoliciesType } from './ReservationPoliciesType';
import type { SellMessageConfigsType } from './SellMessageConfigsType';
import type { UniqueIDType } from './UniqueIDType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
/**
 * Extended Block Type object to hold information for a Sub Allocation along with master allocation identification.
 * @export
 * @interface SubAllocationType
 */
export interface SubAllocationType {
    /**
     *
     * @type {BlockAccessExclusionsType}
     * @memberof SubAllocationType
     */
    accessExclusions?: BlockAccessExclusionsType;
    /**
     * Alternate Date information for the Block.
     * @type {Array<BlockAlternateDateType>}
     * @memberof SubAllocationType
     */
    alternateDates?: Array<BlockAlternateDateType>;
    /**
     * Attachment List.
     * @type {Array<AttachmentType>}
     * @memberof SubAllocationType
     */
    attachments?: Array<AttachmentType>;
    /**
     *
     * @type {BlockDetailsType}
     * @memberof SubAllocationType
     */
    blockDetails?: BlockDetailsType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof SubAllocationType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof SubAllocationType
     */
    blockIndicators?: Array<IndicatorType>;
    /**
     *
     * @type {BlockOwnersType}
     * @memberof SubAllocationType
     */
    blockOwners?: BlockOwnersType;
    /**
     * A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges.
     * @type {Array<BlockPackageType>}
     * @memberof SubAllocationType
     */
    blockPackages?: Array<BlockPackageType>;
    /**
     *
     * @type {BlockInstructionTypeBlockProfiles}
     * @memberof SubAllocationType
     */
    blockProfiles?: BlockInstructionTypeBlockProfiles;
    /**
     *
     * @type {BlockInstructionTypeBlockSecurity}
     * @memberof SubAllocationType
     */
    blockSecurity?: BlockInstructionTypeBlockSecurity;
    /**
     *
     * @type {BlockStatisticsType}
     * @memberof SubAllocationType
     */
    blockStatistics?: BlockStatisticsType;
    /**
     *
     * @type {CateringType}
     * @memberof SubAllocationType
     */
    catering?: CateringType;
    /**
     *
     * @type {BlockInstructionTypeComments}
     * @memberof SubAllocationType
     */
    comments?: BlockInstructionTypeComments;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof SubAllocationType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof SubAllocationType
     */
    creatorId?: string;
    /**
     *
     * @type {BlockInstructionTypeExternalAttributes}
     * @memberof SubAllocationType
     */
    externalAttributes?: BlockInstructionTypeExternalAttributes;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof SubAllocationType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     *
     * @type {BlockInstructionTypeGenericRoomAllocations}
     * @memberof SubAllocationType
     */
    genericRoomAllocations?: BlockInstructionTypeGenericRoomAllocations;
    /**
     *
     * @type {string}
     * @memberof SubAllocationType
     */
    hotelId?: string;
    /**
     * Inventory item attached to a block.
     * @type {Array<BlockInventoryItemType>}
     * @memberof SubAllocationType
     */
    inventoryItems?: Array<BlockInventoryItemType>;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof SubAllocationType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof SubAllocationType
     */
    lastModifyDateTime?: string;
    /**
     * Mark this block as recently accessed.
     * @type {boolean}
     * @memberof SubAllocationType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     *
     * @type {MasterSubBlockBaseInfoType}
     * @memberof SubAllocationType
     */
    masterAllocationInfo?: MasterSubBlockBaseInfoType;
    /**
     *
     * @type {MasterBlockInfoType}
     * @memberof SubAllocationType
     */
    masterBlockInfo?: MasterBlockInfoType;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof SubAllocationType
     */
    purgeDate?: string;
    /**
     * Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud.
     * @type {Array<RateProgramType>}
     * @memberof SubAllocationType
     */
    ratePrograms?: Array<RateProgramType>;
    /**
     *
     * @type {BlockReservationDetailsType}
     * @memberof SubAllocationType
     */
    reservationDetails?: BlockReservationDetailsType;
    /**
     * A list of reservation policies.
     * @type {Array<ReservationPoliciesType>}
     * @memberof SubAllocationType
     */
    reservationPolicies?: Array<ReservationPoliciesType>;
    /**
     *
     * @type {BlockRestrictionsType}
     * @memberof SubAllocationType
     */
    restrictions?: BlockRestrictionsType;
    /**
     *
     * @type {BlockInstructionTypeRoomAllocations}
     * @memberof SubAllocationType
     */
    roomAllocations?: BlockInstructionTypeRoomAllocations;
    /**
     *
     * @type {SellMessageConfigsType}
     * @memberof SubAllocationType
     */
    sellMessages?: SellMessageConfigsType;
    /**
     * Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc.
     * @type {Array<BlockStatisticsSummaryType>}
     * @memberof SubAllocationType
     */
    statistics?: Array<BlockStatisticsSummaryType>;
    /**
     * List of Block traces.
     * @type {Array<BlockTraceType>}
     * @memberof SubAllocationType
     */
    traces?: Array<BlockTraceType>;
    /**
     *
     * @type {UserDefinedFieldsType}
     * @memberof SubAllocationType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
     * @type {Array<BlockWashScheduleType>}
     * @memberof SubAllocationType
     */
    washSchedules?: Array<BlockWashScheduleType>;
}
/**
 * Check if a given object implements the SubAllocationType interface.
 */
export declare function instanceOfSubAllocationType(value: object): boolean;
export declare function SubAllocationTypeFromJSON(json: any): SubAllocationType;
export declare function SubAllocationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SubAllocationType;
export declare function SubAllocationTypeToJSON(value?: SubAllocationType | null): any;
