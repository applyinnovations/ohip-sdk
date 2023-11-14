/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
