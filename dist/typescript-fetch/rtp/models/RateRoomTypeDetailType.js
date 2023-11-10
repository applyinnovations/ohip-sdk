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
exports.RateRoomTypeDetailTypeToJSON = exports.RateRoomTypeDetailTypeFromJSONTyped = exports.RateRoomTypeDetailTypeFromJSON = exports.instanceOfRateRoomTypeDetailType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RateRoomTypeDetailType interface.
 */
function instanceOfRateRoomTypeDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateRoomTypeDetailType = instanceOfRateRoomTypeDetailType;
function RateRoomTypeDetailTypeFromJSON(json) {
    return RateRoomTypeDetailTypeFromJSONTyped(json, false);
}
exports.RateRoomTypeDetailTypeFromJSON = RateRoomTypeDetailTypeFromJSON;
function RateRoomTypeDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'rateFloor': !(0, runtime_1.exists)(json, 'rateFloor') ? undefined : json['rateFloor'],
    };
}
exports.RateRoomTypeDetailTypeFromJSONTyped = RateRoomTypeDetailTypeFromJSONTyped;
function RateRoomTypeDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'pseudo': value.pseudo,
        'rateFloor': value.rateFloor,
    };
}
exports.RateRoomTypeDetailTypeToJSON = RateRoomTypeDetailTypeToJSON;
