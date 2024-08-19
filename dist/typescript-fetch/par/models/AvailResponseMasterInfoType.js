"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvailResponseMasterInfoTypeToJSON = exports.AvailResponseMasterInfoTypeFromJSONTyped = exports.AvailResponseMasterInfoTypeFromJSON = exports.instanceOfAvailResponseMasterInfoType = void 0;
const runtime_1 = require("../runtime");
const AvailRatePlanInfoType_1 = require("./AvailRatePlanInfoType");
const RoomTypeMasterInfoType_1 = require("./RoomTypeMasterInfoType");
/**
 * Check if a given object implements the AvailResponseMasterInfoType interface.
 */
function instanceOfAvailResponseMasterInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAvailResponseMasterInfoType = instanceOfAvailResponseMasterInfoType;
function AvailResponseMasterInfoTypeFromJSON(json) {
    return AvailResponseMasterInfoTypeFromJSONTyped(json, false);
}
exports.AvailResponseMasterInfoTypeFromJSON = AvailResponseMasterInfoTypeFromJSON;
function AvailResponseMasterInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ratePlans': !(0, runtime_1.exists)(json, 'ratePlans') ? undefined : (0, AvailRatePlanInfoType_1.AvailRatePlanInfoTypeFromJSON)(json['ratePlans']),
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : (0, RoomTypeMasterInfoType_1.RoomTypeMasterInfoTypeFromJSON)(json['roomTypes']),
    };
}
exports.AvailResponseMasterInfoTypeFromJSONTyped = AvailResponseMasterInfoTypeFromJSONTyped;
function AvailResponseMasterInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ratePlans': (0, AvailRatePlanInfoType_1.AvailRatePlanInfoTypeToJSON)(value.ratePlans),
        'roomTypes': (0, RoomTypeMasterInfoType_1.RoomTypeMasterInfoTypeToJSON)(value.roomTypes),
    };
}
exports.AvailResponseMasterInfoTypeToJSON = AvailResponseMasterInfoTypeToJSON;
