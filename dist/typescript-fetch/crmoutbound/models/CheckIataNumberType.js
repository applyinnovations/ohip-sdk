"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIataNumberTypeToJSON = exports.CheckIataNumberTypeFromJSONTyped = exports.CheckIataNumberTypeFromJSON = exports.instanceOfCheckIataNumberType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CheckIataNumberType interface.
 */
function instanceOfCheckIataNumberType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCheckIataNumberType = instanceOfCheckIataNumberType;
function CheckIataNumberTypeFromJSON(json) {
    return CheckIataNumberTypeFromJSONTyped(json, false);
}
exports.CheckIataNumberTypeFromJSON = CheckIataNumberTypeFromJSON;
function CheckIataNumberTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'lastRefreshDate': !(0, runtime_1.exists)(json, 'lastRefreshDate') ? undefined : json['lastRefreshDate'],
        'reason': !(0, runtime_1.exists)(json, 'reason') ? undefined : json['reason'],
        'agencyName': !(0, runtime_1.exists)(json, 'agencyName') ? undefined : json['agencyName'],
        'approvalDate': !(0, runtime_1.exists)(json, 'approvalDate') ? undefined : json['approvalDate'],
        'agencyClass': !(0, runtime_1.exists)(json, 'agencyClass') ? undefined : json['agencyClass'],
        'siteType': !(0, runtime_1.exists)(json, 'siteType') ? undefined : json['siteType'],
        'address': !(0, runtime_1.exists)(json, 'address') ? undefined : json['address'],
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'postalCode': !(0, runtime_1.exists)(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !(0, runtime_1.exists)(json, 'state') ? undefined : json['state'],
        'country': !(0, runtime_1.exists)(json, 'country') ? undefined : json['country'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'message': !(0, runtime_1.exists)(json, 'message') ? undefined : json['message'],
    };
}
exports.CheckIataNumberTypeFromJSONTyped = CheckIataNumberTypeFromJSONTyped;
function CheckIataNumberTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'lastRefreshDate': value.lastRefreshDate,
        'reason': value.reason,
        'agencyName': value.agencyName,
        'approvalDate': value.approvalDate,
        'agencyClass': value.agencyClass,
        'siteType': value.siteType,
        'address': value.address,
        'city': value.city,
        'postalCode': value.postalCode,
        'state': value.state,
        'country': value.country,
        'phoneNumber': value.phoneNumber,
        'message': value.message,
    };
}
exports.CheckIataNumberTypeToJSON = CheckIataNumberTypeToJSON;