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
exports.CombineShareFromProfileTypeToJSON = exports.CombineShareFromProfileTypeFromJSONTyped = exports.CombineShareFromProfileTypeFromJSON = exports.instanceOfCombineShareFromProfileType = void 0;
const runtime_1 = require("../runtime");
const CopyReservationPaymentMethodsType_1 = require("./CopyReservationPaymentMethodsType");
const DailyRatesType_1 = require("./DailyRatesType");
const GuestCountsType_1 = require("./GuestCountsType");
const ResGuaranteeType_1 = require("./ResGuaranteeType");
const ReservationPaymentMethodType_1 = require("./ReservationPaymentMethodType");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CombineShareFromProfileType interface.
 */
function instanceOfCombineShareFromProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCombineShareFromProfileType = instanceOfCombineShareFromProfileType;
function CombineShareFromProfileTypeFromJSON(json) {
    return CombineShareFromProfileTypeFromJSONTyped(json, false);
}
exports.CombineShareFromProfileTypeFromJSON = CombineShareFromProfileTypeFromJSON;
function CombineShareFromProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dailyRates': !(0, runtime_1.exists)(json, 'dailyRates') ? undefined : (0, DailyRatesType_1.DailyRatesTypeFromJSON)(json['dailyRates']),
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, ResGuaranteeType_1.ResGuaranteeTypeFromJSON)(json['guarantee']),
        'guestCounts': !(0, runtime_1.exists)(json, 'guestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['guestCounts']),
        'newSharerId': !(0, runtime_1.exists)(json, 'newSharerId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['newSharerId']),
        'reservationPaymentMethod': !(0, runtime_1.exists)(json, 'reservationPaymentMethod') ? undefined : (0, ReservationPaymentMethodType_1.ReservationPaymentMethodTypeFromJSON)(json['reservationPaymentMethod']),
        'reservationPaymentMethods': !(0, runtime_1.exists)(json, 'reservationPaymentMethods') ? undefined : (0, CopyReservationPaymentMethodsType_1.CopyReservationPaymentMethodsTypeFromJSON)(json['reservationPaymentMethods']),
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
    };
}
exports.CombineShareFromProfileTypeFromJSONTyped = CombineShareFromProfileTypeFromJSONTyped;
function CombineShareFromProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dailyRates': (0, DailyRatesType_1.DailyRatesTypeToJSON)(value.dailyRates),
        'guarantee': (0, ResGuaranteeType_1.ResGuaranteeTypeToJSON)(value.guarantee),
        'guestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.guestCounts),
        'newSharerId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.newSharerId),
        'reservationPaymentMethod': (0, ReservationPaymentMethodType_1.ReservationPaymentMethodTypeToJSON)(value.reservationPaymentMethod),
        'reservationPaymentMethods': (0, CopyReservationPaymentMethodsType_1.CopyReservationPaymentMethodsTypeToJSON)(value.reservationPaymentMethods),
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
    };
}
exports.CombineShareFromProfileTypeToJSON = CombineShareFromProfileTypeToJSON;
