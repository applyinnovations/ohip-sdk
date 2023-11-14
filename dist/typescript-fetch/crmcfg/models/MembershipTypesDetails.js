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
exports.MembershipTypesDetailsToJSON = exports.MembershipTypesDetailsFromJSONTyped = exports.MembershipTypesDetailsFromJSON = exports.instanceOfMembershipTypesDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const MasterInfoType_1 = require("./MasterInfoType");
const MembershipTypesType_1 = require("./MembershipTypesType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the MembershipTypesDetails interface.
 */
function instanceOfMembershipTypesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTypesDetails = instanceOfMembershipTypesDetails;
function MembershipTypesDetailsFromJSON(json) {
    return MembershipTypesDetailsFromJSONTyped(json, false);
}
exports.MembershipTypesDetailsFromJSON = MembershipTypesDetailsFromJSON;
function MembershipTypesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'masterInfoList': !(0, runtime_1.exists)(json, 'masterInfoList') ? undefined : (json['masterInfoList'].map(MasterInfoType_1.MasterInfoTypeFromJSON)),
        'membershipTypes': !(0, runtime_1.exists)(json, 'membershipTypes') ? undefined : (0, MembershipTypesType_1.MembershipTypesTypeFromJSON)(json['membershipTypes']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.MembershipTypesDetailsFromJSONTyped = MembershipTypesDetailsFromJSONTyped;
function MembershipTypesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'masterInfoList': value.masterInfoList === undefined ? undefined : (value.masterInfoList.map(MasterInfoType_1.MasterInfoTypeToJSON)),
        'membershipTypes': (0, MembershipTypesType_1.MembershipTypesTypeToJSON)(value.membershipTypes),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.MembershipTypesDetailsToJSON = MembershipTypesDetailsToJSON;