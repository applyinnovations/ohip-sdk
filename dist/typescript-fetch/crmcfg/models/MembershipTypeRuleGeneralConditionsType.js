"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipTypeRuleGeneralConditionsTypeToJSON = exports.MembershipTypeRuleGeneralConditionsTypeFromJSONTyped = exports.MembershipTypeRuleGeneralConditionsTypeFromJSON = exports.instanceOfMembershipTypeRuleGeneralConditionsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MembershipTypeRuleGeneralConditionsType interface.
 */
function instanceOfMembershipTypeRuleGeneralConditionsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTypeRuleGeneralConditionsType = instanceOfMembershipTypeRuleGeneralConditionsType;
function MembershipTypeRuleGeneralConditionsTypeFromJSON(json) {
    return MembershipTypeRuleGeneralConditionsTypeFromJSONTyped(json, false);
}
exports.MembershipTypeRuleGeneralConditionsTypeFromJSON = MembershipTypeRuleGeneralConditionsTypeFromJSON;
function MembershipTypeRuleGeneralConditionsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reservationChannel': !(0, runtime_1.exists)(json, 'reservationChannel') ? undefined : json['reservationChannel'],
        'property': !(0, runtime_1.exists)(json, 'property') ? undefined : json['property'],
        'propertyGroup': !(0, runtime_1.exists)(json, 'propertyGroup') ? undefined : json['propertyGroup'],
        'enrollmentCode': !(0, runtime_1.exists)(json, 'enrollmentCode') ? undefined : json['enrollmentCode'],
        'enrollmentGroup': !(0, runtime_1.exists)(json, 'enrollmentGroup') ? undefined : json['enrollmentGroup'],
        'promotionCode': !(0, runtime_1.exists)(json, 'promotionCode') ? undefined : json['promotionCode'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
    };
}
exports.MembershipTypeRuleGeneralConditionsTypeFromJSONTyped = MembershipTypeRuleGeneralConditionsTypeFromJSONTyped;
function MembershipTypeRuleGeneralConditionsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reservationChannel': value.reservationChannel,
        'property': value.property,
        'propertyGroup': value.propertyGroup,
        'enrollmentCode': value.enrollmentCode,
        'enrollmentGroup': value.enrollmentGroup,
        'promotionCode': value.promotionCode,
        'membershipLevel': value.membershipLevel,
    };
}
exports.MembershipTypeRuleGeneralConditionsTypeToJSON = MembershipTypeRuleGeneralConditionsTypeToJSON;