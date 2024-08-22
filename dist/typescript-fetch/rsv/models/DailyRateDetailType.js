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
exports.DailyRateDetailTypeToJSON = exports.DailyRateDetailTypeFromJSONTyped = exports.DailyRateDetailTypeFromJSON = exports.instanceOfDailyRateDetailType = void 0;
const runtime_1 = require("../runtime");
const AmountType_1 = require("./AmountType");
const GuestCountsType_1 = require("./GuestCountsType");
const PromotionType_1 = require("./PromotionType");
/**
 * Check if a given object implements the DailyRateDetailType interface.
 */
function instanceOfDailyRateDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDailyRateDetailType = instanceOfDailyRateDetailType;
function DailyRateDetailTypeFromJSON(json) {
    return DailyRateDetailTypeFromJSONTyped(json, false);
}
exports.DailyRateDetailTypeFromJSON = DailyRateDetailTypeFromJSON;
function DailyRateDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'changeAllSharers': !(0, runtime_1.exists)(json, 'changeAllSharers') ? undefined : json['changeAllSharers'],
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : json['commissionCode'],
        'discountAllowed': !(0, runtime_1.exists)(json, 'discountAllowed') ? undefined : json['discountAllowed'],
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : json['endDate'],
        'fixedRate': !(0, runtime_1.exists)(json, 'fixedRate') ? undefined : json['fixedRate'],
        'guestCounts': !(0, runtime_1.exists)(json, 'guestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['guestCounts']),
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'promotions': !(0, runtime_1.exists)(json, 'promotions') ? undefined : (json['promotions'].map(PromotionType_1.PromotionTypeFromJSON)),
        'rate': !(0, runtime_1.exists)(json, 'rate') ? undefined : (0, AmountType_1.AmountTypeFromJSON)(json['rate']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeToCharge': !(0, runtime_1.exists)(json, 'roomTypeToCharge') ? undefined : json['roomTypeToCharge'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : json['startDate'],
    };
}
exports.DailyRateDetailTypeFromJSONTyped = DailyRateDetailTypeFromJSONTyped;
function DailyRateDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'changeAllSharers': value.changeAllSharers,
        'commissionCode': value.commissionCode,
        'discountAllowed': value.discountAllowed,
        'endDate': value.endDate,
        'fixedRate': value.fixedRate,
        'guestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.guestCounts),
        'marketCode': value.marketCode,
        'promotions': value.promotions === undefined ? undefined : (value.promotions.map(PromotionType_1.PromotionTypeToJSON)),
        'rate': (0, AmountType_1.AmountTypeToJSON)(value.rate),
        'ratePlanCode': value.ratePlanCode,
        'roomId': value.roomId,
        'roomType': value.roomType,
        'roomTypeToCharge': value.roomTypeToCharge,
        'sourceCode': value.sourceCode,
        'startDate': value.startDate,
    };
}
exports.DailyRateDetailTypeToJSON = DailyRateDetailTypeToJSON;
