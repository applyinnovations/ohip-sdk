"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomChargeExemptionTypeToJSON = exports.CustomChargeExemptionTypeFromJSONTyped = exports.CustomChargeExemptionTypeFromJSON = exports.instanceOfCustomChargeExemptionType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CustomChargeExemptionDatesType_1 = require("./CustomChargeExemptionDatesType");
const CustomChargeQuantityType_1 = require("./CustomChargeQuantityType");
const ExcludedDatesType_1 = require("./ExcludedDatesType");
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
        'customChargeDates': !(0, runtime_1.exists)(json, 'customChargeDates') ? undefined : (0, CustomChargeExemptionDatesType_1.CustomChargeExemptionDatesTypeFromJSON)(json['customChargeDates']),
        'customChargeQuantity': !(0, runtime_1.exists)(json, 'customChargeQuantity') ? undefined : (0, CustomChargeQuantityType_1.CustomChargeQuantityTypeFromJSON)(json['customChargeQuantity']),
        'customChargesExemption': !(0, runtime_1.exists)(json, 'customChargesExemption') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['customChargesExemption']),
        'excludedDates': !(0, runtime_1.exists)(json, 'excludedDates') ? undefined : (0, ExcludedDatesType_1.ExcludedDatesTypeFromJSON)(json['excludedDates']),
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
        'customChargeDates': (0, CustomChargeExemptionDatesType_1.CustomChargeExemptionDatesTypeToJSON)(value.customChargeDates),
        'customChargeQuantity': (0, CustomChargeQuantityType_1.CustomChargeQuantityTypeToJSON)(value.customChargeQuantity),
        'customChargesExemption': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.customChargesExemption),
        'excludedDates': (0, ExcludedDatesType_1.ExcludedDatesTypeToJSON)(value.excludedDates),
        'percentage': value.percentage,
        'propertyExemption': value.propertyExemption,
    };
}
exports.CustomChargeExemptionTypeToJSON = CustomChargeExemptionTypeToJSON;