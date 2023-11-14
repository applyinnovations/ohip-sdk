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
exports.AwardUpgradeInfoTypeToJSON = exports.AwardUpgradeInfoTypeFromJSONTyped = exports.AwardUpgradeInfoTypeFromJSON = exports.instanceOfAwardUpgradeInfoType = void 0;
const runtime_1 = require("../runtime");
const AwardUpgradeSummariesType_1 = require("./AwardUpgradeSummariesType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the AwardUpgradeInfoType interface.
 */
function instanceOfAwardUpgradeInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAwardUpgradeInfoType = instanceOfAwardUpgradeInfoType;
function AwardUpgradeInfoTypeFromJSON(json) {
    return AwardUpgradeInfoTypeFromJSONTyped(json, false);
}
exports.AwardUpgradeInfoTypeFromJSON = AwardUpgradeInfoTypeFromJSON;
function AwardUpgradeInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardUpgradeSummaries': !(0, runtime_1.exists)(json, 'awardUpgradeSummaries') ? undefined : (0, AwardUpgradeSummariesType_1.AwardUpgradeSummariesTypeFromJSON)(json['awardUpgradeSummaries']),
        'fromRoomType': !(0, runtime_1.exists)(json, 'fromRoomType') ? undefined : json['fromRoomType'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'membershipCardNo': !(0, runtime_1.exists)(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipPoints': !(0, runtime_1.exists)(json, 'membershipPoints') ? undefined : json['membershipPoints'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'reservationTimeSpan': !(0, runtime_1.exists)(json, 'reservationTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['reservationTimeSpan']),
    };
}
exports.AwardUpgradeInfoTypeFromJSONTyped = AwardUpgradeInfoTypeFromJSONTyped;
function AwardUpgradeInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardUpgradeSummaries': (0, AwardUpgradeSummariesType_1.AwardUpgradeSummariesTypeToJSON)(value.awardUpgradeSummaries),
        'fromRoomType': value.fromRoomType,
        'hotelId': value.hotelId,
        'membershipCardNo': value.membershipCardNo,
        'membershipLevel': value.membershipLevel,
        'membershipPoints': value.membershipPoints,
        'membershipType': value.membershipType,
        'reservationTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.reservationTimeSpan),
    };
}
exports.AwardUpgradeInfoTypeToJSON = AwardUpgradeInfoTypeToJSON;