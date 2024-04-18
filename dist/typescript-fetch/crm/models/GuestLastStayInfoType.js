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
exports.GuestLastStayInfoTypeToJSON = exports.GuestLastStayInfoTypeFromJSONTyped = exports.GuestLastStayInfoTypeFromJSON = exports.instanceOfGuestLastStayInfoType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
/**
 * Check if a given object implements the GuestLastStayInfoType interface.
 */
function instanceOfGuestLastStayInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGuestLastStayInfoType = instanceOfGuestLastStayInfoType;
function GuestLastStayInfoTypeFromJSON(json) {
    return GuestLastStayInfoTypeFromJSONTyped(json, false);
}
exports.GuestLastStayInfoTypeFromJSON = GuestLastStayInfoTypeFromJSON;
function GuestLastStayInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'lastStayDate': !(0, runtime_1.exists)(json, 'lastStayDate') ? undefined : json['lastStayDate'],
        'lastStayRate': !(0, runtime_1.exists)(json, 'lastStayRate') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['lastStayRate']),
        'lastStayRoom': !(0, runtime_1.exists)(json, 'lastStayRoom') ? undefined : json['lastStayRoom'],
        'totalStay': !(0, runtime_1.exists)(json, 'totalStay') ? undefined : json['totalStay'],
    };
}
exports.GuestLastStayInfoTypeFromJSONTyped = GuestLastStayInfoTypeFromJSONTyped;
function GuestLastStayInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'lastStayDate': value.lastStayDate,
        'lastStayRate': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.lastStayRate),
        'lastStayRoom': value.lastStayRoom,
        'totalStay': value.totalStay,
    };
}
exports.GuestLastStayInfoTypeToJSON = GuestLastStayInfoTypeToJSON;