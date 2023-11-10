"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipFolioTextsTypeToJSON = exports.MembershipFolioTextsTypeFromJSONTyped = exports.MembershipFolioTextsTypeFromJSON = exports.instanceOfMembershipFolioTextsType = void 0;
const runtime_1 = require("../runtime");
const HotelFolioTextsType_1 = require("./HotelFolioTextsType");
/**
 * Check if a given object implements the MembershipFolioTextsType interface.
 */
function instanceOfMembershipFolioTextsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipFolioTextsType = instanceOfMembershipFolioTextsType;
function MembershipFolioTextsTypeFromJSON(json) {
    return MembershipFolioTextsTypeFromJSONTyped(json, false);
}
exports.MembershipFolioTextsTypeFromJSON = MembershipFolioTextsTypeFromJSON;
function MembershipFolioTextsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'folioTexts': !(0, runtime_1.exists)(json, 'folioTexts') ? undefined : (json['folioTexts'].map(HotelFolioTextsType_1.HotelFolioTextsTypeFromJSON)),
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
    };
}
exports.MembershipFolioTextsTypeFromJSONTyped = MembershipFolioTextsTypeFromJSONTyped;
function MembershipFolioTextsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'folioTexts': value.folioTexts === undefined ? undefined : (value.folioTexts.map(HotelFolioTextsType_1.HotelFolioTextsTypeToJSON)),
        'membershipLevel': value.membershipLevel,
        'membershipType': value.membershipType,
    };
}
exports.MembershipFolioTextsTypeToJSON = MembershipFolioTextsTypeToJSON;
