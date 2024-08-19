/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Defines Child's Age.
 * @export
 * @interface ChildAgeType
 */
export interface ChildAgeType {
    /**
     * Age of a child in years.
     * @type {number}
     * @memberof ChildAgeType
     */
    age?: number;
}

/**
 * Check if a given object implements the ChildAgeType interface.
 */
export function instanceOfChildAgeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChildAgeTypeFromJSON(json: any): ChildAgeType {
    return ChildAgeTypeFromJSONTyped(json, false);
}

export function ChildAgeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChildAgeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'age': !exists(json, 'age') ? undefined : json['age'],
    };
}

export function ChildAgeTypeToJSON(value?: ChildAgeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'age': value.age,
    };
}

