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
exports.HSKStatSetTypeToJSON = exports.HSKStatSetTypeFromJSONTyped = exports.HSKStatSetTypeFromJSON = exports.instanceOfHSKStatSetType = void 0;
const runtime_1 = require("../runtime");
const HSKStatType_1 = require("./HSKStatType");
/**
 * Check if a given object implements the HSKStatSetType interface.
 */
function instanceOfHSKStatSetType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHSKStatSetType = instanceOfHSKStatSetType;
function HSKStatSetTypeFromJSON(json) {
    return HSKStatSetTypeFromJSONTyped(json, false);
}
exports.HSKStatSetTypeFromJSON = HSKStatSetTypeFromJSON;
function HSKStatSetTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : (new Date(json['end'])),
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : (new Date(json['start'])),
        'stat': !(0, runtime_1.exists)(json, 'stat') ? undefined : (json['stat'].map(HSKStatType_1.HSKStatTypeFromJSON)),
    };
}
exports.HSKStatSetTypeFromJSONTyped = HSKStatSetTypeFromJSONTyped;
function HSKStatSetTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substring(0, 10)),
        'start': value.start === undefined ? undefined : (value.start.toISOString().substring(0, 10)),
        'stat': value.stat === undefined ? undefined : (value.stat.map(HSKStatType_1.HSKStatTypeToJSON)),
    };
}
exports.HSKStatSetTypeToJSON = HSKStatSetTypeToJSON;