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
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Information regarding why reservation has been/was cancelled. This could hold information as history even if reservation is no more in in Cancelled status.
 * @export
 * @interface HotelReservationTypeCancellation
 */
export interface HotelReservationTypeCancellation {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HotelReservationTypeCancellation
     */
    cancellationNo?: UniqueIDType;
    /**
     * 
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    date?: string;
    /**
     * 
     * @type {string}
     * @memberof HotelReservationTypeCancellation
     */
    description?: string;
}

/**
 * Check if a given object implements the HotelReservationTypeCancellation interface.
 */
export function instanceOfHotelReservationTypeCancellation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelReservationTypeCancellationFromJSON(json: any): HotelReservationTypeCancellation {
    return HotelReservationTypeCancellationFromJSONTyped(json, false);
}

export function HotelReservationTypeCancellationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationTypeCancellation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cancellationNo': !exists(json, 'cancellationNo') ? undefined : UniqueIDTypeFromJSON(json['cancellationNo']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function HotelReservationTypeCancellationToJSON(value?: HotelReservationTypeCancellation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cancellationNo': UniqueIDTypeToJSON(value.cancellationNo),
        'code': value.code,
        'date': value.date,
        'description': value.description,
    };
}

