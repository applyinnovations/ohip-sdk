/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AttachmentType } from './AttachmentType';
import type { BlockDetailsType } from './BlockDetailsType';
import type { BlockInventoryItemType } from './BlockInventoryItemType';
import type { BlockOwnersType } from './BlockOwnersType';
import type { BlockRestrictionsType } from './BlockRestrictionsType';
import type { BlockStatisticsSummaryType } from './BlockStatisticsSummaryType';
import type { BlockStatisticsType } from './BlockStatisticsType';
import type { BlockTraceType } from './BlockTraceType';
import type { BlockTypeBlockProfiles } from './BlockTypeBlockProfiles';
import type { BlockTypeBlockSecurity } from './BlockTypeBlockSecurity';
import type { BlockTypeComments } from './BlockTypeComments';
import type { BlockWashScheduleType } from './BlockWashScheduleType';
import type { CateringType } from './CateringType';
import type { ExternalReferenceType } from './ExternalReferenceType';
import type { IndicatorType } from './IndicatorType';
import type { SellMessageConfigsType } from './SellMessageConfigsType';
import type { UniqueIDType } from './UniqueIDType';
/**
 *
 * @export
 * @interface BlockType
 */
export interface BlockType {
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
     *
     * @type {BlockTypeBlockProfiles}
     * @memberof BlockType
     */
    blockProfiles?: BlockTypeBlockProfiles;
    /**
     *
     * @type {BlockTypeBlockSecurity}
     * @memberof BlockType
     */
    blockSecurity?: BlockTypeBlockSecurity;
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
     * @type {BlockTypeComments}
     * @memberof BlockType
     */
    comments?: BlockTypeComments;
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
     * This type contains unique information of external reference.
     * @type {Array<ExternalReferenceType>}
     * @memberof BlockType
     */
    externalReferences?: Array<ExternalReferenceType>;
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
     * @type {BlockRestrictionsType}
     * @memberof BlockType
     */
    restrictions?: BlockRestrictionsType;
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
     * Wash Schedule attached to the block, which allows to release inventory based on selected wash schedule type.
     * @type {Array<BlockWashScheduleType>}
     * @memberof BlockType
     */
    washSchedules?: Array<BlockWashScheduleType>;
}
/**
 * Check if a given object implements the BlockType interface.
 */
export declare function instanceOfBlockType(value: object): boolean;
export declare function BlockTypeFromJSON(json: any): BlockType;
export declare function BlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockType;
export declare function BlockTypeToJSON(value?: BlockType | null): any;
