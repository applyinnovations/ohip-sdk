/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Defines a Time period with start time and an end time.
 * @export
 * @interface TimeWindowType
 */
export interface TimeWindowType {
    /**
     * End Time of the Time window.
     * @type {string}
     * @memberof TimeWindowType
     */
    endTime?: string;
    /**
     * Start Time of the Time window.
     * @type {string}
     * @memberof TimeWindowType
     */
    startTime?: string;
}

/**
 * Check if a given object implements the TimeWindowType interface.
 */
export function instanceOfTimeWindowType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TimeWindowTypeFromJSON(json: any): TimeWindowType {
    return TimeWindowTypeFromJSONTyped(json, false);
}

export function TimeWindowTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeWindowType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endTime': !exists(json, 'endTime') ? undefined : json['endTime'],
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
    };
}

export function TimeWindowTypeToJSON(value?: TimeWindowType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endTime': value.endTime,
        'startTime': value.startTime,
    };
}

