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
exports.CompressedARInvoicesToJSON = exports.CompressedARInvoicesFromJSONTyped = exports.CompressedARInvoicesFromJSON = exports.instanceOfCompressedARInvoices = void 0;
const runtime_1 = require("../runtime");
const ARInvoiceType_1 = require("./ARInvoiceType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the CompressedARInvoices interface.
 */
function instanceOfCompressedARInvoices(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompressedARInvoices = instanceOfCompressedARInvoices;
function CompressedARInvoicesFromJSON(json) {
    return CompressedARInvoicesFromJSONTyped(json, false);
}
exports.CompressedARInvoicesFromJSON = CompressedARInvoicesFromJSON;
function CompressedARInvoicesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invoice': !(0, runtime_1.exists)(json, 'invoice') ? undefined : (0, ARInvoiceType_1.ARInvoiceTypeFromJSON)(json['invoice']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.CompressedARInvoicesFromJSONTyped = CompressedARInvoicesFromJSONTyped;
function CompressedARInvoicesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invoice': (0, ARInvoiceType_1.ARInvoiceTypeToJSON)(value.invoice),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.CompressedARInvoicesToJSON = CompressedARInvoicesToJSON;
