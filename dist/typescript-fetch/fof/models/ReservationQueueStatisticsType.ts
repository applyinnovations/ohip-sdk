/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { ReservationQueueRoomTypeStatisticsType } from './ReservationQueueRoomTypeStatisticsType';
import {
    ReservationQueueRoomTypeStatisticsTypeFromJSON,
    ReservationQueueRoomTypeStatisticsTypeFromJSONTyped,
    ReservationQueueRoomTypeStatisticsTypeToJSON,
} from './ReservationQueueRoomTypeStatisticsType';

/**
 * Type for statistics of the reservations currently in Queue for Check-In.
 * @export
 * @interface ReservationQueueStatisticsType
 */
export interface ReservationQueueStatisticsType {
    /**
     * The average time, in seconds, of the reservations currently in queue.
     * @type {number}
     * @memberof ReservationQueueStatisticsType
     */
    averageQueueTimeCurrentReservations?: number;
    /**
     * The average time, in seconds, a reservation was on queue prior to Check-In.
     * @type {number}
     * @memberof ReservationQueueStatisticsType
     */
    averageQueueTimeToCheckIn?: number;
    /**
     * Room Type statistics for the reservations currently in Queue for Check-In.
     * @type {Array<ReservationQueueRoomTypeStatisticsType>}
     * @memberof ReservationQueueStatisticsType
     */
    roomType?: Array<ReservationQueueRoomTypeStatisticsType>;
}

/**
 * Check if a given object implements the ReservationQueueStatisticsType interface.
 */
export function instanceOfReservationQueueStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueStatisticsTypeFromJSON(json: any): ReservationQueueStatisticsType {
    return ReservationQueueStatisticsTypeFromJSONTyped(json, false);
}

export function ReservationQueueStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageQueueTimeCurrentReservations': !exists(json, 'averageQueueTimeCurrentReservations') ? undefined : json['averageQueueTimeCurrentReservations'],
        'averageQueueTimeToCheckIn': !exists(json, 'averageQueueTimeToCheckIn') ? undefined : json['averageQueueTimeToCheckIn'],
        'roomType': !exists(json, 'roomType') ? undefined : ((json['roomType'] as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeFromJSON)),
    };
}

export function ReservationQueueStatisticsTypeToJSON(value?: ReservationQueueStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageQueueTimeCurrentReservations': value.averageQueueTimeCurrentReservations,
        'averageQueueTimeToCheckIn': value.averageQueueTimeToCheckIn,
        'roomType': value.roomType === undefined ? undefined : ((value.roomType as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeToJSON)),
    };
}

