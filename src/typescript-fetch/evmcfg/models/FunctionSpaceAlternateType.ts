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
 * Details for alternate function spaces.
 * @export
 * @interface FunctionSpaceAlternateType
 */
export interface FunctionSpaceAlternateType {
    /**
     * 
     * @type {Array<string>}
     * @memberof FunctionSpaceAlternateType
     */
    excludedCateringEventTypes?: Array<string>;
    /**
     * Flag to indicate if the function space must have an alternate space when used.
     * @type {boolean}
     * @memberof FunctionSpaceAlternateType
     */
    forceAlternate?: boolean;
}

/**
 * Check if a given object implements the FunctionSpaceAlternateType interface.
 */
export function instanceOfFunctionSpaceAlternateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceAlternateTypeFromJSON(json: any): FunctionSpaceAlternateType {
    return FunctionSpaceAlternateTypeFromJSONTyped(json, false);
}

export function FunctionSpaceAlternateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceAlternateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'excludedCateringEventTypes': !exists(json, 'excludedCateringEventTypes') ? undefined : json['excludedCateringEventTypes'],
        'forceAlternate': !exists(json, 'forceAlternate') ? undefined : json['forceAlternate'],
    };
}

export function FunctionSpaceAlternateTypeToJSON(value?: FunctionSpaceAlternateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'excludedCateringEventTypes': value.excludedCateringEventTypes,
        'forceAlternate': value.forceAlternate,
    };
}

