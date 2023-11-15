"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipAwardListTypeToJSON = exports.MembershipAwardListTypeFromJSONTyped = exports.MembershipAwardListTypeFromJSON = exports.instanceOfMembershipAwardListType = void 0;
const runtime_1 = require("../runtime");
const MembershipAwardBasedOnType_1 = require("./MembershipAwardBasedOnType");
/**
 * Check if a given object implements the MembershipAwardListType interface.
 */
function instanceOfMembershipAwardListType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipAwardListType = instanceOfMembershipAwardListType;
function MembershipAwardListTypeFromJSON(json) {
    return MembershipAwardListTypeFromJSONTyped(json, false);
}
exports.MembershipAwardListTypeFromJSON = MembershipAwardListTypeFromJSON;
function MembershipAwardListTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actualCancelPoints': !(0, runtime_1.exists)(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'arrivalDate': !(0, runtime_1.exists)(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'awardBasedOn': !(0, runtime_1.exists)(json, 'awardBasedOn') ? undefined : (0, MembershipAwardBasedOnType_1.MembershipAwardBasedOnTypeFromJSON)(json['awardBasedOn']),
        'awardCancelDate': !(0, runtime_1.exists)(json, 'awardCancelDate') ? undefined : json['awardCancelDate'],
        'awardCancellationNumber': !(0, runtime_1.exists)(json, 'awardCancellationNumber') ? undefined : json['awardCancellationNumber'],
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'awardNumber': !(0, runtime_1.exists)(json, 'awardNumber') ? undefined : json['awardNumber'],
        'awardPoints': !(0, runtime_1.exists)(json, 'awardPoints') ? undefined : json['awardPoints'],
        'awardSource': !(0, runtime_1.exists)(json, 'awardSource') ? undefined : json['awardSource'],
        'bookingNumber': !(0, runtime_1.exists)(json, 'bookingNumber') ? undefined : json['bookingNumber'],
        'calculatedCancelPoints': !(0, runtime_1.exists)(json, 'calculatedCancelPoints') ? undefined : json['calculatedCancelPoints'],
        'cancelDays': !(0, runtime_1.exists)(json, 'cancelDays') ? undefined : json['cancelDays'],
        'cancelMemberStatementID': !(0, runtime_1.exists)(json, 'cancelMemberStatementID') ? undefined : json['cancelMemberStatementID'],
        'cancelPenaltyPoints': !(0, runtime_1.exists)(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'cancelPolicyType': !(0, runtime_1.exists)(json, 'cancelPolicyType') ? undefined : json['cancelPolicyType'],
        'cancelStatementID': !(0, runtime_1.exists)(json, 'cancelStatementID') ? undefined : json['cancelStatementID'],
        'crsBookNo': !(0, runtime_1.exists)(json, 'crsBookNo') ? undefined : json['crsBookNo'],
        'dateAwarded': !(0, runtime_1.exists)(json, 'dateAwarded') ? undefined : json['dateAwarded'],
        'departureDate': !(0, runtime_1.exists)(json, 'departureDate') ? undefined : json['departureDate'],
        'expireDate': !(0, runtime_1.exists)(json, 'expireDate') ? undefined : json['expireDate'],
        'hotelBookingNumber': !(0, runtime_1.exists)(json, 'hotelBookingNumber') ? undefined : json['hotelBookingNumber'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'joinDate': !(0, runtime_1.exists)(json, 'joinDate') ? undefined : json['joinDate'],
        'memberStatementId': !(0, runtime_1.exists)(json, 'memberStatementId') ? undefined : json['memberStatementId'],
        'membershipCardNo': !(0, runtime_1.exists)(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'nameOnCard': !(0, runtime_1.exists)(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'numberOfNights': !(0, runtime_1.exists)(json, 'numberOfNights') ? undefined : json['numberOfNights'],
        'pmsResvNo': !(0, runtime_1.exists)(json, 'pmsResvNo') ? undefined : json['pmsResvNo'],
        'product': !(0, runtime_1.exists)(json, 'product') ? undefined : json['product'],
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'reservationCancellationNumber': !(0, runtime_1.exists)(json, 'reservationCancellationNumber') ? undefined : json['reservationCancellationNumber'],
        'statementId': !(0, runtime_1.exists)(json, 'statementId') ? undefined : json['statementId'],
        'stayDate': !(0, runtime_1.exists)(json, 'stayDate') ? undefined : json['stayDate'],
        'thresholdPoints': !(0, runtime_1.exists)(json, 'thresholdPoints') ? undefined : json['thresholdPoints'],
        'totalAvailablePoints': !(0, runtime_1.exists)(json, 'totalAvailablePoints') ? undefined : json['totalAvailablePoints'],
    };
}
exports.MembershipAwardListTypeFromJSONTyped = MembershipAwardListTypeFromJSONTyped;
function MembershipAwardListTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actualCancelPoints': value.actualCancelPoints,
        'arrivalDate': value.arrivalDate,
        'awardBasedOn': (0, MembershipAwardBasedOnType_1.MembershipAwardBasedOnTypeToJSON)(value.awardBasedOn),
        'awardCancelDate': value.awardCancelDate,
        'awardCancellationNumber': value.awardCancellationNumber,
        'awardCode': value.awardCode,
        'awardNumber': value.awardNumber,
        'awardPoints': value.awardPoints,
        'awardSource': value.awardSource,
        'bookingNumber': value.bookingNumber,
        'calculatedCancelPoints': value.calculatedCancelPoints,
        'cancelDays': value.cancelDays,
        'cancelMemberStatementID': value.cancelMemberStatementID,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'cancelPolicyType': value.cancelPolicyType,
        'cancelStatementID': value.cancelStatementID,
        'crsBookNo': value.crsBookNo,
        'dateAwarded': value.dateAwarded,
        'departureDate': value.departureDate,
        'expireDate': value.expireDate,
        'hotelBookingNumber': value.hotelBookingNumber,
        'hotelId': value.hotelId,
        'joinDate': value.joinDate,
        'memberStatementId': value.memberStatementId,
        'membershipCardNo': value.membershipCardNo,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipType': value.membershipType,
        'nameOnCard': value.nameOnCard,
        'numberOfNights': value.numberOfNights,
        'pmsResvNo': value.pmsResvNo,
        'product': value.product,
        'ratePlanCode': value.ratePlanCode,
        'reservationCancellationNumber': value.reservationCancellationNumber,
        'statementId': value.statementId,
        'stayDate': value.stayDate,
        'thresholdPoints': value.thresholdPoints,
        'totalAvailablePoints': value.totalAvailablePoints,
    };
}
exports.MembershipAwardListTypeToJSON = MembershipAwardListTypeToJSON;
