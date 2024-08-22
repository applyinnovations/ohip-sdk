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
exports.MembershipStatisticsSummaryTypeToJSON = exports.MembershipStatisticsSummaryTypeFromJSONTyped = exports.MembershipStatisticsSummaryTypeFromJSON = exports.instanceOfMembershipStatisticsSummaryType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MembershipStatisticsSummaryType interface.
 */
function instanceOfMembershipStatisticsSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipStatisticsSummaryType = instanceOfMembershipStatisticsSummaryType;
function MembershipStatisticsSummaryTypeFromJSON(json) {
    return MembershipStatisticsSummaryTypeFromJSONTyped(json, false);
}
exports.MembershipStatisticsSummaryTypeFromJSON = MembershipStatisticsSummaryTypeFromJSON;
function MembershipStatisticsSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardPoints': !(0, runtime_1.exists)(json, 'awardPoints') ? undefined : json['awardPoints'],
        'pointsCost': !(0, runtime_1.exists)(json, 'pointsCost') ? undefined : json['pointsCost'],
        'tierNightPoints': !(0, runtime_1.exists)(json, 'tierNightPoints') ? undefined : json['tierNightPoints'],
        'tierRevenuePoints': !(0, runtime_1.exists)(json, 'tierRevenuePoints') ? undefined : json['tierRevenuePoints'],
        'tierStayPoints': !(0, runtime_1.exists)(json, 'tierStayPoints') ? undefined : json['tierStayPoints'],
    };
}
exports.MembershipStatisticsSummaryTypeFromJSONTyped = MembershipStatisticsSummaryTypeFromJSONTyped;
function MembershipStatisticsSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardPoints': value.awardPoints,
        'pointsCost': value.pointsCost,
        'tierNightPoints': value.tierNightPoints,
        'tierRevenuePoints': value.tierRevenuePoints,
        'tierStayPoints': value.tierStayPoints,
    };
}
exports.MembershipStatisticsSummaryTypeToJSON = MembershipStatisticsSummaryTypeToJSON;
