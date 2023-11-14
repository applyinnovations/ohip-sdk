/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GenderType } from './GenderType';
import {
    GenderTypeFromJSON,
    GenderTypeFromJSONTyped,
    GenderTypeToJSON,
} from './GenderType';

/**
 * List of Gender Type.
 * @export
 * @interface GenderTypesType
 */
export interface GenderTypesType extends Array<GenderType> {
}

/**
 * Check if a given object implements the GenderTypesType interface.
 */
export function instanceOfGenderTypesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GenderTypesTypeFromJSON(json: any): GenderTypesType {
    return GenderTypesTypeFromJSONTyped(json, false);
}

export function GenderTypesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenderTypesType {
    return json;
}

export function GenderTypesTypeToJSON(value?: GenderTypesType | null): any {
    return value;
}
