"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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