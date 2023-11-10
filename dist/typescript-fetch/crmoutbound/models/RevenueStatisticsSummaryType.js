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
exports.RevenueStatisticsSummaryTypeToJSON = exports.RevenueStatisticsSummaryTypeFromJSONTyped = exports.RevenueStatisticsSummaryTypeFromJSON = exports.instanceOfRevenueStatisticsSummaryType = void 0;
const runtime_1 = require("../runtime");
const RevenueStatisticsDetailListType_1 = require("./RevenueStatisticsDetailListType");
/**
 * Check if a given object implements the RevenueStatisticsSummaryType interface.
 */
function instanceOfRevenueStatisticsSummaryType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRevenueStatisticsSummaryType = instanceOfRevenueStatisticsSummaryType;
function RevenueStatisticsSummaryTypeFromJSON(json) {
    return RevenueStatisticsSummaryTypeFromJSONTyped(json, false);
}
exports.RevenueStatisticsSummaryTypeFromJSON = RevenueStatisticsSummaryTypeFromJSON;
function RevenueStatisticsSummaryTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'revenueDetails': !(0, runtime_1.exists)(json, 'revenueDetails') ? undefined : (0, RevenueStatisticsDetailListType_1.RevenueStatisticsDetailListTypeFromJSON)(json['revenueDetails']),
        'year': !(0, runtime_1.exists)(json, 'year') ? undefined : json['year'],
    };
}
exports.RevenueStatisticsSummaryTypeFromJSONTyped = RevenueStatisticsSummaryTypeFromJSONTyped;
function RevenueStatisticsSummaryTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'revenueDetails': (0, RevenueStatisticsDetailListType_1.RevenueStatisticsDetailListTypeToJSON)(value.revenueDetails),
        'year': value.year,
    };
}
exports.RevenueStatisticsSummaryTypeToJSON = RevenueStatisticsSummaryTypeToJSON;
