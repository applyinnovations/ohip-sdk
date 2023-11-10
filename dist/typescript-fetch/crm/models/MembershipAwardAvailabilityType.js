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
exports.MembershipAwardAvailabilityTypeToJSON = exports.MembershipAwardAvailabilityTypeFromJSONTyped = exports.MembershipAwardAvailabilityTypeFromJSON = exports.instanceOfMembershipAwardAvailabilityType = void 0;
const runtime_1 = require("../runtime");
const OtherAvailabilityType_1 = require("./OtherAvailabilityType");
const ProductAvailabilityType_1 = require("./ProductAvailabilityType");
const RateAvailabilityType_1 = require("./RateAvailabilityType");
const UpgradeAvailabilityType_1 = require("./UpgradeAvailabilityType");
/**
 * Check if a given object implements the MembershipAwardAvailabilityType interface.
 */
function instanceOfMembershipAwardAvailabilityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipAwardAvailabilityType = instanceOfMembershipAwardAvailabilityType;
function MembershipAwardAvailabilityTypeFromJSON(json) {
    return MembershipAwardAvailabilityTypeFromJSONTyped(json, false);
}
exports.MembershipAwardAvailabilityTypeFromJSON = MembershipAwardAvailabilityTypeFromJSON;
function MembershipAwardAvailabilityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'otherInfo': !(0, runtime_1.exists)(json, 'otherInfo') ? undefined : (0, OtherAvailabilityType_1.OtherAvailabilityTypeFromJSON)(json['otherInfo']),
        'productInfo': !(0, runtime_1.exists)(json, 'productInfo') ? undefined : (0, ProductAvailabilityType_1.ProductAvailabilityTypeFromJSON)(json['productInfo']),
        'rateInfo': !(0, runtime_1.exists)(json, 'rateInfo') ? undefined : (0, RateAvailabilityType_1.RateAvailabilityTypeFromJSON)(json['rateInfo']),
        'upgradeInfo': !(0, runtime_1.exists)(json, 'upgradeInfo') ? undefined : (0, UpgradeAvailabilityType_1.UpgradeAvailabilityTypeFromJSON)(json['upgradeInfo']),
    };
}
exports.MembershipAwardAvailabilityTypeFromJSONTyped = MembershipAwardAvailabilityTypeFromJSONTyped;
function MembershipAwardAvailabilityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'otherInfo': (0, OtherAvailabilityType_1.OtherAvailabilityTypeToJSON)(value.otherInfo),
        'productInfo': (0, ProductAvailabilityType_1.ProductAvailabilityTypeToJSON)(value.productInfo),
        'rateInfo': (0, RateAvailabilityType_1.RateAvailabilityTypeToJSON)(value.rateInfo),
        'upgradeInfo': (0, UpgradeAvailabilityType_1.UpgradeAvailabilityTypeToJSON)(value.upgradeInfo),
    };
}
exports.MembershipAwardAvailabilityTypeToJSON = MembershipAwardAvailabilityTypeToJSON;
