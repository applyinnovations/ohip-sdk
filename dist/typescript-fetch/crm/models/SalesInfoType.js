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
exports.SalesInfoTypeToJSON = exports.SalesInfoTypeFromJSONTyped = exports.SalesInfoTypeFromJSON = exports.instanceOfSalesInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the SalesInfoType interface.
 */
function instanceOfSalesInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSalesInfoType = instanceOfSalesInfoType;
function SalesInfoTypeFromJSON(json) {
    return SalesInfoTypeFromJSONTyped(json, false);
}
exports.SalesInfoTypeFromJSON = SalesInfoTypeFromJSON;
function SalesInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountSource': !(0, runtime_1.exists)(json, 'accountSource') ? undefined : json['accountSource'],
        'accountType': !(0, runtime_1.exists)(json, 'accountType') ? undefined : json['accountType'],
        'actionCode': !(0, runtime_1.exists)(json, 'actionCode') ? undefined : json['actionCode'],
        'businessSegments': !(0, runtime_1.exists)(json, 'businessSegments') ? undefined : json['businessSegments'],
        'competitionCode': !(0, runtime_1.exists)(json, 'competitionCode') ? undefined : json['competitionCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'industryCode': !(0, runtime_1.exists)(json, 'industryCode') ? undefined : json['industryCode'],
        'influence': !(0, runtime_1.exists)(json, 'influence') ? undefined : json['influence'],
        'preferredRoom': !(0, runtime_1.exists)(json, 'preferredRoom') ? undefined : json['preferredRoom'],
        'priority': !(0, runtime_1.exists)(json, 'priority') ? undefined : json['priority'],
        'roomsPotential': !(0, runtime_1.exists)(json, 'roomsPotential') ? undefined : json['roomsPotential'],
        'scope': !(0, runtime_1.exists)(json, 'scope') ? undefined : json['scope'],
        'scopeCity': !(0, runtime_1.exists)(json, 'scopeCity') ? undefined : json['scopeCity'],
    };
}
exports.SalesInfoTypeFromJSONTyped = SalesInfoTypeFromJSONTyped;
function SalesInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountSource': value.accountSource,
        'accountType': value.accountType,
        'actionCode': value.actionCode,
        'businessSegments': value.businessSegments,
        'competitionCode': value.competitionCode,
        'hotelId': value.hotelId,
        'industryCode': value.industryCode,
        'influence': value.influence,
        'preferredRoom': value.preferredRoom,
        'priority': value.priority,
        'roomsPotential': value.roomsPotential,
        'scope': value.scope,
        'scopeCity': value.scopeCity,
    };
}
exports.SalesInfoTypeToJSON = SalesInfoTypeToJSON;
