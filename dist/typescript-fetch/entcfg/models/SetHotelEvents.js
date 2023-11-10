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
exports.SetHotelEventsToJSON = exports.SetHotelEventsFromJSONTyped = exports.SetHotelEventsFromJSON = exports.instanceOfSetHotelEvents = void 0;
const runtime_1 = require("../runtime");
const HotelEventCodesType_1 = require("./HotelEventCodesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the SetHotelEvents interface.
 */
function instanceOfSetHotelEvents(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSetHotelEvents = instanceOfSetHotelEvents;
function SetHotelEventsFromJSON(json) {
    return SetHotelEventsFromJSONTyped(json, false);
}
exports.SetHotelEventsFromJSON = SetHotelEventsFromJSON;
function SetHotelEventsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelEvents': !(0, runtime_1.exists)(json, 'hotelEvents') ? undefined : (0, HotelEventCodesType_1.HotelEventCodesTypeFromJSON)(json['hotelEvents']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.SetHotelEventsFromJSONTyped = SetHotelEventsFromJSONTyped;
function SetHotelEventsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelEvents': (0, HotelEventCodesType_1.HotelEventCodesTypeToJSON)(value.hotelEvents),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.SetHotelEventsToJSON = SetHotelEventsToJSON;
