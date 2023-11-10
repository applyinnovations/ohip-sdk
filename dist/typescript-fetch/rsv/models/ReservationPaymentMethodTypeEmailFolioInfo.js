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
exports.ReservationPaymentMethodTypeEmailFolioInfoToJSON = exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped = exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSON = exports.instanceOfReservationPaymentMethodTypeEmailFolioInfo = void 0;
const runtime_1 = require("../runtime");
const EmailType_1 = require("./EmailType");
/**
 * Check if a given object implements the ReservationPaymentMethodTypeEmailFolioInfo interface.
 */
function instanceOfReservationPaymentMethodTypeEmailFolioInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPaymentMethodTypeEmailFolioInfo = instanceOfReservationPaymentMethodTypeEmailFolioInfo;
function ReservationPaymentMethodTypeEmailFolioInfoFromJSON(json) {
    return ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json, false);
}
exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSON = ReservationPaymentMethodTypeEmailFolioInfoFromJSON;
function ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : (0, EmailType_1.EmailTypeFromJSON)(json['email']),
        'emailFolio': !(0, runtime_1.exists)(json, 'emailFolio') ? undefined : json['emailFolio'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped = ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped;
function ReservationPaymentMethodTypeEmailFolioInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': (0, EmailType_1.EmailTypeToJSON)(value.email),
        'emailFolio': value.emailFolio,
        'id': value.id,
        'type': value.type,
    };
}
exports.ReservationPaymentMethodTypeEmailFolioInfoToJSON = ReservationPaymentMethodTypeEmailFolioInfoToJSON;
