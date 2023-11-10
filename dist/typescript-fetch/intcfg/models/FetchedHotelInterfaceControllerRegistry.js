"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchedHotelInterfaceControllerRegistryToJSON = exports.FetchedHotelInterfaceControllerRegistryFromJSONTyped = exports.FetchedHotelInterfaceControllerRegistryFromJSON = exports.instanceOfFetchedHotelInterfaceControllerRegistry = void 0;
const runtime_1 = require("../runtime");
const HotelInterfaceControllerRegsType_1 = require("./HotelInterfaceControllerRegsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the FetchedHotelInterfaceControllerRegistry interface.
 */
function instanceOfFetchedHotelInterfaceControllerRegistry(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfFetchedHotelInterfaceControllerRegistry = instanceOfFetchedHotelInterfaceControllerRegistry;
function FetchedHotelInterfaceControllerRegistryFromJSON(json) {
    return FetchedHotelInterfaceControllerRegistryFromJSONTyped(json, false);
}
exports.FetchedHotelInterfaceControllerRegistryFromJSON = FetchedHotelInterfaceControllerRegistryFromJSON;
function FetchedHotelInterfaceControllerRegistryFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'reg': !(0, runtime_1.exists)(json, 'reg') ? undefined : (0, HotelInterfaceControllerRegsType_1.HotelInterfaceControllerRegsTypeFromJSON)(json['reg']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.FetchedHotelInterfaceControllerRegistryFromJSONTyped = FetchedHotelInterfaceControllerRegistryFromJSONTyped;
function FetchedHotelInterfaceControllerRegistryToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'reg': (0, HotelInterfaceControllerRegsType_1.HotelInterfaceControllerRegsTypeToJSON)(value.reg),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.FetchedHotelInterfaceControllerRegistryToJSON = FetchedHotelInterfaceControllerRegistryToJSON;
