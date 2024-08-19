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
exports.AuthorizerTrxLimitTypeToJSON = exports.AuthorizerTrxLimitTypeFromJSONTyped = exports.AuthorizerTrxLimitTypeFromJSON = exports.instanceOfAuthorizerTrxLimitType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the AuthorizerTrxLimitType interface.
 */
function instanceOfAuthorizerTrxLimitType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAuthorizerTrxLimitType = instanceOfAuthorizerTrxLimitType;
function AuthorizerTrxLimitTypeFromJSON(json) {
    return AuthorizerTrxLimitTypeFromJSONTyped(json, false);
}
exports.AuthorizerTrxLimitTypeFromJSON = AuthorizerTrxLimitTypeFromJSON;
function AuthorizerTrxLimitTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'billingInstructions': !(0, runtime_1.exists)(json, 'billingInstructions') ? undefined : (json['billingInstructions'].map(CodeDescriptionType_1.CodeDescriptionTypeFromJSON)),
        'creditLimit': !(0, runtime_1.exists)(json, 'creditLimit') ? undefined : json['creditLimit'],
        'groupHeaderId': !(0, runtime_1.exists)(json, 'groupHeaderId') ? undefined : json['groupHeaderId'],
        'occurrenceLimit': !(0, runtime_1.exists)(json, 'occurrenceLimit') ? undefined : json['occurrenceLimit'],
        'transactionCodes': !(0, runtime_1.exists)(json, 'transactionCodes') ? undefined : (json['transactionCodes'].map(CodeDescriptionType_1.CodeDescriptionTypeFromJSON)),
    };
}
exports.AuthorizerTrxLimitTypeFromJSONTyped = AuthorizerTrxLimitTypeFromJSONTyped;
function AuthorizerTrxLimitTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'billingInstructions': value.billingInstructions === undefined ? undefined : (value.billingInstructions.map(CodeDescriptionType_1.CodeDescriptionTypeToJSON)),
        'creditLimit': value.creditLimit,
        'groupHeaderId': value.groupHeaderId,
        'occurrenceLimit': value.occurrenceLimit,
        'transactionCodes': value.transactionCodes === undefined ? undefined : (value.transactionCodes.map(CodeDescriptionType_1.CodeDescriptionTypeToJSON)),
    };
}
exports.AuthorizerTrxLimitTypeToJSON = AuthorizerTrxLimitTypeToJSON;
