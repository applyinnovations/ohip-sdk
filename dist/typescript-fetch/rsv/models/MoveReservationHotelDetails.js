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
exports.MoveReservationHotelDetailsToJSON = exports.MoveReservationHotelDetailsFromJSONTyped = exports.MoveReservationHotelDetailsFromJSON = exports.instanceOfMoveReservationHotelDetails = void 0;
const runtime_1 = require("../runtime");
const HotelReservationType_1 = require("./HotelReservationType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the MoveReservationHotelDetails interface.
 */
function instanceOfMoveReservationHotelDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMoveReservationHotelDetails = instanceOfMoveReservationHotelDetails;
function MoveReservationHotelDetailsFromJSON(json) {
    return MoveReservationHotelDetailsFromJSONTyped(json, false);
}
exports.MoveReservationHotelDetailsFromJSON = MoveReservationHotelDetailsFromJSON;
function MoveReservationHotelDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, HotelReservationType_1.HotelReservationTypeFromJSON)(json['reservation']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.MoveReservationHotelDetailsFromJSONTyped = MoveReservationHotelDetailsFromJSONTyped;
function MoveReservationHotelDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'reservation': (0, HotelReservationType_1.HotelReservationTypeToJSON)(value.reservation),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.MoveReservationHotelDetailsToJSON = MoveReservationHotelDetailsToJSON;
