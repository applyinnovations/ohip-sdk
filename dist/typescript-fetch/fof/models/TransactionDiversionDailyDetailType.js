"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransactionDiversionDailyDetailTypeToJSON = exports.TransactionDiversionDailyDetailTypeFromJSONTyped = exports.TransactionDiversionDailyDetailTypeFromJSON = exports.instanceOfTransactionDiversionDailyDetailType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransactionDiversionDailyDetailType interface.
 */
function instanceOfTransactionDiversionDailyDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionDiversionDailyDetailType = instanceOfTransactionDiversionDailyDetailType;
function TransactionDiversionDailyDetailTypeFromJSON(json) {
    return TransactionDiversionDailyDetailTypeFromJSONTyped(json, false);
}
exports.TransactionDiversionDailyDetailTypeFromJSON = TransactionDiversionDailyDetailTypeFromJSON;
function TransactionDiversionDailyDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : (new Date(json['date'])),
        'diverted': !(0, runtime_1.exists)(json, 'diverted') ? undefined : json['diverted'],
        'posted': !(0, runtime_1.exists)(json, 'posted') ? undefined : json['posted'],
    };
}
exports.TransactionDiversionDailyDetailTypeFromJSONTyped = TransactionDiversionDailyDetailTypeFromJSONTyped;
function TransactionDiversionDailyDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0, 10)),
        'diverted': value.diverted,
        'posted': value.posted,
    };
}
exports.TransactionDiversionDailyDetailTypeToJSON = TransactionDiversionDailyDetailTypeToJSON;
