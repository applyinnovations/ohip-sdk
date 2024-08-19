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
exports.ArInvoiceDetailsToJSON = exports.ArInvoiceDetailsFromJSONTyped = exports.ArInvoiceDetailsFromJSON = exports.instanceOfArInvoiceDetails = void 0;
const runtime_1 = require("../runtime");
const ARInvoiceType_1 = require("./ARInvoiceType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ArInvoiceDetails interface.
 */
function instanceOfArInvoiceDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfArInvoiceDetails = instanceOfArInvoiceDetails;
function ArInvoiceDetailsFromJSON(json) {
    return ArInvoiceDetailsFromJSONTyped(json, false);
}
exports.ArInvoiceDetailsFromJSON = ArInvoiceDetailsFromJSON;
function ArInvoiceDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invoice': !(0, runtime_1.exists)(json, 'invoice') ? undefined : (json['invoice'].map(ARInvoiceType_1.ARInvoiceTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ArInvoiceDetailsFromJSONTyped = ArInvoiceDetailsFromJSONTyped;
function ArInvoiceDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invoice': value.invoice === undefined ? undefined : (value.invoice.map(ARInvoiceType_1.ARInvoiceTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ArInvoiceDetailsToJSON = ArInvoiceDetailsToJSON;
