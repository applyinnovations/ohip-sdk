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
exports.ReservationRateSummaryDetailTypeToJSON = exports.ReservationRateSummaryDetailTypeFromJSONTyped = exports.ReservationRateSummaryDetailTypeFromJSON = exports.instanceOfReservationRateSummaryDetailType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ReservationRateSummaryDetailType interface.
 */
function instanceOfReservationRateSummaryDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationRateSummaryDetailType = instanceOfReservationRateSummaryDetailType;
function ReservationRateSummaryDetailTypeFromJSON(json) {
    return ReservationRateSummaryDetailTypeFromJSONTyped(json, false);
}
exports.ReservationRateSummaryDetailTypeFromJSON = ReservationRateSummaryDetailTypeFromJSON;
function ReservationRateSummaryDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'gross': !(0, runtime_1.exists)(json, 'gross') ? undefined : json['gross'],
        'net': !(0, runtime_1.exists)(json, 'net') ? undefined : json['net'],
        '_package': !(0, runtime_1.exists)(json, 'package') ? undefined : json['package'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'rateSuppressed': !(0, runtime_1.exists)(json, 'rateSuppressed') ? undefined : json['rateSuppressed'],
        'revenue': !(0, runtime_1.exists)(json, 'revenue') ? undefined : json['revenue'],
        'revenueSimulationDate': !(0, runtime_1.exists)(json, 'revenueSimulationDate') ? undefined : json['revenueSimulationDate'],
        'summaryDate': !(0, runtime_1.exists)(json, 'summaryDate') ? undefined : json['summaryDate'],
        'tax': !(0, runtime_1.exists)(json, 'tax') ? undefined : json['tax'],
    };
}
exports.ReservationRateSummaryDetailTypeFromJSONTyped = ReservationRateSummaryDetailTypeFromJSONTyped;
function ReservationRateSummaryDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'gross': value.gross,
        'net': value.net,
        'package': value._package,
        'ratePlanCode': value.ratePlanCode,
        'rateSuppressed': value.rateSuppressed,
        'revenue': value.revenue,
        'revenueSimulationDate': value.revenueSimulationDate,
        'summaryDate': value.summaryDate,
        'tax': value.tax,
    };
}
exports.ReservationRateSummaryDetailTypeToJSON = ReservationRateSummaryDetailTypeToJSON;
