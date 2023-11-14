/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { FacilityCodeType } from './FacilityCodeType';
import {
    FacilityCodeTypeFromJSON,
    FacilityCodeTypeFromJSONTyped,
    FacilityCodeTypeToJSON,
} from './FacilityCodeType';

/**
 * List of the facility codes.
 * @export
 * @interface FacilityCodesType
 */
export interface FacilityCodesType extends Array<FacilityCodeType> {
}

/**
 * Check if a given object implements the FacilityCodesType interface.
 */
export function instanceOfFacilityCodesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityCodesTypeFromJSON(json: any): FacilityCodesType {
    return FacilityCodesTypeFromJSONTyped(json, false);
}

export function FacilityCodesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCodesType {
    return json;
}

export function FacilityCodesTypeToJSON(value?: FacilityCodesType | null): any {
    return value;
}
