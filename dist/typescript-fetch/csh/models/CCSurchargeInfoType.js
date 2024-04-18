"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CCSurchargeInfoTypeToJSON = exports.CCSurchargeInfoTypeFromJSONTyped = exports.CCSurchargeInfoTypeFromJSON = exports.instanceOfCCSurchargeInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the CCSurchargeInfoType interface.
 */
function instanceOfCCSurchargeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCCSurchargeInfoType = instanceOfCCSurchargeInfoType;
function CCSurchargeInfoTypeFromJSON(json) {
    return CCSurchargeInfoTypeFromJSONTyped(json, false);
}
exports.CCSurchargeInfoTypeFromJSON = CCSurchargeInfoTypeFromJSON;
function CCSurchargeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'threshold': !(0, runtime_1.exists)(json, 'threshold') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['threshold']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
    };
}
exports.CCSurchargeInfoTypeFromJSONTyped = CCSurchargeInfoTypeFromJSONTyped;
function CCSurchargeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'percentage': value.percentage,
        'threshold': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.threshold),
        'transactionCode': value.transactionCode,
    };
}
exports.CCSurchargeInfoTypeToJSON = CCSurchargeInfoTypeToJSON;