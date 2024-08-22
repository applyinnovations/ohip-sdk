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
exports.RewardsInfoTypeToJSON = exports.RewardsInfoTypeFromJSONTyped = exports.RewardsInfoTypeFromJSON = exports.instanceOfRewardsInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the RewardsInfoType interface.
 */
function instanceOfRewardsInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRewardsInfoType = instanceOfRewardsInfoType;
function RewardsInfoTypeFromJSON(json) {
    return RewardsInfoTypeFromJSONTyped(json, false);
}
exports.RewardsInfoTypeFromJSON = RewardsInfoTypeFromJSON;
function RewardsInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'association': !(0, runtime_1.exists)(json, 'association') ? undefined : json['association'],
        'currentBalance': !(0, runtime_1.exists)(json, 'currentBalance') ? undefined : json['currentBalance'],
        'mVCIOwner': !(0, runtime_1.exists)(json, 'mVCIOwner') ? undefined : json['mVCIOwner'],
        'meetingPlanner': !(0, runtime_1.exists)(json, 'meetingPlanner') ? undefined : json['meetingPlanner'],
        'membershipDate': !(0, runtime_1.exists)(json, 'membershipDate') ? undefined : json['membershipDate'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipNo': !(0, runtime_1.exists)(json, 'membershipNo') ? undefined : json['membershipNo'],
        'ownsVisaCard': !(0, runtime_1.exists)(json, 'ownsVisaCard') ? undefined : json['ownsVisaCard'],
    };
}
exports.RewardsInfoTypeFromJSONTyped = RewardsInfoTypeFromJSONTyped;
function RewardsInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'association': value.association,
        'currentBalance': value.currentBalance,
        'mVCIOwner': value.mVCIOwner,
        'meetingPlanner': value.meetingPlanner,
        'membershipDate': value.membershipDate,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipNo': value.membershipNo,
        'ownsVisaCard': value.ownsVisaCard,
    };
}
exports.RewardsInfoTypeToJSON = RewardsInfoTypeToJSON;
