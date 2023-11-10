"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchAdjustmentReasonsDetailsToJSON = exports.FetchAdjustmentReasonsDetailsFromJSONTyped = exports.FetchAdjustmentReasonsDetailsFromJSON = exports.instanceOfFetchAdjustmentReasonsDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const RoomRotationAdjustmentReasonsType_1 = require("./RoomRotationAdjustmentReasonsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the FetchAdjustmentReasonsDetails interface.
 */
function instanceOfFetchAdjustmentReasonsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFetchAdjustmentReasonsDetails = instanceOfFetchAdjustmentReasonsDetails;
function FetchAdjustmentReasonsDetailsFromJSON(json) {
    return FetchAdjustmentReasonsDetailsFromJSONTyped(json, false);
}
exports.FetchAdjustmentReasonsDetailsFromJSON = FetchAdjustmentReasonsDetailsFromJSON;
function FetchAdjustmentReasonsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustmentReasons': !(0, runtime_1.exists)(json, 'adjustmentReasons') ? undefined : (0, RoomRotationAdjustmentReasonsType_1.RoomRotationAdjustmentReasonsTypeFromJSON)(json['adjustmentReasons']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.FetchAdjustmentReasonsDetailsFromJSONTyped = FetchAdjustmentReasonsDetailsFromJSONTyped;
function FetchAdjustmentReasonsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustmentReasons': (0, RoomRotationAdjustmentReasonsType_1.RoomRotationAdjustmentReasonsTypeToJSON)(value.adjustmentReasons),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.FetchAdjustmentReasonsDetailsToJSON = FetchAdjustmentReasonsDetailsToJSON;
