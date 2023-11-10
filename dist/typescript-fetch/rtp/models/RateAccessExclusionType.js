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
exports.RateAccessExclusionTypeToJSON = exports.RateAccessExclusionTypeFromJSONTyped = exports.RateAccessExclusionTypeFromJSON = exports.instanceOfRateAccessExclusionType = void 0;
const runtime_1 = require("../runtime");
const DateRangeType_1 = require("./DateRangeType");
/**
 * Check if a given object implements the RateAccessExclusionType interface.
 */
function instanceOfRateAccessExclusionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfRateAccessExclusionType = instanceOfRateAccessExclusionType;
function RateAccessExclusionTypeFromJSON(json) {
    return RateAccessExclusionTypeFromJSONTyped(json, false);
}
exports.RateAccessExclusionTypeFromJSON = RateAccessExclusionTypeFromJSON;
function RateAccessExclusionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowCancelReservation': !(0, runtime_1.exists)(json, 'allowCancelReservation') ? undefined : json['allowCancelReservation'],
        'allowCreateReservation': !(0, runtime_1.exists)(json, 'allowCreateReservation') ? undefined : json['allowCreateReservation'],
        'allowModifyReservation': !(0, runtime_1.exists)(json, 'allowModifyReservation') ? undefined : json['allowModifyReservation'],
        'dateRange': !(0, runtime_1.exists)(json, 'dateRange') ? undefined : (0, DateRangeType_1.DateRangeTypeFromJSON)(json['dateRange']),
        'excludeFromAvailability': !(0, runtime_1.exists)(json, 'excludeFromAvailability') ? undefined : json['excludeFromAvailability'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'sourceType': !(0, runtime_1.exists)(json, 'sourceType') ? undefined : json['sourceType'],
        'sourceValue': !(0, runtime_1.exists)(json, 'sourceValue') ? undefined : json['sourceValue'],
    };
}
exports.RateAccessExclusionTypeFromJSONTyped = RateAccessExclusionTypeFromJSONTyped;
function RateAccessExclusionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowCancelReservation': value.allowCancelReservation,
        'allowCreateReservation': value.allowCreateReservation,
        'allowModifyReservation': value.allowModifyReservation,
        'dateRange': (0, DateRangeType_1.DateRangeTypeToJSON)(value.dateRange),
        'excludeFromAvailability': value.excludeFromAvailability,
        'inactive': value.inactive,
        'sourceType': value.sourceType,
        'sourceValue': value.sourceValue,
    };
}
exports.RateAccessExclusionTypeToJSON = RateAccessExclusionTypeToJSON;
