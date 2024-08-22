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
exports.PostingAmountTypeToJSON = exports.PostingAmountTypeFromJSONTyped = exports.PostingAmountTypeFromJSON = exports.instanceOfPostingAmountType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the PostingAmountType interface.
 */
function instanceOfPostingAmountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingAmountType = instanceOfPostingAmountType;
function PostingAmountTypeFromJSON(json) {
    return PostingAmountTypeFromJSONTyped(json, false);
}
exports.PostingAmountTypeFromJSON = PostingAmountTypeFromJSON;
function PostingAmountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'maximumAmount': !(0, runtime_1.exists)(json, 'maximumAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['maximumAmount']),
        'minimumAmount': !(0, runtime_1.exists)(json, 'minimumAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['minimumAmount']),
    };
}
exports.PostingAmountTypeFromJSONTyped = PostingAmountTypeFromJSONTyped;
function PostingAmountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'maximumAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.maximumAmount),
        'minimumAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.minimumAmount),
    };
}
exports.PostingAmountTypeToJSON = PostingAmountTypeToJSON;
