"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RoomMoveDetailTypeToJSON = exports.RoomMoveDetailTypeFromJSONTyped = exports.RoomMoveDetailTypeFromJSON = exports.instanceOfRoomMoveDetailType = void 0;
const runtime_1 = require("../runtime");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the RoomMoveDetailType interface.
 */
function instanceOfRoomMoveDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomMoveDetailType = instanceOfRoomMoveDetailType;
function RoomMoveDetailTypeFromJSON(json) {
    return RoomMoveDetailTypeFromJSONTyped(json, false);
}
exports.RoomMoveDetailTypeFromJSON = RoomMoveDetailTypeFromJSON;
function RoomMoveDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'date': !(0, runtime_1.exists)(json, 'date') ? undefined : json['date'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'fromRoom': !(0, runtime_1.exists)(json, 'fromRoom') ? undefined : json['fromRoom'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'movedBy': !(0, runtime_1.exists)(json, 'movedBy') ? undefined : json['movedBy'],
        'reasonCode': !(0, runtime_1.exists)(json, 'reasonCode') ? undefined : json['reasonCode'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'toRoom': !(0, runtime_1.exists)(json, 'toRoom') ? undefined : json['toRoom'],
    };
}
exports.RoomMoveDetailTypeFromJSONTyped = RoomMoveDetailTypeFromJSONTyped;
function RoomMoveDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'date': value.date,
        'description': value.description,
        'fromRoom': value.fromRoom,
        'hotelId': value.hotelId,
        'movedBy': value.movedBy,
        'reasonCode': value.reasonCode,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'toRoom': value.toRoom,
    };
}
exports.RoomMoveDetailTypeToJSON = RoomMoveDetailTypeToJSON;
