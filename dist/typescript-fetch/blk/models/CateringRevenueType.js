"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CateringRevenueTypeToJSON = exports.CateringRevenueTypeFromJSONTyped = exports.CateringRevenueTypeFromJSON = exports.instanceOfCateringRevenueType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the CateringRevenueType interface.
 */
function instanceOfCateringRevenueType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCateringRevenueType = instanceOfCateringRevenueType;
function CateringRevenueTypeFromJSON(json) {
    return CateringRevenueTypeFromJSONTyped(json, false);
}
exports.CateringRevenueTypeFromJSON = CateringRevenueTypeFromJSON;
function CateringRevenueTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'itemDiscount': !(0, runtime_1.exists)(json, 'itemDiscount') ? undefined : json['itemDiscount'],
        'itemDiscountPercentage': !(0, runtime_1.exists)(json, 'itemDiscountPercentage') ? undefined : json['itemDiscountPercentage'],
        'serviceCharge': !(0, runtime_1.exists)(json, 'serviceCharge') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['serviceCharge']),
        'taxAmount': !(0, runtime_1.exists)(json, 'taxAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['taxAmount']),
    };
}
exports.CateringRevenueTypeFromJSONTyped = CateringRevenueTypeFromJSONTyped;
function CateringRevenueTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'itemDiscount': value.itemDiscount,
        'itemDiscountPercentage': value.itemDiscountPercentage,
        'serviceCharge': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.serviceCharge),
        'taxAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.taxAmount),
    };
}
exports.CateringRevenueTypeToJSON = CateringRevenueTypeToJSON;