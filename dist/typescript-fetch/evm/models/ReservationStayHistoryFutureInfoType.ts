/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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

