"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.HotelDetailsDetailsToJSON = exports.HotelDetailsDetailsFromJSONTyped = exports.HotelDetailsDetailsFromJSON = exports.instanceOfHotelDetailsDetails = void 0;
const runtime_1 = require("../runtime");
const HotelDetailsType_1 = require("./HotelDetailsType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the HotelDetailsDetails interface.
 */
function instanceOfHotelDetailsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelDetailsDetails = instanceOfHotelDetailsDetails;
function HotelDetailsDetailsFromJSON(json) {
    return HotelDetailsDetailsFromJSONTyped(json, false);
}
exports.HotelDetailsDetailsFromJSON = HotelDetailsDetailsFromJSON;
function HotelDetailsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelDetails': !(0, runtime_1.exists)(json, 'hotelDetails') ? undefined : (0, HotelDetailsType_1.HotelDetailsTypeFromJSON)(json['hotelDetails']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.HotelDetailsDetailsFromJSONTyped = HotelDetailsDetailsFromJSONTyped;
function HotelDetailsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelDetails': (0, HotelDetailsType_1.HotelDetailsTypeToJSON)(value.hotelDetails),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.HotelDetailsDetailsToJSON = HotelDetailsDetailsToJSON;
