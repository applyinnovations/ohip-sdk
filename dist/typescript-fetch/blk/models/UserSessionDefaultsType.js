"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSessionDefaultsTypeToJSON = exports.UserSessionDefaultsTypeFromJSONTyped = exports.UserSessionDefaultsTypeFromJSON = exports.instanceOfUserSessionDefaultsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UserSessionDefaultsType interface.
 */
function instanceOfUserSessionDefaultsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUserSessionDefaultsType = instanceOfUserSessionDefaultsType;
function UserSessionDefaultsTypeFromJSON(json) {
    return UserSessionDefaultsTypeFromJSONTyped(json, false);
}
exports.UserSessionDefaultsTypeFromJSON = UserSessionDefaultsTypeFromJSON;
function UserSessionDefaultsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseLanguage': !(0, runtime_1.exists)(json, 'baseLanguage') ? undefined : json['baseLanguage'],
        'currencyCode': !(0, runtime_1.exists)(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencyFormat': !(0, runtime_1.exists)(json, 'currencyFormat') ? undefined : json['currencyFormat'],
        'dbDateFormat': !(0, runtime_1.exists)(json, 'dbDateFormat') ? undefined : json['dbDateFormat'],
        'defaultLanguage': !(0, runtime_1.exists)(json, 'defaultLanguage') ? undefined : json['defaultLanguage'],
        'javaDateFormat': !(0, runtime_1.exists)(json, 'javaDateFormat') ? undefined : json['javaDateFormat'],
        'javaTimeFormat': !(0, runtime_1.exists)(json, 'javaTimeFormat') ? undefined : json['javaTimeFormat'],
        'oracleDateFormat': !(0, runtime_1.exists)(json, 'oracleDateFormat') ? undefined : json['oracleDateFormat'],
        'oracleTimeFormat': !(0, runtime_1.exists)(json, 'oracleTimeFormat') ? undefined : json['oracleTimeFormat'],
    };
}
exports.UserSessionDefaultsTypeFromJSONTyped = UserSessionDefaultsTypeFromJSONTyped;
function UserSessionDefaultsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseLanguage': value.baseLanguage,
        'currencyCode': value.currencyCode,
        'currencyFormat': value.currencyFormat,
        'dbDateFormat': value.dbDateFormat,
        'defaultLanguage': value.defaultLanguage,
        'javaDateFormat': value.javaDateFormat,
        'javaTimeFormat': value.javaTimeFormat,
        'oracleDateFormat': value.oracleDateFormat,
        'oracleTimeFormat': value.oracleTimeFormat,
    };
}
exports.UserSessionDefaultsTypeToJSON = UserSessionDefaultsTypeToJSON;
