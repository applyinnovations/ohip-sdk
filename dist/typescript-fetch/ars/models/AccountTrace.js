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
exports.AccountTraceToJSON = exports.AccountTraceFromJSONTyped = exports.AccountTraceFromJSON = exports.instanceOfAccountTrace = void 0;
const runtime_1 = require("../runtime");
const ARAccountTraceCriteriaType_1 = require("./ARAccountTraceCriteriaType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the AccountTrace interface.
 */
function instanceOfAccountTrace(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAccountTrace = instanceOfAccountTrace;
function AccountTraceFromJSON(json) {
    return AccountTraceFromJSONTyped(json, false);
}
exports.AccountTraceFromJSON = AccountTraceFromJSON;
function AccountTraceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'traceInfo': !(0, runtime_1.exists)(json, 'traceInfo') ? undefined : (0, ARAccountTraceCriteriaType_1.ARAccountTraceCriteriaTypeFromJSON)(json['traceInfo']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.AccountTraceFromJSONTyped = AccountTraceFromJSONTyped;
function AccountTraceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'traceInfo': (0, ARAccountTraceCriteriaType_1.ARAccountTraceCriteriaTypeToJSON)(value.traceInfo),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.AccountTraceToJSON = AccountTraceToJSON;
