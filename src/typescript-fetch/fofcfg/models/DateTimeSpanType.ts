/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface DateTimeSpanType
 */
export interface DateTimeSpanType {
    /**
     * 
     * @type {string}
     * @memberof DateTimeSpanType
     */
    endDateTime?: string;
    /**
     * 
     * @type {string}
     * @memberof DateTimeSpanType
     */
    startDateTime?: string;
}

/**
 * Check if a given object implements the DateTimeSpanType interface.
 */
export function instanceOfDateTimeSpanType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DateTimeSpanTypeFromJSON(json: any): DateTimeSpanType {
    return DateTimeSpanTypeFromJSONTyped(json, false);
}

export function DateTimeSpanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateTimeSpanType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDateTime': !exists(json, 'endDateTime') ? undefined : json['endDateTime'],
        'startDateTime': !exists(json, 'startDateTime') ? undefined : json['startDateTime'],
    };
}

export function DateTimeSpanTypeToJSON(value?: DateTimeSpanType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDateTime': value.endDateTime,
        'startDateTime': value.startDateTime,
    };
}

