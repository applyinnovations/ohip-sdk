/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * This is the preconfigured routing instruction type.
 * @export
 * @interface DirectBillingType
 */
export interface DirectBillingType {
    /**
     * Hotel Code for which the details of direct billing is provided for a profile.
     * @type {string}
     * @memberof DirectBillingType
     */
    aRNumber?: string;
    /**
     * Hotel Code for which the details of direct billing is provided for a profile.
     * @type {string}
     * @memberof DirectBillingType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the DirectBillingType interface.
 */
export function instanceOfDirectBillingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DirectBillingTypeFromJSON(json: any): DirectBillingType {
    return DirectBillingTypeFromJSONTyped(json, false);
}

export function DirectBillingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DirectBillingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRNumber': !exists(json, 'aRNumber') ? undefined : json['aRNumber'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function DirectBillingTypeToJSON(value?: DirectBillingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRNumber': value.aRNumber,
        'hotelId': value.hotelId,
    };
}

