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
exports.AwardTypeToJSON = exports.AwardTypeFromJSONTyped = exports.AwardTypeFromJSON = exports.instanceOfAwardType = void 0;
const runtime_1 = require("../runtime");
const AwardKindType_1 = require("./AwardKindType");
const AwardStatusType_1 = require("./AwardStatusType");
const ProfileId_1 = require("./ProfileId");
const ReservationCertificateType_1 = require("./ReservationCertificateType");
const ReservationId_1 = require("./ReservationId");
const RewardCertificateType_1 = require("./RewardCertificateType");
/**
 * Check if a given object implements the AwardType interface.
 */
function instanceOfAwardType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAwardType = instanceOfAwardType;
function AwardTypeFromJSON(json) {
    return AwardTypeFromJSONTyped(json, false);
}
exports.AwardTypeFromJSON = AwardTypeFromJSON;
function AwardTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'awardType': !(0, runtime_1.exists)(json, 'awardType') ? undefined : (0, AwardKindType_1.AwardKindTypeFromJSON)(json['awardType']),
        'categoryValid': !(0, runtime_1.exists)(json, 'categoryValid') ? undefined : json['categoryValid'],
        'certificateNo': !(0, runtime_1.exists)(json, 'certificateNo') ? undefined : json['certificateNo'],
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'detailedCertificate': !(0, runtime_1.exists)(json, 'detailedCertificate') ? undefined : json['detailedCertificate'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'expirationDate': !(0, runtime_1.exists)(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'externalConfirmationNo': !(0, runtime_1.exists)(json, 'externalConfirmationNo') ? undefined : json['externalConfirmationNo'],
        'externalHotelCode': !(0, runtime_1.exists)(json, 'externalHotelCode') ? undefined : json['externalHotelCode'],
        'gift': !(0, runtime_1.exists)(json, 'gift') ? undefined : json['gift'],
        'hotelCategory': !(0, runtime_1.exists)(json, 'hotelCategory') ? undefined : json['hotelCategory'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'instantlyRedeemable': !(0, runtime_1.exists)(json, 'instantlyRedeemable') ? undefined : json['instantlyRedeemable'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'membershipNo': !(0, runtime_1.exists)(json, 'membershipNo') ? undefined : json['membershipNo'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        '_package': !(0, runtime_1.exists)(json, 'package') ? undefined : json['package'],
        'paidUpgrade': !(0, runtime_1.exists)(json, 'paidUpgrade') ? undefined : json['paidUpgrade'],
        'points': !(0, runtime_1.exists)(json, 'points') ? undefined : json['points'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'reservationCertificateType': !(0, runtime_1.exists)(json, 'reservationCertificateType') ? undefined : (0, ReservationCertificateType_1.ReservationCertificateTypeFromJSON)(json['reservationCertificateType']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'rewardCertificateType': !(0, runtime_1.exists)(json, 'rewardCertificateType') ? undefined : (0, RewardCertificateType_1.RewardCertificateTypeFromJSON)(json['rewardCertificateType']),
        'sourceType': !(0, runtime_1.exists)(json, 'sourceType') ? undefined : json['sourceType'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, AwardStatusType_1.AwardStatusTypeFromJSON)(json['status']),
        'upgrade': !(0, runtime_1.exists)(json, 'upgrade') ? undefined : json['upgrade'],
    };
}
exports.AwardTypeFromJSONTyped = AwardTypeFromJSONTyped;
function AwardTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardCode': value.awardCode,
        'awardType': (0, AwardKindType_1.AwardKindTypeToJSON)(value.awardType),
        'categoryValid': value.categoryValid,
        'certificateNo': value.certificateNo,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'description': value.description,
        'detailedCertificate': value.detailedCertificate,
        'displaySequence': value.displaySequence,
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString().substr(0, 10)),
        'externalConfirmationNo': value.externalConfirmationNo,
        'externalHotelCode': value.externalHotelCode,
        'gift': value.gift,
        'hotelCategory': value.hotelCategory,
        'hotelId': value.hotelId,
        'instantlyRedeemable': value.instantlyRedeemable,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'membershipNo': value.membershipNo,
        'nights': value.nights,
        'package': value._package,
        'paidUpgrade': value.paidUpgrade,
        'points': value.points,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substr(0, 10)),
        'quantity': value.quantity,
        'reservationCertificateType': (0, ReservationCertificateType_1.ReservationCertificateTypeToJSON)(value.reservationCertificateType),
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'rewardCertificateType': (0, RewardCertificateType_1.RewardCertificateTypeToJSON)(value.rewardCertificateType),
        'sourceType': value.sourceType,
        'status': (0, AwardStatusType_1.AwardStatusTypeToJSON)(value.status),
        'upgrade': value.upgrade,
    };
}
exports.AwardTypeToJSON = AwardTypeToJSON;
