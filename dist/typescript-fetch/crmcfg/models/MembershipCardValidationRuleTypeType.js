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
exports.MembershipCardValidationRuleTypeTypeToJSON = exports.MembershipCardValidationRuleTypeTypeFromJSONTyped = exports.MembershipCardValidationRuleTypeTypeFromJSON = exports.MembershipCardValidationRuleTypeType = void 0;
/**
 * Defines rules to be used for card validation.
 * @export
 */
exports.MembershipCardValidationRuleTypeType = {
    Mod7: 'Mod7',
    Mod10: 'Mod10',
    Udef: 'Udef',
    Novalid: 'Novalid',
    Internal: 'Internal',
    External: 'External'
};
function MembershipCardValidationRuleTypeTypeFromJSON(json) {
    return MembershipCardValidationRuleTypeTypeFromJSONTyped(json, false);
}
exports.MembershipCardValidationRuleTypeTypeFromJSON = MembershipCardValidationRuleTypeTypeFromJSON;
function MembershipCardValidationRuleTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.MembershipCardValidationRuleTypeTypeFromJSONTyped = MembershipCardValidationRuleTypeTypeFromJSONTyped;
function MembershipCardValidationRuleTypeTypeToJSON(value) {
    return value;
}
exports.MembershipCardValidationRuleTypeTypeToJSON = MembershipCardValidationRuleTypeTypeToJSON;
