/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate Async API
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateRestrictionType } from './CreateRestrictionType';
import {
    CreateRestrictionTypeFromJSON,
    CreateRestrictionTypeFromJSONTyped,
    CreateRestrictionTypeToJSON,
} from './CreateRestrictionType';

/**
 * Collection of restrictions to be configured.
 * @export
 * @interface RestrictionsType
 */
export interface RestrictionsType extends Array<CreateRestrictionType> {
}

/**
 * Check if a given object implements the RestrictionsType interface.
 */
export function instanceOfRestrictionsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RestrictionsTypeFromJSON(json: any): RestrictionsType {
    return RestrictionsTypeFromJSONTyped(json, false);
}

export function RestrictionsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionsType {
    return json;
}

export function RestrictionsTypeToJSON(value?: RestrictionsType | null): any {
    return value;
}
