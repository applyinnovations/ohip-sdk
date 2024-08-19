/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockClassificationType } from './BlockClassificationType';
import type { BlockNonCompeteType } from './BlockNonCompeteType';
import type { BlockRateProtectionType } from './BlockRateProtectionType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { StatusColorType } from './StatusColorType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Contains information of the business block .
 * @export
 * @interface BlockInfoType
 */
export interface BlockInfoType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof BlockInfoType
     */
    accountId?: UniqueIDType;
    /**
     * Account name attached to the business block.
     * @type {string}
     * @memberof BlockInfoType
     */
    accountName?: string;
    /**
     * Average room rate of the business block.
     * @type {number}
     * @memberof BlockInfoType
     */
    averageRoomRate?: number;
    /**
     *
     * @type {BlockClassificationType}
     * @memberof BlockInfoType
     */
    blockClassification?: BlockClassificationType;
    /**
     * Block code for the block.
     * @type {string}
     * @memberof BlockInfoType
     */
    blockCode?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof BlockInfoType
     */
    blockId?: UniqueIDType;
    /**
     * Name of the business block.
     * @type {string}
     * @memberof BlockInfoType
     */
    blockName?: string;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockInfoType
     */
    blockStatus?: CodeDescriptionType;
    /**
     *
     * @type {StatusColorType}
     * @memberof BlockInfoType
     */
    blockStatusColor?: StatusColorType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof BlockInfoType
     */
    contactId?: UniqueIDType;
    /**
     * Contact name attached to the business block.
     * @type {string}
     * @memberof BlockInfoType
     */
    contactName?: string;
    /**
     * Indicates the likelihood of the block moving to the next active block status.
     * @type {string}
     * @memberof BlockInfoType
     */
    conversionCode?: string;
    /**
     * Currency Code attached to the business block.
     * @type {string}
     * @memberof BlockInfoType
     */
    currencyCode?: string;
    /**
     * Date after which unused block rooms should be returned to house.
     * @type {string}
     * @memberof BlockInfoType
     */
    cutOffDate?: string;
    /**
     * End date for this block.
     * @type {string}
     * @memberof BlockInfoType
     */
    endDate?: string;
    /**
     * Guarantee Code for the block.
     * @type {string}
     * @memberof BlockInfoType
     */
    guaranteeCode?: string;
    /**
     * The hotel code of the business block.
     * @type {string}
     * @memberof BlockInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {BlockNonCompeteType}
     * @memberof BlockInfoType
     */
    nonCompeteDetails?: BlockNonCompeteType;
    /**
     * Indicates the ranking of the block.
     * @type {string}
     * @memberof BlockInfoType
     */
    rankingCode?: string;
    /**
     *
     * @type {BlockRateProtectionType}
     * @memberof BlockInfoType
     */
    rateProtectionDetails?: BlockRateProtectionType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockInfoType
     */
    roomSalesManager?: CodeDescriptionType;
    /**
     * Start date for this block.
     * @type {string}
     * @memberof BlockInfoType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the BlockInfoType interface.
 */
export declare function instanceOfBlockInfoType(value: object): boolean;
export declare function BlockInfoTypeFromJSON(json: any): BlockInfoType;
export declare function BlockInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockInfoType;
export declare function BlockInfoTypeToJSON(value?: BlockInfoType | null): any;
