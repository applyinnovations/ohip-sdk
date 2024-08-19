"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemindersHistoryToJSON = exports.RemindersHistoryFromJSONTyped = exports.RemindersHistoryFromJSON = exports.instanceOfRemindersHistory = void 0;
const runtime_1 = require("../runtime");
const ARReminderHistoryType_1 = require("./ARReminderHistoryType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the RemindersHistory interface.
 */
function instanceOfRemindersHistory(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRemindersHistory = instanceOfRemindersHistory;
function RemindersHistoryFromJSON(json) {
    return RemindersHistoryFromJSONTyped(json, false);
}
exports.RemindersHistoryFromJSON = RemindersHistoryFromJSON;
function RemindersHistoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRReminderHistory': !(0, runtime_1.exists)(json, 'aRReminderHistory') ? undefined : (json['aRReminderHistory'].map(ARReminderHistoryType_1.ARReminderHistoryTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.RemindersHistoryFromJSONTyped = RemindersHistoryFromJSONTyped;
function RemindersHistoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRReminderHistory': value.aRReminderHistory === undefined ? undefined : (value.aRReminderHistory.map(ARReminderHistoryType_1.ARReminderHistoryTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.RemindersHistoryToJSON = RemindersHistoryToJSON;
