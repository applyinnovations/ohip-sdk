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
exports.ItemizerShortInfoTypeToJSON = exports.ItemizerShortInfoTypeFromJSONTyped = exports.ItemizerShortInfoTypeFromJSON = exports.instanceOfItemizerShortInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ItemizerShortInfoType interface.
 */
function instanceOfItemizerShortInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfItemizerShortInfoType = instanceOfItemizerShortInfoType;
function ItemizerShortInfoTypeFromJSON(json) {
    return ItemizerShortInfoTypeFromJSONTyped(json, false);
}
exports.ItemizerShortInfoTypeFromJSON = ItemizerShortInfoTypeFromJSON;
function ItemizerShortInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'itemNumber': !(0, runtime_1.exists)(json, 'itemNumber') ? undefined : json['itemNumber'],
        'itemizerName': !(0, runtime_1.exists)(json, 'itemizerName') ? undefined : json['itemizerName'],
    };
}
exports.ItemizerShortInfoTypeFromJSONTyped = ItemizerShortInfoTypeFromJSONTyped;
function ItemizerShortInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'itemNumber': value.itemNumber,
        'itemizerName': value.itemizerName,
    };
}
exports.ItemizerShortInfoTypeToJSON = ItemizerShortInfoTypeToJSON;
