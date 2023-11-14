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
