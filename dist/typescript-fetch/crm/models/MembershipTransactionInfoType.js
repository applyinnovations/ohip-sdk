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
exports.MembershipTransactionInfoTypeToJSON = exports.MembershipTransactionInfoTypeFromJSONTyped = exports.MembershipTransactionInfoTypeFromJSON = exports.instanceOfMembershipTransactionInfoType = void 0;
const runtime_1 = require("../runtime");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the MembershipTransactionInfoType interface.
 */
function instanceOfMembershipTransactionInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipTransactionInfoType = instanceOfMembershipTransactionInfoType;
function MembershipTransactionInfoTypeFromJSON(json) {
    return MembershipTransactionInfoTypeFromJSONTyped(json, false);
}
exports.MembershipTransactionInfoTypeFromJSON = MembershipTransactionInfoTypeFromJSON;
function MembershipTransactionInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'stay': !(0, runtime_1.exists)(json, 'stay') ? undefined : json['stay'],
        'stayTimeSpan': !(0, runtime_1.exists)(json, 'stayTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['stayTimeSpan']),
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : json['transactionType'],
    };
}
exports.MembershipTransactionInfoTypeFromJSONTyped = MembershipTransactionInfoTypeFromJSONTyped;
function MembershipTransactionInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'currencyCode': value.currencyCode,
        'hotelId': value.hotelId,
        'nights': value.nights,
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'stay': value.stay,
        'stayTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.stayTimeSpan),
        'transactionDate': value.transactionDate,
        'transactionType': value.transactionType,
    };
}
exports.MembershipTransactionInfoTypeToJSON = MembershipTransactionInfoTypeToJSON;
