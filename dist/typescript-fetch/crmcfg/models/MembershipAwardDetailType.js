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
exports.MembershipAwardDetailTypeToJSON = exports.MembershipAwardDetailTypeFromJSONTyped = exports.MembershipAwardDetailTypeFromJSON = exports.instanceOfMembershipAwardDetailType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the MembershipAwardDetailType interface.
 */
function instanceOfMembershipAwardDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipAwardDetailType = instanceOfMembershipAwardDetailType;
function MembershipAwardDetailTypeFromJSON(json) {
    return MembershipAwardDetailTypeFromJSONTyped(json, false);
}
exports.MembershipAwardDetailTypeFromJSON = MembershipAwardDetailTypeFromJSON;
function MembershipAwardDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'membershipType': !(0, runtime_1.exists)(json, 'membershipType') ? undefined : json['membershipType'],
        'awardCode': !(0, runtime_1.exists)(json, 'awardCode') ? undefined : json['awardCode'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'upgradeId': !(0, runtime_1.exists)(json, 'upgradeId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['upgradeId']),
        'groupUpgrade': !(0, runtime_1.exists)(json, 'groupUpgrade') ? undefined : json['groupUpgrade'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['dateRange']),
        'pointsRequired': !(0, runtime_1.exists)(json, 'pointsRequired') ? undefined : json['pointsRequired'],
        'fromRoom': !(0, runtime_1.exists)(json, 'fromRoom') ? undefined : json['fromRoom'],
        'toRoom': !(0, runtime_1.exists)(json, 'toRoom') ? undefined : json['toRoom'],
        'fromRoomGroup': !(0, runtime_1.exists)(json, 'fromRoomGroup') ? undefined : json['fromRoomGroup'],
        'toRoomGroup': !(0, runtime_1.exists)(json, 'toRoomGroup') ? undefined : json['toRoomGroup'],
    };
}
exports.MembershipAwardDetailTypeFromJSONTyped = MembershipAwardDetailTypeFromJSONTyped;
function MembershipAwardDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'membershipType': value.membershipType,
        'awardCode': value.awardCode,
        'hotelId': value.hotelId,
        'code': value.code,
        'upgradeId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.upgradeId),
        'groupUpgrade': value.groupUpgrade,
        'inactive': value.inactive,
        'dateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.dateRange),
        'pointsRequired': value.pointsRequired,
        'fromRoom': value.fromRoom,
        'toRoom': value.toRoom,
        'fromRoomGroup': value.fromRoomGroup,
        'toRoomGroup': value.toRoomGroup,
    };
}
exports.MembershipAwardDetailTypeToJSON = MembershipAwardDetailTypeToJSON;