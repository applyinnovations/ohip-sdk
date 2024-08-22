"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CashierTypeUsageInfoToJSON = exports.CashierTypeUsageInfoFromJSONTyped = exports.CashierTypeUsageInfoFromJSON = exports.instanceOfCashierTypeUsageInfo = void 0;
const runtime_1 = require("../runtime");
const CashierTypeUsageInfoHistory_1 = require("./CashierTypeUsageInfoHistory");
/**
 * Check if a given object implements the CashierTypeUsageInfo interface.
 */
function instanceOfCashierTypeUsageInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierTypeUsageInfo = instanceOfCashierTypeUsageInfo;
function CashierTypeUsageInfoFromJSON(json) {
    return CashierTypeUsageInfoFromJSONTyped(json, false);
}
exports.CashierTypeUsageInfoFromJSON = CashierTypeUsageInfoFromJSON;
function CashierTypeUsageInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'history': !(0, runtime_1.exists)(json, 'history') ? undefined : (0, CashierTypeUsageInfoHistory_1.CashierTypeUsageInfoHistoryFromJSON)(json['history']),
        'maximumDailyUses': !(0, runtime_1.exists)(json, 'maximumDailyUses') ? undefined : json['maximumDailyUses'],
    };
}
exports.CashierTypeUsageInfoFromJSONTyped = CashierTypeUsageInfoFromJSONTyped;
function CashierTypeUsageInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'history': (0, CashierTypeUsageInfoHistory_1.CashierTypeUsageInfoHistoryToJSON)(value.history),
        'maximumDailyUses': value.maximumDailyUses,
    };
}
exports.CashierTypeUsageInfoToJSON = CashierTypeUsageInfoToJSON;
