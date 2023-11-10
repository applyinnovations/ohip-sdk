"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EntryPointsToBeChangedToJSON = exports.EntryPointsToBeChangedFromJSONTyped = exports.EntryPointsToBeChangedFromJSON = exports.instanceOfEntryPointsToBeChanged = void 0;
const runtime_1 = require("../runtime");
const EntryPointsType_1 = require("./EntryPointsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the EntryPointsToBeChanged interface.
 */
function instanceOfEntryPointsToBeChanged(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfEntryPointsToBeChanged = instanceOfEntryPointsToBeChanged;
function EntryPointsToBeChangedFromJSON(json) {
    return EntryPointsToBeChangedFromJSONTyped(json, false);
}
exports.EntryPointsToBeChangedFromJSON = EntryPointsToBeChangedFromJSON;
function EntryPointsToBeChangedFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'entryPoints': !(0, runtime_1.exists)(json, 'entryPoints') ? undefined : (0, EntryPointsType_1.EntryPointsTypeFromJSON)(json['entryPoints']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.EntryPointsToBeChangedFromJSONTyped = EntryPointsToBeChangedFromJSONTyped;
function EntryPointsToBeChangedToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'entryPoints': (0, EntryPointsType_1.EntryPointsTypeToJSON)(value.entryPoints),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.EntryPointsToBeChangedToJSON = EntryPointsToBeChangedToJSON;
