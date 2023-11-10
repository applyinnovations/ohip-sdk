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
exports.CashierTypeUsageInfoHistoryToJSON = exports.CashierTypeUsageInfoHistoryFromJSONTyped = exports.CashierTypeUsageInfoHistoryFromJSON = exports.instanceOfCashierTypeUsageInfoHistory = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CashierTypeUsageInfoHistory interface.
 */
function instanceOfCashierTypeUsageInfoHistory(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCashierTypeUsageInfoHistory = instanceOfCashierTypeUsageInfoHistory;
function CashierTypeUsageInfoHistoryFromJSON(json) {
    return CashierTypeUsageInfoHistoryFromJSONTyped(json, false);
}
exports.CashierTypeUsageInfoHistoryFromJSON = CashierTypeUsageInfoHistoryFromJSON;
function CashierTypeUsageInfoHistoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastOpened': !(0, runtime_1.exists)(json, 'lastOpened') ? undefined : (new Date(json['lastOpened'])),
        'timesOpened': !(0, runtime_1.exists)(json, 'timesOpened') ? undefined : json['timesOpened'],
    };
}
exports.CashierTypeUsageInfoHistoryFromJSONTyped = CashierTypeUsageInfoHistoryFromJSONTyped;
function CashierTypeUsageInfoHistoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastOpened': value.lastOpened === undefined ? undefined : (value.lastOpened.toISOString().substr(0, 10)),
        'timesOpened': value.timesOpened,
    };
}
exports.CashierTypeUsageInfoHistoryToJSON = CashierTypeUsageInfoHistoryToJSON;
