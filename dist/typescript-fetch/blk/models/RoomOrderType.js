"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomOrderTypeToJSON = exports.RoomOrderTypeFromJSONTyped = exports.RoomOrderTypeFromJSON = exports.instanceOfRoomOrderType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the RoomOrderType interface.
 */
function instanceOfRoomOrderType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomOrderType = instanceOfRoomOrderType;
function RoomOrderTypeFromJSON(json) {
    return RoomOrderTypeFromJSONTyped(json, false);
}
exports.RoomOrderTypeFromJSON = RoomOrderTypeFromJSON;
function RoomOrderTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'blockIdList': !(0, runtime_1.exists)(json, 'blockIdList') ? undefined : (json['blockIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'genericRoomTypes': !(0, runtime_1.exists)(json, 'genericRoomTypes') ? undefined : json['genericRoomTypes'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}
exports.RoomOrderTypeFromJSONTyped = RoomOrderTypeFromJSONTyped;
function RoomOrderTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'blockIdList': value.blockIdList === undefined ? undefined : (value.blockIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'genericRoomTypes': value.genericRoomTypes,
        'hotelId': value.hotelId,
        'roomTypes': value.roomTypes,
    };
}
exports.RoomOrderTypeToJSON = RoomOrderTypeToJSON;