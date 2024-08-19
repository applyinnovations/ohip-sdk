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
exports.CalculatePostingResultToJSON = exports.CalculatePostingResultFromJSONTyped = exports.CalculatePostingResultFromJSON = exports.instanceOfCalculatePostingResult = void 0;
const runtime_1 = require("../runtime");
const CalculatePostingCharge_1 = require("./CalculatePostingCharge");
/**
 * Check if a given object implements the CalculatePostingResult interface.
 */
function instanceOfCalculatePostingResult(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCalculatePostingResult = instanceOfCalculatePostingResult;
function CalculatePostingResultFromJSON(json) {
    return CalculatePostingResultFromJSONTyped(json, false);
}
exports.CalculatePostingResultFromJSON = CalculatePostingResultFromJSON;
function CalculatePostingResultFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'charges': !(0, runtime_1.exists)(json, 'charges') ? undefined : (json['charges'].map(CalculatePostingCharge_1.CalculatePostingChargeFromJSON)),
        'totalAmount': !(0, runtime_1.exists)(json, 'totalAmount') ? undefined : json['totalAmount'],
    };
}
exports.CalculatePostingResultFromJSONTyped = CalculatePostingResultFromJSONTyped;
function CalculatePostingResultToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'charges': value.charges === undefined ? undefined : (value.charges.map(CalculatePostingCharge_1.CalculatePostingChargeToJSON)),
        'totalAmount': value.totalAmount,
    };
}
exports.CalculatePostingResultToJSON = CalculatePostingResultToJSON;
