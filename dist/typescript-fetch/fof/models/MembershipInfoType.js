"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.MembershipInfoTypeToJSON = exports.MembershipInfoTypeFromJSONTyped = exports.MembershipInfoTypeFromJSON = exports.instanceOfMembershipInfoType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the MembershipInfoType interface.
 */
function instanceOfMembershipInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfMembershipInfoType = instanceOfMembershipInfoType;
function MembershipInfoTypeFromJSON(json) {
    return MembershipInfoTypeFromJSONTyped(json, false);
}
exports.MembershipInfoTypeFromJSON = MembershipInfoTypeFromJSON;
function MembershipInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'accountId': !(0, runtime_1.exists)(json, 'accountId') ? undefined : json['accountId'],
        'bonusCode': !(0, runtime_1.exists)(json, 'bonusCode') ? undefined : json['bonusCode'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDesc': !(0, runtime_1.exists)(json, 'membershipLevelDesc') ? undefined : json['membershipLevelDesc'],
        'membershipTypeDesc': !(0, runtime_1.exists)(json, 'membershipTypeDesc') ? undefined : json['membershipTypeDesc'],
        'playerRanking': !(0, runtime_1.exists)(json, 'playerRanking') ? undefined : json['playerRanking'],
        'programCode': !(0, runtime_1.exists)(json, 'programCode') ? undefined : json['programCode'],
    };
}
exports.MembershipInfoTypeFromJSONTyped = MembershipInfoTypeFromJSONTyped;
function MembershipInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'accountId': value.accountId,
        'bonusCode': value.bonusCode,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDesc': value.membershipLevelDesc,
        'membershipTypeDesc': value.membershipTypeDesc,
        'playerRanking': value.playerRanking,
        'programCode': value.programCode,
    };
}
exports.MembershipInfoTypeToJSON = MembershipInfoTypeToJSON;
