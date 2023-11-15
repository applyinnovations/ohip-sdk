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
exports.MemberAwardDetailTypeToJSON = exports.MemberAwardDetailTypeFromJSONTyped = exports.MemberAwardDetailTypeFromJSON = exports.instanceOfMemberAwardDetailType = void 0;
const runtime_1 = require("../runtime");
const MemberAwardActionType_1 = require("./MemberAwardActionType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the MemberAwardDetailType interface.
 */
function instanceOfMemberAwardDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMemberAwardDetailType = instanceOfMemberAwardDetailType;
function MemberAwardDetailTypeFromJSON(json) {
    return MemberAwardDetailTypeFromJSONTyped(json, false);
}
exports.MemberAwardDetailTypeFromJSON = MemberAwardDetailTypeFromJSON;
function MemberAwardDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'actionType': !(0, runtime_1.exists)(json, 'actionType') ? undefined : (0, MemberAwardActionType_1.MemberAwardActionTypeFromJSON)(json['actionType']),
        'actualCancelPoints': !(0, runtime_1.exists)(json, 'actualCancelPoints') ? undefined : json['actualCancelPoints'],
        'awardBasedOn': !(0, runtime_1.exists)(json, 'awardBasedOn') ? undefined : json['awardBasedOn'],
        'awardCancellationNo': !(0, runtime_1.exists)(json, 'awardCancellationNo') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['awardCancellationNo']),
        'awardProductId': !(0, runtime_1.exists)(json, 'awardProductId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['awardProductId']),
        'awardType': !(0, runtime_1.exists)(json, 'awardType') ? undefined : json['awardType'],
        'awardVoucherNo': !(0, runtime_1.exists)(json, 'awardVoucherNo') ? undefined : json['awardVoucherNo'],
        'cancelPenaltyCharge': !(0, runtime_1.exists)(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyDays': !(0, runtime_1.exists)(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyPoints': !(0, runtime_1.exists)(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'cancelPenaltyType': !(0, runtime_1.exists)(json, 'cancelPenaltyType') ? undefined : json['cancelPenaltyType'],
        'cancelPolicyType': !(0, runtime_1.exists)(json, 'cancelPolicyType') ? undefined : json['cancelPolicyType'],
        'exchangeRateType': !(0, runtime_1.exists)(json, 'exchangeRateType') ? undefined : json['exchangeRateType'],
        'fromRoomType': !(0, runtime_1.exists)(json, 'fromRoomType') ? undefined : json['fromRoomType'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'numberOfNights': !(0, runtime_1.exists)(json, 'numberOfNights') ? undefined : json['numberOfNights'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'product': !(0, runtime_1.exists)(json, 'product') ? undefined : json['product'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'redeemedCentralAmount': !(0, runtime_1.exists)(json, 'redeemedCentralAmount') ? undefined : json['redeemedCentralAmount'],
        'redeemedLocalAmount': !(0, runtime_1.exists)(json, 'redeemedLocalAmount') ? undefined : json['redeemedLocalAmount'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'stayDate': !(0, runtime_1.exists)(json, 'stayDate') ? undefined : json['stayDate'],
        'toRoomType': !(0, runtime_1.exists)(json, 'toRoomType') ? undefined : json['toRoomType'],
        'totalCentralAmount': !(0, runtime_1.exists)(json, 'totalCentralAmount') ? undefined : json['totalCentralAmount'],
        'totalLocalAmount': !(0, runtime_1.exists)(json, 'totalLocalAmount') ? undefined : json['totalLocalAmount'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}
exports.MemberAwardDetailTypeFromJSONTyped = MemberAwardDetailTypeFromJSONTyped;
function MemberAwardDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'actionType': (0, MemberAwardActionType_1.MemberAwardActionTypeToJSON)(value.actionType),
        'actualCancelPoints': value.actualCancelPoints,
        'awardBasedOn': value.awardBasedOn,
        'awardCancellationNo': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.awardCancellationNo),
        'awardProductId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.awardProductId),
        'awardType': value.awardType,
        'awardVoucherNo': value.awardVoucherNo,
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'cancelPenaltyType': value.cancelPenaltyType,
        'cancelPolicyType': value.cancelPolicyType,
        'exchangeRateType': value.exchangeRateType,
        'fromRoomType': value.fromRoomType,
        'inactive': value.inactive,
        'numberOfNights': value.numberOfNights,
        'pointsRequired': value.pointsRequired,
        'product': value.product,
        'rateCode': value.rateCode,
        'redeemedCentralAmount': value.redeemedCentralAmount,
        'redeemedLocalAmount': value.redeemedLocalAmount,
        'roomType': value.roomType,
        'stayDate': value.stayDate,
        'toRoomType': value.toRoomType,
        'totalCentralAmount': value.totalCentralAmount,
        'totalLocalAmount': value.totalLocalAmount,
        'transactionCode': value.transactionCode,
        'transactionNo': value.transactionNo,
    };
}
exports.MemberAwardDetailTypeToJSON = MemberAwardDetailTypeToJSON;
