/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ResGuestType } from './ResGuestType';
import {
    ResGuestTypeFromJSON,
    ResGuestTypeFromJSONTyped,
    ResGuestTypeToJSON,
} from './ResGuestType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Reservation information related to the trace.
 * @export
 * @interface TraceResvInfoType
 */
export interface TraceResvInfoType {
    /**
     * Hotel Code where trace is set.
     * @type {string}
     * @memberof TraceResvInfoType
     */
    hotelId?: string;
    /**
     * Collection of guests associated with the reservation.
     * @type {Array<ResGuestType>}
     * @memberof TraceResvInfoType
     */
    reservationGuests?: Array<ResGuestType>;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof TraceResvInfoType
     */
    reservationIdList?: Array<UniqueIDType>;
    /**
     * Current Reservation Status.
     * @type {string}
     * @memberof TraceResvInfoType
     */
    reservationStatus?: string;
    /**
     * Room Id
     * @type {string}
     * @memberof TraceResvInfoType
     */
    roomId?: string;
    /**
     * Current Room Status.
     * @type {string}
     * @memberof TraceResvInfoType
     */
    roomStatus?: string;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof TraceResvInfoType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the TraceResvInfoType interface.
 */
export function instanceOfTraceResvInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TraceResvInfoTypeFromJSON(json: any): TraceResvInfoType {
    return TraceResvInfoTypeFromJSONTyped(json, false);
}

export function TraceResvInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TraceResvInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reservationGuests': !exists(json, 'reservationGuests') ? undefined : ((json['reservationGuests'] as Array<any>).map(ResGuestTypeFromJSON)),
        'reservationIdList': !exists(json, 'reservationIdList') ? undefined : ((json['reservationIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reservationStatus': !exists(json, 'reservationStatus') ? undefined : json['reservationStatus'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomStatus': !exists(json, 'roomStatus') ? undefined : json['roomStatus'],
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function TraceResvInfoTypeToJSON(value?: TraceResvInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'reservationGuests': value.reservationGuests === undefined ? undefined : ((value.reservationGuests as Array<any>).map(ResGuestTypeToJSON)),
        'reservationIdList': value.reservationIdList === undefined ? undefined : ((value.reservationIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reservationStatus': value.reservationStatus,
        'roomId': value.roomId,
        'roomStatus': value.roomStatus,
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

