"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RateGroupsInfoToJSON = exports.RateGroupsInfoFromJSONTyped = exports.RateGroupsInfoFromJSON = exports.instanceOfRateGroupsInfo = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RateGroupsType_1 = require("./RateGroupsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the RateGroupsInfo interface.
 */
function instanceOfRateGroupsInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateGroupsInfo = instanceOfRateGroupsInfo;
function RateGroupsInfoFromJSON(json) {
    return RateGroupsInfoFromJSONTyped(json, false);
}
exports.RateGroupsInfoFromJSON = RateGroupsInfoFromJSON;
function RateGroupsInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'rateGroups': !(0, runtime_1.exists)(json, 'rateGroups') ? undefined : (0, RateGroupsType_1.RateGroupsTypeFromJSON)(json['rateGroups']),
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.RateGroupsInfoFromJSONTyped = RateGroupsInfoFromJSONTyped;
function RateGroupsInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'offset': value.offset,
        'rateGroups': (0, RateGroupsType_1.RateGroupsTypeToJSON)(value.rateGroups),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.RateGroupsInfoToJSON = RateGroupsInfoToJSON;
