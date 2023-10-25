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
 * Meal plan codes associated with the rate codes.
 * @export
 * @interface MealPlanCodeType
 */
export interface MealPlanCodeType {
    /**
     * Represents if the meal plan code is available for breakfast or not.
     * @type {boolean}
     * @memberof MealPlanCodeType
     */
    breakfastIncluded?: boolean;
    /**
     * Meal plan code.
     * @type {string}
     * @memberof MealPlanCodeType
     */
    code?: string;
    /**
     * Represents if the meal plan code is available for dinner or not.
     * @type {boolean}
     * @memberof MealPlanCodeType
     */
    dinnerIncluded?: boolean;
    /**
     * Represents if the meal plan code is included in rate code or not.
     * @type {boolean}
     * @memberof MealPlanCodeType
     */
    included?: boolean;
    /**
     * Represents if the meal plan code is available for lunch or not.
     * @type {boolean}
     * @memberof MealPlanCodeType
     */
    lunchIncluded?: boolean;
}

/**
 * Check if a given object implements the MealPlanCodeType interface.
 */
export function instanceOfMealPlanCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MealPlanCodeTypeFromJSON(json: any): MealPlanCodeType {
    return MealPlanCodeTypeFromJSONTyped(json, false);
}

export function MealPlanCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MealPlanCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'breakfastIncluded': !exists(json, 'breakfastIncluded') ? undefined : json['breakfastIncluded'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'dinnerIncluded': !exists(json, 'dinnerIncluded') ? undefined : json['dinnerIncluded'],
        'included': !exists(json, 'included') ? undefined : json['included'],
        'lunchIncluded': !exists(json, 'lunchIncluded') ? undefined : json['lunchIncluded'],
    };
}

export function MealPlanCodeTypeToJSON(value?: MealPlanCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'breakfastIncluded': value.breakfastIncluded,
        'code': value.code,
        'dinnerIncluded': value.dinnerIncluded,
        'included': value.included,
        'lunchIncluded': value.lunchIncluded,
    };
}

