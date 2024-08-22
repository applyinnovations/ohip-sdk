"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatePlansSummaryRatePlanShortInfoListToJSON = exports.RatePlansSummaryRatePlanShortInfoListFromJSONTyped = exports.RatePlansSummaryRatePlanShortInfoListFromJSON = exports.instanceOfRatePlansSummaryRatePlanShortInfoList = void 0;
const runtime_1 = require("../runtime");
const RatePlanShortInfoType_1 = require("./RatePlanShortInfoType");
/**
 * Check if a given object implements the RatePlansSummaryRatePlanShortInfoList interface.
 */
function instanceOfRatePlansSummaryRatePlanShortInfoList(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRatePlansSummaryRatePlanShortInfoList = instanceOfRatePlansSummaryRatePlanShortInfoList;
function RatePlansSummaryRatePlanShortInfoListFromJSON(json) {
    return RatePlansSummaryRatePlanShortInfoListFromJSONTyped(json, false);
}
exports.RatePlansSummaryRatePlanShortInfoListFromJSON = RatePlansSummaryRatePlanShortInfoListFromJSON;
function RatePlansSummaryRatePlanShortInfoListFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !(0, runtime_1.exists)(json, 'limit') ? undefined : json['limit'],
        'offset': !(0, runtime_1.exists)(json, 'offset') ? undefined : json['offset'],
        'ratePlanShortInfo': !(0, runtime_1.exists)(json, 'ratePlanShortInfo') ? undefined : (json['ratePlanShortInfo'].map(RatePlanShortInfoType_1.RatePlanShortInfoTypeFromJSON)),
        'totalPages': !(0, runtime_1.exists)(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.RatePlansSummaryRatePlanShortInfoListFromJSONTyped = RatePlansSummaryRatePlanShortInfoListFromJSONTyped;
function RatePlansSummaryRatePlanShortInfoListToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'count': value.count,
        'hasMore': value.hasMore,
        'limit': value.limit,
        'offset': value.offset,
        'ratePlanShortInfo': value.ratePlanShortInfo === undefined ? undefined : (value.ratePlanShortInfo.map(RatePlanShortInfoType_1.RatePlanShortInfoTypeToJSON)),
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
    };
}
exports.RatePlansSummaryRatePlanShortInfoListToJSON = RatePlansSummaryRatePlanShortInfoListToJSON;
