"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealPlanCodeTypeToJSON = exports.MealPlanCodeTypeFromJSONTyped = exports.MealPlanCodeTypeFromJSON = exports.instanceOfMealPlanCodeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MealPlanCodeType interface.
 */
function instanceOfMealPlanCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMealPlanCodeType = instanceOfMealPlanCodeType;
function MealPlanCodeTypeFromJSON(json) {
    return MealPlanCodeTypeFromJSONTyped(json, false);
}
exports.MealPlanCodeTypeFromJSON = MealPlanCodeTypeFromJSON;
function MealPlanCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'breakfastIncluded': !(0, runtime_1.exists)(json, 'breakfastIncluded') ? undefined : json['breakfastIncluded'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'dinnerIncluded': !(0, runtime_1.exists)(json, 'dinnerIncluded') ? undefined : json['dinnerIncluded'],
        'included': !(0, runtime_1.exists)(json, 'included') ? undefined : json['included'],
        'lunchIncluded': !(0, runtime_1.exists)(json, 'lunchIncluded') ? undefined : json['lunchIncluded'],
    };
}
exports.MealPlanCodeTypeFromJSONTyped = MealPlanCodeTypeFromJSONTyped;
function MealPlanCodeTypeToJSON(value) {
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
exports.MealPlanCodeTypeToJSON = MealPlanCodeTypeToJSON;