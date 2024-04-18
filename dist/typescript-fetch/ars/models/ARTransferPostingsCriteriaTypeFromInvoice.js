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
exports.ARTransferPostingsCriteriaTypeFromInvoiceToJSON = exports.ARTransferPostingsCriteriaTypeFromInvoiceFromJSONTyped = exports.ARTransferPostingsCriteriaTypeFromInvoiceFromJSON = exports.instanceOfARTransferPostingsCriteriaTypeFromInvoice = void 0;
const runtime_1 = require("../runtime");
const ARInvoiceCriteriaType_1 = require("./ARInvoiceCriteriaType");
const ARInvoicePostingType_1 = require("./ARInvoicePostingType");
/**
 * Check if a given object implements the ARTransferPostingsCriteriaTypeFromInvoice interface.
 */
function instanceOfARTransferPostingsCriteriaTypeFromInvoice(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARTransferPostingsCriteriaTypeFromInvoice = instanceOfARTransferPostingsCriteriaTypeFromInvoice;
function ARTransferPostingsCriteriaTypeFromInvoiceFromJSON(json) {
    return ARTransferPostingsCriteriaTypeFromInvoiceFromJSONTyped(json, false);
}
exports.ARTransferPostingsCriteriaTypeFromInvoiceFromJSON = ARTransferPostingsCriteriaTypeFromInvoiceFromJSON;
function ARTransferPostingsCriteriaTypeFromInvoiceFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'invoice': !(0, runtime_1.exists)(json, 'invoice') ? undefined : (0, ARInvoiceCriteriaType_1.ARInvoiceCriteriaTypeFromJSON)(json['invoice']),
        'invoicePostings': !(0, runtime_1.exists)(json, 'invoicePostings') ? undefined : (json['invoicePostings'].map(ARInvoicePostingType_1.ARInvoicePostingTypeFromJSON)),
    };
}
exports.ARTransferPostingsCriteriaTypeFromInvoiceFromJSONTyped = ARTransferPostingsCriteriaTypeFromInvoiceFromJSONTyped;
function ARTransferPostingsCriteriaTypeFromInvoiceToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'invoice': (0, ARInvoiceCriteriaType_1.ARInvoiceCriteriaTypeToJSON)(value.invoice),
        'invoicePostings': value.invoicePostings === undefined ? undefined : (value.invoicePostings.map(ARInvoicePostingType_1.ARInvoicePostingTypeToJSON)),
    };
}
exports.ARTransferPostingsCriteriaTypeFromInvoiceToJSON = ARTransferPostingsCriteriaTypeFromInvoiceToJSON;