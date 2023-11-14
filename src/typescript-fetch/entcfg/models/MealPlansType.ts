/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { MealPlanCodeType } from './MealPlanCodeType';
import {
    MealPlanCodeTypeFromJSON,
    MealPlanCodeTypeFromJSONTyped,
    MealPlanCodeTypeToJSON,
} from './MealPlanCodeType';

/**
 * Meal plan codes associated with the rate codes.
 * @export
 * @interface MealPlansType
 */
export interface MealPlansType extends Array<MealPlanCodeType> {
}

/**
 * Check if a given object implements the MealPlansType interface.
 */
export function instanceOfMealPlansType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MealPlansTypeFromJSON(json: any): MealPlansType {
    return MealPlansTypeFromJSONTyped(json, false);
}

export function MealPlansTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MealPlansType {
    return json;
}

export function MealPlansTypeToJSON(value?: MealPlansType | null): any {
    return value;
}
