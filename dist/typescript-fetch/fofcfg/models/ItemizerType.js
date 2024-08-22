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
exports.ItemizerTypeToJSON = exports.ItemizerTypeFromJSONTyped = exports.ItemizerTypeFromJSON = exports.instanceOfItemizerType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ItemizerType interface.
 */
function instanceOfItemizerType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemizerType = instanceOfItemizerType;
function ItemizerTypeFromJSON(json) {
    return ItemizerTypeFromJSONTyped(json, false);
}
exports.ItemizerTypeFromJSON = ItemizerTypeFromJSON;
function ItemizerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'splitCode': !(0, runtime_1.exists)(json, 'splitCode') ? undefined : json['splitCode'],
        'splitFactor': !(0, runtime_1.exists)(json, 'splitFactor') ? undefined : json['splitFactor'],
        'splitPost': !(0, runtime_1.exists)(json, 'splitPost') ? undefined : json['splitPost'],
        'splitText': !(0, runtime_1.exists)(json, 'splitText') ? undefined : json['splitText'],
    };
}
exports.ItemizerTypeFromJSONTyped = ItemizerTypeFromJSONTyped;
function ItemizerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'splitCode': value.splitCode,
        'splitFactor': value.splitFactor,
        'splitPost': value.splitPost,
        'splitText': value.splitText,
    };
}
exports.ItemizerTypeToJSON = ItemizerTypeToJSON;
