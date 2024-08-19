"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
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
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'allowance': !(0, runtime_1.exists)(json, 'allowance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['allowance']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'calculationRule': !(0, runtime_1.exists)(json, 'calculationRule') ? undefined : json['calculationRule'],
        'postingRhythm': !(0, runtime_1.exists)(json, 'postingRhythm') ? undefined : json['postingRhythm'],
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'includedInRate': !(0, runtime_1.exists)(json, 'includedInRate') ? undefined : json['includedInRate'],
        'addRateSeprateLine': !(0, runtime_1.exists)(json, 'addRateSeprateLine') ? undefined : json['addRateSeprateLine'],
        'addRateCombinedLine': !(0, runtime_1.exists)(json, 'addRateCombinedLine') ? undefined : json['addRateCombinedLine'],
        'startTime': !(0, runtime_1.exists)(json, 'startTime') ? undefined : json['startTime'],
        'endTime': !(0, runtime_1.exists)(json, 'endTime') ? undefined : json['endTime'],
        'sellSeparate': !(0, runtime_1.exists)(json, 'sellSeparate') ? undefined : json['sellSeparate'],
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
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'allowance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.allowance),
        'description': value.description,
        'startDate': value.startDate,
        'endDate': value.endDate,
        'packageCode': value.packageCode,
        'calculationRule': value.calculationRule,
        'postingRhythm': value.postingRhythm,
        'quantity': value.quantity,
        'includedInRate': value.includedInRate,
        'addRateSeprateLine': value.addRateSeprateLine,
        'addRateCombinedLine': value.addRateCombinedLine,
        'startTime': value.startTime,
        'endTime': value.endTime,
        'sellSeparate': value.sellSeparate,
    };
}
exports.PackageElementTypeToJSON = PackageElementTypeToJSON;
