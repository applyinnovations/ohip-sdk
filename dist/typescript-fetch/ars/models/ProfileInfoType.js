"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileInfoTypeToJSON = exports.ProfileInfoTypeFromJSONTyped = exports.ProfileInfoTypeFromJSON = exports.instanceOfProfileInfoType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ProfileInfoType interface.
 */
function instanceOfProfileInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileInfoType = instanceOfProfileInfoType;
function ProfileInfoTypeFromJSON(json) {
    return ProfileInfoTypeFromJSONTyped(json, false);
}
exports.ProfileInfoTypeFromJSON = ProfileInfoTypeFromJSON;
function ProfileInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'city': !(0, runtime_1.exists)(json, 'city') ? undefined : json['city'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'phone': !(0, runtime_1.exists)(json, 'phone') ? undefined : json['phone'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['profileId']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.ProfileInfoTypeFromJSONTyped = ProfileInfoTypeFromJSONTyped;
function ProfileInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'city': value.city,
        'name': value.name,
        'phone': value.phone,
        'profileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.profileId),
        'type': value.type,
    };
}
exports.ProfileInfoTypeToJSON = ProfileInfoTypeToJSON;
