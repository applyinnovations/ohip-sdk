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
/**
 * Cancellation deadline, absolute or relative.
 * @export
 * @interface PolicyDeadlineType
 */
export interface PolicyDeadlineType {
    /**
     * Defines the absolute deadline. Either this or the offset attributes may be used.
     * @type {string}
     * @memberof PolicyDeadlineType
     */
    absoluteDeadline?: string;
    /**
     * Time on offset day the cancellation penalties applies.
     * @type {string}
     * @memberof PolicyDeadlineType
     */
    offsetDropTime?: string;
    /**
     * The number of days before arrival that allows cancellation without penalties.
     * @type {number}
     * @memberof PolicyDeadlineType
     */
    offsetFromArrival?: number;
    /**
     * The number of days after booking deposit must be paid.
     * @type {number}
     * @memberof PolicyDeadlineType
     */
    offsetFromBookingDate?: number;
}

/**
 * Check if a given object implements the PolicyDeadlineType interface.
 */
export function instanceOfPolicyDeadlineType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PolicyDeadlineTypeFromJSON(json: any): PolicyDeadlineType {
    return PolicyDeadlineTypeFromJSONTyped(json, false);
}

export function PolicyDeadlineTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyDeadlineType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'absoluteDeadline': !exists(json, 'absoluteDeadline') ? undefined : json['absoluteDeadline'],
        'offsetDropTime': !exists(json, 'offsetDropTime') ? undefined : json['offsetDropTime'],
        'offsetFromArrival': !exists(json, 'offsetFromArrival') ? undefined : json['offsetFromArrival'],
        'offsetFromBookingDate': !exists(json, 'offsetFromBookingDate') ? undefined : json['offsetFromBookingDate'],
    };
}

export function PolicyDeadlineTypeToJSON(value?: PolicyDeadlineType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'absoluteDeadline': value.absoluteDeadline,
        'offsetDropTime': value.offsetDropTime,
        'offsetFromArrival': value.offsetFromArrival,
        'offsetFromBookingDate': value.offsetFromBookingDate,
    };
}
