/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { HeldByType } from './HeldByType';
import type { ReleaseItemsInventoryHoldType } from './ReleaseItemsInventoryHoldType';
import type { TimeSpanType } from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutItemInventoryHoldRequest
 */
export interface PutItemInventoryHoldRequest {
    /**
     *
     * @type {HeldByType}
     * @memberof PutItemInventoryHoldRequest
     */
    heldBy?: HeldByType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PutItemInventoryHoldRequest
     */
    heldById?: UniqueIDType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PutItemInventoryHoldRequest
     */
    hotelId?: string;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PutItemInventoryHoldRequest
     */
    itemCode?: string;
    /**
     * ID reference for the one who hold the item. Used for releasing/reserving the item afterwards.
     * @type {number}
     * @memberof PutItemInventoryHoldRequest
     */
    itemHoldId?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof PutItemInventoryHoldRequest
     */
    itemId?: UniqueIDType;
    /**
     *
     * @type {ReleaseItemsInventoryHoldType}
     * @memberof PutItemInventoryHoldRequest
     */
    releaseItemsInventoryHoldInfo?: ReleaseItemsInventoryHoldType;
    /**
     *
     * @type {TimeSpanType}
     * @memberof PutItemInventoryHoldRequest
     */
    reserveDates?: TimeSpanType;
    /**
     *
     * @type {WarningsType}
     * @memberof PutItemInventoryHoldRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutItemInventoryHoldRequest interface.
 */
export declare function instanceOfPutItemInventoryHoldRequest(value: object): boolean;
export declare function PutItemInventoryHoldRequestFromJSON(json: any): PutItemInventoryHoldRequest;
export declare function PutItemInventoryHoldRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutItemInventoryHoldRequest;
export declare function PutItemInventoryHoldRequestToJSON(value?: PutItemInventoryHoldRequest | null): any;
