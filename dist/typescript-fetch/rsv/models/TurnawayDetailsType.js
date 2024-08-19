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
exports.TurnawayDetailsTypeToJSON = exports.TurnawayDetailsTypeFromJSONTyped = exports.TurnawayDetailsTypeFromJSON = exports.instanceOfTurnawayDetailsType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const GuestCountsType_1 = require("./GuestCountsType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the TurnawayDetailsType interface.
 */
function instanceOfTurnawayDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTurnawayDetailsType = instanceOfTurnawayDetailsType;
function TurnawayDetailsTypeFromJSON(json) {
    return TurnawayDetailsTypeFromJSONTyped(json, false);
}
exports.TurnawayDetailsTypeFromJSON = TurnawayDetailsTypeFromJSON;
function TurnawayDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'guestCounts': !(0, runtime_1.exists)(json, 'guestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['guestCounts']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'rateAmount': !(0, runtime_1.exists)(json, 'rateAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['rateAmount']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
        'yieldMarketCode': !(0, runtime_1.exists)(json, 'yieldMarketCode') ? undefined : json['yieldMarketCode'],
    };
}
exports.TurnawayDetailsTypeFromJSONTyped = TurnawayDetailsTypeFromJSONTyped;
function TurnawayDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'guestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.guestCounts),
        'hotelId': value.hotelId,
        'marketCode': value.marketCode,
        'numberOfRooms': value.numberOfRooms,
        'rateAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.rateAmount),
        'ratePlanCode': value.ratePlanCode,
        'roomType': value.roomType,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
        'yieldMarketCode': value.yieldMarketCode,
    };
}
exports.TurnawayDetailsTypeToJSON = TurnawayDetailsTypeToJSON;
