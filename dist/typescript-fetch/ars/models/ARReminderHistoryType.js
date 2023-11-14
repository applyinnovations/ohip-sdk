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
exports.ARReminderHistoryTypeToJSON = exports.ARReminderHistoryTypeFromJSONTyped = exports.ARReminderHistoryTypeFromJSON = exports.instanceOfARReminderHistoryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ARReminderHistoryType interface.
 */
function instanceOfARReminderHistoryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARReminderHistoryType = instanceOfARReminderHistoryType;
function ARReminderHistoryTypeFromJSON(json) {
    return ARReminderHistoryTypeFromJSONTyped(json, false);
}
exports.ARReminderHistoryTypeFromJSON = ARReminderHistoryTypeFromJSON;
function ARReminderHistoryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'age': !(0, runtime_1.exists)(json, 'age') ? undefined : json['age'],
        'dateSent': !(0, runtime_1.exists)(json, 'dateSent') ? undefined : (new Date(json['dateSent'])),
        'reportFileName': !(0, runtime_1.exists)(json, 'reportFileName') ? undefined : json['reportFileName'],
        'reportName': !(0, runtime_1.exists)(json, 'reportName') ? undefined : json['reportName'],
    };
}
exports.ARReminderHistoryTypeFromJSONTyped = ARReminderHistoryTypeFromJSONTyped;
function ARReminderHistoryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'age': value.age,
        'dateSent': value.dateSent === undefined ? undefined : (value.dateSent.toISOString().substring(0, 10)),
        'reportFileName': value.reportFileName,
        'reportName': value.reportName,
    };
}
exports.ARReminderHistoryTypeToJSON = ARReminderHistoryTypeToJSON;