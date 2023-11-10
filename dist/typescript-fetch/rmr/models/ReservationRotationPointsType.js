"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationRotationPointsTypeToJSON = exports.ReservationRotationPointsTypeFromJSONTyped = exports.ReservationRotationPointsTypeFromJSON = exports.instanceOfReservationRotationPointsType = void 0;
const runtime_1 = require("../runtime");
const ProfileId_1 = require("./ProfileId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReservationRotationPointsType interface.
 */
function instanceOfReservationRotationPointsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRotationPointsType = instanceOfReservationRotationPointsType;
function ReservationRotationPointsTypeFromJSON(json) {
    return ReservationRotationPointsTypeFromJSONTyped(json, false);
}
exports.ReservationRotationPointsTypeFromJSON = ReservationRotationPointsTypeFromJSON;
function ReservationRotationPointsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'departureDate': !(0, runtime_1.exists)(json, 'departureDate') ? undefined : (new Date(json['departureDate'])),
        'guestName': !(0, runtime_1.exists)(json, 'guestName') ? undefined : json['guestName'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        'pointsAdjusted': !(0, runtime_1.exists)(json, 'pointsAdjusted') ? undefined : json['pointsAdjusted'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'totalPoints': !(0, runtime_1.exists)(json, 'totalPoints') ? undefined : json['totalPoints'],
    };
}
exports.ReservationRotationPointsTypeFromJSONTyped = ReservationRotationPointsTypeFromJSONTyped;
function ReservationRotationPointsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0, 10)),
        'departureDate': value.departureDate === undefined ? undefined : (value.departureDate.toISOString().substr(0, 10)),
        'guestName': value.guestName,
        'nights': value.nights,
        'pointsAdjusted': value.pointsAdjusted,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'roomId': value.roomId,
        'totalPoints': value.totalPoints,
    };
}
exports.ReservationRotationPointsTypeToJSON = ReservationRotationPointsTypeToJSON;
