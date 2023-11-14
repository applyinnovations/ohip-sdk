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
exports.MembershipPropertyGroupTypeToJSON = exports.MembershipPropertyGroupTypeFromJSONTyped = exports.MembershipPropertyGroupTypeFromJSON = exports.instanceOfMembershipPropertyGroupType = void 0;
const runtime_1 = require("../runtime");
const MembershipPropertyCodesType_1 = require("./MembershipPropertyCodesType");
/**
 * Check if a given object implements the MembershipPropertyGroupType interface.
 */
function instanceOfMembershipPropertyGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipPropertyGroupType = instanceOfMembershipPropertyGroupType;
function MembershipPropertyGroupTypeFromJSON(json) {
    return MembershipPropertyGroupTypeFromJSONTyped(json, false);
}
exports.MembershipPropertyGroupTypeFromJSON = MembershipPropertyGroupTypeFromJSON;
function MembershipPropertyGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'displaySequence': !(0, runtime_1.exists)(json, 'displaySequence') ? undefined : json['displaySequence'],
        'hotels': !(0, runtime_1.exists)(json, 'hotels') ? undefined : (0, MembershipPropertyCodesType_1.MembershipPropertyCodesTypeFromJSON)(json['hotels']),
    };
}
exports.MembershipPropertyGroupTypeFromJSONTyped = MembershipPropertyGroupTypeFromJSONTyped;
function MembershipPropertyGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'displaySequence': value.displaySequence,
        'hotels': (0, MembershipPropertyCodesType_1.MembershipPropertyCodesTypeToJSON)(value.hotels),
    };
}
exports.MembershipPropertyGroupTypeToJSON = MembershipPropertyGroupTypeToJSON;