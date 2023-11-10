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
exports.RoomSpecialRatingInfoTypeToJSON = exports.RoomSpecialRatingInfoTypeFromJSONTyped = exports.RoomSpecialRatingInfoTypeFromJSON = exports.instanceOfRoomSpecialRatingInfoType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const RoomSpecialRatingType_1 = require("./RoomSpecialRatingType");
/**
 * Check if a given object implements the RoomSpecialRatingInfoType interface.
 */
function instanceOfRoomSpecialRatingInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomSpecialRatingInfoType = instanceOfRoomSpecialRatingInfoType;
function RoomSpecialRatingInfoTypeFromJSON(json) {
    return RoomSpecialRatingInfoTypeFromJSONTyped(json, false);
}
exports.RoomSpecialRatingInfoTypeFromJSON = RoomSpecialRatingInfoTypeFromJSON;
function RoomSpecialRatingInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'rating': !(0, runtime_1.exists)(json, 'rating') ? undefined : (0, RoomSpecialRatingType_1.RoomSpecialRatingTypeFromJSON)(json['rating']),
        'roomSpecial': !(0, runtime_1.exists)(json, 'roomSpecial') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['roomSpecial']),
    };
}
exports.RoomSpecialRatingInfoTypeFromJSONTyped = RoomSpecialRatingInfoTypeFromJSONTyped;
function RoomSpecialRatingInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'rating': (0, RoomSpecialRatingType_1.RoomSpecialRatingTypeToJSON)(value.rating),
        'roomSpecial': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.roomSpecial),
    };
}
exports.RoomSpecialRatingInfoTypeToJSON = RoomSpecialRatingInfoTypeToJSON;
