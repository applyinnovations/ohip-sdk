"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomTypePoolTypeToJSON = exports.RoomTypePoolTypeFromJSONTyped = exports.RoomTypePoolTypeFromJSON = exports.instanceOfRoomTypePoolType = void 0;
const runtime_1 = require("../runtime");
const RoomPoolRoomTypesType_1 = require("./RoomPoolRoomTypesType");
const TranslationTextType1000_1 = require("./TranslationTextType1000");
/**
 * Check if a given object implements the RoomTypePoolType interface.
 */
function instanceOfRoomTypePoolType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomTypePoolType = instanceOfRoomTypePoolType;
function RoomTypePoolTypeFromJSON(json) {
    return RoomTypePoolTypeFromJSONTyped(json, false);
}
exports.RoomTypePoolTypeFromJSON = RoomTypePoolTypeFromJSON;
function RoomTypePoolTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'associatedRoomTypes': !(0, runtime_1.exists)(json, 'associatedRoomTypes') ? undefined : (0, RoomPoolRoomTypesType_1.RoomPoolRoomTypesTypeFromJSON)(json['associatedRoomTypes']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomTypePoolCode': !(0, runtime_1.exists)(json, 'roomTypePoolCode') ? undefined : json['roomTypePoolCode'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : (0, TranslationTextType1000_1.TranslationTextType1000FromJSON)(json['shortDescription']),
    };
}
exports.RoomTypePoolTypeFromJSONTyped = RoomTypePoolTypeFromJSONTyped;
function RoomTypePoolTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'associatedRoomTypes': (0, RoomPoolRoomTypesType_1.RoomPoolRoomTypesTypeToJSON)(value.associatedRoomTypes),
        'description': value.description,
        'hotelId': value.hotelId,
        'roomTypePoolCode': value.roomTypePoolCode,
        'sequence': value.sequence,
        'shortDescription': (0, TranslationTextType1000_1.TranslationTextType1000ToJSON)(value.shortDescription),
    };
}
exports.RoomTypePoolTypeToJSON = RoomTypePoolTypeToJSON;