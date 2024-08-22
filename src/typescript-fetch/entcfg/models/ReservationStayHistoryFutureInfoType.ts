/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
     * @type {StayHistoryListType}
     * @memberof ReservationStayHistoryFutureInfoType
     */
    historyList?: StayHistoryListType;
    /**
     * 
     * @type {StayFutureListType}
     * @memberof ReservationStayHistoryFutureInfoType
     */
    futureList?: StayFutureListType;
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
        
        'historyList': !exists(json, 'historyList') ? undefined : StayHistoryListTypeFromJSON(json['historyList']),
        'futureList': !exists(json, 'futureList') ? undefined : StayFutureListTypeFromJSON(json['futureList']),
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
        
        'historyList': StayHistoryListTypeToJSON(value.historyList),
        'futureList': StayFutureListTypeToJSON(value.futureList),
    };
}

