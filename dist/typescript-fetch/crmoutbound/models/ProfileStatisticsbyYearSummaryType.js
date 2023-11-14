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
exports.ProfileStatisticsbyYearSummaryTypeToJSON = exports.ProfileStatisticsbyYearSummaryTypeFromJSONTyped = exports.ProfileStatisticsbyYearSummaryTypeFromJSON = exports.instanceOfProfileStatisticsbyYearSummaryType = void 0;
const runtime_1 = require("../runtime");
const StayDetailSummaryType_1 = require("./StayDetailSummaryType");
const StayStatisticsRevenueType_1 = require("./StayStatisticsRevenueType");
/**
 * Check if a given object implements the ProfileStatisticsbyYearSummaryType interface.
 */
function instanceOfProfileStatisticsbyYearSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfProfileStatisticsbyYearSummaryType = instanceOfProfileStatisticsbyYearSummaryType;
function ProfileStatisticsbyYearSummaryTypeFromJSON(json) {
    return ProfileStatisticsbyYearSummaryTypeFromJSONTyped(json, false);
}
exports.ProfileStatisticsbyYearSummaryTypeFromJSON = ProfileStatisticsbyYearSummaryTypeFromJSON;
function ProfileStatisticsbyYearSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'stayDetail': !(0, runtime_1.exists)(json, 'stayDetail') ? undefined : (json['stayDetail'].map(StayDetailSummaryType_1.StayDetailSummaryTypeFromJSON)),
        'netRevenue': !(0, runtime_1.exists)(json, 'netRevenue') ? undefined : (json['netRevenue'].map(StayStatisticsRevenueType_1.StayStatisticsRevenueTypeFromJSON)),
        'year': !(0, runtime_1.exists)(json, 'year') ? undefined : json['year'],
    };
}
exports.ProfileStatisticsbyYearSummaryTypeFromJSONTyped = ProfileStatisticsbyYearSummaryTypeFromJSONTyped;
function ProfileStatisticsbyYearSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'stayDetail': value.stayDetail === undefined ? undefined : (value.stayDetail.map(StayDetailSummaryType_1.StayDetailSummaryTypeToJSON)),
        'netRevenue': value.netRevenue === undefined ? undefined : (value.netRevenue.map(StayStatisticsRevenueType_1.StayStatisticsRevenueTypeToJSON)),
        'year': value.year,
    };
}
exports.ProfileStatisticsbyYearSummaryTypeToJSON = ProfileStatisticsbyYearSummaryTypeToJSON;