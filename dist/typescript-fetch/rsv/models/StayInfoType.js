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
exports.StayInfoTypeToJSON = exports.StayInfoTypeFromJSONTyped = exports.StayInfoTypeFromJSON = exports.instanceOfStayInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const GuestHousekeepingServiceRequestType_1 = require("./GuestHousekeepingServiceRequestType");
const PointsType_1 = require("./PointsType");
const PromotionType_1 = require("./PromotionType");
const ResExpectedTimesType_1 = require("./ResExpectedTimesType");
const ResGuaranteeType_1 = require("./ResGuaranteeType");
const ReservationBlockType_1 = require("./ReservationBlockType");
const ReservationRoomOwnershipType_1 = require("./ReservationRoomOwnershipType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the StayInfoType interface.
 */
function instanceOfStayInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStayInfoType = instanceOfStayInfoType;
function StayInfoTypeFromJSON(json) {
    return StayInfoTypeFromJSONTyped(json, false);
}
exports.StayInfoTypeFromJSON = StayInfoTypeFromJSON;
function StayInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adultCount': !(0, runtime_1.exists)(json, 'adultCount') ? undefined : json['adultCount'],
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'assignedByAI': !(0, runtime_1.exists)(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'bookingChannelCode': !(0, runtime_1.exists)(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'childCount': !(0, runtime_1.exists)(json, 'childCount') ? undefined : json['childCount'],
        'compBalance': !(0, runtime_1.exists)(json, 'compBalance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['compBalance']),
        'departureDate': !(0, runtime_1.exists)(json, 'departureDate') ? undefined : json['departureDate'],
        'depositPayments': !(0, runtime_1.exists)(json, 'depositPayments') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['depositPayments']),
        'expectedTimes': !(0, runtime_1.exists)(json, 'expectedTimes') ? undefined : (0, ResExpectedTimesType_1.ResExpectedTimesTypeFromJSON)(json['expectedTimes']),
        'fixedRate': !(0, runtime_1.exists)(json, 'fixedRate') ? undefined : json['fixedRate'],
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, ResGuaranteeType_1.ResGuaranteeTypeFromJSON)(json['guarantee']),
        'guestServiceStatus': !(0, runtime_1.exists)(json, 'guestServiceStatus') ? undefined : (0, GuestHousekeepingServiceRequestType_1.GuestHousekeepingServiceRequestTypeFromJSON)(json['guestServiceStatus']),
        'linkCode': !(0, runtime_1.exists)(json, 'linkCode') ? undefined : json['linkCode'],
        'marketCode': !(0, runtime_1.exists)(json, 'marketCode') ? undefined : json['marketCode'],
        'numberOfRooms': !(0, runtime_1.exists)(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'originalTimeSpan': !(0, runtime_1.exists)(json, 'originalTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['originalTimeSpan']),
        'points': !(0, runtime_1.exists)(json, 'points') ? undefined : (0, PointsType_1.PointsTypeFromJSON)(json['points']),
        'promotion': !(0, runtime_1.exists)(json, 'promotion') ? undefined : (0, PromotionType_1.PromotionTypeFromJSON)(json['promotion']),
        'pseudoRoom': !(0, runtime_1.exists)(json, 'pseudoRoom') ? undefined : json['pseudoRoom'],
        'rateAmount': !(0, runtime_1.exists)(json, 'rateAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['rateAmount']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'rateSuppressed': !(0, runtime_1.exists)(json, 'rateSuppressed') ? undefined : json['rateSuppressed'],
        'reservationBlock': !(0, runtime_1.exists)(json, 'reservationBlock') ? undefined : (0, ReservationBlockType_1.ReservationBlockTypeFromJSON)(json['reservationBlock']),
        'roomAvailableNights': !(0, runtime_1.exists)(json, 'roomAvailableNights') ? undefined : json['roomAvailableNights'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : json['roomClass'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomNumberLocked': !(0, runtime_1.exists)(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomOwnershipType': !(0, runtime_1.exists)(json, 'roomOwnershipType') ? undefined : (0, ReservationRoomOwnershipType_1.ReservationRoomOwnershipTypeFromJSON)(json['roomOwnershipType']),
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeCharged': !(0, runtime_1.exists)(json, 'roomTypeCharged') ? undefined : json['roomTypeCharged'],
        'scheduledCheckoutTime': !(0, runtime_1.exists)(json, 'scheduledCheckoutTime') ? undefined : json['scheduledCheckoutTime'],
        'sourceCode': !(0, runtime_1.exists)(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceCodeDescription': !(0, runtime_1.exists)(json, 'sourceCodeDescription') ? undefined : json['sourceCodeDescription'],
        'totalAmount': !(0, runtime_1.exists)(json, 'totalAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalAmount']),
        'upgradedByAI': !(0, runtime_1.exists)(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
    };
}
exports.StayInfoTypeFromJSONTyped = StayInfoTypeFromJSONTyped;
function StayInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adultCount': value.adultCount,
        'arrivalDate': value.arrivalDate,
        'assignedByAI': value.assignedByAI,
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'bookingChannelCode': value.bookingChannelCode,
        'childCount': value.childCount,
        'compBalance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.compBalance),
        'departureDate': value.departureDate,
        'depositPayments': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.depositPayments),
        'expectedTimes': (0, ResExpectedTimesType_1.ResExpectedTimesTypeToJSON)(value.expectedTimes),
        'fixedRate': value.fixedRate,
        'guarantee': (0, ResGuaranteeType_1.ResGuaranteeTypeToJSON)(value.guarantee),
        'guestServiceStatus': (0, GuestHousekeepingServiceRequestType_1.GuestHousekeepingServiceRequestTypeToJSON)(value.guestServiceStatus),
        'linkCode': value.linkCode,
        'marketCode': value.marketCode,
        'numberOfRooms': value.numberOfRooms,
        'originalTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.originalTimeSpan),
        'points': (0, PointsType_1.PointsTypeToJSON)(value.points),
        'promotion': (0, PromotionType_1.PromotionTypeToJSON)(value.promotion),
        'pseudoRoom': value.pseudoRoom,
        'rateAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.rateAmount),
        'ratePlanCode': value.ratePlanCode,
        'rateSuppressed': value.rateSuppressed,
        'reservationBlock': (0, ReservationBlockType_1.ReservationBlockTypeToJSON)(value.reservationBlock),
        'roomAvailableNights': value.roomAvailableNights,
        'roomClass': value.roomClass,
        'roomId': value.roomId,
        'roomNumberLocked': value.roomNumberLocked,
        'roomOwnershipType': (0, ReservationRoomOwnershipType_1.ReservationRoomOwnershipTypeToJSON)(value.roomOwnershipType),
        'roomType': value.roomType,
        'roomTypeCharged': value.roomTypeCharged,
        'scheduledCheckoutTime': value.scheduledCheckoutTime,
        'sourceCode': value.sourceCode,
        'sourceCodeDescription': value.sourceCodeDescription,
        'totalAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalAmount),
        'upgradedByAI': value.upgradedByAI,
    };
}
exports.StayInfoTypeToJSON = StayInfoTypeToJSON;
