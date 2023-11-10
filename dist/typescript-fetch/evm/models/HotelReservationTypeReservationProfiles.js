"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelReservationTypeReservationProfilesToJSON = exports.HotelReservationTypeReservationProfilesFromJSONTyped = exports.HotelReservationTypeReservationProfilesFromJSON = exports.instanceOfHotelReservationTypeReservationProfiles = void 0;
const runtime_1 = require("../runtime");
const CommissionPayoutToType_1 = require("./CommissionPayoutToType");
const ReservationProfileType_1 = require("./ReservationProfileType");
/**
 * Check if a given object implements the HotelReservationTypeReservationProfiles interface.
 */
function instanceOfHotelReservationTypeReservationProfiles(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelReservationTypeReservationProfiles = instanceOfHotelReservationTypeReservationProfiles;
function HotelReservationTypeReservationProfilesFromJSON(json) {
    return HotelReservationTypeReservationProfilesFromJSONTyped(json, false);
}
exports.HotelReservationTypeReservationProfilesFromJSON = HotelReservationTypeReservationProfilesFromJSON;
function HotelReservationTypeReservationProfilesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'commissionPayoutTo': !(0, runtime_1.exists)(json, 'commissionPayoutTo') ? undefined : (0, CommissionPayoutToType_1.CommissionPayoutToTypeFromJSON)(json['commissionPayoutTo']),
        'reservationProfile': !(0, runtime_1.exists)(json, 'reservationProfile') ? undefined : (json['reservationProfile'].map(ReservationProfileType_1.ReservationProfileTypeFromJSON)),
    };
}
exports.HotelReservationTypeReservationProfilesFromJSONTyped = HotelReservationTypeReservationProfilesFromJSONTyped;
function HotelReservationTypeReservationProfilesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'commissionPayoutTo': (0, CommissionPayoutToType_1.CommissionPayoutToTypeToJSON)(value.commissionPayoutTo),
        'reservationProfile': value.reservationProfile === undefined ? undefined : (value.reservationProfile.map(ReservationProfileType_1.ReservationProfileTypeToJSON)),
    };
}
exports.HotelReservationTypeReservationProfilesToJSON = HotelReservationTypeReservationProfilesToJSON;
