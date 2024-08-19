"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelRoomMaintenanceReasonTypeToJSON = exports.HotelRoomMaintenanceReasonTypeFromJSONTyped = exports.HotelRoomMaintenanceReasonTypeFromJSON = exports.instanceOfHotelRoomMaintenanceReasonType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the HotelRoomMaintenanceReasonType interface.
 */
function instanceOfHotelRoomMaintenanceReasonType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelRoomMaintenanceReasonType = instanceOfHotelRoomMaintenanceReasonType;
function HotelRoomMaintenanceReasonTypeFromJSON(json) {
    return HotelRoomMaintenanceReasonTypeFromJSONTyped(json, false);
}
exports.HotelRoomMaintenanceReasonTypeFromJSON = HotelRoomMaintenanceReasonTypeFromJSON;
function HotelRoomMaintenanceReasonTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
    };
}
exports.HotelRoomMaintenanceReasonTypeFromJSONTyped = HotelRoomMaintenanceReasonTypeFromJSONTyped;
function HotelRoomMaintenanceReasonTypeToJSON(value) {
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
        'inactive': value.inactive,
        'sellSequence': value.sellSequence,
    };
}
exports.HotelRoomMaintenanceReasonTypeToJSON = HotelRoomMaintenanceReasonTypeToJSON;
