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
exports.ARYearViewInfoTypeToJSON = exports.ARYearViewInfoTypeFromJSONTyped = exports.ARYearViewInfoTypeFromJSON = exports.instanceOfARYearViewInfoType = void 0;
const runtime_1 = require("../runtime");
const ARBalanceType_1 = require("./ARBalanceType");
const ARYearViewType_1 = require("./ARYearViewType");
/**
 * Check if a given object implements the ARYearViewInfoType interface.
 */
function instanceOfARYearViewInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARYearViewInfoType = instanceOfARYearViewInfoType;
function ARYearViewInfoTypeFromJSON(json) {
    return ARYearViewInfoTypeFromJSONTyped(json, false);
}
exports.ARYearViewInfoTypeFromJSON = ARYearViewInfoTypeFromJSON;
function ARYearViewInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'totalOutstanding': !(0, runtime_1.exists)(json, 'totalOutstanding') ? undefined : (0, ARBalanceType_1.ARBalanceTypeFromJSON)(json['totalOutstanding']),
        'yearView': !(0, runtime_1.exists)(json, 'yearView') ? undefined : (json['yearView'].map(ARYearViewType_1.ARYearViewTypeFromJSON)),
    };
}
exports.ARYearViewInfoTypeFromJSONTyped = ARYearViewInfoTypeFromJSONTyped;
function ARYearViewInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'totalOutstanding': (0, ARBalanceType_1.ARBalanceTypeToJSON)(value.totalOutstanding),
        'yearView': value.yearView === undefined ? undefined : (value.yearView.map(ARYearViewType_1.ARYearViewTypeToJSON)),
    };
}
exports.ARYearViewInfoTypeToJSON = ARYearViewInfoTypeToJSON;
