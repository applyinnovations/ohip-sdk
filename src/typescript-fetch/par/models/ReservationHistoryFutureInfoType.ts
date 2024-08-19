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
import type { FutureListType } from './FutureListType';
import {
    FutureListTypeFromJSON,
    FutureListTypeFromJSONTyped,
    FutureListTypeToJSON,
} from './FutureListType';
import type { HistoryListType } from './HistoryListType';
import {
    HistoryListTypeFromJSON,
    HistoryListTypeFromJSONTyped,
    HistoryListTypeToJSON,
} from './HistoryListType';

/**
 * Information of History and Future Reservation details attached to Profiles.
 * @export
 * @interface ReservationHistoryFutureInfoType
 */
export interface ReservationHistoryFutureInfoType {
    /**
     * 
     * @type {FutureListType}
     * @memberof ReservationHistoryFutureInfoType
     */
    futureList?: FutureListType;
    /**
     * 
     * @type {HistoryListType}
     * @memberof ReservationHistoryFutureInfoType
     */
    historyList?: HistoryListType;
}

/**
 * Check if a given object implements the ReservationHistoryFutureInfoType interface.
 */
export function instanceOfReservationHistoryFutureInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationHistoryFutureInfoTypeFromJSON(json: any): ReservationHistoryFutureInfoType {
    return ReservationHistoryFutureInfoTypeFromJSONTyped(json, false);
}

export function ReservationHistoryFutureInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationHistoryFutureInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'futureList': !exists(json, 'futureList') ? undefined : FutureListTypeFromJSON(json['futureList']),
        'historyList': !exists(json, 'historyList') ? undefined : HistoryListTypeFromJSON(json['historyList']),
    };
}

export function ReservationHistoryFutureInfoTypeToJSON(value?: ReservationHistoryFutureInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'futureList': FutureListTypeToJSON(value.futureList),
        'historyList': HistoryListTypeToJSON(value.historyList),
    };
}

