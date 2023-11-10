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
exports.ARGenerateStatementCriteriaTypeToJSON = exports.ARGenerateStatementCriteriaTypeFromJSONTyped = exports.ARGenerateStatementCriteriaTypeFromJSON = exports.instanceOfARGenerateStatementCriteriaType = void 0;
const runtime_1 = require("../runtime");
const ARStatementCriteriaType_1 = require("./ARStatementCriteriaType");
const ARStatementType_1 = require("./ARStatementType");
/**
 * Check if a given object implements the ARGenerateStatementCriteriaType interface.
 */
function instanceOfARGenerateStatementCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARGenerateStatementCriteriaType = instanceOfARGenerateStatementCriteriaType;
function ARGenerateStatementCriteriaTypeFromJSON(json) {
    return ARGenerateStatementCriteriaTypeFromJSONTyped(json, false);
}
exports.ARGenerateStatementCriteriaTypeFromJSON = ARGenerateStatementCriteriaTypeFromJSON;
function ARGenerateStatementCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'statementCriteria': !(0, runtime_1.exists)(json, 'statementCriteria') ? undefined : (0, ARStatementCriteriaType_1.ARStatementCriteriaTypeFromJSON)(json['statementCriteria']),
        'statements': !(0, runtime_1.exists)(json, 'statements') ? undefined : (json['statements'].map(ARStatementType_1.ARStatementTypeFromJSON)),
    };
}
exports.ARGenerateStatementCriteriaTypeFromJSONTyped = ARGenerateStatementCriteriaTypeFromJSONTyped;
function ARGenerateStatementCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'statementCriteria': (0, ARStatementCriteriaType_1.ARStatementCriteriaTypeToJSON)(value.statementCriteria),
        'statements': value.statements === undefined ? undefined : (value.statements.map(ARStatementType_1.ARStatementTypeToJSON)),
    };
}
exports.ARGenerateStatementCriteriaTypeToJSON = ARGenerateStatementCriteriaTypeToJSON;
