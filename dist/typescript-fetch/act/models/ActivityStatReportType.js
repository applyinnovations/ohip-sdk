"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivityStatReportTypeToJSON = exports.ActivityStatReportTypeFromJSONTyped = exports.ActivityStatReportTypeFromJSON = exports.instanceOfActivityStatReportType = void 0;
const runtime_1 = require("../runtime");
const ActivityStatCategoryType_1 = require("./ActivityStatCategoryType");
const ActivityStatReportCodeType_1 = require("./ActivityStatReportCodeType");
/**
 * Check if a given object implements the ActivityStatReportType interface.
 */
function instanceOfActivityStatReportType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfActivityStatReportType = instanceOfActivityStatReportType;
function ActivityStatReportTypeFromJSON(json) {
    return ActivityStatReportTypeFromJSONTyped(json, false);
}
exports.ActivityStatReportTypeFromJSON = ActivityStatReportTypeFromJSON;
function ActivityStatReportTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'calendarDate': !(0, runtime_1.exists)(json, 'calendarDate') ? undefined : json['calendarDate'],
        'chainCode': !(0, runtime_1.exists)(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !(0, runtime_1.exists)(json, 'chainName') ? undefined : json['chainName'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'hotelCityCode': !(0, runtime_1.exists)(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !(0, runtime_1.exists)(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !(0, runtime_1.exists)(json, 'hotelName') ? undefined : json['hotelName'],
        'reportCode': !(0, runtime_1.exists)(json, 'reportCode') ? undefined : (0, ActivityStatReportCodeType_1.ActivityStatReportCodeTypeFromJSON)(json['reportCode']),
        'statCategory': !(0, runtime_1.exists)(json, 'statCategory') ? undefined : (json['statCategory'].map(ActivityStatCategoryType_1.ActivityStatCategoryTypeFromJSON)),
    };
}
exports.ActivityStatReportTypeFromJSONTyped = ActivityStatReportTypeFromJSONTyped;
function ActivityStatReportTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'calendarDate': value.calendarDate,
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'description': value.description,
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'reportCode': (0, ActivityStatReportCodeType_1.ActivityStatReportCodeTypeToJSON)(value.reportCode),
        'statCategory': value.statCategory === undefined ? undefined : (value.statCategory.map(ActivityStatCategoryType_1.ActivityStatCategoryTypeToJSON)),
    };
}
exports.ActivityStatReportTypeToJSON = ActivityStatReportTypeToJSON;
