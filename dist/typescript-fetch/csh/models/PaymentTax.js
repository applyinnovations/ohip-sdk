"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaymentTaxToJSON = exports.PaymentTaxFromJSONTyped = exports.PaymentTaxFromJSON = exports.PaymentTax = void 0;
/**
 * The types of Payment Tax transactions.
 * @export
 */
exports.PaymentTax = {
    Deposit: 'Deposit',
    FrontOffice: 'FrontOffice',
    CreditNote: 'CreditNote',
    CityLedger: 'CityLedger',
    AccountsReceivables: 'AccountsReceivables',
    NonVat: 'NonVat'
};
function PaymentTaxFromJSON(json) {
    return PaymentTaxFromJSONTyped(json, false);
}
exports.PaymentTaxFromJSON = PaymentTaxFromJSON;
function PaymentTaxFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PaymentTaxFromJSONTyped = PaymentTaxFromJSONTyped;
function PaymentTaxToJSON(value) {
    return value;
}
exports.PaymentTaxToJSON = PaymentTaxToJSON;
