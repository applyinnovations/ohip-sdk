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
exports.ReservationDepositTypeToJSON = exports.ReservationDepositTypeFromJSONTyped = exports.ReservationDepositTypeFromJSON = exports.instanceOfReservationDepositType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationDepositType interface.
 */
function instanceOfReservationDepositType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationDepositType = instanceOfReservationDepositType;
function ReservationDepositTypeFromJSON(json) {
    return ReservationDepositTypeFromJSONTyped(json, false);
}
exports.ReservationDepositTypeFromJSON = ReservationDepositTypeFromJSON;
function ReservationDepositTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountPaid': !(0, runtime_1.exists)(json, 'amountPaid') ? undefined : json['amountPaid'],
        'dueDate': !(0, runtime_1.exists)(json, 'dueDate') ? undefined : (new Date(json['dueDate'])),
        'hasOutstanding': !(0, runtime_1.exists)(json, 'hasOutstanding') ? undefined : json['hasOutstanding'],
        'hasPaid': !(0, runtime_1.exists)(json, 'hasPaid') ? undefined : json['hasPaid'],
        'postingDate': !(0, runtime_1.exists)(json, 'postingDate') ? undefined : (new Date(json['postingDate'])),
    };
}
exports.ReservationDepositTypeFromJSONTyped = ReservationDepositTypeFromJSONTyped;
function ReservationDepositTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountPaid': value.amountPaid,
        'dueDate': value.dueDate === undefined ? undefined : (value.dueDate.toISOString().substr(0, 10)),
        'hasOutstanding': value.hasOutstanding,
        'hasPaid': value.hasPaid,
        'postingDate': value.postingDate === undefined ? undefined : (value.postingDate.toISOString().substr(0, 10)),
    };
}
exports.ReservationDepositTypeToJSON = ReservationDepositTypeToJSON;
