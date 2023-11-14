/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { GlobalActionCodeType } from './GlobalActionCodeType';
import {
    GlobalActionCodeTypeFromJSON,
    GlobalActionCodeTypeFromJSONTyped,
    GlobalActionCodeTypeToJSON,
} from './GlobalActionCodeType';

/**
 * List of Global Action Codes.
 * @export
 * @interface GlobalActionCodesType
 */
export interface GlobalActionCodesType extends Array<GlobalActionCodeType> {
}

/**
 * Check if a given object implements the GlobalActionCodesType interface.
 */
export function instanceOfGlobalActionCodesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GlobalActionCodesTypeFromJSON(json: any): GlobalActionCodesType {
    return GlobalActionCodesTypeFromJSONTyped(json, false);
}

export function GlobalActionCodesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalActionCodesType {
    return json;
}

export function GlobalActionCodesTypeToJSON(value?: GlobalActionCodesType | null): any {
    return value;
}
