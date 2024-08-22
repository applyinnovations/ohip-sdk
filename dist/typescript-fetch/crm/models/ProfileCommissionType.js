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
exports.ProfileCommissionTypeToJSON = exports.ProfileCommissionTypeFromJSONTyped = exports.ProfileCommissionTypeFromJSON = exports.instanceOfProfileCommissionType = void 0;
const runtime_1 = require("../runtime");
const CommissionPaymentMethods_1 = require("./CommissionPaymentMethods");
/**
 * Check if a given object implements the ProfileCommissionType interface.
 */
function instanceOfProfileCommissionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileCommissionType = instanceOfProfileCommissionType;
function ProfileCommissionTypeFromJSON(json) {
    return ProfileCommissionTypeFromJSONTyped(json, false);
}
exports.ProfileCommissionTypeFromJSON = ProfileCommissionTypeFromJSON;
function ProfileCommissionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'bankAccount': !(0, runtime_1.exists)(json, 'bankAccount') ? undefined : json['bankAccount'],
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : json['commissionCode'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencySymbol': !(0, runtime_1.exists)(json, 'currencySymbol') ? undefined : json['currencySymbol'],
        'decimalPlaces': !(0, runtime_1.exists)(json, 'decimalPlaces') ? undefined : json['decimalPlaces'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : (0, CommissionPaymentMethods_1.CommissionPaymentMethodsFromJSON)(json['paymentMethod']),
    };
}
exports.ProfileCommissionTypeFromJSONTyped = ProfileCommissionTypeFromJSONTyped;
function ProfileCommissionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'bankAccount': value.bankAccount,
        'commissionCode': value.commissionCode,
        'currencyCode': value.currencyCode,
        'currencySymbol': value.currencySymbol,
        'decimalPlaces': value.decimalPlaces,
        'hotelId': value.hotelId,
        'paymentMethod': (0, CommissionPaymentMethods_1.CommissionPaymentMethodsToJSON)(value.paymentMethod),
    };
}
exports.ProfileCommissionTypeToJSON = ProfileCommissionTypeToJSON;
