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
exports.PackageElementTypeToJSON = exports.PackageElementTypeFromJSONTyped = exports.PackageElementTypeFromJSON = exports.instanceOfPackageElementType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the PackageElementType interface.
 */
function instanceOfPackageElementType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackageElementType = instanceOfPackageElementType;
function PackageElementTypeFromJSON(json) {
    return PackageElementTypeFromJSONTyped(json, false);
}
exports.PackageElementTypeFromJSON = PackageElementTypeFromJSON;
function PackageElementTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addRateCombinedLine': !(0, runtime_1.exists)(json, 'addRateCombinedLine') ? undefined : json['addRateCombinedLine'],
        'addRateSeprateLine': !(0, runtime_1.exists)(json, 'addRateSeprateLine') ? undefined : json['addRateSeprateLine'],
        'allowance': !(0, runtime_1.exists)(json, 'allowance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['allowance']),
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'calculationRule': !(0, runtime_1.exists)(json, 'calculationRule') ? undefined : json['calculationRule'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'endTime': !(0, runtime_1.exists)(json, 'endTime') ? undefined : json['endTime'],
        'includedInRate': !(0, runtime_1.exists)(json, 'includedInRate') ? undefined : json['includedInRate'],
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'postingRhythm': !(0, runtime_1.exists)(json, 'postingRhythm') ? undefined : json['postingRhythm'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'sellSeparate': !(0, runtime_1.exists)(json, 'sellSeparate') ? undefined : json['sellSeparate'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
        'startTime': !(0, runtime_1.exists)(json, 'startTime') ? undefined : json['startTime'],
    };
}
exports.PackageElementTypeFromJSONTyped = PackageElementTypeFromJSONTyped;
function PackageElementTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addRateCombinedLine': value.addRateCombinedLine,
        'addRateSeprateLine': value.addRateSeprateLine,
        'allowance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.allowance),
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'calculationRule': value.calculationRule,
        'description': value.description,
        'endDate': value.endDate,
        'endTime': value.endTime,
        'includedInRate': value.includedInRate,
        'packageCode': value.packageCode,
        'postingRhythm': value.postingRhythm,
        'quantity': value.quantity,
        'sellSeparate': value.sellSeparate,
        'startDate': value.startDate,
        'startTime': value.startTime,
    };
}
exports.PackageElementTypeToJSON = PackageElementTypeToJSON;
