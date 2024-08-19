/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ReservationStatusEnumType } from './ReservationStatusEnumType';
import type { RoomClassStatisticsType } from './RoomClassStatisticsType';
/**
 * Reservation Statistics for a Reservation Status
 * @export
 * @interface ReservationStatusStatisticsType
 */
export interface ReservationStatusStatisticsType {
    /**
     *
     * @type {ReservationStatusEnumType}
     * @memberof ReservationStatusStatisticsType
     */
    reservationStatus?: ReservationStatusEnumType;
    /**
     * Reservation Statistics for each Room Class
     * @type {Array<RoomClassStatisticsType>}
     * @memberof ReservationStatusStatisticsType
     */
    roomClasses?: Array<RoomClassStatisticsType>;
    /**
     * Number of reservations.
     * @type {number}
     * @memberof ReservationStatusStatisticsType
     */
    total?: number;
}
/**
 * Check if a given object implements the ReservationStatusStatisticsType interface.
 */
export declare function instanceOfReservationStatusStatisticsType(value: object): boolean;
export declare function ReservationStatusStatisticsTypeFromJSON(json: any): ReservationStatusStatisticsType;
export declare function ReservationStatusStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationStatusStatisticsType;
export declare function ReservationStatusStatisticsTypeToJSON(value?: ReservationStatusStatisticsType | null): any;
