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
exports.ARAccountTypeLastReminderInfoToJSON = exports.ARAccountTypeLastReminderInfoFromJSONTyped = exports.ARAccountTypeLastReminderInfoFromJSON = exports.instanceOfARAccountTypeLastReminderInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ARAccountTypeLastReminderInfo interface.
 */
function instanceOfARAccountTypeLastReminderInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARAccountTypeLastReminderInfo = instanceOfARAccountTypeLastReminderInfo;
function ARAccountTypeLastReminderInfoFromJSON(json) {
    return ARAccountTypeLastReminderInfoFromJSONTyped(json, false);
}
exports.ARAccountTypeLastReminderInfoFromJSON = ARAccountTypeLastReminderInfoFromJSON;
function ARAccountTypeLastReminderInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'age': !(0, runtime_1.exists)(json, 'age') ? undefined : json['age'],
        'dateSent': !(0, runtime_1.exists)(json, 'dateSent') ? undefined : json['dateSent'],
        'historyExists': !(0, runtime_1.exists)(json, 'historyExists') ? undefined : json['historyExists'],
        'reportFileName': !(0, runtime_1.exists)(json, 'reportFileName') ? undefined : json['reportFileName'],
        'reportName': !(0, runtime_1.exists)(json, 'reportName') ? undefined : json['reportName'],
    };
}
exports.ARAccountTypeLastReminderInfoFromJSONTyped = ARAccountTypeLastReminderInfoFromJSONTyped;
function ARAccountTypeLastReminderInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'age': value.age,
        'dateSent': value.dateSent,
        'historyExists': value.historyExists,
        'reportFileName': value.reportFileName,
        'reportName': value.reportName,
    };
}
exports.ARAccountTypeLastReminderInfoToJSON = ARAccountTypeLastReminderInfoToJSON;