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
exports.CombineShareReservationsTypeToJSON = exports.CombineShareReservationsTypeFromJSONTyped = exports.CombineShareReservationsTypeFromJSON = exports.instanceOfCombineShareReservationsType = void 0;
const runtime_1 = require("../runtime");
const CombineShareFromProfilesType_1 = require("./CombineShareFromProfilesType");
const CombineShareInstructionType_1 = require("./CombineShareInstructionType");
const CombineShareReservationsTypeFetchInstructions_1 = require("./CombineShareReservationsTypeFetchInstructions");
const CombineShareReservationsTypeShareToReservation_1 = require("./CombineShareReservationsTypeShareToReservation");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CombineShareReservationsType interface.
 */
function instanceOfCombineShareReservationsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCombineShareReservationsType = instanceOfCombineShareReservationsType;
function CombineShareReservationsTypeFromJSON(json) {
    return CombineShareReservationsTypeFromJSONTyped(json, false);
}
exports.CombineShareReservationsTypeFromJSON = CombineShareReservationsTypeFromJSON;
function CombineShareReservationsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'combineShareInstruction': !(0, runtime_1.exists)(json, 'combineShareInstruction') ? undefined : (0, CombineShareInstructionType_1.CombineShareInstructionTypeFromJSON)(json['combineShareInstruction']),
        'existingReservationId': !(0, runtime_1.exists)(json, 'existingReservationId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['existingReservationId']),
        'fetchInstructions': !(0, runtime_1.exists)(json, 'fetchInstructions') ? undefined : (0, CombineShareReservationsTypeFetchInstructions_1.CombineShareReservationsTypeFetchInstructionsFromJSON)(json['fetchInstructions']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'newReservations': !(0, runtime_1.exists)(json, 'newReservations') ? undefined : (0, CombineShareFromProfilesType_1.CombineShareFromProfilesTypeFromJSON)(json['newReservations']),
        'shareToReservation': !(0, runtime_1.exists)(json, 'shareToReservation') ? undefined : (0, CombineShareReservationsTypeShareToReservation_1.CombineShareReservationsTypeShareToReservationFromJSON)(json['shareToReservation']),
    };
}
exports.CombineShareReservationsTypeFromJSONTyped = CombineShareReservationsTypeFromJSONTyped;
function CombineShareReservationsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'combineShareInstruction': (0, CombineShareInstructionType_1.CombineShareInstructionTypeToJSON)(value.combineShareInstruction),
        'existingReservationId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.existingReservationId),
        'fetchInstructions': (0, CombineShareReservationsTypeFetchInstructions_1.CombineShareReservationsTypeFetchInstructionsToJSON)(value.fetchInstructions),
        'hotelId': value.hotelId,
        'newReservations': (0, CombineShareFromProfilesType_1.CombineShareFromProfilesTypeToJSON)(value.newReservations),
        'shareToReservation': (0, CombineShareReservationsTypeShareToReservation_1.CombineShareReservationsTypeShareToReservationToJSON)(value.shareToReservation),
    };
}
exports.CombineShareReservationsTypeToJSON = CombineShareReservationsTypeToJSON;
