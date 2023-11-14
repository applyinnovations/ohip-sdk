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
import type { HousekeepingSectionGroupCopyType } from './HousekeepingSectionGroupCopyType';
import {
    HousekeepingSectionGroupCopyTypeFromJSON,
    HousekeepingSectionGroupCopyTypeFromJSONTyped,
    HousekeepingSectionGroupCopyTypeToJSON,
} from './HousekeepingSectionGroupCopyType';

/**
 * List of the housekeeping section groups to be copied
 * @export
 * @interface HousekeepingSectionGroupsCopyType
 */
export interface HousekeepingSectionGroupsCopyType extends Array<HousekeepingSectionGroupCopyType> {
}

/**
 * Check if a given object implements the HousekeepingSectionGroupsCopyType interface.
 */
export function instanceOfHousekeepingSectionGroupsCopyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingSectionGroupsCopyTypeFromJSON(json: any): HousekeepingSectionGroupsCopyType {
    return HousekeepingSectionGroupsCopyTypeFromJSONTyped(json, false);
}

export function HousekeepingSectionGroupsCopyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingSectionGroupsCopyType {
    return json;
}

export function HousekeepingSectionGroupsCopyTypeToJSON(value?: HousekeepingSectionGroupsCopyType | null): any {
    return value;
}
