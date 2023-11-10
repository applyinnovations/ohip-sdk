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
exports.ValidateReservationChangesDetailsToJSON = exports.ValidateReservationChangesDetailsFromJSONTyped = exports.ValidateReservationChangesDetailsFromJSON = exports.instanceOfValidateReservationChangesDetails = void 0;
const runtime_1 = require("../runtime");
const GuaranteePolicyType_1 = require("./GuaranteePolicyType");
const HotelReservationType_1 = require("./HotelReservationType");
const Links_1 = require("./Links");
const ValidationsReturnType_1 = require("./ValidationsReturnType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ValidateReservationChangesDetails interface.
 */
function instanceOfValidateReservationChangesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfValidateReservationChangesDetails = instanceOfValidateReservationChangesDetails;
function ValidateReservationChangesDetailsFromJSON(json) {
    return ValidateReservationChangesDetailsFromJSONTyped(json, false);
}
exports.ValidateReservationChangesDetailsFromJSON = ValidateReservationChangesDetailsFromJSON;
function ValidateReservationChangesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'reservation': !(0, runtime_1.exists)(json, 'reservation') ? undefined : (0, HotelReservationType_1.HotelReservationTypeFromJSON)(json['reservation']),
        'reservationGuarantee': !(0, runtime_1.exists)(json, 'reservationGuarantee') ? undefined : (0, GuaranteePolicyType_1.GuaranteePolicyTypeFromJSON)(json['reservationGuarantee']),
        'validationMessages': !(0, runtime_1.exists)(json, 'validationMessages') ? undefined : (0, ValidationsReturnType_1.ValidationsReturnTypeFromJSON)(json['validationMessages']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ValidateReservationChangesDetailsFromJSONTyped = ValidateReservationChangesDetailsFromJSONTyped;
function ValidateReservationChangesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'reservation': (0, HotelReservationType_1.HotelReservationTypeToJSON)(value.reservation),
        'reservationGuarantee': (0, GuaranteePolicyType_1.GuaranteePolicyTypeToJSON)(value.reservationGuarantee),
        'validationMessages': (0, ValidationsReturnType_1.ValidationsReturnTypeToJSON)(value.validationMessages),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ValidateReservationChangesDetailsToJSON = ValidateReservationChangesDetailsToJSON;
