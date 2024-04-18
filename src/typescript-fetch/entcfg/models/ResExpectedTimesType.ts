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
    reservationExpectedArrivalTime?: string;
    /**
     * Departure Time
     * @type {string}
     * @memberof ResExpectedTimesType
     */
    reservationExpectedDepartureTime?: string;
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
        
        'reservationExpectedArrivalTime': !exists(json, 'reservationExpectedArrivalTime') ? undefined : json['reservationExpectedArrivalTime'],
        'reservationExpectedDepartureTime': !exists(json, 'reservationExpectedDepartureTime') ? undefined : json['reservationExpectedDepartureTime'],
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
        
        'reservationExpectedArrivalTime': value.reservationExpectedArrivalTime,
        'reservationExpectedDepartureTime': value.reservationExpectedDepartureTime,
    };
}
