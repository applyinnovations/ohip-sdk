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
exports.RoomRateTypeToJSON = exports.RoomRateTypeFromJSONTyped = exports.RoomRateTypeFromJSON = exports.instanceOfRoomRateType = void 0;
const runtime_1 = require("../runtime");
const GuestCountsType_1 = require("./GuestCountsType");
const PackageElementType_1 = require("./PackageElementType");
const PointsType_1 = require("./PointsType");
const RatesType_1 = require("./RatesType");
const ResAwardsType_1 = require("./ResAwardsType");
const ReservationBlockType_1 = require("./ReservationBlockType");
const ReservationProfileType_1 = require("./ReservationProfileType");
const TotalType_1 = require("./TotalType");
/**
 * Check if a given object implements the RoomRateType interface.
 */
function instanceOfRoomRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRoomRateType = instanceOfRoomRateType;
function RoomRateTypeFromJSON(json) {
    return RoomRateTypeFromJSONTyped(json, false);
}
exports.RoomRateTypeFromJSON = RoomRateTypeFromJSON;
function RoomRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowAutoCheckIn': !(0, runtime_1.exists)(json, 'allowAutoCheckIn') ? undefined : json['allowAutoCheckIn'],
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'awardNumber': !(0, runtime_1.exists)(json, 'awardNumber') ? undefined : json['awardNumber'],
        'awards': !(0, runtime_1.exists)(json, 'awards') ? undefined : (0, ResAwardsType_1.ResAwardsTypeFromJSON)(json['awards']),
        'barRanking': !(0, runtime_1.exists)(json, 'barRanking') ? undefined : json['barRanking'],
        'bogoDiscount': !(0, runtime_1.exists)(json, 'bogoDiscount') ? undefined : json['bogoDiscount'],
        'commissionAmount': !(0, runtime_1.exists)(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : json['commissionCode'],
        'commissionPercentage': !(0, runtime_1.exists)(json, 'commissionPercentage') ? undefined : json['commissionPercentage'],
        'commissionable': !(0, runtime_1.exists)(json, 'commissionable') ? undefined : json['commissionable'],
        'complimentary': !(0, runtime_1.exists)(json, 'complimentary') ? undefined : json['complimentary'],
        'discountAllowed': !(0, runtime_1.exists)(json, 'discountAllowed') ? undefined : json['discountAllowed'],
        'eligibilityCode': !(0, runtime_1.exists)(json, 'eligibilityCode') ? undefined : json['eligibilityCode'],
        'end': !(0, runtime_1.exists)(json, 'end') ? undefined : (new Date(json['end'])),
        'fixedRate': !(0, runtime_1.exists)(json, 'fixedRate') ? undefined : json['fixedRate'],
        'guestCounts': !(0, runtime_1.exists)(json, 'guestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['guestCounts']),
        'houseUseOnly': !(0, runtime_1.exists)(json, 'houseUseOnly') ? undefined : json['houseUseOnly'],
        'inventoryLender': !(0, runtime_1.exists)(json, 'inventoryLender') ? undefined : json['inventoryLender'],
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'marketCodeDescription': !(0, runtime_1.exists)(json, 'marketCodeDescription') ? undefined : json['marketCodeDescription'],
        'numberOfUnits': !(0, runtime_1.exists)(json, 'numberOfUnits') ? undefined : json['numberOfUnits'],
        'packages': !(0, runtime_1.exists)(json, 'packages') ? undefined : (json['packages'].map(PackageElementType_1.PackageElementTypeFromJSON)),
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'pseudoRoom': !(0, runtime_1.exists)(json, 'pseudoRoom') ? undefined : json['pseudoRoom'],
        'rateGroup': !(0, runtime_1.exists)(json, 'rateGroup') ? undefined : json['rateGroup'],
        'rateLevel': !(0, runtime_1.exists)(json, 'rateLevel') ? undefined : json['rateLevel'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'rates': !(0, runtime_1.exists)(json, 'rates') ? undefined : (0, RatesType_1.RatesTypeFromJSON)(json['rates']),
        'reservationBlock': !(0, runtime_1.exists)(json, 'reservationBlock') ? undefined : (0, ReservationBlockType_1.ReservationBlockTypeFromJSON)(json['reservationBlock']),
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomRateInfo': !(0, runtime_1.exists)(json, 'roomRateInfo') ? undefined : json['roomRateInfo'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeCharged': !(0, runtime_1.exists)(json, 'roomTypeCharged') ? undefined : json['roomTypeCharged'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceCodeDescription': !(0, runtime_1.exists)(json, 'sourceCodeDescription') ? undefined : json['sourceCodeDescription'],
        'start': !(0, runtime_1.exists)(json, 'start') ? undefined : (new Date(json['start'])),
        'stayProfiles': !(0, runtime_1.exists)(json, 'stayProfiles') ? undefined : (json['stayProfiles'].map(ReservationProfileType_1.ReservationProfileTypeFromJSON)),
        'suppressRate': !(0, runtime_1.exists)(json, 'suppressRate') ? undefined : json['suppressRate'],
        'taxFreeGuestCounts': !(0, runtime_1.exists)(json, 'taxFreeGuestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['taxFreeGuestCounts']),
        'taxIncluded': !(0, runtime_1.exists)(json, 'taxIncluded') ? undefined : json['taxIncluded'],
        'total': !(0, runtime_1.exists)(json, 'total') ? undefined : (0, TotalType_1.TotalTypeFromJSON)(json['total']),
        'totalPoints': !(0, runtime_1.exists)(json, 'totalPoints') ? undefined : (0, PointsType_1.PointsTypeFromJSON)(json['totalPoints']),
    };
}
exports.RoomRateTypeFromJSONTyped = RoomRateTypeFromJSONTyped;
function RoomRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowAutoCheckIn': value.allowAutoCheckIn,
        'awardCode': value.awardCode,
        'awardNumber': value.awardNumber,
        'awards': (0, ResAwardsType_1.ResAwardsTypeToJSON)(value.awards),
        'barRanking': value.barRanking,
        'bogoDiscount': value.bogoDiscount,
        'commissionAmount': value.commissionAmount,
        'commissionCode': value.commissionCode,
        'commissionPercentage': value.commissionPercentage,
        'commissionable': value.commissionable,
        'complimentary': value.complimentary,
        'discountAllowed': value.discountAllowed,
        'eligibilityCode': value.eligibilityCode,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substr(0, 10)),
        'fixedRate': value.fixedRate,
        'guestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.guestCounts),
        'houseUseOnly': value.houseUseOnly,
        'inventoryLender': value.inventoryLender,
        'marketCode': value.marketCode,
        'marketCodeDescription': value.marketCodeDescription,
        'numberOfUnits': value.numberOfUnits,
        'packages': value.packages === undefined ? undefined : (value.packages.map(PackageElementType_1.PackageElementTypeToJSON)),
        'promotionCode': value.promotionCode,
        'pseudoRoom': value.pseudoRoom,
        'rateGroup': value.rateGroup,
        'rateLevel': value.rateLevel,
        'ratePlanCode': value.ratePlanCode,
        'rates': (0, RatesType_1.RatesTypeToJSON)(value.rates),
        'reservationBlock': (0, ReservationBlockType_1.ReservationBlockTypeToJSON)(value.reservationBlock),
        'roomId': value.roomId,
        'roomRateInfo': value.roomRateInfo,
        'roomType': value.roomType,
        'roomTypeCharged': value.roomTypeCharged,
        'sourceCode': value.sourceCode,
        'sourceCodeDescription': value.sourceCodeDescription,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substr(0, 10)),
        'stayProfiles': value.stayProfiles === undefined ? undefined : (value.stayProfiles.map(ReservationProfileType_1.ReservationProfileTypeToJSON)),
        'suppressRate': value.suppressRate,
        'taxFreeGuestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.taxFreeGuestCounts),
        'taxIncluded': value.taxIncluded,
        'total': (0, TotalType_1.TotalTypeToJSON)(value.total),
        'totalPoints': (0, PointsType_1.PointsTypeToJSON)(value.totalPoints),
    };
}
exports.RoomRateTypeToJSON = RoomRateTypeToJSON;
