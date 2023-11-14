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
exports.MembershipAwardPointsTypeToJSON = exports.MembershipAwardPointsTypeFromJSONTyped = exports.MembershipAwardPointsTypeFromJSON = exports.instanceOfMembershipAwardPointsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MembershipAwardPointsType interface.
 */
function instanceOfMembershipAwardPointsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipAwardPointsType = instanceOfMembershipAwardPointsType;
function MembershipAwardPointsTypeFromJSON(json) {
    return MembershipAwardPointsTypeFromJSONTyped(json, false);
}
exports.MembershipAwardPointsTypeFromJSON = MembershipAwardPointsTypeFromJSON;
function MembershipAwardPointsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'basePoints': !(0, runtime_1.exists)(json, 'basePoints') ? undefined : json['basePoints'],
        'bonusPoints': !(0, runtime_1.exists)(json, 'bonusPoints') ? undefined : json['bonusPoints'],
        'miscPoints': !(0, runtime_1.exists)(json, 'miscPoints') ? undefined : json['miscPoints'],
        'pointsExpiryDate': !(0, runtime_1.exists)(json, 'pointsExpiryDate') ? undefined : (new Date(json['pointsExpiryDate'])),
        'ruleCode': !(0, runtime_1.exists)(json, 'ruleCode') ? undefined : json['ruleCode'],
        'totalPoints': !(0, runtime_1.exists)(json, 'totalPoints') ? undefined : json['totalPoints'],
    };
}
exports.MembershipAwardPointsTypeFromJSONTyped = MembershipAwardPointsTypeFromJSONTyped;
function MembershipAwardPointsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'basePoints': value.basePoints,
        'bonusPoints': value.bonusPoints,
        'miscPoints': value.miscPoints,
        'pointsExpiryDate': value.pointsExpiryDate === undefined ? undefined : (value.pointsExpiryDate.toISOString().substring(0, 10)),
        'ruleCode': value.ruleCode,
        'totalPoints': value.totalPoints,
    };
}
exports.MembershipAwardPointsTypeToJSON = MembershipAwardPointsTypeToJSON;