"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
        'expireDate': !(0, runtime_1.exists)(json, 'expireDate') ? undefined : json['expireDate'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'membershipId': !(0, runtime_1.exists)(json, 'membershipId') ? undefined : json['membershipId'],
        'membershipLevel': !(0, runtime_1.exists)(json, 'membershipLevel') ? undefined : json['membershipLevel'],
        'membershipLevelDesc': !(0, runtime_1.exists)(json, 'membershipLevelDesc') ? undefined : json['membershipLevelDesc'],
        'membershipTypeDesc': !(0, runtime_1.exists)(json, 'membershipTypeDesc') ? undefined : json['membershipTypeDesc'],
        'nameOnCard': !(0, runtime_1.exists)(json, 'nameOnCard') ? undefined : json['nameOnCard'],
        'playerRanking': !(0, runtime_1.exists)(json, 'playerRanking') ? undefined : json['playerRanking'],
        'primaryMembership': !(0, runtime_1.exists)(json, 'primaryMembership') ? undefined : json['primaryMembership'],
        'programCode': !(0, runtime_1.exists)(json, 'programCode') ? undefined : json['programCode'],
        'totalAmountRedeemed': !(0, runtime_1.exists)(json, 'totalAmountRedeemed') ? undefined : json['totalAmountRedeemed'],
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
        'expireDate': value.expireDate,
        'inactive': value.inactive,
        'membershipId': value.membershipId,
        'membershipLevel': value.membershipLevel,
        'membershipLevelDesc': value.membershipLevelDesc,
        'membershipTypeDesc': value.membershipTypeDesc,
        'nameOnCard': value.nameOnCard,
        'playerRanking': value.playerRanking,
        'primaryMembership': value.primaryMembership,
        'programCode': value.programCode,
        'totalAmountRedeemed': value.totalAmountRedeemed,
    };
}
exports.MembershipInfoTypeToJSON = MembershipInfoTypeToJSON;