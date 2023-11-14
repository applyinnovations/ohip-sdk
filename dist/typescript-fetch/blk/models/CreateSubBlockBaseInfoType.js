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
exports.CreateSubBlockBaseInfoTypeToJSON = exports.CreateSubBlockBaseInfoTypeFromJSONTyped = exports.CreateSubBlockBaseInfoTypeFromJSON = exports.instanceOfCreateSubBlockBaseInfoType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the CreateSubBlockBaseInfoType interface.
 */
function instanceOfCreateSubBlockBaseInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCreateSubBlockBaseInfoType = instanceOfCreateSubBlockBaseInfoType;
function CreateSubBlockBaseInfoTypeFromJSON(json) {
    return CreateSubBlockBaseInfoTypeFromJSONTyped(json, false);
}
exports.CreateSubBlockBaseInfoTypeFromJSON = CreateSubBlockBaseInfoTypeFromJSON;
function CreateSubBlockBaseInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockCode': !(0, runtime_1.exists)(json, 'blockCode') ? undefined : json['blockCode'],
        'blockName': !(0, runtime_1.exists)(json, 'blockName') ? undefined : json['blockName'],
        'blockOrigin': !(0, runtime_1.exists)(json, 'blockOrigin') ? undefined : json['blockOrigin'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.CreateSubBlockBaseInfoTypeFromJSONTyped = CreateSubBlockBaseInfoTypeFromJSONTyped;
function CreateSubBlockBaseInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockCode': value.blockCode,
        'blockName': value.blockName,
        'blockOrigin': value.blockOrigin,
        'hotelId': value.hotelId,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.CreateSubBlockBaseInfoTypeToJSON = CreateSubBlockBaseInfoTypeToJSON;