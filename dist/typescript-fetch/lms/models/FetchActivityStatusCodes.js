"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchActivityStatusCodesToJSON = exports.FetchActivityStatusCodesFromJSONTyped = exports.FetchActivityStatusCodesFromJSON = exports.instanceOfFetchActivityStatusCodes = void 0;
const runtime_1 = require("../runtime");
const ActivityStatusCodesType_1 = require("./ActivityStatusCodesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the FetchActivityStatusCodes interface.
 */
function instanceOfFetchActivityStatusCodes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFetchActivityStatusCodes = instanceOfFetchActivityStatusCodes;
function FetchActivityStatusCodesFromJSON(json) {
    return FetchActivityStatusCodesFromJSONTyped(json, false);
}
exports.FetchActivityStatusCodesFromJSON = FetchActivityStatusCodesFromJSON;
function FetchActivityStatusCodesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'activityStatusCodes': !(0, runtime_1.exists)(json, 'activityStatusCodes') ? undefined : (0, ActivityStatusCodesType_1.ActivityStatusCodesTypeFromJSON)(json['activityStatusCodes']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.FetchActivityStatusCodesFromJSONTyped = FetchActivityStatusCodesFromJSONTyped;
function FetchActivityStatusCodesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'activityStatusCodes': (0, ActivityStatusCodesType_1.ActivityStatusCodesTypeToJSON)(value.activityStatusCodes),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.FetchActivityStatusCodesToJSON = FetchActivityStatusCodesToJSON;
