"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberTransactionSummaryAwardPointsTypeToJSON = exports.MemberTransactionSummaryAwardPointsTypeFromJSONTyped = exports.MemberTransactionSummaryAwardPointsTypeFromJSON = exports.instanceOfMemberTransactionSummaryAwardPointsType = void 0;
const runtime_1 = require("../runtime");
const TransactionSummaryAttributeType_1 = require("./TransactionSummaryAttributeType");
/**
 * Check if a given object implements the MemberTransactionSummaryAwardPointsType interface.
 */
function instanceOfMemberTransactionSummaryAwardPointsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMemberTransactionSummaryAwardPointsType = instanceOfMemberTransactionSummaryAwardPointsType;
function MemberTransactionSummaryAwardPointsTypeFromJSON(json) {
    return MemberTransactionSummaryAwardPointsTypeFromJSONTyped(json, false);
}
exports.MemberTransactionSummaryAwardPointsTypeFromJSON = MemberTransactionSummaryAwardPointsTypeFromJSON;
function MemberTransactionSummaryAwardPointsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'basePoints': !(0, runtime_1.exists)(json, 'basePoints') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['basePoints']),
        'bonusPoints': !(0, runtime_1.exists)(json, 'bonusPoints') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['bonusPoints']),
        'miscPoints': !(0, runtime_1.exists)(json, 'miscPoints') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['miscPoints']),
        'totalPoints': !(0, runtime_1.exists)(json, 'totalPoints') ? undefined : (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeFromJSON)(json['totalPoints']),
    };
}
exports.MemberTransactionSummaryAwardPointsTypeFromJSONTyped = MemberTransactionSummaryAwardPointsTypeFromJSONTyped;
function MemberTransactionSummaryAwardPointsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'basePoints': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.basePoints),
        'bonusPoints': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.bonusPoints),
        'miscPoints': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.miscPoints),
        'totalPoints': (0, TransactionSummaryAttributeType_1.TransactionSummaryAttributeTypeToJSON)(value.totalPoints),
    };
}
exports.MemberTransactionSummaryAwardPointsTypeToJSON = MemberTransactionSummaryAwardPointsTypeToJSON;
