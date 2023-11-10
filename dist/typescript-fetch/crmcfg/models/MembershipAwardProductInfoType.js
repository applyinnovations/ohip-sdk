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
exports.MembershipAwardProductInfoTypeToJSON = exports.MembershipAwardProductInfoTypeFromJSONTyped = exports.MembershipAwardProductInfoTypeFromJSON = exports.instanceOfMembershipAwardProductInfoType = void 0;
const runtime_1 = require("../runtime");
const MembershipAwardCancelPenaltyType_1 = require("./MembershipAwardCancelPenaltyType");
const MembershipAwardCancelPolicyType_1 = require("./MembershipAwardCancelPolicyType");
/**
 * Check if a given object implements the MembershipAwardProductInfoType interface.
 */
function instanceOfMembershipAwardProductInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipAwardProductInfoType = instanceOfMembershipAwardProductInfoType;
function MembershipAwardProductInfoTypeFromJSON(json) {
    return MembershipAwardProductInfoTypeFromJSONTyped(json, false);
}
exports.MembershipAwardProductInfoTypeFromJSON = MembershipAwardProductInfoTypeFromJSON;
function MembershipAwardProductInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelPenaltyCharge': !(0, runtime_1.exists)(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyDays': !(0, runtime_1.exists)(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyType': !(0, runtime_1.exists)(json, 'cancelPenaltyType') ? undefined : (0, MembershipAwardCancelPenaltyType_1.MembershipAwardCancelPenaltyTypeFromJSON)(json['cancelPenaltyType']),
        'cancelPolicyType': !(0, runtime_1.exists)(json, 'cancelPolicyType') ? undefined : (0, MembershipAwardCancelPolicyType_1.MembershipAwardCancelPolicyTypeFromJSON)(json['cancelPolicyType']),
        'numberOfNights': !(0, runtime_1.exists)(json, 'numberOfNights') ? undefined : json['numberOfNights'],
    };
}
exports.MembershipAwardProductInfoTypeFromJSONTyped = MembershipAwardProductInfoTypeFromJSONTyped;
function MembershipAwardProductInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyType': (0, MembershipAwardCancelPenaltyType_1.MembershipAwardCancelPenaltyTypeToJSON)(value.cancelPenaltyType),
        'cancelPolicyType': (0, MembershipAwardCancelPolicyType_1.MembershipAwardCancelPolicyTypeToJSON)(value.cancelPolicyType),
        'numberOfNights': value.numberOfNights,
    };
}
exports.MembershipAwardProductInfoTypeToJSON = MembershipAwardProductInfoTypeToJSON;
