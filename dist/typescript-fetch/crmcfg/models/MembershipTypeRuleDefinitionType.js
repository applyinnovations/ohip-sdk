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
exports.MembershipTypeRuleDefinitionTypeToJSON = exports.MembershipTypeRuleDefinitionTypeFromJSONTyped = exports.MembershipTypeRuleDefinitionTypeFromJSON = exports.instanceOfMembershipTypeRuleDefinitionType = void 0;
const runtime_1 = require("../runtime");
const MembershipTypeRuleType_1 = require("./MembershipTypeRuleType");
const RuleAppliesOnType_1 = require("./RuleAppliesOnType");
/**
 * Check if a given object implements the MembershipTypeRuleDefinitionType interface.
 */
function instanceOfMembershipTypeRuleDefinitionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTypeRuleDefinitionType = instanceOfMembershipTypeRuleDefinitionType;
function MembershipTypeRuleDefinitionTypeFromJSON(json) {
    return MembershipTypeRuleDefinitionTypeFromJSONTyped(json, false);
}
exports.MembershipTypeRuleDefinitionTypeFromJSON = MembershipTypeRuleDefinitionTypeFromJSON;
function MembershipTypeRuleDefinitionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'ruleCode': !(0, runtime_1.exists)(json, 'ruleCode') ? undefined : json['ruleCode'],
        'programType': !(0, runtime_1.exists)(json, 'programType') ? undefined : (0, MembershipTypeRuleType_1.MembershipTypeRuleTypeFromJSON)(json['programType']),
        'ruleAppliesOn': !(0, runtime_1.exists)(json, 'ruleAppliesOn') ? undefined : (0, RuleAppliesOnType_1.RuleAppliesOnTypeFromJSON)(json['ruleAppliesOn']),
        'noOfTimesEligible': !(0, runtime_1.exists)(json, 'noOfTimesEligible') ? undefined : json['noOfTimesEligible'],
        'ruleExportLabel': !(0, runtime_1.exists)(json, 'ruleExportLabel') ? undefined : json['ruleExportLabel'],
        'ruleExpirationDate': !(0, runtime_1.exists)(json, 'ruleExpirationDate') ? undefined : json['ruleExpirationDate'],
    };
}
exports.MembershipTypeRuleDefinitionTypeFromJSONTyped = MembershipTypeRuleDefinitionTypeFromJSONTyped;
function MembershipTypeRuleDefinitionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'ruleCode': value.ruleCode,
        'programType': (0, MembershipTypeRuleType_1.MembershipTypeRuleTypeToJSON)(value.programType),
        'ruleAppliesOn': (0, RuleAppliesOnType_1.RuleAppliesOnTypeToJSON)(value.ruleAppliesOn),
        'noOfTimesEligible': value.noOfTimesEligible,
        'ruleExportLabel': value.ruleExportLabel,
        'ruleExpirationDate': value.ruleExpirationDate,
    };
}
exports.MembershipTypeRuleDefinitionTypeToJSON = MembershipTypeRuleDefinitionTypeToJSON;
