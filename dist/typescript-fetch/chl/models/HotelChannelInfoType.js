"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelChannelInfoTypeToJSON = exports.HotelChannelInfoTypeFromJSONTyped = exports.HotelChannelInfoTypeFromJSON = exports.instanceOfHotelChannelInfoType = void 0;
const runtime_1 = require("../runtime");
const BookingChannelMappingType_1 = require("./BookingChannelMappingType");
/**
 * Check if a given object implements the HotelChannelInfoType interface.
 */
function instanceOfHotelChannelInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelChannelInfoType = instanceOfHotelChannelInfoType;
function HotelChannelInfoTypeFromJSON(json) {
    return HotelChannelInfoTypeFromJSONTyped(json, false);
}
exports.HotelChannelInfoTypeFromJSON = HotelChannelInfoTypeFromJSON;
function HotelChannelInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bookingChannelMappings': !(0, runtime_1.exists)(json, 'bookingChannelMappings') ? undefined : (json['bookingChannelMappings'].map(BookingChannelMappingType_1.BookingChannelMappingTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
    };
}
exports.HotelChannelInfoTypeFromJSONTyped = HotelChannelInfoTypeFromJSONTyped;
function HotelChannelInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bookingChannelMappings': value.bookingChannelMappings === undefined ? undefined : (value.bookingChannelMappings.map(BookingChannelMappingType_1.BookingChannelMappingTypeToJSON)),
        'hotelId': value.hotelId,
        'name': value.name,
    };
}
exports.HotelChannelInfoTypeToJSON = HotelChannelInfoTypeToJSON;
