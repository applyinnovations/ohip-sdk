/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AttachmentsType } from './AttachmentsType';
import type { BlockDetailsType } from './BlockDetailsType';
import type { BlockIdList } from './BlockIdList';
import type { BlockInventoryItemsType } from './BlockInventoryItemsType';
import type { BlockOwnersType } from './BlockOwnersType';
import type { BlockRestrictionsType } from './BlockRestrictionsType';
import type { BlockStatisticsSummaryType } from './BlockStatisticsSummaryType';
import type { BlockStatisticsType } from './BlockStatisticsType';
import type { BlockTracesType } from './BlockTracesType';
import type { BlockTypeBlockProfiles } from './BlockTypeBlockProfiles';
import type { BlockTypeBlockSecurity } from './BlockTypeBlockSecurity';
import type { BlockTypeComments } from './BlockTypeComments';
import type { BlockWashSchedulesType } from './BlockWashSchedulesType';
import type { CateringType } from './CateringType';
import type { ExternalReferencesType } from './ExternalReferencesType';
import type { IndicatorsType } from './IndicatorsType';
import type { SellMessageConfigsType } from './SellMessageConfigsType';
/**
 *
 * @export
 * @interface BlockType
 */
export interface BlockType {
    /**
     *
     * @type {AttachmentsType}
     * @memberof BlockType
     */
    attachments?: AttachmentsType;
    /**
     *
     * @type {BlockDetailsType}
     * @memberof BlockType
     */
    blockDetails?: BlockDetailsType;
    /**
     *
     * @type {BlockIdList}
     * @memberof BlockType
     */
    blockIdList?: BlockIdList;
    /**
     *
     * @type {IndicatorsType}
     * @memberof BlockType
     */
    blockIndicators?: IndicatorsType;
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
     *
     * @type {ExternalReferencesType}
     * @memberof BlockType
     */
    externalReferences?: ExternalReferencesType;
    /**
     *
     * @type {string}
     * @memberof BlockType
     */
    hotelId?: string;
    /**
     *
     * @type {BlockInventoryItemsType}
     * @memberof BlockType
     */
    inventoryItems?: BlockInventoryItemsType;
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
     *
     * @type {BlockTracesType}
     * @memberof BlockType
     */
    traces?: BlockTracesType;
    /**
     *
     * @type {BlockWashSchedulesType}
     * @memberof BlockType
     */
    washSchedules?: BlockWashSchedulesType;
}
/**
 * Check if a given object implements the BlockType interface.
 */
export declare function instanceOfBlockType(value: object): boolean;
export declare function BlockTypeFromJSON(json: any): BlockType;
export declare function BlockTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockType;
export declare function BlockTypeToJSON(value?: BlockType | null): any;
