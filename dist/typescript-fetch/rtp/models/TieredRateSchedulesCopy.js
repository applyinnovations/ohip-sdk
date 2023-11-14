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
exports.TieredRateSchedulesCopyToJSON = exports.TieredRateSchedulesCopyFromJSONTyped = exports.TieredRateSchedulesCopyFromJSON = exports.instanceOfTieredRateSchedulesCopy = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RateOffsetType_1 = require("./RateOffsetType");
const UniqueIDListType_1 = require("./UniqueIDListType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TieredRateSchedulesCopy interface.
 */
function instanceOfTieredRateSchedulesCopy(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTieredRateSchedulesCopy = instanceOfTieredRateSchedulesCopy;
function TieredRateSchedulesCopyFromJSON(json) {
    return TieredRateSchedulesCopyFromJSONTyped(json, false);
}
exports.TieredRateSchedulesCopyFromJSON = TieredRateSchedulesCopyFromJSON;
function TieredRateSchedulesCopyFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adultOffset': !(0, runtime_1.exists)(json, 'adultOffset') ? undefined : (0, RateOffsetType_1.RateOffsetTypeFromJSON)(json['adultOffset']),
        'childOffset': !(0, runtime_1.exists)(json, 'childOffset') ? undefined : (0, RateOffsetType_1.RateOffsetTypeFromJSON)(json['childOffset']),
        'copyFromTierId': !(0, runtime_1.exists)(json, 'copyFromTierId') ? undefined : json['copyFromTierId'],
        'copyToTierId': !(0, runtime_1.exists)(json, 'copyToTierId') ? undefined : json['copyToTierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanSchedulesIdList': !(0, runtime_1.exists)(json, 'ratePlanSchedulesIdList') ? undefined : (0, UniqueIDListType_1.UniqueIDListTypeFromJSON)(json['ratePlanSchedulesIdList']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TieredRateSchedulesCopyFromJSONTyped = TieredRateSchedulesCopyFromJSONTyped;
function TieredRateSchedulesCopyToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adultOffset': (0, RateOffsetType_1.RateOffsetTypeToJSON)(value.adultOffset),
        'childOffset': (0, RateOffsetType_1.RateOffsetTypeToJSON)(value.childOffset),
        'copyFromTierId': value.copyFromTierId,
        'copyToTierId': value.copyToTierId,
        'hotelId': value.hotelId,
        'links': (0, Links_1.LinksToJSON)(value.links),
        'ratePlanCode': value.ratePlanCode,
        'ratePlanSchedulesIdList': (0, UniqueIDListType_1.UniqueIDListTypeToJSON)(value.ratePlanSchedulesIdList),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TieredRateSchedulesCopyToJSON = TieredRateSchedulesCopyToJSON;