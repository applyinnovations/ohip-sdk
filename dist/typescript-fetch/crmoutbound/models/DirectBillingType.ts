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
    hotelId?: string;
    /**
     * Hotel Code for which the details of direct billing is provided for a profile.
     * @type {string}
     * @memberof DirectBillingType
     */
    aRNumber?: string;
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
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'aRNumber': !exists(json, 'aRNumber') ? undefined : json['aRNumber'],
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
        
        'hotelId': value.hotelId,
        'aRNumber': value.aRNumber,
    };
}

