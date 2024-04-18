/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ReservationInfoType } from './ReservationInfoType';
import {
    ReservationInfoTypeFromJSON,
    ReservationInfoTypeFromJSONTyped,
    ReservationInfoTypeToJSON,
} from './ReservationInfoType';

/**
 * A collection of reservation history details attached to Profiles.
 * @export
 * @interface HistoryListType
 */
export interface HistoryListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof HistoryListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof HistoryListType
     */
    hasMore?: boolean;
    /**
     * Additional reservation information attached to the profile . Eg : History reservation details
     * @type {Array<ReservationInfoType>}
     * @memberof HistoryListType
     */
    reservationInfo?: Array<ReservationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof HistoryListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the HistoryListType interface.
 */
export function instanceOfHistoryListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HistoryListTypeFromJSON(json: any): HistoryListType {
    return HistoryListTypeFromJSONTyped(json, false);
}

export function HistoryListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HistoryListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(ReservationInfoTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function HistoryListTypeToJSON(value?: HistoryListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'hasMore': value.hasMore,
        'reservationInfo': value.reservationInfo === undefined ? undefined : ((value.reservationInfo as Array<any>).map(ReservationInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
