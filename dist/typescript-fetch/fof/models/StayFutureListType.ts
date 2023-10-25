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
import type { StayReservationInfoType } from './StayReservationInfoType';
import {
    StayReservationInfoTypeFromJSON,
    StayReservationInfoTypeFromJSONTyped,
    StayReservationInfoTypeToJSON,
} from './StayReservationInfoType';

/**
 * A collection of reservation history details attached to Profiles.
 * @export
 * @interface StayFutureListType
 */
export interface StayFutureListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof StayFutureListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof StayFutureListType
     */
    hasMore?: boolean;
    /**
     * Additional reservation information attached to the profile . Eg : Future reservation details
     * @type {Array<StayReservationInfoType>}
     * @memberof StayFutureListType
     */
    reservationInfo?: Array<StayReservationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof StayFutureListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the StayFutureListType interface.
 */
export function instanceOfStayFutureListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayFutureListTypeFromJSON(json: any): StayFutureListType {
    return StayFutureListTypeFromJSONTyped(json, false);
}

export function StayFutureListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayFutureListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(StayReservationInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function StayFutureListTypeToJSON(value?: StayFutureListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'reservationInfo': value.reservationInfo === undefined ? undefined : ((value.reservationInfo as Array<any>).map(StayReservationInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}

