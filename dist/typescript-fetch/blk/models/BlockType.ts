/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { AttachmentType } from './AttachmentType';
import {
    AttachmentTypeFromJSON,
    AttachmentTypeFromJSONTyped,
    AttachmentTypeToJSON,
} from './AttachmentType';
import type { BlockAccessExclusionsType } from './BlockAccessExclusionsType';
import {
    BlockAccessExclusionsTypeFromJSON,
    BlockAccessExclusionsTypeFromJSONTyped,
    BlockAccessExclusionsTypeToJSON,
} from './BlockAccessExclusionsType';
import type { BlockAlternateDateType } from './BlockAlternateDateType';
import {
    BlockAlternateDateTypeFromJSON,
    BlockAlternateDateTypeFromJSONTyped,
    BlockAlternateDateTypeToJSON,
} from './BlockAlternateDateType';
import type { BlockDetailsType } from './BlockDetailsType';
import {
    BlockDetailsTypeFromJSON,
    BlockDetailsTypeFromJSONTyped,
    BlockDetailsTypeToJSON,
} from './BlockDetailsType';
import type { BlockInstructionTypeBlockProfiles } from './BlockInstructionTypeBlockProfiles';
import {
    BlockInstructionTypeBlockProfilesFromJSON,
    BlockInstructionTypeBlockProfilesFromJSONTyped,
    BlockInstructionTypeBlockProfilesToJSON,
} from './BlockInstructionTypeBlockProfiles';
import type { BlockInstructionTypeBlockSecurity } from './BlockInstructionTypeBlockSecurity';
import {
    BlockInstructionTypeBlockSecurityFromJSON,
    BlockInstructionTypeBlockSecurityFromJSONTyped,
    BlockInstructionTypeBlockSecurityToJSON,
} from './BlockInstructionTypeBlockSecurity';
import type { BlockInstructionTypeComments } from './BlockInstructionTypeComments';
import {
    BlockInstructionTypeCommentsFromJSON,
    BlockInstructionTypeCommentsFromJSONTyped,
    BlockInstructionTypeCommentsToJSON,
} from './BlockInstructionTypeComments';
import type { BlockInstructionTypeExternalAttributes } from './BlockInstructionTypeExternalAttributes';
import {
    BlockInstructionTypeExternalAttributesFromJSON,
    BlockInstructionTypeExternalAttributesFromJSONTyped,
    BlockInstructionTypeExternalAttributesToJSON,
} from './BlockInstructionTypeExternalAttributes';
import type { BlockInstructionTypeGenericRoomAllocations } from './BlockInstructionTypeGenericRoomAllocations';
import {
    BlockInstructionTypeGenericRoomAllocationsFromJSON,
    BlockInstructionTypeGenericRoomAllocationsFromJSONTyped,
    BlockInstructionTypeGenericRoomAllocationsToJSON,
} from './BlockInstructionTypeGenericRoomAllocations';
import type { BlockInstructionTypeRoomAllocations } from './BlockInstructionTypeRoomAllocations';
import {
    BlockInstructionTypeRoomAllocationsFromJSON,
    BlockInstructionTypeRoomAllocationsFromJSONTyped,
    BlockInstructionTypeRoomAllocationsToJSON,
} from './BlockInstructionTypeRoomAllocations';
import type { BlockInventoryItemType } from './BlockInventoryItemType';
import {
    BlockInventoryItemTypeFromJSON,
    BlockInventoryItemTypeFromJSONTyped,
    BlockInventoryItemTypeToJSON,
} from './BlockInventoryItemType';
import type { BlockOwnersType } from './BlockOwnersType';
import {
    BlockOwnersTypeFromJSON,
    BlockOwnersTypeFromJSONTyped,
    BlockOwnersTypeToJSON,
} from './BlockOwnersType';
import type { BlockPackageType } from './BlockPackageType';
import {
    BlockPackageTypeFromJSON,
    BlockPackageTypeFromJSONTyped,
    BlockPackageTypeToJSON,
} from './BlockPackageType';
import type { BlockReservationDetailsType } from './BlockReservationDetailsType';
import {
    BlockReservationDetailsTypeFromJSON,
    BlockReservationDetailsTypeFromJSONTyped,
    BlockReservationDetailsTypeToJSON,
} from './BlockReservationDetailsType';
import type { BlockRestrictionsType } from './BlockRestrictionsType';
import {
    BlockRestrictionsTypeFromJSON,
    BlockRestrictionsTypeFromJSONTyped,
    BlockRestrictionsTypeToJSON,
} from './BlockRestrictionsType';
import type { BlockStatisticsSummaryType } from './BlockStatisticsSummaryType';
import {
    BlockStatisticsSummaryTypeFromJSON,
    BlockStatisticsSummaryTypeFromJSONTyped,
    BlockStatisticsSummaryTypeToJSON,
} from './BlockStatisticsSummaryType';
import type { BlockStatisticsType } from './BlockStatisticsType';
import {
    BlockStatisticsTypeFromJSON,
    BlockStatisticsTypeFromJSONTyped,
    BlockStatisticsTypeToJSON,
} from './BlockStatisticsType';
import type { BlockTraceType } from './BlockTraceType';
import {
    BlockTraceTypeFromJSON,
    BlockTraceTypeFromJSONTyped,
    BlockTraceTypeToJSON,
} from './BlockTraceType';
import type { BlockWashScheduleType } from './BlockWashScheduleType';
import {
    BlockWashScheduleTypeFromJSON,
    BlockWashScheduleTypeFromJSONTyped,
    BlockWashScheduleTypeToJSON,
} from './BlockWashScheduleType';
import type { CateringType } from './CateringType';
import {
    CateringTypeFromJSON,
    CateringTypeFromJSONTyped,
    CateringTypeToJSON,
} from './CateringType';
import type { CentralSalesLeadsType } from './CentralSalesLeadsType';
import {
    CentralSalesLeadsTypeFromJSON,
    CentralSalesLeadsTypeFromJSONTyped,
    CentralSalesLeadsTypeToJSON,
} from './CentralSalesLeadsType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import {
    ExternalReferenceTypeFromJSON,
    ExternalReferenceTypeFromJSONTyped,
    ExternalReferenceTypeToJSON,
} from './ExternalReferenceType';
import type { IndicatorType } from './IndicatorType';
import {
    IndicatorTypeFromJSON,
    IndicatorTypeFromJSONTyped,
    IndicatorTypeToJSON,
} from './IndicatorType';
import type { MasterBlockInfoType } from './MasterBlockInfoType';
import {
    MasterBlockInfoTypeFromJSON,
    MasterBlockInfoTypeFromJSONTyped,
    MasterBlockInfoTypeToJSON,
} from './MasterBlockInfoType';
import type { RateProgramType } from './RateProgramType';
import {
    RateProgramTypeFromJSON,
    RateProgramTypeFromJSONTyped,
    RateProgramTypeToJSON,
} from './RateProgramType';
import type { ReservationPoliciesType } from './ReservationPoliciesType';
import {
    ReservationPoliciesTypeFromJSON,
    ReservationPoliciesTypeFromJSONTyped,
    ReservationPoliciesTypeToJSON,
} from './ReservationPoliciesType';
import type { SellMessageConfigsType } from './SellMessageConfigsType';
import {
    SellMessageConfigsTypeFromJSON,
    SellMessageConfigsTypeFromJSONTyped,
    SellMessageConfigsTypeToJSON,
} from './SellMessageConfigsType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { UserDefinedFieldsType } from './UserDefinedFieldsType';
import {
    UserDefinedFieldsTypeFromJSON,
    UserDefinedFieldsTypeFromJSONTyped,
    UserDefinedFieldsTypeToJSON,
} from './UserDefinedFieldsType';

/**
 * 
 * @export
 * @interface BlockType
 */
export interface BlockType {
    /**
     * 
     * @type {BlockAccessExclusionsType}
     * @memberof BlockType
     */
    accessExclusions?: BlockAccessExclusionsType;
    /**
     * Alternate Date information for the Block.
     * @type {Array<BlockAlternateDateType>}
     * @memberof BlockType
     */
    alternateDates?: Array<BlockAlternateDateType>;
    /**
     * Attachment List.
     * @type {Array<AttachmentType>}
     * @memberof BlockType
     */
    attachments?: Array<AttachmentType>;
    /**
     * 
     * @type {BlockDetailsType}
     * @memberof BlockType
     */
    blockDetails?: BlockDetailsType;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof BlockType
     */
    blockIdList?: Array<UniqueIDType>;
    /**
     * Collection of lamp indicators.
     * @type {Array<IndicatorType>}
     * @memberof BlockType
     */
    blockIndicators?: Array<IndicatorType>;
    /**
     * 
     * @type {BlockOwnersType}
     * @memberof BlockType
     */
    blockOwners?: BlockOwnersType;
    /**
     * A Block Package represents a non-room product provided to guests. Block Pacakges may have associated inventory and charges.
     * @type {Array<BlockPackageType>}
     * @memberof BlockType
     */
    blockPackages?: Array<BlockPackageType>;
    /**
     * 
     * @type {BlockInstructionTypeBlockProfiles}
     * @memberof BlockType
     */
    blockProfiles?: BlockInstructionTypeBlockProfiles;
    /**
     * 
     * @type {BlockInstructionTypeBlockSecurity}
     * @memberof BlockType
     */
    blockSecurity?: BlockInstructionTypeBlockSecurity;
    /**
     * 
     * @type {BlockStatisticsType}
     * @memberof BlockType
     */
    blockStatistics?: BlockStatisticsType;
    /**
     * 
     * @type {CateringType}
     * @memberof BlockType
     */
    catering?: CateringType;
    /**
     * 
     * @type {CentralSalesLeadsType}
     * @memberof BlockType
     */
    centralSalesLeads?: CentralSalesLeadsType;
    /**
     * 
     * @type {BlockInstructionTypeComments}
     * @memberof BlockType
     */
    comments?: BlockInstructionTypeComments;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof BlockType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof BlockType
     */
    creatorId?: string;
    /**
     * 
     * @type {BlockInstructionTypeExternalAttributes}
     * @memberof BlockType
     */
    externalAttributes?: BlockInstructionTypeExternalAttributes;
    /**
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof BlockType
     */
    externalReferences?: Array<ExternalReferenceType>;
    /**
     * 
     * @type {BlockInstructionTypeGenericRoomAllocations}
     * @memberof BlockType
     */
    genericRoomAllocations?: BlockInstructionTypeGenericRoomAllocations;
    /**
     * 
     * @type {string}
     * @memberof BlockType
     */
    hotelId?: string;
    /**
     * Inventory item attached to a block.
     * @type {Array<BlockInventoryItemType>}
     * @memberof BlockType
     */
    inventoryItems?: Array<BlockInventoryItemType>;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof BlockType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof BlockType
     */
    lastModifyDateTime?: string;
    /**
     * Mark this block as recently accessed.
     * @type {boolean}
     * @memberof BlockType
     */
    markAsRecentlyAccessed?: boolean;
    /**
     * 
     * @type {MasterBlockInfoType}
     * @memberof BlockType
     */
    masterBlockInfo?: MasterBlockInfoType;
    /**
     * Rate Program contains rate information required for block creation, like room pool, rate amount, market code, etc. Only available if configured in OPERA Cloud.
     * @type {Array<RateProgramType>}
     * @memberof BlockType
     */
    ratePrograms?: Array<RateProgramType>;
    /**
     * 
     * @type {BlockReservationDetailsType}
     * @memberof BlockType
     */
    reservationDetails?: BlockReservationDetailsType;
    /**
     * A list of reservation policies.
     * @type {Array<ReservationPoliciesType>}
     * @memberof BlockType
     */
    reservationPolicies?: Array<ReservationPoliciesType>;
    /**
     * 
     * @type {BlockRestrictionsType}
     * @memberof BlockType
     */
    restrictions?: BlockRestrictionsType;
    /**
     * 
     * @type {BlockInstructionTypeRoomAllocations}
     * @memberof BlockType
     */
    roomAllocations?: BlockInstructionTypeRoomAllocations;
    /**
     * 
     * @type {SellMessageConfigsType}
     * @memberof BlockType
     */
    sellMessages?: SellMessageConfigsType;
    /**
     * Statistics summary information including Rooms Sold, Room Revenue, Food and Beverage Revenue, Average Room Rate,etc.
     * @type {Array<BlockStatisticsSummaryType>}
     * @memberof BlockType
     */
    statistics?: Array<BlockStatisticsSummaryType>;
    /**
     * List of Block traces.
     * @type {Array<BlockTraceType>}
     * @memberof BlockType
     */
    traces?: Array<BlockTraceType>;
    /**
     * 
     * @type {UserDefinedFieldsType}
     * @memberof BlockType
     */
    userDefinedFields?: UserDefinedFieldsType;
    /**
     * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
     * @type {Array<BlockWashScheduleType>}
     * @memberof BlockType
     */
    washSchedules?: Array<BlockWashScheduleType>;
}

/**
 * Check if a given object implements the BlockType interface.
 */
export function instanceOfBlockType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockTypeFromJSON(json: any): BlockType {
    return BlockTypeFromJSONTyped(json, false);
}

export function BlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessExclusions': !exists(json, 'accessExclusions') ? undefined : BlockAccessExclusionsTypeFromJSON(json['accessExclusions']),
        'alternateDates': !exists(json, 'alternateDates') ? undefined : ((json['alternateDates'] as Array<any>).map(BlockAlternateDateTypeFromJSON)),
        'attachments': !exists(json, 'attachments') ? undefined : ((json['attachments'] as Array<any>).map(AttachmentTypeFromJSON)),
        'blockDetails': !exists(json, 'blockDetails') ? undefined : BlockDetailsTypeFromJSON(json['blockDetails']),
        'blockIdList': !exists(json, 'blockIdList') ? undefined : ((json['blockIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'blockIndicators': !exists(json, 'blockIndicators') ? undefined : ((json['blockIndicators'] as Array<any>).map(IndicatorTypeFromJSON)),
        'blockOwners': !exists(json, 'blockOwners') ? undefined : BlockOwnersTypeFromJSON(json['blockOwners']),
        'blockPackages': !exists(json, 'blockPackages') ? undefined : ((json['blockPackages'] as Array<any>).map(BlockPackageTypeFromJSON)),
        'blockProfiles': !exists(json, 'blockProfiles') ? undefined : BlockInstructionTypeBlockProfilesFromJSON(json['blockProfiles']),
        'blockSecurity': !exists(json, 'blockSecurity') ? undefined : BlockInstructionTypeBlockSecurityFromJSON(json['blockSecurity']),
        'blockStatistics': !exists(json, 'blockStatistics') ? undefined : BlockStatisticsTypeFromJSON(json['blockStatistics']),
        'catering': !exists(json, 'catering') ? undefined : CateringTypeFromJSON(json['catering']),
        'centralSalesLeads': !exists(json, 'centralSalesLeads') ? undefined : CentralSalesLeadsTypeFromJSON(json['centralSalesLeads']),
        'comments': !exists(json, 'comments') ? undefined : BlockInstructionTypeCommentsFromJSON(json['comments']),
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'externalAttributes': !exists(json, 'externalAttributes') ? undefined : BlockInstructionTypeExternalAttributesFromJSON(json['externalAttributes']),
        'externalReferences': !exists(json, 'externalReferences') ? undefined : ((json['externalReferences'] as Array<any>).map(ExternalReferenceTypeFromJSON)),
        'genericRoomAllocations': !exists(json, 'genericRoomAllocations') ? undefined : BlockInstructionTypeGenericRoomAllocationsFromJSON(json['genericRoomAllocations']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inventoryItems': !exists(json, 'inventoryItems') ? undefined : ((json['inventoryItems'] as Array<any>).map(BlockInventoryItemTypeFromJSON)),
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'markAsRecentlyAccessed': !exists(json, 'markAsRecentlyAccessed') ? undefined : json['markAsRecentlyAccessed'],
        'masterBlockInfo': !exists(json, 'masterBlockInfo') ? undefined : MasterBlockInfoTypeFromJSON(json['masterBlockInfo']),
        'ratePrograms': !exists(json, 'ratePrograms') ? undefined : ((json['ratePrograms'] as Array<any>).map(RateProgramTypeFromJSON)),
        'reservationDetails': !exists(json, 'reservationDetails') ? undefined : BlockReservationDetailsTypeFromJSON(json['reservationDetails']),
        'reservationPolicies': !exists(json, 'reservationPolicies') ? undefined : ((json['reservationPolicies'] as Array<any>).map(ReservationPoliciesTypeFromJSON)),
        'restrictions': !exists(json, 'restrictions') ? undefined : BlockRestrictionsTypeFromJSON(json['restrictions']),
        'roomAllocations': !exists(json, 'roomAllocations') ? undefined : BlockInstructionTypeRoomAllocationsFromJSON(json['roomAllocations']),
        'sellMessages': !exists(json, 'sellMessages') ? undefined : SellMessageConfigsTypeFromJSON(json['sellMessages']),
        'statistics': !exists(json, 'statistics') ? undefined : ((json['statistics'] as Array<any>).map(BlockStatisticsSummaryTypeFromJSON)),
        'traces': !exists(json, 'traces') ? undefined : ((json['traces'] as Array<any>).map(BlockTraceTypeFromJSON)),
        'userDefinedFields': !exists(json, 'userDefinedFields') ? undefined : UserDefinedFieldsTypeFromJSON(json['userDefinedFields']),
        'washSchedules': !exists(json, 'washSchedules') ? undefined : ((json['washSchedules'] as Array<any>).map(BlockWashScheduleTypeFromJSON)),
    };
}

export function BlockTypeToJSON(value?: BlockType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessExclusions': BlockAccessExclusionsTypeToJSON(value.accessExclusions),
        'alternateDates': value.alternateDates === undefined ? undefined : ((value.alternateDates as Array<any>).map(BlockAlternateDateTypeToJSON)),
        'attachments': value.attachments === undefined ? undefined : ((value.attachments as Array<any>).map(AttachmentTypeToJSON)),
        'blockDetails': BlockDetailsTypeToJSON(value.blockDetails),
        'blockIdList': value.blockIdList === undefined ? undefined : ((value.blockIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'blockIndicators': value.blockIndicators === undefined ? undefined : ((value.blockIndicators as Array<any>).map(IndicatorTypeToJSON)),
        'blockOwners': BlockOwnersTypeToJSON(value.blockOwners),
        'blockPackages': value.blockPackages === undefined ? undefined : ((value.blockPackages as Array<any>).map(BlockPackageTypeToJSON)),
        'blockProfiles': BlockInstructionTypeBlockProfilesToJSON(value.blockProfiles),
        'blockSecurity': BlockInstructionTypeBlockSecurityToJSON(value.blockSecurity),
        'blockStatistics': BlockStatisticsTypeToJSON(value.blockStatistics),
        'catering': CateringTypeToJSON(value.catering),
        'centralSalesLeads': CentralSalesLeadsTypeToJSON(value.centralSalesLeads),
        'comments': BlockInstructionTypeCommentsToJSON(value.comments),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'externalAttributes': BlockInstructionTypeExternalAttributesToJSON(value.externalAttributes),
        'externalReferences': value.externalReferences === undefined ? undefined : ((value.externalReferences as Array<any>).map(ExternalReferenceTypeToJSON)),
        'genericRoomAllocations': BlockInstructionTypeGenericRoomAllocationsToJSON(value.genericRoomAllocations),
        'hotelId': value.hotelId,
        'inventoryItems': value.inventoryItems === undefined ? undefined : ((value.inventoryItems as Array<any>).map(BlockInventoryItemTypeToJSON)),
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'markAsRecentlyAccessed': value.markAsRecentlyAccessed,
        'masterBlockInfo': MasterBlockInfoTypeToJSON(value.masterBlockInfo),
        'ratePrograms': value.ratePrograms === undefined ? undefined : ((value.ratePrograms as Array<any>).map(RateProgramTypeToJSON)),
        'reservationDetails': BlockReservationDetailsTypeToJSON(value.reservationDetails),
        'reservationPolicies': value.reservationPolicies === undefined ? undefined : ((value.reservationPolicies as Array<any>).map(ReservationPoliciesTypeToJSON)),
        'restrictions': BlockRestrictionsTypeToJSON(value.restrictions),
        'roomAllocations': BlockInstructionTypeRoomAllocationsToJSON(value.roomAllocations),
        'sellMessages': SellMessageConfigsTypeToJSON(value.sellMessages),
        'statistics': value.statistics === undefined ? undefined : ((value.statistics as Array<any>).map(BlockStatisticsSummaryTypeToJSON)),
        'traces': value.traces === undefined ? undefined : ((value.traces as Array<any>).map(BlockTraceTypeToJSON)),
        'userDefinedFields': UserDefinedFieldsTypeToJSON(value.userDefinedFields),
        'washSchedules': value.washSchedules === undefined ? undefined : ((value.washSchedules as Array<any>).map(BlockWashScheduleTypeToJSON)),
    };
}

