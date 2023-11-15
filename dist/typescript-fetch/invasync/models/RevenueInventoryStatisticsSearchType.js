"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.RevenueInventoryStatisticsSearchTypeToJSON = exports.RevenueInventoryStatisticsSearchTypeFromJSONTyped = exports.RevenueInventoryStatisticsSearchTypeFromJSON = exports.instanceOfRevenueInventoryStatisticsSearchType = exports.RevenueInventoryStatisticsSearchTypeGroupByEnum = void 0;
const runtime_1 = require("../runtime");
/**
 * @export
 */
exports.RevenueInventoryStatisticsSearchTypeGroupByEnum = {
    MarketCode: 'MarketCode',
    RoomType: 'RoomType',
    GuaranteeType: 'GuaranteeType'
};
/**
 * Check if a given object implements the RevenueInventoryStatisticsSearchType interface.
 */
function instanceOfRevenueInventoryStatisticsSearchType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRevenueInventoryStatisticsSearchType = instanceOfRevenueInventoryStatisticsSearchType;
function RevenueInventoryStatisticsSearchTypeFromJSON(json) {
    return RevenueInventoryStatisticsSearchTypeFromJSONTyped(json, false);
}
exports.RevenueInventoryStatisticsSearchTypeFromJSON = RevenueInventoryStatisticsSearchTypeFromJSON;
function RevenueInventoryStatisticsSearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'dateRangeEnd': !(0, runtime_1.exists)(json, 'dateRangeEnd') ? undefined : json['dateRangeEnd'],
        'dateRangeStart': !(0, runtime_1.exists)(json, 'dateRangeStart') ? undefined : json['dateRangeStart'],
        'groupBy': !(0, runtime_1.exists)(json, 'groupBy') ? undefined : json['groupBy'],
        'guaranteeCodes': !(0, runtime_1.exists)(json, 'guaranteeCodes') ? undefined : json['guaranteeCodes'],
        'marketCodes': !(0, runtime_1.exists)(json, 'marketCodes') ? undefined : json['marketCodes'],
        'roomTypes': !(0, runtime_1.exists)(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}
exports.RevenueInventoryStatisticsSearchTypeFromJSONTyped = RevenueInventoryStatisticsSearchTypeFromJSONTyped;
function RevenueInventoryStatisticsSearchTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'dateRangeEnd': value.dateRangeEnd,
        'dateRangeStart': value.dateRangeStart,
        'groupBy': value.groupBy === undefined ? undefined : Array.from(value.groupBy),
        'guaranteeCodes': value.guaranteeCodes,
        'marketCodes': value.marketCodes,
        'roomTypes': value.roomTypes,
    };
}
exports.RevenueInventoryStatisticsSearchTypeToJSON = RevenueInventoryStatisticsSearchTypeToJSON;
