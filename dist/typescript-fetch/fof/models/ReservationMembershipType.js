"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationMembershipTypeToJSON = exports.ReservationMembershipTypeFromJSONTyped = exports.ReservationMembershipTypeFromJSON = exports.instanceOfReservationMembershipType = void 0;
const runtime_1 = require("../runtime");
const BenefitsType_1 = require("./BenefitsType");
const CardReIssueType_1 = require("./CardReIssueType");
const DowngradeType_1 = require("./DowngradeType");
const MembershipEarningPreferenceType_1 = require("./MembershipEarningPreferenceType");
const ParagraphType_1 = require("./ParagraphType");
const TierAdministrationType_1 = require("./TierAdministrationType");
/**
 * Check if a given object implements the ReservationMembershipType interface.
 */
function instanceOfReservationMembershipType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationMembershipType = instanceOfReservationMembershipType;
function ReservationMembershipTypeFromJSON(json) {
    return ReservationMembershipTypeFromJSONTyped(json, false);
}
exports.ReservationMembershipTypeFromJSON = ReservationMembershipTypeFromJSON;
function ReservationMembershipTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'benefits': !(0, runtime_1.exists)(json, 'benefits') ? undefined : (0, BenefitsType_1.BenefitsTypeFromJSON)(json['benefits']),
        'centralSetup': !(0, runtime_1.exists)(json, 'centralSetup') ? undefined : json['centralSetup'],
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : (0, ParagraphType_1.ParagraphTypeFromJSON)(json['comment']),
        'createDateTime': !(0, runtime_1.exists)(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !(0, runtime_1.exists)(json, 'creatorId') ? undefined : json['creatorId'],
        'currentPoints': !(0, runtime_1.exists)(json, 'currentPoints') ? undefined : json['currentPoints'],
        'downgrade': !(0, runtime_1.exists)(json, 'downgrade') ? undefined : (0, DowngradeType_1.DowngradeTypeFromJSON)(json['downgrade']),
        'downgradeDescription': !(0, runtime_1.exists)(json, 'downgradeDescription') ? undefined : json['downgradeDescription'],
        'earningPreference': !(0, runtime_1.exists)(json, 'earningPreference') ? undefined : (0, MembershipEarningPreferenceType_1.MembershipEarningPreferenceTypeFromJSON)(json['earningPreference']),
        'effectiveDate': !(0, runtime_1.exists)(json, 'effectiveDate') ? undefined : (new Date(json['effectiveDate'])),
        'enrollmentResort': !(0, runtime_1.exists)(json, 'enrollmentResort') ? undefined : json['enrollmentResort'],
        'enrollmentSource': !(0, runtime_1.exists)(json, 'enrollmentSource') ? undefined : json['enrollmentSource'],
        'excludeFromBatch': !(0, runtime_1.exists)(json, 'excludeFromBatch') ? undefined : json['excludeFromBatch'],
        'expireDate': !(0, runtime_1.exists)(json, 'expireDate') ? undefined : (new Date(json['expireDate'])),
        'expireDateExclusiveIndicator': !(0, runtime_1.exists)(json, 'expireDateExclusiveIndicator') ? undefined : json['expireDateExclusiveIndicator'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'lastModifierId': !(0, runtime_1.exists)(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !(0, runtime_1.exists)(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'linkMembership': !(0, runtime_1.exists)(json, 'linkMembership') ? undefined : json['linkMembership'],
        'memberStatus': !(0, runtime_1.exists)(json, 'memberStatus') ? undefined : json['memberStatus'],
        'membershipClass': !(0, runtime_1.exists)(json, 'membershipClass') ? undefined : json['membershipClass'],
        'membershipEnrollmentCode': !(0, runtime_1.exists)(json, 'membershipEnrollmentCode') ? undefined : json['membershipEnrollmentCode'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipIdNo': !(0, runtime_1.exists)(json, 'membershipIdNo') ? undefined : json['membershipIdNo'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDescription': !(0, runtime_1.exists)(json, 'membershipLevelDescription') ? undefined : json['membershipLevelDescription'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !(0, runtime_1.exists)(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'newMembershipNumber': !(0, runtime_1.exists)(json, 'newMembershipNumber') ? undefined : json['newMembershipNumber'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'playerRanking': !(0, runtime_1.exists)(json, 'playerRanking') ? undefined : json['playerRanking'],
        'pointsLabel': !(0, runtime_1.exists)(json, 'pointsLabel') ? undefined : json['pointsLabel'],
        'preferredCard': !(0, runtime_1.exists)(json, 'preferredCard') ? undefined : json['preferredCard'],
        'primary': !(0, runtime_1.exists)(json, 'primary') ? undefined : json['primary'],
        'primaryMembership': !(0, runtime_1.exists)(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'primaryMembershipYn': !(0, runtime_1.exists)(json, 'primaryMembershipYn') ? undefined : json['primaryMembershipYn'],
        'programDescription': !(0, runtime_1.exists)(json, 'programDescription') ? undefined : json['programDescription'],
        'purgeDate': !(0, runtime_1.exists)(json, 'purgeDate') ? undefined : (new Date(json['purgeDate'])),
        'rating': !(0, runtime_1.exists)(json, 'rating') ? undefined : json['rating'],
        'reIssueNewCard': !(0, runtime_1.exists)(json, 'reIssueNewCard') ? undefined : (0, CardReIssueType_1.CardReIssueTypeFromJSON)(json['reIssueNewCard']),
        'signupDate': !(0, runtime_1.exists)(json, 'signupDate') ? undefined : (new Date(json['signupDate'])),
        'tierAdministration': !(0, runtime_1.exists)(json, 'tierAdministration') ? undefined : (0, TierAdministrationType_1.TierAdministrationTypeFromJSON)(json['tierAdministration']),
        'upgradeDescription': !(0, runtime_1.exists)(json, 'upgradeDescription') ? undefined : json['upgradeDescription'],
    };
}
exports.ReservationMembershipTypeFromJSONTyped = ReservationMembershipTypeFromJSONTyped;
function ReservationMembershipTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'benefits': (0, BenefitsType_1.BenefitsTypeToJSON)(value.benefits),
        'centralSetup': value.centralSetup,
        'comment': (0, ParagraphType_1.ParagraphTypeToJSON)(value.comment),
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'currentPoints': value.currentPoints,
        'downgrade': (0, DowngradeType_1.DowngradeTypeToJSON)(value.downgrade),
        'downgradeDescription': value.downgradeDescription,
        'earningPreference': (0, MembershipEarningPreferenceType_1.MembershipEarningPreferenceTypeToJSON)(value.earningPreference),
        'effectiveDate': value.effectiveDate === undefined ? undefined : (value.effectiveDate.toISOString().substring(0, 10)),
        'enrollmentResort': value.enrollmentResort,
        'enrollmentSource': value.enrollmentSource,
        'excludeFromBatch': value.excludeFromBatch,
        'expireDate': value.expireDate === undefined ? undefined : (value.expireDate.toISOString().substring(0, 10)),
        'expireDateExclusiveIndicator': value.expireDateExclusiveIndicator,
        'inactive': value.inactive,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'linkMembership': value.linkMembership,
        'memberStatus': value.memberStatus,
        'membershipClass': value.membershipClass,
        'membershipEnrollmentCode': value.membershipEnrollmentCode,
        'membershipId': value.membershipId,
        'membershipIdNo': value.membershipIdNo,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDescription': value.membershipLevelDescription,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'newMembershipNumber': value.newMembershipNumber,
        'orderSequence': value.orderSequence,
        'playerRanking': value.playerRanking,
        'pointsLabel': value.pointsLabel,
        'preferredCard': value.preferredCard,
        'primary': value.primary,
        'primaryMembership': value.primaryMembership,
        'primaryMembershipYn': value.primaryMembershipYn,
        'programDescription': value.programDescription,
        'purgeDate': value.purgeDate === undefined ? undefined : (value.purgeDate.toISOString().substring(0, 10)),
        'rating': value.rating,
        'reIssueNewCard': (0, CardReIssueType_1.CardReIssueTypeToJSON)(value.reIssueNewCard),
        'signupDate': value.signupDate === undefined ? undefined : (value.signupDate.toISOString().substring(0, 10)),
        'tierAdministration': (0, TierAdministrationType_1.TierAdministrationTypeToJSON)(value.tierAdministration),
        'upgradeDescription': value.upgradeDescription,
    };
}
exports.ReservationMembershipTypeToJSON = ReservationMembershipTypeToJSON;