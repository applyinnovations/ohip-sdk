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
 * Base type provides information about Catering Revenue Types Configuration.
 * @export
 * @interface DietaryPrefType
 */
export interface DietaryPrefType {
    /**
     * 
     * @type {string}
     * @memberof DietaryPrefType
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof DietaryPrefType
     */
    type?: string;
}

/**
 * Check if a given object implements the DietaryPrefType interface.
 */
export function instanceOfDietaryPrefType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DietaryPrefTypeFromJSON(json: any): DietaryPrefType {
    return DietaryPrefTypeFromJSONTyped(json, false);
}

export function DietaryPrefTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DietaryPrefType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function DietaryPrefTypeToJSON(value?: DietaryPrefType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'type': value.type,
    };
}

