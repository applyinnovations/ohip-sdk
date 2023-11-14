/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CateringMenuType } from './CateringMenuType';
import {
    CateringMenuTypeFromJSON,
    CateringMenuTypeFromJSONTyped,
    CateringMenuTypeToJSON,
} from './CateringMenuType';

/**
 * List of Values of Menu.
 * @export
 * @interface CateringMenuListType
 */
export interface CateringMenuListType extends Array<CateringMenuType> {
}

/**
 * Check if a given object implements the CateringMenuListType interface.
 */
export function instanceOfCateringMenuListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CateringMenuListTypeFromJSON(json: any): CateringMenuListType {
    return CateringMenuListTypeFromJSONTyped(json, false);
}

export function CateringMenuListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CateringMenuListType {
    return json;
}

export function CateringMenuListTypeToJSON(value?: CateringMenuListType | null): any {
    return value;
}
