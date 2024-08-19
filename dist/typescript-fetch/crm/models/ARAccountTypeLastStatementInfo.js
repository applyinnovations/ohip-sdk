"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ARAccountTypeLastStatementInfoToJSON = exports.ARAccountTypeLastStatementInfoFromJSONTyped = exports.ARAccountTypeLastStatementInfoFromJSON = exports.instanceOfARAccountTypeLastStatementInfo = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ARAccountTypeLastStatementInfo interface.
 */
function instanceOfARAccountTypeLastStatementInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARAccountTypeLastStatementInfo = instanceOfARAccountTypeLastStatementInfo;
function ARAccountTypeLastStatementInfoFromJSON(json) {
    return ARAccountTypeLastStatementInfoFromJSONTyped(json, false);
}
exports.ARAccountTypeLastStatementInfoFromJSON = ARAccountTypeLastStatementInfoFromJSON;
function ARAccountTypeLastStatementInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateSent': !(0, runtime_1.exists)(json, 'dateSent') ? undefined : json['dateSent'],
        'historyExists': !(0, runtime_1.exists)(json, 'historyExists') ? undefined : json['historyExists'],
        'reportFileName': !(0, runtime_1.exists)(json, 'reportFileName') ? undefined : json['reportFileName'],
        'reportName': !(0, runtime_1.exists)(json, 'reportName') ? undefined : json['reportName'],
        'statementNo': !(0, runtime_1.exists)(json, 'statementNo') ? undefined : json['statementNo'],
    };
}
exports.ARAccountTypeLastStatementInfoFromJSONTyped = ARAccountTypeLastStatementInfoFromJSONTyped;
function ARAccountTypeLastStatementInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateSent': value.dateSent,
        'historyExists': value.historyExists,
        'reportFileName': value.reportFileName,
        'reportName': value.reportName,
        'statementNo': value.statementNo,
    };
}
exports.ARAccountTypeLastStatementInfoToJSON = ARAccountTypeLastStatementInfoToJSON;
