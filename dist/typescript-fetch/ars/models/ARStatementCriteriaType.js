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
exports.ARStatementCriteriaTypeToJSON = exports.ARStatementCriteriaTypeFromJSONTyped = exports.ARStatementCriteriaTypeFromJSON = exports.instanceOfARStatementCriteriaType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
/**
 * Check if a given object implements the ARStatementCriteriaType interface.
 */
function instanceOfARStatementCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARStatementCriteriaType = instanceOfARStatementCriteriaType;
function ARStatementCriteriaTypeFromJSON(json) {
    return ARStatementCriteriaTypeFromJSONTyped(json, false);
}
exports.ARStatementCriteriaTypeFromJSON = ARStatementCriteriaTypeFromJSON;
function ARStatementCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balanceForwardDate': !(0, runtime_1.exists)(json, 'balanceForwardDate') ? undefined : (new Date(json['balanceForwardDate'])),
        'filterDate': !(0, runtime_1.exists)(json, 'filterDate') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['filterDate']),
        'inclFolios': !(0, runtime_1.exists)(json, 'inclFolios') ? undefined : json['inclFolios'],
        'inclPrinted': !(0, runtime_1.exists)(json, 'inclPrinted') ? undefined : json['inclPrinted'],
        'inclZero': !(0, runtime_1.exists)(json, 'inclZero') ? undefined : json['inclZero'],
        'statementText': !(0, runtime_1.exists)(json, 'statementText') ? undefined : json['statementText'],
    };
}
exports.ARStatementCriteriaTypeFromJSONTyped = ARStatementCriteriaTypeFromJSONTyped;
function ARStatementCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balanceForwardDate': value.balanceForwardDate === undefined ? undefined : (value.balanceForwardDate.toISOString().substring(0, 10)),
        'filterDate': (0, DateRangeType_1.DateRangeTypeToJSON)(value.filterDate),
        'inclFolios': value.inclFolios,
        'inclPrinted': value.inclPrinted,
        'inclZero': value.inclZero,
        'statementText': value.statementText,
    };
}
exports.ARStatementCriteriaTypeToJSON = ARStatementCriteriaTypeToJSON;