"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypeInfoTypeToJSON = exports.RoomTypeInfoTypeFromJSONTyped = exports.RoomTypeInfoTypeFromJSON = exports.instanceOfRoomTypeInfoType = void 0;
const runtime_1 = require("../runtime");
const BedTypeInfoType_1 = require("./BedTypeInfoType");
const BookingChannelMappingType_1 = require("./BookingChannelMappingType");
const RoomFeaturesType_1 = require("./RoomFeaturesType");
const RoomTypeAttributesType_1 = require("./RoomTypeAttributesType");
/**
 * Check if a given object implements the RoomTypeInfoType interface.
 */
function instanceOfRoomTypeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomTypeInfoType = instanceOfRoomTypeInfoType;
function RoomTypeInfoTypeFromJSON(json) {
    return RoomTypeInfoTypeFromJSONTyped(json, false);
}
exports.RoomTypeInfoTypeFromJSON = RoomTypeInfoTypeFromJSON;
function RoomTypeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessible': !(0, runtime_1.exists)(json, 'accessible') ? undefined : json['accessible'],
        'bedType': !(0, runtime_1.exists)(json, 'bedType') ? undefined : (0, BedTypeInfoType_1.BedTypeInfoTypeFromJSON)(json['bedType']),
        'bedTypeCodes': !(0, runtime_1.exists)(json, 'bedTypeCodes') ? undefined : json['bedTypeCodes'],
        'bookingChannelMappings': !(0, runtime_1.exists)(json, 'bookingChannelMappings') ? undefined : (json['bookingChannelMappings'].map(BookingChannelMappingType_1.BookingChannelMappingTypeFromJSON)),
        'component': !(0, runtime_1.exists)(json, 'component') ? undefined : json['component'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'invBlockCode': !(0, runtime_1.exists)(json, 'invBlockCode') ? undefined : json['invBlockCode'],
        'longDescription': !(0, runtime_1.exists)(json, 'longDescription') ? undefined : json['longDescription'],
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomFeatures': !(0, runtime_1.exists)(json, 'roomFeatures') ? undefined : (0, RoomFeaturesType_1.RoomFeaturesTypeFromJSON)(json['roomFeatures']),
        'roomQualifierCode': !(0, runtime_1.exists)(json, 'roomQualifierCode') ? undefined : json['roomQualifierCode'],
        'roomQualifierMatchIndicator': !(0, runtime_1.exists)(json, 'roomQualifierMatchIndicator') ? undefined : json['roomQualifierMatchIndicator'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeAttributes': !(0, runtime_1.exists)(json, 'roomTypeAttributes') ? undefined : (0, RoomTypeAttributesType_1.RoomTypeAttributesTypeFromJSON)(json['roomTypeAttributes']),
        'roomViewCode': !(0, runtime_1.exists)(json, 'roomViewCode') ? undefined : json['roomViewCode'],
        'suite': !(0, runtime_1.exists)(json, 'suite') ? undefined : json['suite'],
        'webName': !(0, runtime_1.exists)(json, 'webName') ? undefined : json['webName'],
        'webPage': !(0, runtime_1.exists)(json, 'webPage') ? undefined : json['webPage'],
    };
}
exports.RoomTypeInfoTypeFromJSONTyped = RoomTypeInfoTypeFromJSONTyped;
function RoomTypeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessible': value.accessible,
        'bedType': (0, BedTypeInfoType_1.BedTypeInfoTypeToJSON)(value.bedType),
        'bedTypeCodes': value.bedTypeCodes,
        'bookingChannelMappings': value.bookingChannelMappings === undefined ? undefined : (value.bookingChannelMappings.map(BookingChannelMappingType_1.BookingChannelMappingTypeToJSON)),
        'component': value.component,
        'description': value.description,
        'hotelId': value.hotelId,
        'invBlockCode': value.invBlockCode,
        'longDescription': value.longDescription,
        'promotionCode': value.promotionCode,
        'roomClass': value.roomClass,
        'roomFeatures': (0, RoomFeaturesType_1.RoomFeaturesTypeToJSON)(value.roomFeatures),
        'roomQualifierCode': value.roomQualifierCode,
        'roomQualifierMatchIndicator': value.roomQualifierMatchIndicator,
        'roomType': value.roomType,
        'roomTypeAttributes': (0, RoomTypeAttributesType_1.RoomTypeAttributesTypeToJSON)(value.roomTypeAttributes),
        'roomViewCode': value.roomViewCode,
        'suite': value.suite,
        'webName': value.webName,
        'webPage': value.webPage,
    };
}
exports.RoomTypeInfoTypeToJSON = RoomTypeInfoTypeToJSON;