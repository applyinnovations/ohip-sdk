"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdvancedDiscountRuleTypeToJSON = exports.AdvancedDiscountRuleTypeFromJSONTyped = exports.AdvancedDiscountRuleTypeFromJSON = exports.instanceOfAdvancedDiscountRuleType = void 0;
const runtime_1 = require("../runtime");
const AdvancedDiscountCalculationType_1 = require("./AdvancedDiscountCalculationType");
/**
 * Check if a given object implements the AdvancedDiscountRuleType interface.
 */
function instanceOfAdvancedDiscountRuleType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAdvancedDiscountRuleType = instanceOfAdvancedDiscountRuleType;
function AdvancedDiscountRuleTypeFromJSON(json) {
    return AdvancedDiscountRuleTypeFromJSONTyped(json, false);
}
exports.AdvancedDiscountRuleTypeFromJSON = AdvancedDiscountRuleTypeFromJSON;
function AdvancedDiscountRuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'calculationRule': !(0, runtime_1.exists)(json, 'calculationRule') ? undefined : (0, AdvancedDiscountCalculationType_1.AdvancedDiscountCalculationTypeFromJSON)(json['calculationRule']),
        'discountPercentage': !(0, runtime_1.exists)(json, 'discountPercentage') ? undefined : json['discountPercentage'],
        'maxOccupancyPercentage': !(0, runtime_1.exists)(json, 'maxOccupancyPercentage') ? undefined : json['maxOccupancyPercentage'],
        'minOccupancyPercentage': !(0, runtime_1.exists)(json, 'minOccupancyPercentage') ? undefined : json['minOccupancyPercentage'],
    };
}
exports.AdvancedDiscountRuleTypeFromJSONTyped = AdvancedDiscountRuleTypeFromJSONTyped;
function AdvancedDiscountRuleTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'calculationRule': (0, AdvancedDiscountCalculationType_1.AdvancedDiscountCalculationTypeToJSON)(value.calculationRule),
        'discountPercentage': value.discountPercentage,
        'maxOccupancyPercentage': value.maxOccupancyPercentage,
        'minOccupancyPercentage': value.minOccupancyPercentage,
    };
}
exports.AdvancedDiscountRuleTypeToJSON = AdvancedDiscountRuleTypeToJSON;
