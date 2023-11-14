/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TemplateRateClassType } from './TemplateRateClassType';
import {
    TemplateRateClassTypeFromJSON,
    TemplateRateClassTypeFromJSONTyped,
    TemplateRateClassTypeToJSON,
} from './TemplateRateClassType';

/**
 * Collection of template rate classes.
 * @export
 * @interface TemplateRateClassesType
 */
export interface TemplateRateClassesType extends Array<TemplateRateClassType> {
}

/**
 * Check if a given object implements the TemplateRateClassesType interface.
 */
export function instanceOfTemplateRateClassesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TemplateRateClassesTypeFromJSON(json: any): TemplateRateClassesType {
    return TemplateRateClassesTypeFromJSONTyped(json, false);
}

export function TemplateRateClassesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRateClassesType {
    return json;
}

export function TemplateRateClassesTypeToJSON(value?: TemplateRateClassesType | null): any {
    return value;
}
