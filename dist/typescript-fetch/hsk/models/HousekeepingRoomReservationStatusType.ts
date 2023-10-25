/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


/**
 * Room Reservation status types used in housekeeping. These may be different from the actual reservation statuses as these relate to the current reservation for the room.
 * @export
 */
export const HousekeepingRoomReservationStatusType = {
    Arrival: 'Arrival',
    Arrived: 'Arrived',
    DayUse: 'DayUse',
    DueOut: 'DueOut',
    Departed: 'Departed',
    NotReserved: 'NotReserved',
    StayOver: 'StayOver'
} as const;
export type HousekeepingRoomReservationStatusType = typeof HousekeepingRoomReservationStatusType[keyof typeof HousekeepingRoomReservationStatusType];


export function HousekeepingRoomReservationStatusTypeFromJSON(json: any): HousekeepingRoomReservationStatusType {
    return HousekeepingRoomReservationStatusTypeFromJSONTyped(json, false);
}

export function HousekeepingRoomReservationStatusTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomReservationStatusType {
    return json as HousekeepingRoomReservationStatusType;
}

export function HousekeepingRoomReservationStatusTypeToJSON(value?: HousekeepingRoomReservationStatusType | null): any {
    return value as any;
}

