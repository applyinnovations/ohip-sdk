/**
 * OPERA Cloud Block Configuration API
 * APIs for Block configuration, such as creating, updating, fetching and removing codes related to blocks. <br />< This might include fetching the block cancellation reasons, or creating new block refused reasons.  Wash schedules can be create, or new reservation methods could be added for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { BlockStatusCodeStatusType } from './BlockStatusCodeStatusType';
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { StatusColorType } from './StatusColorType';
/**
 * Block status code information.
 * @export
 * @interface BlockStatusCodeType
 */
export interface BlockStatusCodeType {
    /**
     * Indicates if the rooms with this status code will be allowed for pickup or not.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    allowPickup?: boolean;
    /**
     * Returns true if the status code is already used in Events.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    cateringInUse?: boolean;
    /**
     *
     * @type {BlockStatusCodeStatusType}
     * @memberof BlockStatusCodeType
     */
    cateringStatusType?: BlockStatusCodeStatusType;
    /**
     *
     * @type {StatusColorType}
     * @memberof BlockStatusCodeType
     */
    color?: StatusColorType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockStatusCodeType
     */
    defaultReservationType?: CodeDescriptionType;
    /**
     * Returns true if the status code is already used in Block / Event / Status Flow.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    inUse?: boolean;
    /**
     * Indicates the default status for all new leads. Only one lead status can be selected as the default.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    leadStatus?: boolean;
    /**
     * Indicates if the status code logs the catering changes or not.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    logCatering?: boolean;
    /**
     * Indicates that the business block created with this Status is an Opportunity.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    opportunity?: boolean;
    /**
     * Indicates the order the status code is displayed in the status cycle.
     * @type {number}
     * @memberof BlockStatusCodeType
     */
    orderBy?: number;
    /**
     * Reason type for every block reservation cancellation. Block Cancellation Reason, Block Refused Reasons, and Block Lost Reasons.
     * @type {string}
     * @memberof BlockStatusCodeType
     */
    reasonType?: string;
    /**
     * Indicates if the rooms with this status code can be returned to availability or not.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    returnToInventory?: boolean;
    /**
     *
     * @type {BlockStatusCodeStatusType}
     * @memberof BlockStatusCodeType
     */
    roomStatusType?: BlockStatusCodeStatusType;
    /**
     * Indicates if the function diary will be shown within the Sales and Catering.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    showDiary?: boolean;
    /**
     * Indicates if the status code is the starting status of the status cycle or not.
     * @type {boolean}
     * @memberof BlockStatusCodeType
     */
    starting?: boolean;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof BlockStatusCodeType
     */
    status?: CodeDescriptionType;
}
/**
 * Check if a given object implements the BlockStatusCodeType interface.
 */
export declare function instanceOfBlockStatusCodeType(value: object): boolean;
export declare function BlockStatusCodeTypeFromJSON(json: any): BlockStatusCodeType;
export declare function BlockStatusCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockStatusCodeType;
export declare function BlockStatusCodeTypeToJSON(value?: BlockStatusCodeType | null): any;
