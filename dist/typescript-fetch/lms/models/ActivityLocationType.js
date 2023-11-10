"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityLocationTypeToJSON = exports.ActivityLocationTypeFromJSONTyped = exports.ActivityLocationTypeFromJSON = exports.instanceOfActivityLocationType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ActivityLocationType interface.
 */
function instanceOfActivityLocationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityLocationType = instanceOfActivityLocationType;
function ActivityLocationTypeFromJSON(json) {
    return ActivityLocationTypeFromJSONTyped(json, false);
}
exports.ActivityLocationTypeFromJSON = ActivityLocationTypeFromJSON;
function ActivityLocationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
    };
}
exports.ActivityLocationTypeFromJSONTyped = ActivityLocationTypeFromJSONTyped;
function ActivityLocationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
    };
}
exports.ActivityLocationTypeToJSON = ActivityLocationTypeToJSON;
