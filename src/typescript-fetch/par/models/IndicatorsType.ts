/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { IndicatorType } from './IndicatorType';
import {
    IndicatorTypeFromJSON,
    IndicatorTypeFromJSONTyped,
    IndicatorTypeToJSON,
} from './IndicatorType';

/**
 * Collection of lamp indicators.
 * @export
 * @interface IndicatorsType
 */
export interface IndicatorsType extends Array<IndicatorType> {
}

/**
 * Check if a given object implements the IndicatorsType interface.
 */
export function instanceOfIndicatorsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndicatorsTypeFromJSON(json: any): IndicatorsType {
    return IndicatorsTypeFromJSONTyped(json, false);
}

export function IndicatorsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndicatorsType {
    return json;
}

export function IndicatorsTypeToJSON(value?: IndicatorsType | null): any {
    return value;
}
