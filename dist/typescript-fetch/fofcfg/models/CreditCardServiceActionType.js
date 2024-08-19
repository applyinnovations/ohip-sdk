"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditCardServiceActionTypeToJSON = exports.CreditCardServiceActionTypeFromJSONTyped = exports.CreditCardServiceActionTypeFromJSON = exports.CreditCardServiceActionType = void 0;
/**
 * Instruction to call direct vendor service.
 * @export
 */
exports.CreditCardServiceActionType = {
    IfcInterface: 'IfcInterface',
    DirectVendor: 'DirectVendor'
};
function CreditCardServiceActionTypeFromJSON(json) {
    return CreditCardServiceActionTypeFromJSONTyped(json, false);
}
exports.CreditCardServiceActionTypeFromJSON = CreditCardServiceActionTypeFromJSON;
function CreditCardServiceActionTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CreditCardServiceActionTypeFromJSONTyped = CreditCardServiceActionTypeFromJSONTyped;
function CreditCardServiceActionTypeToJSON(value) {
    return value;
}
exports.CreditCardServiceActionTypeToJSON = CreditCardServiceActionTypeToJSON;
