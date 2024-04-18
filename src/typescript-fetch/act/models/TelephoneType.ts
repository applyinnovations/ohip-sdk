/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Information on a telephone number for the customer.
 * @export
 * @interface TelephoneType
 */
export interface TelephoneType {
    /**
     * Telephone number assigned to a single location.
     * @type {string}
     * @memberof TelephoneType
     */
    phoneNumber?: string;
}

/**
 * Check if a given object implements the TelephoneType interface.
 */
export function instanceOfTelephoneType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TelephoneTypeFromJSON(json: any): TelephoneType {
    return TelephoneTypeFromJSONTyped(json, false);
}

export function TelephoneTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TelephoneType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    };
}

export function TelephoneTypeToJSON(value?: TelephoneType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'phoneNumber': value.phoneNumber,
    };
}
