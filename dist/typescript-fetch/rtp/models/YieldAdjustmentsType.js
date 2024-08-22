"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.YieldAdjustmentsTypeToJSON = exports.YieldAdjustmentsTypeFromJSONTyped = exports.YieldAdjustmentsTypeFromJSON = exports.instanceOfYieldAdjustmentsType = void 0;
const runtime_1 = require("../runtime");
const YieldInfoType_1 = require("./YieldInfoType");
/**
 * Check if a given object implements the YieldAdjustmentsType interface.
 */
function instanceOfYieldAdjustmentsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfYieldAdjustmentsType = instanceOfYieldAdjustmentsType;
function YieldAdjustmentsTypeFromJSON(json) {
    return YieldAdjustmentsTypeFromJSONTyped(json, false);
}
exports.YieldAdjustmentsTypeFromJSON = YieldAdjustmentsTypeFromJSON;
function YieldAdjustmentsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'yieldAdjustment': !(0, runtime_1.exists)(json, 'yieldAdjustment') ? undefined : (json['yieldAdjustment'].map(YieldInfoType_1.YieldInfoTypeFromJSON)),
    };
}
exports.YieldAdjustmentsTypeFromJSONTyped = YieldAdjustmentsTypeFromJSONTyped;
function YieldAdjustmentsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelId': value.hotelId,
        'totalResults': value.totalResults,
        'yieldAdjustment': value.yieldAdjustment === undefined ? undefined : (value.yieldAdjustment.map(YieldInfoType_1.YieldInfoTypeToJSON)),
    };
}
exports.YieldAdjustmentsTypeToJSON = YieldAdjustmentsTypeToJSON;
