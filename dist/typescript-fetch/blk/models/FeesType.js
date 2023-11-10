"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeesTypeToJSON = exports.FeesTypeFromJSONTyped = exports.FeesTypeFromJSON = exports.instanceOfFeesType = void 0;
const runtime_1 = require("../runtime");
const FeeType_1 = require("./FeeType");
/**
 * Check if a given object implements the FeesType interface.
 */
function instanceOfFeesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFeesType = instanceOfFeesType;
function FeesTypeFromJSON(json) {
    return FeesTypeFromJSONTyped(json, false);
}
exports.FeesTypeFromJSON = FeesTypeFromJSON;
function FeesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'fee': !(0, runtime_1.exists)(json, 'fee') ? undefined : (json['fee'].map(FeeType_1.FeeTypeFromJSON)),
    };
}
exports.FeesTypeFromJSONTyped = FeesTypeFromJSONTyped;
function FeesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'fee': value.fee === undefined ? undefined : (value.fee.map(FeeType_1.FeeTypeToJSON)),
    };
}
exports.FeesTypeToJSON = FeesTypeToJSON;
