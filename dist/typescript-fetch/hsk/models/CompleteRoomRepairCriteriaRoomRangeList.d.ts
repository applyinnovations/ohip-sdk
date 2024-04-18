/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CompleteRoomRepairCriteriaRoomRangeListRange } from './CompleteRoomRepairCriteriaRoomRangeListRange';
import type { CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder } from './CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder';
/**
 *
 * @export
 * @interface CompleteRoomRepairCriteriaRoomRangeList
 */
export interface CompleteRoomRepairCriteriaRoomRangeList {
    /**
     *
     * @type {CompleteRoomRepairCriteriaRoomRangeListRange}
     * @memberof CompleteRoomRepairCriteriaRoomRangeList
     */
    range?: CompleteRoomRepairCriteriaRoomRangeListRange;
    /**
     * Collection of room numbers to be process.
     * @type {Array<string>}
     * @memberof CompleteRoomRepairCriteriaRoomRangeList
     */
    roomIds?: Array<string>;
    /**
     *
     * @type {CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder}
     * @memberof CompleteRoomRepairCriteriaRoomRangeList
     */
    roomOutOfOrder?: CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder;
}
/**
 * Check if a given object implements the CompleteRoomRepairCriteriaRoomRangeList interface.
 */
export declare function instanceOfCompleteRoomRepairCriteriaRoomRangeList(value: object): boolean;
export declare function CompleteRoomRepairCriteriaRoomRangeListFromJSON(json: any): CompleteRoomRepairCriteriaRoomRangeList;
export declare function CompleteRoomRepairCriteriaRoomRangeListFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteRoomRepairCriteriaRoomRangeList;
export declare function CompleteRoomRepairCriteriaRoomRangeListToJSON(value?: CompleteRoomRepairCriteriaRoomRangeList | null): any;