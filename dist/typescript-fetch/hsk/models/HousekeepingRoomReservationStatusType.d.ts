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
/**
 * Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room.
 * @export
 */
export declare const HousekeepingRoomReservationStatusType: {
    readonly Arrival: "Arrival";
    readonly Arrived: "Arrived";
    readonly DayUse: "DayUse";
    readonly DueOut: "DueOut";
    readonly Departed: "Departed";
    readonly NotReserved: "NotReserved";
    readonly StayOver: "StayOver";
};
export type HousekeepingRoomReservationStatusType = typeof HousekeepingRoomReservationStatusType[keyof typeof HousekeepingRoomReservationStatusType];
export declare function HousekeepingRoomReservationStatusTypeFromJSON(json: any): HousekeepingRoomReservationStatusType;
export declare function HousekeepingRoomReservationStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomReservationStatusType;
export declare function HousekeepingRoomReservationStatusTypeToJSON(value?: HousekeepingRoomReservationStatusType | null): any;
