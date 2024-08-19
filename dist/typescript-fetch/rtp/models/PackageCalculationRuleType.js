"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackageCalculationRuleTypeToJSON = exports.PackageCalculationRuleTypeFromJSONTyped = exports.PackageCalculationRuleTypeFromJSON = exports.PackageCalculationRuleType = void 0;
/**
 * Simple type for package caluculation rules.
 * @export
 */
exports.PackageCalculationRuleType = {
    FlatRate: 'FlatRate',
    PerPerson: 'PerPerson',
    PerAdult: 'PerAdult',
    PerChild: 'PerChild',
    PerRoom: 'PerRoom'
};
function PackageCalculationRuleTypeFromJSON(json) {
    return PackageCalculationRuleTypeFromJSONTyped(json, false);
}
exports.PackageCalculationRuleTypeFromJSON = PackageCalculationRuleTypeFromJSON;
function PackageCalculationRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PackageCalculationRuleTypeFromJSONTyped = PackageCalculationRuleTypeFromJSONTyped;
function PackageCalculationRuleTypeToJSON(value) {
    return value;
}
exports.PackageCalculationRuleTypeToJSON = PackageCalculationRuleTypeToJSON;
