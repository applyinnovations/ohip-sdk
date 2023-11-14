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
import type { TemplateTurnAwayCodeType } from './TemplateTurnAwayCodeType';
import {
    TemplateTurnAwayCodeTypeFromJSON,
    TemplateTurnAwayCodeTypeFromJSONTyped,
    TemplateTurnAwayCodeTypeToJSON,
} from './TemplateTurnAwayCodeType';

/**
 * Collection of template turnaway codes
 * @export
 * @interface TemplateTurnAwayCodesType
 */
export interface TemplateTurnAwayCodesType extends Array<TemplateTurnAwayCodeType> {
}

/**
 * Check if a given object implements the TemplateTurnAwayCodesType interface.
 */
export function instanceOfTemplateTurnAwayCodesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateTurnAwayCodesTypeFromJSON(json: any): TemplateTurnAwayCodesType {
    return TemplateTurnAwayCodesTypeFromJSONTyped(json, false);
}

export function TemplateTurnAwayCodesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateTurnAwayCodesType {
    return json;
}

export function TemplateTurnAwayCodesTypeToJSON(value?: TemplateTurnAwayCodesType | null): any {
    return value;
}
