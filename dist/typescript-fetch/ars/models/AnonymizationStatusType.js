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
exports.AnonymizationStatusTypeToJSON = exports.AnonymizationStatusTypeFromJSONTyped = exports.AnonymizationStatusTypeFromJSON = exports.AnonymizationStatusType = void 0;
/**
 * Guest has been anonymized.
 * @export
 */
exports.AnonymizationStatusType = {
    Requested: 'Requested',
    Anonymized: 'Anonymized'
};
function AnonymizationStatusTypeFromJSON(json) {
    return AnonymizationStatusTypeFromJSONTyped(json, false);
}
exports.AnonymizationStatusTypeFromJSON = AnonymizationStatusTypeFromJSON;
function AnonymizationStatusTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AnonymizationStatusTypeFromJSONTyped = AnonymizationStatusTypeFromJSONTyped;
function AnonymizationStatusTypeToJSON(value) {
    return value;
}
exports.AnonymizationStatusTypeToJSON = AnonymizationStatusTypeToJSON;
