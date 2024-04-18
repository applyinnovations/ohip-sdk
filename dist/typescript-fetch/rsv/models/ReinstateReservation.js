"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReinstateReservationToJSON = exports.ReinstateReservationFromJSONTyped = exports.ReinstateReservationFromJSON = exports.instanceOfReinstateReservation = void 0;
const runtime_1 = require("../runtime");
const EffectiveRateType_1 = require("./EffectiveRateType");
const HotelReservationType_1 = require("./HotelReservationType");
const InstanceLink_1 = require("./InstanceLink");
const UniqueIDType_1 = require("./UniqueIDType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ReinstateReservation interface.
 */
function instanceOfReinstateReservation(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReinstateReservation = instanceOfReinstateReservation;
function ReinstateReservationFromJSON(json) {
    return ReinstateReservationFromJSONTyped(json, false);
}
exports.ReinstateReservationFromJSON = ReinstateReservationFromJSON;
function ReinstateReservationFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'additionalReservationIdList': !(0, runtime_1.exists)(json, 'additionalReservationIdList') ? undefined : (json['additionalReservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'effectiveRates': !(0, runtime_1.exists)(json, 'effectiveRates') ? undefined : (json['effectiveRates'].map(EffectiveRateType_1.EffectiveRateTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'overrideInventory': !(0, runtime_1.exists)(json, 'overrideInventory') ? undefined : json['overrideInventory'],
        'overrideRates': !(0, runtime_1.exists)(json, 'overrideRates') ? undefined : json['overrideRates'],
        'overrideRoomAllocation': !(0, runtime_1.exists)(json, 'overrideRoomAllocation') ? undefined : json['overrideRoomAllocation'],
        'overrideRoomOutOfService': !(0, runtime_1.exists)(json, 'overrideRoomOutOfService') ? undefined : json['overrideRoomOutOfService'],
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, HotelReservationType_1.HotelReservationTypeFromJSON)(json['reservation']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationLockHandle': !(0, runtime_1.exists)(json, 'reservationLockHandle') ? undefined : json['reservationLockHandle'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReinstateReservationFromJSONTyped = ReinstateReservationFromJSONTyped;
function ReinstateReservationToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'additionalReservationIdList': value.additionalReservationIdList === undefined ? undefined : (value.additionalReservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'effectiveRates': value.effectiveRates === undefined ? undefined : (value.effectiveRates.map(EffectiveRateType_1.EffectiveRateTypeToJSON)),
        'hotelId': value.hotelId,
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'overrideInventory': value.overrideInventory,
        'overrideRates': value.overrideRates,
        'overrideRoomAllocation': value.overrideRoomAllocation,
        'overrideRoomOutOfService': value.overrideRoomOutOfService,
        'reservation': (0, HotelReservationType_1.HotelReservationTypeToJSON)(value.reservation),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationLockHandle': value.reservationLockHandle,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReinstateReservationToJSON = ReinstateReservationToJSON;