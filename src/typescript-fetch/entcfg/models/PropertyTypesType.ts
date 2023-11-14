/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { PropertyTypeType } from './PropertyTypeType';
import {
    PropertyTypeTypeFromJSON,
    PropertyTypeTypeFromJSONTyped,
    PropertyTypeTypeToJSON,
} from './PropertyTypeType';

/**
 * List of Property Types.
 * @export
 * @interface PropertyTypesType
 */
export interface PropertyTypesType extends Array<PropertyTypeType> {
}

/**
 * Check if a given object implements the PropertyTypesType interface.
 */
export function instanceOfPropertyTypesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PropertyTypesTypeFromJSON(json: any): PropertyTypesType {
    return PropertyTypesTypeFromJSONTyped(json, false);
}

export function PropertyTypesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PropertyTypesType {
    return json;
}

export function PropertyTypesTypeToJSON(value?: PropertyTypesType | null): any {
    return value;
}
