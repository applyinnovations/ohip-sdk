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
exports.ProfileDetailsToJSON = exports.ProfileDetailsFromJSONTyped = exports.ProfileDetailsFromJSON = exports.instanceOfProfileDetails = void 0;
const runtime_1 = require("../runtime");
const MasterInfoType_1 = require("./MasterInfoType");
const ProfilesType_1 = require("./ProfilesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ProfileDetails interface.
 */
function instanceOfProfileDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileDetails = instanceOfProfileDetails;
function ProfileDetailsFromJSON(json) {
    return ProfileDetailsFromJSONTyped(json, false);
}
exports.ProfileDetailsFromJSON = ProfileDetailsFromJSON;
function ProfileDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'masterInfoList': !(0, runtime_1.exists)(json, 'masterInfoList') ? undefined : (json['masterInfoList'].map(MasterInfoType_1.MasterInfoTypeFromJSON)),
        'profiles': !(0, runtime_1.exists)(json, 'profiles') ? undefined : (0, ProfilesType_1.ProfilesTypeFromJSON)(json['profiles']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ProfileDetailsFromJSONTyped = ProfileDetailsFromJSONTyped;
function ProfileDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'masterInfoList': value.masterInfoList === undefined ? undefined : (value.masterInfoList.map(MasterInfoType_1.MasterInfoTypeToJSON)),
        'profiles': (0, ProfilesType_1.ProfilesTypeToJSON)(value.profiles),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ProfileDetailsToJSON = ProfileDetailsToJSON;
