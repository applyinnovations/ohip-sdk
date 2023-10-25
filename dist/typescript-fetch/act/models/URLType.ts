/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Web site address, in IETF(The Internet Engineering Task Force) specified format.
 * @export
 * @interface URLType
 */
export interface URLType {
    /**
     * Defines the purpose of the URL address, such as personal, business, public, etc.
     * @type {string}
     * @memberof URLType
     */
    type?: string;
    /**
     * Property Value
     * @type {string}
     * @memberof URLType
     */
    value?: string;
}

/**
 * Check if a given object implements the URLType interface.
 */
export function instanceOfURLType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function URLTypeFromJSON(json: any): URLType {
    return URLTypeFromJSONTyped(json, false);
}

export function URLTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): URLType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function URLTypeToJSON(value?: URLType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'type': value.type,
        'value': value.value,
    };
}

