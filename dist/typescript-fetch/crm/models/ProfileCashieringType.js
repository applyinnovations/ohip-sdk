"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileCashieringTypeToJSON = exports.ProfileCashieringTypeFromJSONTyped = exports.ProfileCashieringTypeFromJSON = exports.instanceOfProfileCashieringType = void 0;
const runtime_1 = require("../runtime");
const DirectBillingType_1 = require("./DirectBillingType");
/**
 * Check if a given object implements the ProfileCashieringType interface.
 */
function instanceOfProfileCashieringType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileCashieringType = instanceOfProfileCashieringType;
function ProfileCashieringTypeFromJSON(json) {
    return ProfileCashieringTypeFromJSONTyped(json, false);
}
exports.ProfileCashieringTypeFromJSON = ProfileCashieringTypeFromJSON;
function ProfileCashieringTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arNoCentral': !(0, runtime_1.exists)(json, 'arNoCentral') ? undefined : json['arNoCentral'],
        'autoFolioSettlementType': !(0, runtime_1.exists)(json, 'autoFolioSettlementType') ? undefined : json['autoFolioSettlementType'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'directBillingList': !(0, runtime_1.exists)(json, 'directBillingList') ? undefined : (json['directBillingList'].map(DirectBillingType_1.DirectBillingTypeFromJSON)),
        'paymentDueDays': !(0, runtime_1.exists)(json, 'paymentDueDays') ? undefined : json['paymentDueDays'],
        'referenceCurrency': !(0, runtime_1.exists)(json, 'referenceCurrency') ? undefined : json['referenceCurrency'],
        'taxPercent1': !(0, runtime_1.exists)(json, 'taxPercent1') ? undefined : json['taxPercent1'],
        'taxPercent2': !(0, runtime_1.exists)(json, 'taxPercent2') ? undefined : json['taxPercent2'],
        'taxPercent3': !(0, runtime_1.exists)(json, 'taxPercent3') ? undefined : json['taxPercent3'],
        'taxPercent4': !(0, runtime_1.exists)(json, 'taxPercent4') ? undefined : json['taxPercent4'],
        'taxPercent5': !(0, runtime_1.exists)(json, 'taxPercent5') ? undefined : json['taxPercent5'],
        'vATOffsetYN': !(0, runtime_1.exists)(json, 'vATOffsetYN') ? undefined : json['vATOffsetYN'],
    };
}
exports.ProfileCashieringTypeFromJSONTyped = ProfileCashieringTypeFromJSONTyped;
function ProfileCashieringTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arNoCentral': value.arNoCentral,
        'autoFolioSettlementType': value.autoFolioSettlementType,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'directBillingList': value.directBillingList === undefined ? undefined : (value.directBillingList.map(DirectBillingType_1.DirectBillingTypeToJSON)),
        'paymentDueDays': value.paymentDueDays,
        'referenceCurrency': value.referenceCurrency,
        'taxPercent1': value.taxPercent1,
        'taxPercent2': value.taxPercent2,
        'taxPercent3': value.taxPercent3,
        'taxPercent4': value.taxPercent4,
        'taxPercent5': value.taxPercent5,
        'vATOffsetYN': value.vATOffsetYN,
    };
}
exports.ProfileCashieringTypeToJSON = ProfileCashieringTypeToJSON;
