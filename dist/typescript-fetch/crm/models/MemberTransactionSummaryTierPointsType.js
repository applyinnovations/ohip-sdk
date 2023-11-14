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
exports.MemberTransactionSummaryTierPointsTypeToJSON = exports.MemberTransactionSummaryTierPointsTypeFromJSONTyped = exports.MemberTransactionSummaryTierPointsTypeFromJSON = exports.instanceOfMemberTransactionSummaryTierPointsType = void 0;
const runtime_1 = require("../runtime");
const TransactionSummaryAttributeType_1 = require("./TransactionSummaryAttributeType");
/**
 * Check if a given object implements the MemberTransactionSummaryTierPointsType interface.
 */
function instanceOfMemberTransactionSummaryTierPointsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMemberTransactionSummaryTierPointsType = instanceOfMemberTransactionSummaryTierPointsType;
function MemberTransactionSummaryTierPointsTypeFromJSON(json) {
    return MemberTransactionSummaryTierPointsTypeFromJSONTyped(json, false);
}
exports.MemberTransactionSummaryTierPointsTypeFromJSON = MemberTransactionSummaryTierPointsTypeFromJSON;
function MemberTransactionSummaryTierPointsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseNights': !(0, runtime_1.exists)(json, 'baseNights') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['baseNights']),
        'baseRevenue': !(0, runtime_1.exists)(json, 'baseRevenue') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['baseRevenue']),
        'baseStay': !(0, runtime_1.exists)(json, 'baseStay') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['baseStay']),
        'bonusNights': !(0, runtime_1.exists)(json, 'bonusNights') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['bonusNights']),
        'bonusRevenue': !(0, runtime_1.exists)(json, 'bonusRevenue') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['bonusRevenue']),
        'bonusStay': !(0, runtime_1.exists)(json, 'bonusStay') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['bonusStay']),
        'totalNights': !(0, runtime_1.exists)(json, 'totalNights') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['totalNights']),
        'totalStays': !(0, runtime_1.exists)(json, 'totalStays') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['totalStays']),
    };
}
exports.MemberTransactionSummaryTierPointsTypeFromJSONTyped = MemberTransactionSummaryTierPointsTypeFromJSONTyped;
function MemberTransactionSummaryTierPointsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseNights': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.baseNights),
        'baseRevenue': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.baseRevenue),
        'baseStay': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.baseStay),
        'bonusNights': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.bonusNights),
        'bonusRevenue': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.bonusRevenue),
        'bonusStay': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.bonusStay),
        'totalNights': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.totalNights),
        'totalStays': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.totalStays),
    };
}
exports.MemberTransactionSummaryTierPointsTypeToJSON = MemberTransactionSummaryTierPointsTypeToJSON;