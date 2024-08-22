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
exports.MergedProfileTypeToJSON = exports.MergedProfileTypeFromJSONTyped = exports.MergedProfileTypeFromJSON = exports.instanceOfMergedProfileType = void 0;
const runtime_1 = require("../runtime");
const ProfileType_1 = require("./ProfileType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the MergedProfileType interface.
 */
function instanceOfMergedProfileType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMergedProfileType = instanceOfMergedProfileType;
function MergedProfileTypeFromJSON(json) {
    return MergedProfileTypeFromJSONTyped(json, false);
}
exports.MergedProfileTypeFromJSON = MergedProfileTypeFromJSON;
function MergedProfileTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'profile': !(0, runtime_1.exists)(json, 'profile') ? undefined : (0, ProfileType_1.ProfileTypeFromJSON)(json['profile']),
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (json['profileIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
    };
}
exports.MergedProfileTypeFromJSONTyped = MergedProfileTypeFromJSONTyped;
function MergedProfileTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'profile': (0, ProfileType_1.ProfileTypeToJSON)(value.profile),
        'profileIdList': value.profileIdList === undefined ? undefined : (value.profileIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
    };
}
exports.MergedProfileTypeToJSON = MergedProfileTypeToJSON;
