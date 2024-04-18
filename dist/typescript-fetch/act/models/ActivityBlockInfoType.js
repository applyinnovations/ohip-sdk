"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityBlockInfoTypeToJSON = exports.ActivityBlockInfoTypeFromJSONTyped = exports.ActivityBlockInfoTypeFromJSON = exports.instanceOfActivityBlockInfoType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueNameIDType_1 = require("./UniqueNameIDType");
/**
 * Check if a given object implements the ActivityBlockInfoType interface.
 */
function instanceOfActivityBlockInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityBlockInfoType = instanceOfActivityBlockInfoType;
function ActivityBlockInfoTypeFromJSON(json) {
    return ActivityBlockInfoTypeFromJSONTyped(json, false);
}
exports.ActivityBlockInfoTypeFromJSON = ActivityBlockInfoTypeFromJSON;
function ActivityBlockInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockCode': !(0, runtime_1.exists)(json, 'blockCode') ? undefined : json['blockCode'],
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueNameIDType_1.UniqueNameIDTypeFromJSON)),
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.ActivityBlockInfoTypeFromJSONTyped = ActivityBlockInfoTypeFromJSONTyped;
function ActivityBlockInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockCode': value.blockCode,
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueNameIDType_1.UniqueNameIDTypeToJSON)),
        'blockName': value.blockName,
        'primary': value.primary,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.ActivityBlockInfoTypeToJSON = ActivityBlockInfoTypeToJSON;