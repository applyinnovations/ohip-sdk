"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestrictionsHistoryToJSON = exports.RestrictionsHistoryFromJSONTyped = exports.RestrictionsHistoryFromJSON = exports.instanceOfRestrictionsHistory = void 0;
const runtime_1 = require("../runtime");
const FetchRestrictionsHistoryRSType_1 = require("./FetchRestrictionsHistoryRSType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RestrictionsHistory interface.
 */
function instanceOfRestrictionsHistory(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRestrictionsHistory = instanceOfRestrictionsHistory;
function RestrictionsHistoryFromJSON(json) {
    return RestrictionsHistoryFromJSONTyped(json, false);
}
exports.RestrictionsHistoryFromJSON = RestrictionsHistoryFromJSON;
function RestrictionsHistoryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'restrictionsHistory': !(0, runtime_1.exists)(json, 'restrictionsHistory') ? undefined : (0, FetchRestrictionsHistoryRSType_1.FetchRestrictionsHistoryRSTypeFromJSON)(json['restrictionsHistory']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RestrictionsHistoryFromJSONTyped = RestrictionsHistoryFromJSONTyped;
function RestrictionsHistoryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'restrictionsHistory': (0, FetchRestrictionsHistoryRSType_1.FetchRestrictionsHistoryRSTypeToJSON)(value.restrictionsHistory),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RestrictionsHistoryToJSON = RestrictionsHistoryToJSON;
