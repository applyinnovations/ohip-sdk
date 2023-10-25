/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Lamp indicator Type.
 * @export
 * @interface IndicatorType
 */
export interface IndicatorType {
    /**
     * Indicates number of occurrences of the indicator.
     * @type {number}
     * @memberof IndicatorType
     */
    count?: number;
    /**
     * Name of the indicator.
     * @type {string}
     * @memberof IndicatorType
     */
    indicatorName?: string;
}

/**
 * Check if a given object implements the IndicatorType interface.
 */
export function instanceOfIndicatorType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IndicatorTypeFromJSON(json: any): IndicatorType {
    return IndicatorTypeFromJSONTyped(json, false);
}

export function IndicatorTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IndicatorType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'count': !exists(json, 'count') ? undefined : json['count'],
        'indicatorName': !exists(json, 'indicatorName') ? undefined : json['indicatorName'],
    };
}

export function IndicatorTypeToJSON(value?: IndicatorType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'count': value.count,
        'indicatorName': value.indicatorName,
    };
}

