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
import type { ReservationQueueRoomTypeStatisticsTypeFOStatusInner } from './ReservationQueueRoomTypeStatisticsTypeFOStatusInner';
import {
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSON,
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSONTyped,
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerToJSON,
} from './ReservationQueueRoomTypeStatisticsTypeFOStatusInner';

/**
 * Type for Room Type statistics for reservations currently in Queue for Check-In. Statistics would be the number of rooms for each room type which is currently in Queue. Statistics will also include the current number of rooms for each room status for the resort at the current time i.e the number of dirty rooms, clean rooms for each room type. In addition, the statistics will include the number of rooms per room type which are Vacant / Occupied.
 * @export
 * @interface ReservationQueueRoomTypeStatisticsType
 */
export interface ReservationQueueRoomTypeStatisticsType {
    /**
     * The number of rooms for the room type grouped by their FO status i.e Vacant or Occupied.
     * @type {Array<ReservationQueueRoomTypeStatisticsTypeFOStatusInner>}
     * @memberof ReservationQueueRoomTypeStatisticsType
     */
    fOStatus?: Array<ReservationQueueRoomTypeStatisticsTypeFOStatusInner>;
    /**
     * The room type for the statistics.
     * @type {string}
     * @memberof ReservationQueueRoomTypeStatisticsType
     */
    roomType?: string;
    /**
     * The total number of reservations in Queue for this room type.
     * @type {number}
     * @memberof ReservationQueueRoomTypeStatisticsType
     */
    totalInQueue?: number;
}

/**
 * Check if a given object implements the ReservationQueueRoomTypeStatisticsType interface.
 */
export function instanceOfReservationQueueRoomTypeStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueRoomTypeStatisticsTypeFromJSON(json: any): ReservationQueueRoomTypeStatisticsType {
    return ReservationQueueRoomTypeStatisticsTypeFromJSONTyped(json, false);
}

export function ReservationQueueRoomTypeStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueRoomTypeStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fOStatus': !exists(json, 'fOStatus') ? undefined : ((json['fOStatus'] as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSON)),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'totalInQueue': !exists(json, 'totalInQueue') ? undefined : json['totalInQueue'],
    };
}

export function ReservationQueueRoomTypeStatisticsTypeToJSON(value?: ReservationQueueRoomTypeStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fOStatus': value.fOStatus === undefined ? undefined : ((value.fOStatus as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeFOStatusInnerToJSON)),
        'roomType': value.roomType,
        'totalInQueue': value.totalInQueue,
    };
}

