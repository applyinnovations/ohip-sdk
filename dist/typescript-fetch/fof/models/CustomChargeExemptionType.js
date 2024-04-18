"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomChargeExemptionTypeToJSON = exports.CustomChargeExemptionTypeFromJSONTyped = exports.CustomChargeExemptionTypeFromJSON = exports.instanceOfCustomChargeExemptionType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CustomChargeExemptionDateType_1 = require("./CustomChargeExemptionDateType");
const CustomChargeQuantityType_1 = require("./CustomChargeQuantityType");
const ExcludedDateType_1 = require("./ExcludedDateType");
/**
 * Check if a given object implements the CustomChargeExemptionType interface.
 */
function instanceOfCustomChargeExemptionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCustomChargeExemptionType = instanceOfCustomChargeExemptionType;
function CustomChargeExemptionTypeFromJSON(json) {
    return CustomChargeExemptionTypeFromJSONTyped(json, false);
}
exports.CustomChargeExemptionTypeFromJSON = CustomChargeExemptionTypeFromJSON;
function CustomChargeExemptionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'customChargeDates': !(0, runtime_1.exists)(json, 'customChargeDates') ? undefined : (json['customChargeDates'].map(CustomChargeExemptionDateType_1.CustomChargeExemptionDateTypeFromJSON)),
        'customChargeQuantity': !(0, runtime_1.exists)(json, 'customChargeQuantity') ? undefined : (0, CustomChargeQuantityType_1.CustomChargeQuantityTypeFromJSON)(json['customChargeQuantity']),
        'customChargesExemption': !(0, runtime_1.exists)(json, 'customChargesExemption') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['customChargesExemption']),
        'excludedDates': !(0, runtime_1.exists)(json, 'excludedDates') ? undefined : (json['excludedDates'].map(ExcludedDateType_1.ExcludedDateTypeFromJSON)),
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'propertyExemption': !(0, runtime_1.exists)(json, 'propertyExemption') ? undefined : json['propertyExemption'],
    };
}
exports.CustomChargeExemptionTypeFromJSONTyped = CustomChargeExemptionTypeFromJSONTyped;
function CustomChargeExemptionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'customChargeDates': value.customChargeDates === undefined ? undefined : (value.customChargeDates.map(CustomChargeExemptionDateType_1.CustomChargeExemptionDateTypeToJSON)),
        'customChargeQuantity': (0, CustomChargeQuantityType_1.CustomChargeQuantityTypeToJSON)(value.customChargeQuantity),
        'customChargesExemption': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.customChargesExemption),
        'excludedDates': value.excludedDates === undefined ? undefined : (value.excludedDates.map(ExcludedDateType_1.ExcludedDateTypeToJSON)),
        'percentage': value.percentage,
        'propertyExemption': value.propertyExemption,
    };
}
exports.CustomChargeExemptionTypeToJSON = CustomChargeExemptionTypeToJSON;