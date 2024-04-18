"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationDetailsTypeToJSON = exports.ReservationDetailsTypeFromJSONTyped = exports.ReservationDetailsTypeFromJSON = exports.instanceOfReservationDetailsType = void 0;
const runtime_1 = require("../runtime");
const ProfileId_1 = require("./ProfileId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ReservationDetailsType interface.
 */
function instanceOfReservationDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationDetailsType = instanceOfReservationDetailsType;
function ReservationDetailsTypeFromJSON(json) {
    return ReservationDetailsTypeFromJSONTyped(json, false);
}
exports.ReservationDetailsTypeFromJSON = ReservationDetailsTypeFromJSON;
function ReservationDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrival': !(0, runtime_1.exists)(json, 'arrival') ? undefined : json['arrival'],
        'departure': !(0, runtime_1.exists)(json, 'departure') ? undefined : json['departure'],
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
    };
}
exports.ReservationDetailsTypeFromJSONTyped = ReservationDetailsTypeFromJSONTyped;
function ReservationDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrival': value.arrival,
        'departure': value.departure,
        'givenName': value.givenName,
        'hotelId': value.hotelId,
        'nights': value.nights,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'roomId': value.roomId,
        'surname': value.surname,
    };
}
exports.ReservationDetailsTypeToJSON = ReservationDetailsTypeToJSON;