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
exports.MembershipTypeAdditionalInfoTypeToJSON = exports.MembershipTypeAdditionalInfoTypeFromJSONTyped = exports.MembershipTypeAdditionalInfoTypeFromJSON = exports.instanceOfMembershipTypeAdditionalInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MembershipTypeAdditionalInfoType interface.
 */
function instanceOfMembershipTypeAdditionalInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTypeAdditionalInfoType = instanceOfMembershipTypeAdditionalInfoType;
function MembershipTypeAdditionalInfoTypeFromJSON(json) {
    return MembershipTypeAdditionalInfoTypeFromJSONTyped(json, false);
}
exports.MembershipTypeAdditionalInfoTypeFromJSON = MembershipTypeAdditionalInfoTypeFromJSON;
function MembershipTypeAdditionalInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adhocStatement': !(0, runtime_1.exists)(json, 'adhocStatement') ? undefined : json['adhocStatement'],
        'autoUpdateWebLogin': !(0, runtime_1.exists)(json, 'autoUpdateWebLogin') ? undefined : json['autoUpdateWebLogin'],
        'autoWebEnrollment': !(0, runtime_1.exists)(json, 'autoWebEnrollment') ? undefined : json['autoWebEnrollment'],
        'batchStatement': !(0, runtime_1.exists)(json, 'batchStatement') ? undefined : json['batchStatement'],
        'enrollmentLetter': !(0, runtime_1.exists)(json, 'enrollmentLetter') ? undefined : json['enrollmentLetter'],
    };
}
exports.MembershipTypeAdditionalInfoTypeFromJSONTyped = MembershipTypeAdditionalInfoTypeFromJSONTyped;
function MembershipTypeAdditionalInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adhocStatement': value.adhocStatement,
        'autoUpdateWebLogin': value.autoUpdateWebLogin,
        'autoWebEnrollment': value.autoWebEnrollment,
        'batchStatement': value.batchStatement,
        'enrollmentLetter': value.enrollmentLetter,
    };
}
exports.MembershipTypeAdditionalInfoTypeToJSON = MembershipTypeAdditionalInfoTypeToJSON;