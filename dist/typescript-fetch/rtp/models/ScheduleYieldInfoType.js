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
exports.ScheduleYieldInfoTypeToJSON = exports.ScheduleYieldInfoTypeFromJSONTyped = exports.ScheduleYieldInfoTypeFromJSON = exports.instanceOfScheduleYieldInfoType = void 0;
const runtime_1 = require("../runtime");
const YieldInfoType_1 = require("./YieldInfoType");
/**
 * Check if a given object implements the ScheduleYieldInfoType interface.
 */
function instanceOfScheduleYieldInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfScheduleYieldInfoType = instanceOfScheduleYieldInfoType;
function ScheduleYieldInfoTypeFromJSON(json) {
    return ScheduleYieldInfoTypeFromJSONTyped(json, false);
}
exports.ScheduleYieldInfoTypeFromJSON = ScheduleYieldInfoTypeFromJSON;
function ScheduleYieldInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'idContext': !(0, runtime_1.exists)(json, 'idContext') ? undefined : json['idContext'],
        'idExtension': !(0, runtime_1.exists)(json, 'idExtension') ? undefined : json['idExtension'],
        'instance': !(0, runtime_1.exists)(json, 'instance') ? undefined : json['instance'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
        'url': !(0, runtime_1.exists)(json, 'url') ? undefined : json['url'],
        'yieldInfo': !(0, runtime_1.exists)(json, 'yieldInfo') ? undefined : (json['yieldInfo'].map(YieldInfoType_1.YieldInfoTypeFromJSON)),
    };
}
exports.ScheduleYieldInfoTypeFromJSONTyped = ScheduleYieldInfoTypeFromJSONTyped;
function ScheduleYieldInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'id': value.id,
        'idContext': value.idContext,
        'idExtension': value.idExtension,
        'instance': value.instance,
        'type': value.type,
        'url': value.url,
        'yieldInfo': value.yieldInfo === undefined ? undefined : (value.yieldInfo.map(YieldInfoType_1.YieldInfoTypeToJSON)),
    };
}
exports.ScheduleYieldInfoTypeToJSON = ScheduleYieldInfoTypeToJSON;
