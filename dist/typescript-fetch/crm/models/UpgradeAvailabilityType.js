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
exports.UpgradeAvailabilityTypeToJSON = exports.UpgradeAvailabilityTypeFromJSONTyped = exports.UpgradeAvailabilityTypeFromJSON = exports.instanceOfUpgradeAvailabilityType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UpgradeAvailabilityType interface.
 */
function instanceOfUpgradeAvailabilityType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUpgradeAvailabilityType = instanceOfUpgradeAvailabilityType;
function UpgradeAvailabilityTypeFromJSON(json) {
    return UpgradeAvailabilityTypeFromJSONTyped(json, false);
}
exports.UpgradeAvailabilityTypeFromJSON = UpgradeAvailabilityTypeFromJSON;
function UpgradeAvailabilityTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'awardNumber': !(0, runtime_1.exists)(json, 'awardNumber') ? undefined : json['awardNumber'],
        'awardType': !(0, runtime_1.exists)(json, 'awardType') ? undefined : json['awardType'],
        'cancelPenaltyCharge': !(0, runtime_1.exists)(json, 'cancelPenaltyCharge') ? undefined : json['cancelPenaltyCharge'],
        'cancelPenaltyDays': !(0, runtime_1.exists)(json, 'cancelPenaltyDays') ? undefined : json['cancelPenaltyDays'],
        'cancelPenaltyPoints': !(0, runtime_1.exists)(json, 'cancelPenaltyPoints') ? undefined : json['cancelPenaltyPoints'],
        'cancelPenaltyType': !(0, runtime_1.exists)(json, 'cancelPenaltyType') ? undefined : json['cancelPenaltyType'],
        'fromRoom': !(0, runtime_1.exists)(json, 'fromRoom') ? undefined : json['fromRoom'],
        'fromRoomCategory': !(0, runtime_1.exists)(json, 'fromRoomCategory') ? undefined : json['fromRoomCategory'],
        'fromRoomDescription': !(0, runtime_1.exists)(json, 'fromRoomDescription') ? undefined : json['fromRoomDescription'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'rawIssueKey': !(0, runtime_1.exists)(json, 'rawIssueKey') ? undefined : json['rawIssueKey'],
        'stayDate': !(0, runtime_1.exists)(json, 'stayDate') ? undefined : (new Date(json['stayDate'])),
        'toRoom': !(0, runtime_1.exists)(json, 'toRoom') ? undefined : json['toRoom'],
        'toRoomCategory': !(0, runtime_1.exists)(json, 'toRoomCategory') ? undefined : json['toRoomCategory'],
        'toRoomDescription': !(0, runtime_1.exists)(json, 'toRoomDescription') ? undefined : json['toRoomDescription'],
        'totalAvailablePoints': !(0, runtime_1.exists)(json, 'totalAvailablePoints') ? undefined : json['totalAvailablePoints'],
    };
}
exports.UpgradeAvailabilityTypeFromJSONTyped = UpgradeAvailabilityTypeFromJSONTyped;
function UpgradeAvailabilityTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'awardNumber': value.awardNumber,
        'awardType': value.awardType,
        'cancelPenaltyCharge': value.cancelPenaltyCharge,
        'cancelPenaltyDays': value.cancelPenaltyDays,
        'cancelPenaltyPoints': value.cancelPenaltyPoints,
        'cancelPenaltyType': value.cancelPenaltyType,
        'fromRoom': value.fromRoom,
        'fromRoomCategory': value.fromRoomCategory,
        'fromRoomDescription': value.fromRoomDescription,
        'hotelId': value.hotelId,
        'pointsRequired': value.pointsRequired,
        'rawIssueKey': value.rawIssueKey,
        'stayDate': value.stayDate === undefined ? undefined : (value.stayDate.toISOString().substring(0, 10)),
        'toRoom': value.toRoom,
        'toRoomCategory': value.toRoomCategory,
        'toRoomDescription': value.toRoomDescription,
        'totalAvailablePoints': value.totalAvailablePoints,
    };
}
exports.UpgradeAvailabilityTypeToJSON = UpgradeAvailabilityTypeToJSON;