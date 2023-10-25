/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StayFutureListType } from './StayFutureListType';
import {
    StayFutureListTypeFromJSON,
    StayFutureListTypeFromJSONTyped,
    StayFutureListTypeToJSON,
} from './StayFutureListType';
import type { StayHistoryListType } from './StayHistoryListType';
import {
    StayHistoryListTypeFromJSON,
    StayHistoryListTypeFromJSONTyped,
    StayHistoryListTypeToJSON,
} from './StayHistoryListType';

/**
 * Information of History and Future Reservation details attached to Profiles.
 * @export
 * @interface ReservationStayHistoryFutureInfoType
 */
export interface ReservationStayHistoryFutureInfoType {
    /**
     * 
     * @type {StayFutureListType}
     * @memberof ReservationStayHistoryFutureInfoType
     */
    futureList?: StayFutureListType;
    /**
     * 
     * @type {StayHistoryListType}
     * @memberof ReservationStayHistoryFutureInfoType
     */
    historyList?: StayHistoryListType;
}

/**
 * Check if a given object implements the ReservationStayHistoryFutureInfoType interface.
 */
export function instanceOfReservationStayHistoryFutureInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationStayHistoryFutureInfoTypeFromJSON(json: any): ReservationStayHistoryFutureInfoType {
    return ReservationStayHistoryFutureInfoTypeFromJSONTyped(json, false);
}

export function ReservationStayHistoryFutureInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationStayHistoryFutureInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'futureList': !exists(json, 'futureList') ? undefined : StayFutureListTypeFromJSON(json['futureList']),
        'historyList': !exists(json, 'historyList') ? undefined : StayHistoryListTypeFromJSON(json['historyList']),
    };
}

export function ReservationStayHistoryFutureInfoTypeToJSON(value?: ReservationStayHistoryFutureInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'futureList': StayFutureListTypeToJSON(value.futureList),
        'historyList': StayHistoryListTypeToJSON(value.historyList),
    };
}

