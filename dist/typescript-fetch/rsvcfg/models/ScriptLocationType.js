"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScriptLocationTypeToJSON = exports.ScriptLocationTypeFromJSONTyped = exports.ScriptLocationTypeFromJSON = exports.instanceOfScriptLocationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ScriptLocationType interface.
 */
function instanceOfScriptLocationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfScriptLocationType = instanceOfScriptLocationType;
function ScriptLocationTypeFromJSON(json) {
    return ScriptLocationTypeFromJSONTyped(json, false);
}
exports.ScriptLocationTypeFromJSON = ScriptLocationTypeFromJSON;
function ScriptLocationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'croCode': !(0, runtime_1.exists)(json, 'croCode') ? undefined : json['croCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.ScriptLocationTypeFromJSONTyped = ScriptLocationTypeFromJSONTyped;
function ScriptLocationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'croCode': value.croCode,
        'hotelId': value.hotelId,
    };
}
exports.ScriptLocationTypeToJSON = ScriptLocationTypeToJSON;
