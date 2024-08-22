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
exports.ProfileCommissionAccountCriteriaTypeToJSON = exports.ProfileCommissionAccountCriteriaTypeFromJSONTyped = exports.ProfileCommissionAccountCriteriaTypeFromJSON = exports.instanceOfProfileCommissionAccountCriteriaType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const ProfileId_1 = require("./ProfileId");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ProfileCommissionAccountCriteriaType interface.
 */
function instanceOfProfileCommissionAccountCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileCommissionAccountCriteriaType = instanceOfProfileCommissionAccountCriteriaType;
function ProfileCommissionAccountCriteriaTypeFromJSON(json) {
    return ProfileCommissionAccountCriteriaTypeFromJSONTyped(json, false);
}
exports.ProfileCommissionAccountCriteriaTypeFromJSON = ProfileCommissionAccountCriteriaTypeFromJSON;
function ProfileCommissionAccountCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bankAccountId': !(0, runtime_1.exists)(json, 'bankAccountId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['bankAccountId']),
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['commissionCode']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'validatePending': !(0, runtime_1.exists)(json, 'validatePending') ? undefined : json['validatePending'],
    };
}
exports.ProfileCommissionAccountCriteriaTypeFromJSONTyped = ProfileCommissionAccountCriteriaTypeFromJSONTyped;
function ProfileCommissionAccountCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bankAccountId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.bankAccountId),
        'commissionCode': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.commissionCode),
        'hotelId': value.hotelId,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'validatePending': value.validatePending,
    };
}
exports.ProfileCommissionAccountCriteriaTypeToJSON = ProfileCommissionAccountCriteriaTypeToJSON;
