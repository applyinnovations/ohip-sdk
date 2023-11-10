"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SVTransactionTypeToJSON = exports.SVTransactionTypeFromJSONTyped = exports.SVTransactionTypeFromJSON = exports.SVTransactionType = void 0;
/**
 * Status of the Hotel Interface either STOPPED or RUNNING.
 * @export
 */
exports.SVTransactionType = {
    OperaTransaction: 'OperaTransaction',
    VendorTransaction: 'VendorTransaction',
    OperaAndVendorTransaction: 'OperaAndVendorTransaction'
};
function SVTransactionTypeFromJSON(json) {
    return SVTransactionTypeFromJSONTyped(json, false);
}
exports.SVTransactionTypeFromJSON = SVTransactionTypeFromJSON;
function SVTransactionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.SVTransactionTypeFromJSONTyped = SVTransactionTypeFromJSONTyped;
function SVTransactionTypeToJSON(value) {
    return value;
}
exports.SVTransactionTypeToJSON = SVTransactionTypeToJSON;
