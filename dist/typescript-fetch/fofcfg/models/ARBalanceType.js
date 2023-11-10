"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARBalanceTypeToJSON = exports.ARBalanceTypeFromJSONTyped = exports.ARBalanceTypeFromJSON = exports.instanceOfARBalanceType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the ARBalanceType interface.
 */
function instanceOfARBalanceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARBalanceType = instanceOfARBalanceType;
function ARBalanceTypeFromJSON(json) {
    return ARBalanceTypeFromJSONTyped(json, false);
}
exports.ARBalanceTypeFromJSON = ARBalanceTypeFromJSON;
function ARBalanceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'credit': !(0, runtime_1.exists)(json, 'credit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['credit']),
        'debit': !(0, runtime_1.exists)(json, 'debit') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['debit']),
        'total': !(0, runtime_1.exists)(json, 'total') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['total']),
    };
}
exports.ARBalanceTypeFromJSONTyped = ARBalanceTypeFromJSONTyped;
function ARBalanceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'credit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.credit),
        'debit': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.debit),
        'total': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.total),
    };
}
exports.ARBalanceTypeToJSON = ARBalanceTypeToJSON;
