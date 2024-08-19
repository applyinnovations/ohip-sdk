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
exports.CardNumberTypeTypeToJSON = exports.CardNumberTypeTypeFromJSONTyped = exports.CardNumberTypeTypeFromJSON = exports.CardNumberTypeType = void 0;
/**
 * Simple type for indicating if credit card number is tokenized.
 * @export
 */
exports.CardNumberTypeType = {
    CardNumber: 'CardNumber',
    Token: 'Token'
};
function CardNumberTypeTypeFromJSON(json) {
    return CardNumberTypeTypeFromJSONTyped(json, false);
}
exports.CardNumberTypeTypeFromJSON = CardNumberTypeTypeFromJSON;
function CardNumberTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CardNumberTypeTypeFromJSONTyped = CardNumberTypeTypeFromJSONTyped;
function CardNumberTypeTypeToJSON(value) {
    return value;
}
exports.CardNumberTypeTypeToJSON = CardNumberTypeTypeToJSON;
