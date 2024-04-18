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
exports.ResGuestTypeToJSON = exports.ResGuestTypeFromJSONTyped = exports.ResGuestTypeFromJSON = exports.instanceOfResGuestType = void 0;
const runtime_1 = require("../runtime");
const ResGuestTypeProfileInfo_1 = require("./ResGuestTypeProfileInfo");
const TransportInfoType_1 = require("./TransportInfoType");
const VisaInfoType_1 = require("./VisaInfoType");
/**
 * Check if a given object implements the ResGuestType interface.
 */
function instanceOfResGuestType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResGuestType = instanceOfResGuestType;
function ResGuestTypeFromJSON(json) {
    return ResGuestTypeFromJSONTyped(json, false);
}
exports.ResGuestTypeFromJSON = ResGuestTypeFromJSON;
function ResGuestTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrivalTransport': !(0, runtime_1.exists)(json, 'arrivalTransport') ? undefined : (0, TransportInfoType_1.TransportInfoTypeFromJSON)(json['arrivalTransport']),
        'departureTransport': !(0, runtime_1.exists)(json, 'departureTransport') ? undefined : (0, TransportInfoType_1.TransportInfoTypeFromJSON)(json['departureTransport']),
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'profileInfo': !(0, runtime_1.exists)(json, 'profileInfo') ? undefined : (0, ResGuestTypeProfileInfo_1.ResGuestTypeProfileInfoFromJSON)(json['profileInfo']),
        'reservationGuestRPH': !(0, runtime_1.exists)(json, 'reservationGuestRPH') ? undefined : json['reservationGuestRPH'],
        'visaInfo': !(0, runtime_1.exists)(json, 'visaInfo') ? undefined : (0, VisaInfoType_1.VisaInfoTypeFromJSON)(json['visaInfo']),
    };
}
exports.ResGuestTypeFromJSONTyped = ResGuestTypeFromJSONTyped;
function ResGuestTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrivalTransport': (0, TransportInfoType_1.TransportInfoTypeToJSON)(value.arrivalTransport),
        'departureTransport': (0, TransportInfoType_1.TransportInfoTypeToJSON)(value.departureTransport),
        'primary': value.primary,
        'profileInfo': (0, ResGuestTypeProfileInfo_1.ResGuestTypeProfileInfoToJSON)(value.profileInfo),
        'reservationGuestRPH': value.reservationGuestRPH,
        'visaInfo': (0, VisaInfoType_1.VisaInfoTypeToJSON)(value.visaInfo),
    };
}
exports.ResGuestTypeToJSON = ResGuestTypeToJSON;