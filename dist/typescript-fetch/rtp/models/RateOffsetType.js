"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateOffsetTypeToJSON = exports.RateOffsetTypeFromJSONTyped = exports.RateOffsetTypeFromJSON = exports.instanceOfRateOffsetType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RateOffsetType interface.
 */
function instanceOfRateOffsetType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateOffsetType = instanceOfRateOffsetType;
function RateOffsetTypeFromJSON(json) {
    return RateOffsetTypeFromJSONTyped(json, false);
}
exports.RateOffsetTypeFromJSON = RateOffsetTypeFromJSON;
function RateOffsetTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'flatOrPercentage': !(0, runtime_1.exists)(json, 'flatOrPercentage') ? undefined : json['flatOrPercentage'],
        'increaseOrDecrease': !(0, runtime_1.exists)(json, 'increaseOrDecrease') ? undefined : json['increaseOrDecrease'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
    };
}
exports.RateOffsetTypeFromJSONTyped = RateOffsetTypeFromJSONTyped;
function RateOffsetTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'flatOrPercentage': value.flatOrPercentage,
        'increaseOrDecrease': value.increaseOrDecrease,
        'offset': value.offset,
    };
}
exports.RateOffsetTypeToJSON = RateOffsetTypeToJSON;
