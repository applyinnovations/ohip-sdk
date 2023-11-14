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
exports.RatePlanControlsTypeToJSON = exports.RatePlanControlsTypeFromJSONTyped = exports.RatePlanControlsTypeFromJSON = exports.instanceOfRatePlanControlsType = void 0;
const runtime_1 = require("../runtime");
const RatePlanSellControlsType_1 = require("./RatePlanSellControlsType");
const RatePlanYieldControlsType_1 = require("./RatePlanYieldControlsType");
/**
 * Check if a given object implements the RatePlanControlsType interface.
 */
function instanceOfRatePlanControlsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlanControlsType = instanceOfRatePlanControlsType;
function RatePlanControlsTypeFromJSON(json) {
    return RatePlanControlsTypeFromJSONTyped(json, false);
}
exports.RatePlanControlsTypeFromJSON = RatePlanControlsTypeFromJSON;
function RatePlanControlsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'sell': !(0, runtime_1.exists)(json, 'sell') ? undefined : (0, RatePlanSellControlsType_1.RatePlanSellControlsTypeFromJSON)(json['sell']),
        '_yield': !(0, runtime_1.exists)(json, 'yield') ? undefined : (0, RatePlanYieldControlsType_1.RatePlanYieldControlsTypeFromJSON)(json['yield']),
    };
}
exports.RatePlanControlsTypeFromJSONTyped = RatePlanControlsTypeFromJSONTyped;
function RatePlanControlsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'sell': (0, RatePlanSellControlsType_1.RatePlanSellControlsTypeToJSON)(value.sell),
        'yield': (0, RatePlanYieldControlsType_1.RatePlanYieldControlsTypeToJSON)(value._yield),
    };
}
exports.RatePlanControlsTypeToJSON = RatePlanControlsTypeToJSON;