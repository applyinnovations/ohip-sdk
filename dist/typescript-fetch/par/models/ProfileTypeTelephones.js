"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProfileTypeTelephonesToJSON = exports.ProfileTypeTelephonesFromJSONTyped = exports.ProfileTypeTelephonesFromJSON = exports.instanceOfProfileTypeTelephones = void 0;
const runtime_1 = require("../runtime");
const TelephoneInfoType_1 = require("./TelephoneInfoType");
/**
 * Check if a given object implements the ProfileTypeTelephones interface.
 */
function instanceOfProfileTypeTelephones(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileTypeTelephones = instanceOfProfileTypeTelephones;
function ProfileTypeTelephonesFromJSON(json) {
    return ProfileTypeTelephonesFromJSONTyped(json, false);
}
exports.ProfileTypeTelephonesFromJSON = ProfileTypeTelephonesFromJSON;
function ProfileTypeTelephonesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'telephoneInfo': !(0, runtime_1.exists)(json, 'telephoneInfo') ? undefined : (json['telephoneInfo'].map(TelephoneInfoType_1.TelephoneInfoTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.ProfileTypeTelephonesFromJSONTyped = ProfileTypeTelephonesFromJSONTyped;
function ProfileTypeTelephonesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'telephoneInfo': value.telephoneInfo === undefined ? undefined : (value.telephoneInfo.map(TelephoneInfoType_1.TelephoneInfoTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.ProfileTypeTelephonesToJSON = ProfileTypeTelephonesToJSON;
