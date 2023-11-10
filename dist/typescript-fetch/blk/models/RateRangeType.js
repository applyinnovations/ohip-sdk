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
exports.RateRangeTypeToJSON = exports.RateRangeTypeFromJSONTyped = exports.RateRangeTypeFromJSON = exports.instanceOfRateRangeType = void 0;
const runtime_1 = require("../runtime");
const TotalType_1 = require("./TotalType");
/**
 * Check if a given object implements the RateRangeType interface.
 */
function instanceOfRateRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateRangeType = instanceOfRateRangeType;
function RateRangeTypeFromJSON(json) {
    return RateRangeTypeFromJSONTyped(json, false);
}
exports.RateRangeTypeFromJSON = RateRangeTypeFromJSON;
function RateRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'base': !(0, runtime_1.exists)(json, 'base') ? undefined : (json['base'].map(TotalType_1.TotalTypeFromJSON)),
        'rateChange': !(0, runtime_1.exists)(json, 'rateChange') ? undefined : json['rateChange'],
    };
}
exports.RateRangeTypeFromJSONTyped = RateRangeTypeFromJSONTyped;
function RateRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'base': value.base === undefined ? undefined : (value.base.map(TotalType_1.TotalTypeToJSON)),
        'rateChange': value.rateChange,
    };
}
exports.RateRangeTypeToJSON = RateRangeTypeToJSON;
