"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HousekeepingCreditRulesToBeChangedToJSON = exports.HousekeepingCreditRulesToBeChangedFromJSONTyped = exports.HousekeepingCreditRulesToBeChangedFromJSON = exports.instanceOfHousekeepingCreditRulesToBeChanged = void 0;
const runtime_1 = require("../runtime");
const HousekeepingCreditRuleType_1 = require("./HousekeepingCreditRuleType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the HousekeepingCreditRulesToBeChanged interface.
 */
function instanceOfHousekeepingCreditRulesToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHousekeepingCreditRulesToBeChanged = instanceOfHousekeepingCreditRulesToBeChanged;
function HousekeepingCreditRulesToBeChangedFromJSON(json) {
    return HousekeepingCreditRulesToBeChangedFromJSONTyped(json, false);
}
exports.HousekeepingCreditRulesToBeChangedFromJSON = HousekeepingCreditRulesToBeChangedFromJSON;
function HousekeepingCreditRulesToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'creditRules': !(0, runtime_1.exists)(json, 'creditRules') ? undefined : (json['creditRules'].map(HousekeepingCreditRuleType_1.HousekeepingCreditRuleTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.HousekeepingCreditRulesToBeChangedFromJSONTyped = HousekeepingCreditRulesToBeChangedFromJSONTyped;
function HousekeepingCreditRulesToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'creditRules': value.creditRules === undefined ? undefined : (value.creditRules.map(HousekeepingCreditRuleType_1.HousekeepingCreditRuleTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.HousekeepingCreditRulesToBeChangedToJSON = HousekeepingCreditRulesToBeChangedToJSON;
