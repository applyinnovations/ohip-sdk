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
exports.RestrictionsByDateRangeTypeToJSON = exports.RestrictionsByDateRangeTypeFromJSONTyped = exports.RestrictionsByDateRangeTypeFromJSON = exports.instanceOfRestrictionsByDateRangeType = void 0;
const runtime_1 = require("../runtime");
const RestrictionSetType_1 = require("./RestrictionSetType");
/**
 * Check if a given object implements the RestrictionsByDateRangeType interface.
 */
function instanceOfRestrictionsByDateRangeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRestrictionsByDateRangeType = instanceOfRestrictionsByDateRangeType;
function RestrictionsByDateRangeTypeFromJSON(json) {
    return RestrictionsByDateRangeTypeFromJSONTyped(json, false);
}
exports.RestrictionsByDateRangeTypeFromJSON = RestrictionsByDateRangeTypeFromJSON;
function RestrictionsByDateRangeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !(0, runtime_1.exists)(json, 'chainName') ? undefined : json['chainName'],
        'count': !(0, runtime_1.exists)(json, 'count') ? undefined : json['count'],
        'hasMore': !(0, runtime_1.exists)(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelCityCode': !(0, runtime_1.exists)(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !(0, runtime_1.exists)(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'restrictionSets': !(0, runtime_1.exists)(json, 'restrictionSets') ? undefined : (json['restrictionSets'].map(RestrictionSetType_1.RestrictionSetTypeFromJSON)),
        'totalResults': !(0, runtime_1.exists)(json, 'totalResults') ? undefined : json['totalResults'],
    };
}
exports.RestrictionsByDateRangeTypeFromJSONTyped = RestrictionsByDateRangeTypeFromJSONTyped;
function RestrictionsByDateRangeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'restrictionSets': value.restrictionSets === undefined ? undefined : (value.restrictionSets.map(RestrictionSetType_1.RestrictionSetTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
exports.RestrictionsByDateRangeTypeToJSON = RestrictionsByDateRangeTypeToJSON;
