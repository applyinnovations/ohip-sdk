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
exports.TemplateHotelDetailsDetailsToJSON = exports.TemplateHotelDetailsDetailsFromJSONTyped = exports.TemplateHotelDetailsDetailsFromJSON = exports.instanceOfTemplateHotelDetailsDetails = void 0;
const runtime_1 = require("../runtime");
const Links_1 = require("./Links");
const TemplateHotelDetailsType_1 = require("./TemplateHotelDetailsType");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TemplateHotelDetailsDetails interface.
 */
function instanceOfTemplateHotelDetailsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTemplateHotelDetailsDetails = instanceOfTemplateHotelDetailsDetails;
function TemplateHotelDetailsDetailsFromJSON(json) {
    return TemplateHotelDetailsDetailsFromJSONTyped(json, false);
}
exports.TemplateHotelDetailsDetailsFromJSON = TemplateHotelDetailsDetailsFromJSON;
function TemplateHotelDetailsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateHotelDetails': !(0, runtime_1.exists)(json, 'templateHotelDetails') ? undefined : (0, TemplateHotelDetailsType_1.TemplateHotelDetailsTypeFromJSON)(json['templateHotelDetails']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TemplateHotelDetailsDetailsFromJSONTyped = TemplateHotelDetailsDetailsFromJSONTyped;
function TemplateHotelDetailsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateHotelDetails': (0, TemplateHotelDetailsType_1.TemplateHotelDetailsTypeToJSON)(value.templateHotelDetails),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TemplateHotelDetailsDetailsToJSON = TemplateHotelDetailsDetailsToJSON;
