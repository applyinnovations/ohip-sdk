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
exports.LocatorCodeTypeToJSON = exports.LocatorCodeTypeFromJSONTyped = exports.LocatorCodeTypeFromJSON = exports.instanceOfLocatorCodeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the LocatorCodeType interface.
 */
function instanceOfLocatorCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLocatorCodeType = instanceOfLocatorCodeType;
function LocatorCodeTypeFromJSON(json) {
    return LocatorCodeTypeFromJSONTyped(json, false);
}
exports.LocatorCodeTypeFromJSON = LocatorCodeTypeFromJSON;
function LocatorCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
    };
}
exports.LocatorCodeTypeFromJSONTyped = LocatorCodeTypeFromJSONTyped;
function LocatorCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'hotelId': value.hotelId,
        'inactive': value.inactive,
    };
}
exports.LocatorCodeTypeToJSON = LocatorCodeTypeToJSON;
