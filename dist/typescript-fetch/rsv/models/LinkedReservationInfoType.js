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
exports.LinkedReservationInfoTypeToJSON = exports.LinkedReservationInfoTypeFromJSONTyped = exports.LinkedReservationInfoTypeFromJSON = exports.instanceOfLinkedReservationInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const LinkedReservationType_1 = require("./LinkedReservationType");
const PMSResStatusType_1 = require("./PMSResStatusType");
const ResGuaranteeType_1 = require("./ResGuaranteeType");
const ReservationAllowedActionsType_1 = require("./ReservationAllowedActionsType");
const ReservationBlockType_1 = require("./ReservationBlockType");
const ReservationIdList_1 = require("./ReservationIdList");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the LinkedReservationInfoType interface.
 */
function instanceOfLinkedReservationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLinkedReservationInfoType = instanceOfLinkedReservationInfoType;
function LinkedReservationInfoTypeFromJSON(json) {
    return LinkedReservationInfoTypeFromJSONTyped(json, false);
}
exports.LinkedReservationInfoTypeFromJSON = LinkedReservationInfoTypeFromJSON;
function LinkedReservationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowedActions': !(0, runtime_1.exists)(json, 'allowedActions') ? undefined : (0, ReservationAllowedActionsType_1.ReservationAllowedActionsTypeFromJSON)(json['allowedActions']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'displayColor': !(0, runtime_1.exists)(json, 'displayColor') ? undefined : json['displayColor'],
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
        'guarantee': !(0, runtime_1.exists)(json, 'guarantee') ? undefined : (0, ResGuaranteeType_1.ResGuaranteeTypeFromJSON)(json['guarantee']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'linkReservationType': !(0, runtime_1.exists)(json, 'linkReservationType') ? undefined : (0, LinkedReservationType_1.LinkedReservationTypeFromJSON)(json['linkReservationType']),
        'rate': !(0, runtime_1.exists)(json, 'rate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['rate']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationBlock': !(0, runtime_1.exists)(json, 'reservationBlock') ? undefined : (0, ReservationBlockType_1.ReservationBlockTypeFromJSON)(json['reservationBlock']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (0, ReservationIdList_1.ReservationIdListFromJSON)(json['reservationIdList']),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : (0, PMSResStatusType_1.PMSResStatusTypeFromJSON)(json['reservationStatus']),
        'reverseCheckInAllowed': !(0, runtime_1.exists)(json, 'reverseCheckInAllowed') ? undefined : json['reverseCheckInAllowed'],
        'room': !(0, runtime_1.exists)(json, 'room') ? undefined : json['room'],
        'roomNumberLocked': !(0, runtime_1.exists)(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'suppressRate': !(0, runtime_1.exists)(json, 'suppressRate') ? undefined : json['suppressRate'],
        'surname': !(0, runtime_1.exists)(json, 'surname') ? undefined : json['surname'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
        'title': !(0, runtime_1.exists)(json, 'title') ? undefined : json['title'],
    };
}
exports.LinkedReservationInfoTypeFromJSONTyped = LinkedReservationInfoTypeFromJSONTyped;
function LinkedReservationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowedActions': (0, ReservationAllowedActionsType_1.ReservationAllowedActionsTypeToJSON)(value.allowedActions),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'displayColor': value.displayColor,
        'givenName': value.givenName,
        'guarantee': (0, ResGuaranteeType_1.ResGuaranteeTypeToJSON)(value.guarantee),
        'hotelId': value.hotelId,
        'linkReservationType': (0, LinkedReservationType_1.LinkedReservationTypeToJSON)(value.linkReservationType),
        'rate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.rate),
        'ratePlanCode': value.ratePlanCode,
        'reservationBlock': (0, ReservationBlockType_1.ReservationBlockTypeToJSON)(value.reservationBlock),
        'reservationIdList': (0, ReservationIdList_1.ReservationIdListToJSON)(value.reservationIdList),
        'reservationStatus': (0, PMSResStatusType_1.PMSResStatusTypeToJSON)(value.reservationStatus),
        'reverseCheckInAllowed': value.reverseCheckInAllowed,
        'room': value.room,
        'roomNumberLocked': value.roomNumberLocked,
        'roomType': value.roomType,
        'suppressRate': value.suppressRate,
        'surname': value.surname,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
        'title': value.title,
    };
}
exports.LinkedReservationInfoTypeToJSON = LinkedReservationInfoTypeToJSON;
