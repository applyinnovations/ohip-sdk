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
import type { DateRangeType } from './DateRangeType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
/**
 * Out Of Order and Out Of Service Room information.
 * @export
 * @interface CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
 */
export interface CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    end?: string;
    /**
     *
     * @type {DateRangeType}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    newDateRange?: DateRangeType;
    /**
     * Reason Code why the room is OO/OS.
     * @type {string}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    reasonCode?: string;
    /**
     * Reason Description why the room is OO/OS.
     * @type {string}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    reasonDescription?: string;
    /**
     * Notes or Remarks on the OO/OS room
     * @type {string}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    repairRemarks?: string;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    returnStatus?: HousekeepingRoomStatusType;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder
     */
    start?: string;
}
/**
 * Check if a given object implements the CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder interface.
 */
export declare function instanceOfCompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder(value: object): boolean;
export declare function CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderFromJSON(json: any): CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder;
export declare function CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder;
export declare function CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrderToJSON(value?: CompleteRoomRepairCriteriaRoomRangeListRoomOutOfOrder | null): any;