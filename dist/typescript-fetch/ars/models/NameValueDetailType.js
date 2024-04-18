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
exports.NameValueDetailTypeToJSON = exports.NameValueDetailTypeFromJSONTyped = exports.NameValueDetailTypeFromJSON = exports.instanceOfNameValueDetailType = void 0;
const runtime_1 = require("../runtime");
const NameValueType_1 = require("./NameValueType");
/**
 * Check if a given object implements the NameValueDetailType interface.
 */
function instanceOfNameValueDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNameValueDetailType = instanceOfNameValueDetailType;
function NameValueDetailTypeFromJSON(json) {
    return NameValueDetailTypeFromJSONTyped(json, false);
}
exports.NameValueDetailTypeFromJSON = NameValueDetailTypeFromJSON;
function NameValueDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'nameValues': !(0, runtime_1.exists)(json, 'nameValues') ? undefined : (json['nameValues'].map(NameValueType_1.NameValueTypeFromJSON)),
    };
}
exports.NameValueDetailTypeFromJSONTyped = NameValueDetailTypeFromJSONTyped;
function NameValueDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'nameValues': value.nameValues === undefined ? undefined : (value.nameValues.map(NameValueType_1.NameValueTypeToJSON)),
    };
}
exports.NameValueDetailTypeToJSON = NameValueDetailTypeToJSON;