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
exports.UpdateRatePlanSchedulesTypeToJSON = exports.UpdateRatePlanSchedulesTypeFromJSONTyped = exports.UpdateRatePlanSchedulesTypeFromJSON = exports.instanceOfUpdateRatePlanSchedulesType = void 0;
const runtime_1 = require("../runtime");
const RatePlanScheduleDetailType_1 = require("./RatePlanScheduleDetailType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the UpdateRatePlanSchedulesType interface.
 */
function instanceOfUpdateRatePlanSchedulesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUpdateRatePlanSchedulesType = instanceOfUpdateRatePlanSchedulesType;
function UpdateRatePlanSchedulesTypeFromJSON(json) {
    return UpdateRatePlanSchedulesTypeFromJSONTyped(json, false);
}
exports.UpdateRatePlanSchedulesTypeFromJSON = UpdateRatePlanSchedulesTypeFromJSON;
function UpdateRatePlanSchedulesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'originalRatePlanScheduleDetail': !(0, runtime_1.exists)(json, 'originalRatePlanScheduleDetail') ? undefined : (0, RatePlanScheduleDetailType_1.RatePlanScheduleDetailTypeFromJSON)(json['originalRatePlanScheduleDetail']),
        'ratePlanScheduleDetail': !(0, runtime_1.exists)(json, 'ratePlanScheduleDetail') ? undefined : (0, RatePlanScheduleDetailType_1.RatePlanScheduleDetailTypeFromJSON)(json['ratePlanScheduleDetail']),
        'ratePlanScheduleId': !(0, runtime_1.exists)(json, 'ratePlanScheduleId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['ratePlanScheduleId']),
    };
}
exports.UpdateRatePlanSchedulesTypeFromJSONTyped = UpdateRatePlanSchedulesTypeFromJSONTyped;
function UpdateRatePlanSchedulesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'originalRatePlanScheduleDetail': (0, RatePlanScheduleDetailType_1.RatePlanScheduleDetailTypeToJSON)(value.originalRatePlanScheduleDetail),
        'ratePlanScheduleDetail': (0, RatePlanScheduleDetailType_1.RatePlanScheduleDetailTypeToJSON)(value.ratePlanScheduleDetail),
        'ratePlanScheduleId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.ratePlanScheduleId),
    };
}
exports.UpdateRatePlanSchedulesTypeToJSON = UpdateRatePlanSchedulesTypeToJSON;
