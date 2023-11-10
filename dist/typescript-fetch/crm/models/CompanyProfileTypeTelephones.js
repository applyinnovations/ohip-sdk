"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyProfileTypeTelephonesToJSON = exports.CompanyProfileTypeTelephonesFromJSONTyped = exports.CompanyProfileTypeTelephonesFromJSON = exports.instanceOfCompanyProfileTypeTelephones = void 0;
const runtime_1 = require("../runtime");
const TelephoneInfoType_1 = require("./TelephoneInfoType");
/**
 * Check if a given object implements the CompanyProfileTypeTelephones interface.
 */
function instanceOfCompanyProfileTypeTelephones(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCompanyProfileTypeTelephones = instanceOfCompanyProfileTypeTelephones;
function CompanyProfileTypeTelephonesFromJSON(json) {
    return CompanyProfileTypeTelephonesFromJSONTyped(json, false);
}
exports.CompanyProfileTypeTelephonesFromJSON = CompanyProfileTypeTelephonesFromJSON;
function CompanyProfileTypeTelephonesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'telephoneInfo': !(0, runtime_1.exists)(json, 'telephoneInfo') ? undefined : (json['telephoneInfo'].map(TelephoneInfoType_1.TelephoneInfoTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.CompanyProfileTypeTelephonesFromJSONTyped = CompanyProfileTypeTelephonesFromJSONTyped;
function CompanyProfileTypeTelephonesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'telephoneInfo': value.telephoneInfo === undefined ? undefined : (value.telephoneInfo.map(TelephoneInfoType_1.TelephoneInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.CompanyProfileTypeTelephonesToJSON = CompanyProfileTypeTelephonesToJSON;
