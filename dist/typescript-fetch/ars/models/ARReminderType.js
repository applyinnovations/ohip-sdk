"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARReminderTypeToJSON = exports.ARReminderTypeFromJSONTyped = exports.ARReminderTypeFromJSON = exports.instanceOfARReminderType = void 0;
const runtime_1 = require("../runtime");
const ARInvoicesType_1 = require("./ARInvoicesType");
const ReminderCycleType_1 = require("./ReminderCycleType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ARReminderType interface.
 */
function instanceOfARReminderType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARReminderType = instanceOfARReminderType;
function ARReminderTypeFromJSON(json) {
    return ARReminderTypeFromJSONTyped(json, false);
}
exports.ARReminderTypeFromJSON = ARReminderTypeFromJSON;
function ARReminderTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['accountId']),
        'age': !(0, runtime_1.exists)(json, 'age') ? undefined : json['age'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'cycle': !(0, runtime_1.exists)(json, 'cycle') ? undefined : json['cycle'],
        'cycleUsed': !(0, runtime_1.exists)(json, 'cycleUsed') ? undefined : (0, ReminderCycleType_1.ReminderCycleTypeFromJSON)(json['cycleUsed']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'invoices': !(0, runtime_1.exists)(json, 'invoices') ? undefined : (0, ARInvoicesType_1.ARInvoicesTypeFromJSON)(json['invoices']),
        'isHistoryExists': !(0, runtime_1.exists)(json, 'isHistoryExists') ? undefined : json['isHistoryExists'],
        'lastCycle': !(0, runtime_1.exists)(json, 'lastCycle') ? undefined : json['lastCycle'],
        'lastReminderSent': !(0, runtime_1.exists)(json, 'lastReminderSent') ? undefined : (new Date(json['lastReminderSent'])),
        'letterName': !(0, runtime_1.exists)(json, 'letterName') ? undefined : json['letterName'],
        'maxAge': !(0, runtime_1.exists)(json, 'maxAge') ? undefined : json['maxAge'],
        'reportFileName': !(0, runtime_1.exists)(json, 'reportFileName') ? undefined : json['reportFileName'],
    };
}
exports.ARReminderTypeFromJSONTyped = ARReminderTypeFromJSONTyped;
function ARReminderTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.accountId),
        'age': value.age,
        'currencyCode': value.currencyCode,
        'cycle': value.cycle,
        'cycleUsed': (0, ReminderCycleType_1.ReminderCycleTypeToJSON)(value.cycleUsed),
        'hotelId': value.hotelId,
        'invoices': (0, ARInvoicesType_1.ARInvoicesTypeToJSON)(value.invoices),
        'isHistoryExists': value.isHistoryExists,
        'lastCycle': value.lastCycle,
        'lastReminderSent': value.lastReminderSent === undefined ? undefined : (value.lastReminderSent.toISOString().substr(0, 10)),
        'letterName': value.letterName,
        'maxAge': value.maxAge,
        'reportFileName': value.reportFileName,
    };
}
exports.ARReminderTypeToJSON = ARReminderTypeToJSON;
