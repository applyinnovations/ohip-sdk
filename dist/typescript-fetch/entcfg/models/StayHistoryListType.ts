/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface StayHistoryListType
 */
export interface StayHistoryListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof StayHistoryListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof StayHistoryListType
     */
    hasMore?: boolean;
    /**
     * Additional reservation information attached to the profile . Eg : History reservation details
     * @type {Array<StayReservationInfoType>}
     * @memberof StayHistoryListType
     */
    reservationInfo?: Array<StayReservationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof StayHistoryListType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the StayHistoryListType interface.
 */
export function instanceOfStayHistoryListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayHistoryListTypeFromJSON(json: any): StayHistoryListType {
    return StayHistoryListTypeFromJSONTyped(json, false);
}

export function StayHistoryListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayHistoryListType {
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

export function StayHistoryListTypeToJSON(value?: StayHistoryListType | null): any {
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

