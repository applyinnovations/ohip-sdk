"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationsInstructionsTypeToJSON = exports.ReservationsInstructionsTypeFromJSONTyped = exports.ReservationsInstructionsTypeFromJSON = exports.instanceOfReservationsInstructionsType = void 0;
const runtime_1 = require("../runtime");
const LinkReservationInstructionType_1 = require("./LinkReservationInstructionType");
const ShareReservationInstructionType_1 = require("./ShareReservationInstructionType");
/**
 * Check if a given object implements the ReservationsInstructionsType interface.
 */
function instanceOfReservationsInstructionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationsInstructionsType = instanceOfReservationsInstructionsType;
function ReservationsInstructionsTypeFromJSON(json) {
    return ReservationsInstructionsTypeFromJSONTyped(json, false);
}
exports.ReservationsInstructionsTypeFromJSON = ReservationsInstructionsTypeFromJSON;
function ReservationsInstructionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'linkReservations': !(0, runtime_1.exists)(json, 'linkReservations') ? undefined : (0, LinkReservationInstructionType_1.LinkReservationInstructionTypeFromJSON)(json['linkReservations']),
        'shareReservations': !(0, runtime_1.exists)(json, 'shareReservations') ? undefined : (0, ShareReservationInstructionType_1.ShareReservationInstructionTypeFromJSON)(json['shareReservations']),
    };
}
exports.ReservationsInstructionsTypeFromJSONTyped = ReservationsInstructionsTypeFromJSONTyped;
function ReservationsInstructionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'linkReservations': (0, LinkReservationInstructionType_1.LinkReservationInstructionTypeToJSON)(value.linkReservations),
        'shareReservations': (0, ShareReservationInstructionType_1.ShareReservationInstructionTypeToJSON)(value.shareReservations),
    };
}
exports.ReservationsInstructionsTypeToJSON = ReservationsInstructionsTypeToJSON;
