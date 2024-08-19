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
exports.MembershipDetailsTypeToJSON = exports.MembershipDetailsTypeFromJSONTyped = exports.MembershipDetailsTypeFromJSON = exports.instanceOfMembershipDetailsType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ProfileId_1 = require("./ProfileId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the MembershipDetailsType interface.
 */
function instanceOfMembershipDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipDetailsType = instanceOfMembershipDetailsType;
function MembershipDetailsTypeFromJSON(json) {
    return MembershipDetailsTypeFromJSONTyped(json, false);
}
exports.MembershipDetailsTypeFromJSON = MembershipDetailsTypeFromJSON;
function MembershipDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cardExpirationDate': !(0, runtime_1.exists)(json, 'cardExpirationDate') ? undefined : json['cardExpirationDate'],
        'joinedDate': !(0, runtime_1.exists)(json, 'joinedDate') ? undefined : json['joinedDate'],
        'membershipCardNo': !(0, runtime_1.exists)(json, 'membershipCardNo') ? undefined : json['membershipCardNo'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['membershipId']),
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['membershipType']),
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
    };
}
exports.MembershipDetailsTypeFromJSONTyped = MembershipDetailsTypeFromJSONTyped;
function MembershipDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cardExpirationDate': value.cardExpirationDate,
        'joinedDate': value.joinedDate,
        'membershipCardNo': value.membershipCardNo,
        'membershipId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.membershipId),
        'membershipLevel': value.membershipLevel,
        'membershipType': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.membershipType),
        'name': value.name,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
    };
}
exports.MembershipDetailsTypeToJSON = MembershipDetailsTypeToJSON;
