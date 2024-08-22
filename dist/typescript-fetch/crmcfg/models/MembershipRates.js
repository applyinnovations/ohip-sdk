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
exports.MembershipRatesToJSON = exports.MembershipRatesFromJSONTyped = exports.MembershipRatesFromJSON = exports.instanceOfMembershipRates = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const MembershipRateType_1 = require("./MembershipRateType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the MembershipRates interface.
 */
function instanceOfMembershipRates(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipRates = instanceOfMembershipRates;
function MembershipRatesFromJSON(json) {
    return MembershipRatesFromJSONTyped(json, false);
}
exports.MembershipRatesFromJSON = MembershipRatesFromJSON;
function MembershipRatesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'membershipRates': !(0, runtime_1.exists)(json, 'membershipRates') ? undefined : (json['membershipRates'].map(MembershipRateType_1.MembershipRateTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.MembershipRatesFromJSONTyped = MembershipRatesFromJSONTyped;
function MembershipRatesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'membershipRates': value.membershipRates === undefined ? undefined : (value.membershipRates.map(MembershipRateType_1.MembershipRateTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.MembershipRatesToJSON = MembershipRatesToJSON;
