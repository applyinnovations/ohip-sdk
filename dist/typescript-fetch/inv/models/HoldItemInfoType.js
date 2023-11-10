"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Inventory API
 * APIs to cater for Inventory functionality in OPERA Cloud. This includes sell limits for date ranges, viewing and updating the property&apos;s inventory, as well as item inventory (such as rollaways, microwaves etc.).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HoldItemInfoTypeToJSON = exports.HoldItemInfoTypeFromJSONTyped = exports.HoldItemInfoTypeFromJSON = exports.instanceOfHoldItemInfoType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the HoldItemInfoType interface.
 */
function instanceOfHoldItemInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHoldItemInfoType = instanceOfHoldItemInfoType;
function HoldItemInfoTypeFromJSON(json) {
    return HoldItemInfoTypeFromJSONTyped(json, false);
}
exports.HoldItemInfoTypeFromJSON = HoldItemInfoTypeFromJSON;
function HoldItemInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'itemCode': !(0, runtime_1.exists)(json, 'itemCode') ? undefined : json['itemCode'],
        'itemId': !(0, runtime_1.exists)(json, 'itemId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['itemId']),
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.HoldItemInfoTypeFromJSONTyped = HoldItemInfoTypeFromJSONTyped;
function HoldItemInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'itemCode': value.itemCode,
        'itemId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.itemId),
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.HoldItemInfoTypeToJSON = HoldItemInfoTypeToJSON;
