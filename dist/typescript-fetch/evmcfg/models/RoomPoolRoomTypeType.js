"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomPoolRoomTypeTypeToJSON = exports.RoomPoolRoomTypeTypeFromJSONTyped = exports.RoomPoolRoomTypeTypeFromJSON = exports.instanceOfRoomPoolRoomTypeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RoomPoolRoomTypeType interface.
 */
function instanceOfRoomPoolRoomTypeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomPoolRoomTypeType = instanceOfRoomPoolRoomTypeType;
function RoomPoolRoomTypeTypeFromJSON(json) {
    return RoomPoolRoomTypeTypeFromJSONTyped(json, false);
}
exports.RoomPoolRoomTypeTypeFromJSON = RoomPoolRoomTypeTypeFromJSON;
function RoomPoolRoomTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accessible': !(0, runtime_1.exists)(json, 'accessible') ? undefined : json['accessible'],
        'activeDate': !(0, runtime_1.exists)(json, 'activeDate') ? undefined : json['activeDate'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'meetingRoom': !(0, runtime_1.exists)(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'pseudo': !(0, runtime_1.exists)(json, 'pseudo') ? undefined : json['pseudo'],
        'restricted': !(0, runtime_1.exists)(json, 'restricted') ? undefined : json['restricted'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'sellSequence': !(0, runtime_1.exists)(json, 'sellSequence') ? undefined : json['sellSequence'],
        'sendToInterface': !(0, runtime_1.exists)(json, 'sendToInterface') ? undefined : json['sendToInterface'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
        'suite': !(0, runtime_1.exists)(json, 'suite') ? undefined : json['suite'],
    };
}
exports.RoomPoolRoomTypeTypeFromJSONTyped = RoomPoolRoomTypeTypeFromJSONTyped;
function RoomPoolRoomTypeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accessible': value.accessible,
        'activeDate': value.activeDate,
        'inactive': value.inactive,
        'meetingRoom': value.meetingRoom,
        'numberOfRooms': value.numberOfRooms,
        'pseudo': value.pseudo,
        'restricted': value.restricted,
        'roomClass': value.roomClass,
        'roomType': value.roomType,
        'sellSequence': value.sellSequence,
        'sendToInterface': value.sendToInterface,
        'shortDescription': value.shortDescription,
        'suite': value.suite,
    };
}
exports.RoomPoolRoomTypeTypeToJSON = RoomPoolRoomTypeTypeToJSON;
