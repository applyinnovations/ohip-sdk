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
exports.ReservationMembershipAwardTypeToJSON = exports.ReservationMembershipAwardTypeFromJSONTyped = exports.ReservationMembershipAwardTypeFromJSON = exports.instanceOfReservationMembershipAwardType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationMembershipAwardType interface.
 */
function instanceOfReservationMembershipAwardType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationMembershipAwardType = instanceOfReservationMembershipAwardType;
function ReservationMembershipAwardTypeFromJSON(json) {
    return ReservationMembershipAwardTypeFromJSONTyped(json, false);
}
exports.ReservationMembershipAwardTypeFromJSON = ReservationMembershipAwardTypeFromJSON;
function ReservationMembershipAwardTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualCancelPoints': !(0, runtime_1.exists)(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'awardBasedOn': !(0, runtime_1.exists)(json, 'awardBasedOn') ? undefined : json['awardBasedOn'],
        'awardCancelDate': !(0, runtime_1.exists)(json, 'awardCancelDate') ? undefined : (new Date(json['awardCancelDate'])),
        'awardCancellationNo': !(0, runtime_1.exists)(json, 'awardCancellationNo') ? undefined : json['awardCancellationNo'],
        'awardType': !(0, runtime_1.exists)(json, 'awardType') ? undefined : json['awardType'],
        'cancelPenaltyDays': !(0, runtime_1.exists)(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyPoints': !(0, runtime_1.exists)(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'dateAwarded': !(0, runtime_1.exists)(json, 'dateAwarded') ? undefined : (new Date(json['dateAwarded'])),
        'membershipCardNo': !(0, runtime_1.exists)(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !(0, runtime_1.exists)(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
    };
}
exports.ReservationMembershipAwardTypeFromJSONTyped = ReservationMembershipAwardTypeFromJSONTyped;
function ReservationMembershipAwardTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualCancelPoints': value.actualCancelPoints,
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0, 10)),
        'awardBasedOn': value.awardBasedOn,
        'awardCancelDate': value.awardCancelDate === undefined ? undefined : (value.awardCancelDate.toISOString().substr(0, 10)),
        'awardCancellationNo': value.awardCancellationNo,
        'awardType': value.awardType,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'dateAwarded': value.dateAwarded === undefined ? undefined : (value.dateAwarded.toISOString().substr(0, 10)),
        'membershipCardNo': value.membershipCardNo,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'pointsRequired': value.pointsRequired,
    };
}
exports.ReservationMembershipAwardTypeToJSON = ReservationMembershipAwardTypeToJSON;
