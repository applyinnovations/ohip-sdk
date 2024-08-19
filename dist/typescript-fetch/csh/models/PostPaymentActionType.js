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
exports.PostPaymentActionTypeToJSON = exports.PostPaymentActionTypeFromJSONTyped = exports.PostPaymentActionTypeFromJSON = exports.PostPaymentActionType = void 0;
/**
 * Advance Payment Action.
 * @export
 */
exports.PostPaymentActionType = {
    Billing: 'Billing',
    Settlefolio: 'Settlefolio',
    Deposit: 'Deposit',
    Compredemption: 'Compredemption',
    Prepaidcardredemption: 'Prepaidcardredemption',
    Advancepayment: 'Advancepayment'
};
function PostPaymentActionTypeFromJSON(json) {
    return PostPaymentActionTypeFromJSONTyped(json, false);
}
exports.PostPaymentActionTypeFromJSON = PostPaymentActionTypeFromJSON;
function PostPaymentActionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PostPaymentActionTypeFromJSONTyped = PostPaymentActionTypeFromJSONTyped;
function PostPaymentActionTypeToJSON(value) {
    return value;
}
exports.PostPaymentActionTypeToJSON = PostPaymentActionTypeToJSON;
