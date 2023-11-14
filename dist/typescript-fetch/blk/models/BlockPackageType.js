"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlockPackageTypeToJSON = exports.BlockPackageTypeFromJSONTyped = exports.BlockPackageTypeFromJSON = exports.instanceOfBlockPackageType = void 0;
const runtime_1 = require("../runtime");
const PackageCodeHeaderType_1 = require("./PackageCodeHeaderType");
const PackageConsumptionType_1 = require("./PackageConsumptionType");
const TimeSpanType_1 = require("./TimeSpanType");
/**
 * Check if a given object implements the BlockPackageType interface.
 */
function instanceOfBlockPackageType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBlockPackageType = instanceOfBlockPackageType;
function BlockPackageTypeFromJSON(json) {
    return BlockPackageTypeFromJSONTyped(json, false);
}
exports.BlockPackageTypeFromJSON = BlockPackageTypeFromJSON;
function BlockPackageTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'consumptionDetails': !(0, runtime_1.exists)(json, 'consumptionDetails') ? undefined : (0, PackageConsumptionType_1.PackageConsumptionTypeFromJSON)(json['consumptionDetails']),
        'endDate': !(0, runtime_1.exists)(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'newTimeSpan': !(0, runtime_1.exists)(json, 'newTimeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['newTimeSpan']),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'packageGroup': !(0, runtime_1.exists)(json, 'packageGroup') ? undefined : json['packageGroup'],
        'packageHeaderType': !(0, runtime_1.exists)(json, 'packageHeaderType') ? undefined : (0, PackageCodeHeaderType_1.PackageCodeHeaderTypeFromJSON)(json['packageHeaderType']),
        'ratePlanCode': !(0, runtime_1.exists)(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'startDate': !(0, runtime_1.exists)(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}
exports.BlockPackageTypeFromJSONTyped = BlockPackageTypeFromJSONTyped;
function BlockPackageTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'consumptionDetails': (0, PackageConsumptionType_1.PackageConsumptionTypeToJSON)(value.consumptionDetails),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substring(0, 10)),
        'newTimeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.newTimeSpan),
        'packageCode': value.packageCode,
        'packageGroup': value.packageGroup,
        'packageHeaderType': (0, PackageCodeHeaderType_1.PackageCodeHeaderTypeToJSON)(value.packageHeaderType),
        'ratePlanCode': value.ratePlanCode,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substring(0, 10)),
    };
}
exports.BlockPackageTypeToJSON = BlockPackageTypeToJSON;