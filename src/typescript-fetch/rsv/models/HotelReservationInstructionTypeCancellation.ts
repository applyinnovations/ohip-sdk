/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface HotelReservationInstructionTypeCancellation
 */
export interface HotelReservationInstructionTypeCancellation {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HotelReservationInstructionTypeCancellation
     */
    cancellationNo?: UniqueIDType;
    /**
     * 
     * @type {string}
     * @memberof HotelReservationInstructionTypeCancellation
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @type {Date}
     * @memberof HotelReservationInstructionTypeCancellation
     */
    date?: Date;
    /**
     * 
     * @type {string}
     * @memberof HotelReservationInstructionTypeCancellation
     */
    description?: string;
}

/**
 * Check if a given object implements the HotelReservationInstructionTypeCancellation interface.
 */
export function instanceOfHotelReservationInstructionTypeCancellation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelReservationInstructionTypeCancellationFromJSON(json: any): HotelReservationInstructionTypeCancellation {
    return HotelReservationInstructionTypeCancellationFromJSONTyped(json, false);
}

export function HotelReservationInstructionTypeCancellationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelReservationInstructionTypeCancellation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cancellationNo': !exists(json, 'cancellationNo') ? undefined : UniqueIDTypeFromJSON(json['cancellationNo']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'description': !exists(json, 'description') ? undefined : json['description'],
    };
}

export function HotelReservationInstructionTypeCancellationToJSON(value?: HotelReservationInstructionTypeCancellation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cancellationNo': UniqueIDTypeToJSON(value.cancellationNo),
        'code': value.code,
        'date': value.date === undefined ? undefined : (value.date.toISOString().substring(0,10)),
        'description': value.description,
    };
}
