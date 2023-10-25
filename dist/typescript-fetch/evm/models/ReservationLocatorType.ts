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
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import {
    DateTimeSpanTypeFromJSON,
    DateTimeSpanTypeFromJSONTyped,
    DateTimeSpanTypeToJSON,
} from './DateTimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Holds the information for a Reservation Guest Locator
 * @export
 * @interface ReservationLocatorType
 */
export interface ReservationLocatorType {
    /**
     * 
     * @type {DateTimeSpanType}
     * @memberof ReservationLocatorType
     */
    blockDates?: DateTimeSpanType;
    /**
     * 
     * @type {DateRangeType}
     * @memberof ReservationLocatorType
     */
    dateSpan?: DateRangeType;
    /**
     * User that entered this Guest Locator.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorBy?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ReservationLocatorType
     */
    locatorId?: UniqueIDType;
    /**
     * Date and time of the Guest Locator.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorOn?: string;
    /**
     * The Locator Text for the guest.
     * @type {string}
     * @memberof ReservationLocatorType
     */
    locatorText?: string;
}

/**
 * Check if a given object implements the ReservationLocatorType interface.
 */
export function instanceOfReservationLocatorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationLocatorTypeFromJSON(json: any): ReservationLocatorType {
    return ReservationLocatorTypeFromJSONTyped(json, false);
}

export function ReservationLocatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationLocatorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockDates': !exists(json, 'blockDates') ? undefined : DateTimeSpanTypeFromJSON(json['blockDates']),
        'dateSpan': !exists(json, 'dateSpan') ? undefined : DateRangeTypeFromJSON(json['dateSpan']),
        'locatorBy': !exists(json, 'locatorBy') ? undefined : json['locatorBy'],
        'locatorId': !exists(json, 'locatorId') ? undefined : UniqueIDTypeFromJSON(json['locatorId']),
        'locatorOn': !exists(json, 'locatorOn') ? undefined : json['locatorOn'],
        'locatorText': !exists(json, 'locatorText') ? undefined : json['locatorText'],
    };
}

export function ReservationLocatorTypeToJSON(value?: ReservationLocatorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockDates': DateTimeSpanTypeToJSON(value.blockDates),
        'dateSpan': DateRangeTypeToJSON(value.dateSpan),
        'locatorBy': value.locatorBy,
        'locatorId': UniqueIDTypeToJSON(value.locatorId),
        'locatorOn': value.locatorOn,
        'locatorText': value.locatorText,
    };
}

