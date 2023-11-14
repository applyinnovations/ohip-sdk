"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomNameValueConfigTypeToJSON = exports.CustomNameValueConfigTypeFromJSONTyped = exports.CustomNameValueConfigTypeFromJSON = exports.CustomNameValueConfigType = void 0;
/**
 * Italian Lottery Number.
 * @export
 */
exports.CustomNameValueConfigType = {
    ItalianFattura: 'ItalianFattura',
    Folio: 'Folio',
    FinancialTransaction: 'FinancialTransaction',
    TaiwanInvoice: 'TaiwanInvoice',
    SaudiCustomerType: 'SaudiCustomerType',
    ItalianLotteryNumber: 'ItalianLotteryNumber'
};
function CustomNameValueConfigTypeFromJSON(json) {
    return CustomNameValueConfigTypeFromJSONTyped(json, false);
}
exports.CustomNameValueConfigTypeFromJSON = CustomNameValueConfigTypeFromJSON;
function CustomNameValueConfigTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CustomNameValueConfigTypeFromJSONTyped = CustomNameValueConfigTypeFromJSONTyped;
function CustomNameValueConfigTypeToJSON(value) {
    return value;
}
exports.CustomNameValueConfigTypeToJSON = CustomNameValueConfigTypeToJSON;