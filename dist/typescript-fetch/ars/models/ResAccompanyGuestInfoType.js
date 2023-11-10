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
exports.ResAccompanyGuestInfoTypeToJSON = exports.ResAccompanyGuestInfoTypeFromJSONTyped = exports.ResAccompanyGuestInfoTypeFromJSON = exports.instanceOfResAccompanyGuestInfoType = void 0;
const runtime_1 = require("../runtime");
const ProfileIdList_1 = require("./ProfileIdList");
/**
 * Check if a given object implements the ResAccompanyGuestInfoType interface.
 */
function instanceOfResAccompanyGuestInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResAccompanyGuestInfoType = instanceOfResAccompanyGuestInfoType;
function ResAccompanyGuestInfoTypeFromJSON(json) {
    return ResAccompanyGuestInfoTypeFromJSONTyped(json, false);
}
exports.ResAccompanyGuestInfoTypeFromJSON = ResAccompanyGuestInfoTypeFromJSON;
function ResAccompanyGuestInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'firstName': !(0, runtime_1.exists)(json, 'firstName') ? undefined : json['firstName'],
        'fullName': !(0, runtime_1.exists)(json, 'fullName') ? undefined : json['fullName'],
        'lastName': !(0, runtime_1.exists)(json, 'lastName') ? undefined : json['lastName'],
        'profileIdList': !(0, runtime_1.exists)(json, 'profileIdList') ? undefined : (0, ProfileIdList_1.ProfileIdListFromJSON)(json['profileIdList']),
        'registrationCardNo': !(0, runtime_1.exists)(json, 'registrationCardNo') ? undefined : json['registrationCardNo'],
    };
}
exports.ResAccompanyGuestInfoTypeFromJSONTyped = ResAccompanyGuestInfoTypeFromJSONTyped;
function ResAccompanyGuestInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'firstName': value.firstName,
        'fullName': value.fullName,
        'lastName': value.lastName,
        'profileIdList': (0, ProfileIdList_1.ProfileIdListToJSON)(value.profileIdList),
        'registrationCardNo': value.registrationCardNo,
    };
}
exports.ResAccompanyGuestInfoTypeToJSON = ResAccompanyGuestInfoTypeToJSON;
