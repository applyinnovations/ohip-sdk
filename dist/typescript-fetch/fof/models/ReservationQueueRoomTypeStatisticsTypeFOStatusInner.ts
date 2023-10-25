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
import type { FrontOfficeRoomStatusType } from './FrontOfficeRoomStatusType';
import {
    FrontOfficeRoomStatusTypeFromJSON,
    FrontOfficeRoomStatusTypeFromJSONTyped,
    FrontOfficeRoomStatusTypeToJSON,
} from './FrontOfficeRoomStatusType';
import type { ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner } from './ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner';
import {
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerFromJSON,
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerFromJSONTyped,
    ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerToJSON,
} from './ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner';

/**
 * 
 * @export
 * @interface ReservationQueueRoomTypeStatisticsTypeFOStatusInner
 */
export interface ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
    /**
     * 
     * @type {FrontOfficeRoomStatusType}
     * @memberof ReservationQueueRoomTypeStatisticsTypeFOStatusInner
     */
    frontOfficeStatus?: FrontOfficeRoomStatusType;
    /**
     * The total number of rooms for the room type grouped by their Room Status i.e Clean, Dirty etc..
     * @type {Array<ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner>}
     * @memberof ReservationQueueRoomTypeStatisticsTypeFOStatusInner
     */
    roomStatus?: Array<ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInner>;
    /**
     * The total number of rooms for the Front Office status.
     * @type {number}
     * @memberof ReservationQueueRoomTypeStatisticsTypeFOStatusInner
     */
    totalRooms?: number;
}

/**
 * Check if a given object implements the ReservationQueueRoomTypeStatisticsTypeFOStatusInner interface.
 */
export function instanceOfReservationQueueRoomTypeStatisticsTypeFOStatusInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSON(json: any): ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
    return ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSONTyped(json, false);
}

export function ReservationQueueRoomTypeStatisticsTypeFOStatusInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationQueueRoomTypeStatisticsTypeFOStatusInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'frontOfficeStatus': !exists(json, 'frontOfficeStatus') ? undefined : FrontOfficeRoomStatusTypeFromJSON(json['frontOfficeStatus']),
        'roomStatus': !exists(json, 'roomStatus') ? undefined : ((json['roomStatus'] as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerFromJSON)),
        'totalRooms': !exists(json, 'totalRooms') ? undefined : json['totalRooms'],
    };
}

export function ReservationQueueRoomTypeStatisticsTypeFOStatusInnerToJSON(value?: ReservationQueueRoomTypeStatisticsTypeFOStatusInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'frontOfficeStatus': FrontOfficeRoomStatusTypeToJSON(value.frontOfficeStatus),
        'roomStatus': value.roomStatus === undefined ? undefined : ((value.roomStatus as Array<any>).map(ReservationQueueRoomTypeStatisticsTypeFOStatusInnerRoomStatusInnerToJSON)),
        'totalRooms': value.totalRooms,
    };
}

