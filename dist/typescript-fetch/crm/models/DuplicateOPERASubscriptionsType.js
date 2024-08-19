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
exports.DuplicateOPERASubscriptionsTypeToJSON = exports.DuplicateOPERASubscriptionsTypeFromJSONTyped = exports.DuplicateOPERASubscriptionsTypeFromJSON = exports.instanceOfDuplicateOPERASubscriptionsType = void 0;
const runtime_1 = require("../runtime");
const ProfileSubscriptionType_1 = require("./ProfileSubscriptionType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the DuplicateOPERASubscriptionsType interface.
 */
function instanceOfDuplicateOPERASubscriptionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfDuplicateOPERASubscriptionsType = instanceOfDuplicateOPERASubscriptionsType;
function DuplicateOPERASubscriptionsTypeFromJSON(json) {
    return DuplicateOPERASubscriptionsTypeFromJSONTyped(json, false);
}
exports.DuplicateOPERASubscriptionsTypeFromJSON = DuplicateOPERASubscriptionsTypeFromJSON;
function DuplicateOPERASubscriptionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'externalProfileId': !(0, runtime_1.exists)(json, 'externalProfileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['externalProfileId']),
        'profileSubscriptions': !(0, runtime_1.exists)(json, 'profileSubscriptions') ? undefined : (json['profileSubscriptions'].map(ProfileSubscriptionType_1.ProfileSubscriptionTypeFromJSON)),
    };
}
exports.DuplicateOPERASubscriptionsTypeFromJSONTyped = DuplicateOPERASubscriptionsTypeFromJSONTyped;
function DuplicateOPERASubscriptionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'externalProfileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.externalProfileId),
        'profileSubscriptions': value.profileSubscriptions === undefined ? undefined : (value.profileSubscriptions.map(ProfileSubscriptionType_1.ProfileSubscriptionTypeToJSON)),
    };
}
exports.DuplicateOPERASubscriptionsTypeToJSON = DuplicateOPERASubscriptionsTypeToJSON;
