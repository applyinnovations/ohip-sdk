"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingCreditRuleTypeFacilityTaskRuleToJSON = exports.HousekeepingCreditRuleTypeFacilityTaskRuleFromJSONTyped = exports.HousekeepingCreditRuleTypeFacilityTaskRuleFromJSON = exports.instanceOfHousekeepingCreditRuleTypeFacilityTaskRule = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HousekeepingCreditRuleTypeFacilityTaskRule interface.
 */
function instanceOfHousekeepingCreditRuleTypeFacilityTaskRule(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingCreditRuleTypeFacilityTaskRule = instanceOfHousekeepingCreditRuleTypeFacilityTaskRule;
function HousekeepingCreditRuleTypeFacilityTaskRuleFromJSON(json) {
    return HousekeepingCreditRuleTypeFacilityTaskRuleFromJSONTyped(json, false);
}
exports.HousekeepingCreditRuleTypeFacilityTaskRuleFromJSON = HousekeepingCreditRuleTypeFacilityTaskRuleFromJSON;
function HousekeepingCreditRuleTypeFacilityTaskRuleFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'minimumTaskCount': !(0, runtime_1.exists)(json, 'minimumTaskCount') ? undefined : json['minimumTaskCount'],
        'taskCode': !(0, runtime_1.exists)(json, 'taskCode') ? undefined : json['taskCode'],
    };
}
exports.HousekeepingCreditRuleTypeFacilityTaskRuleFromJSONTyped = HousekeepingCreditRuleTypeFacilityTaskRuleFromJSONTyped;
function HousekeepingCreditRuleTypeFacilityTaskRuleToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'minimumTaskCount': value.minimumTaskCount,
        'taskCode': value.taskCode,
    };
}
exports.HousekeepingCreditRuleTypeFacilityTaskRuleToJSON = HousekeepingCreditRuleTypeFacilityTaskRuleToJSON;
