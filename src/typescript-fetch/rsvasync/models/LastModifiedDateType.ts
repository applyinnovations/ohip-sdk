/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Asynchronous API
 * APIs to cater for Reservation Asynchronous functionality in OPERA Cloud. This includes viewing reservation data along with its revenue. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Start and End Modified Dates of Reservations after which the results are to be fetched
 * @export
 * @interface LastModifiedDateType
 */
export interface LastModifiedDateType {
    /**
     * 
     * @type {string}
     * @memberof LastModifiedDateType
     */
    endLastModifiedDate?: string;
    /**
     * 
     * @type {string}
     * @memberof LastModifiedDateType
     */
    startLastModifiedDate?: string;
}

/**
 * Check if a given object implements the LastModifiedDateType interface.
 */
export function instanceOfLastModifiedDateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LastModifiedDateTypeFromJSON(json: any): LastModifiedDateType {
    return LastModifiedDateTypeFromJSONTyped(json, false);
}

export function LastModifiedDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LastModifiedDateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endLastModifiedDate': !exists(json, 'endLastModifiedDate') ? undefined : json['endLastModifiedDate'],
        'startLastModifiedDate': !exists(json, 'startLastModifiedDate') ? undefined : json['startLastModifiedDate'],
    };
}

export function LastModifiedDateTypeToJSON(value?: LastModifiedDateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endLastModifiedDate': value.endLastModifiedDate,
        'startLastModifiedDate': value.startLastModifiedDate,
    };
}
