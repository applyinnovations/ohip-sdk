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
exports.DepositCancelConfigCriteriaTypeToJSON = exports.DepositCancelConfigCriteriaTypeFromJSONTyped = exports.DepositCancelConfigCriteriaTypeFromJSON = exports.instanceOfDepositCancelConfigCriteriaType = void 0;
const runtime_1 = require("../runtime");
const DepositCancelRevenueType_1 = require("./DepositCancelRevenueType");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the DepositCancelConfigCriteriaType interface.
 */
function instanceOfDepositCancelConfigCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDepositCancelConfigCriteriaType = instanceOfDepositCancelConfigCriteriaType;
function DepositCancelConfigCriteriaTypeFromJSON(json) {
    return DepositCancelConfigCriteriaTypeFromJSONTyped(json, false);
}
exports.DepositCancelConfigCriteriaTypeFromJSON = DepositCancelConfigCriteriaTypeFromJSON;
function DepositCancelConfigCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : json['amount'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'policyCode': !(0, runtime_1.exists)(json, 'policyCode') ? undefined : json['policyCode'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'revenueType': !(0, runtime_1.exists)(json, 'revenueType') ? undefined : (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeFromJSON)(json['revenueType']),
    };
}
exports.DepositCancelConfigCriteriaTypeFromJSONTyped = DepositCancelConfigCriteriaTypeFromJSONTyped;
function DepositCancelConfigCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amount': value.amount,
        'currencyCode': value.currencyCode,
        'hotelId': value.hotelId,
        'percentage': value.percentage,
        'policyCode': value.policyCode,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'revenueType': (0, DepositCancelRevenueType_1.DepositCancelRevenueTypeToJSON)(value.revenueType),
    };
}
exports.DepositCancelConfigCriteriaTypeToJSON = DepositCancelConfigCriteriaTypeToJSON;
