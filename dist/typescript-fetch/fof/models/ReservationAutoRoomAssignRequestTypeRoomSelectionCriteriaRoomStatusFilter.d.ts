/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FrontOfficeRoomStatusType } from './FrontOfficeRoomStatusType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
/**
 * Fetch instructions that should be used to get hotel rooms.
 * @export
 * @interface ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter
 */
export interface ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter {
    /**
     * Front office room status instructions to be used in requests for fetching housekeeping rooms.
     * @type {Array<FrontOfficeRoomStatusType>}
     * @memberof ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter
     */
    hotelFORoomStatusList?: Array<FrontOfficeRoomStatusType>;
    /**
     * Hotel room status instructions to be used in requests for fetching rooms.
     * @type {Array<HousekeepingRoomStatusType>}
     * @memberof ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter
     */
    hotelRoomStatusList?: Array<HousekeepingRoomStatusType>;
}
/**
 * Check if a given object implements the ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter interface.
 */
export declare function instanceOfReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter(value: object): boolean;
export declare function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSON(json: any): ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter;
export declare function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter;
export declare function ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilterToJSON(value?: ReservationAutoRoomAssignRequestTypeRoomSelectionCriteriaRoomStatusFilter | null): any;