/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Holds the Arrival and Departure Time Information
 * @export
 * @interface ResExpectedTimesType
 */
export interface ResExpectedTimesType {
    /**
     * Arrival Time
     * @type {string}
     * @memberof ResExpectedTimesType
     */
    resExpectedArrivalTime?: string;
    /**
     * Departure Time
     * @type {string}
     * @memberof ResExpectedTimesType
     */
    resExpectedDepartureTime?: string;
}

/**
 * Check if a given object implements the ResExpectedTimesType interface.
 */
export function instanceOfResExpectedTimesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ResExpectedTimesTypeFromJSON(json: any): ResExpectedTimesType {
    return ResExpectedTimesTypeFromJSONTyped(json, false);
}

export function ResExpectedTimesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResExpectedTimesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'resExpectedArrivalTime': !exists(json, 'resExpectedArrivalTime') ? undefined : json['resExpectedArrivalTime'],
        'resExpectedDepartureTime': !exists(json, 'resExpectedDepartureTime') ? undefined : json['resExpectedDepartureTime'],
    };
}

export function ResExpectedTimesTypeToJSON(value?: ResExpectedTimesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'resExpectedArrivalTime': value.resExpectedArrivalTime,
        'resExpectedDepartureTime': value.resExpectedDepartureTime,
    };
}
