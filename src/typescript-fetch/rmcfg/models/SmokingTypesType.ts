/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { SmokingTypeType } from './SmokingTypeType';
import {
    SmokingTypeTypeFromJSON,
    SmokingTypeTypeFromJSONTyped,
    SmokingTypeTypeToJSON,
} from './SmokingTypeType';

/**
 * List of Smoking Types.
 * @export
 * @interface SmokingTypesType
 */
export interface SmokingTypesType extends Array<SmokingTypeType> {
}

/**
 * Check if a given object implements the SmokingTypesType interface.
 */
export function instanceOfSmokingTypesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SmokingTypesTypeFromJSON(json: any): SmokingTypesType {
    return SmokingTypesTypeFromJSONTyped(json, false);
}

export function SmokingTypesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SmokingTypesType {
    return json;
}

export function SmokingTypesTypeToJSON(value?: SmokingTypesType | null): any {
    return value;
}
