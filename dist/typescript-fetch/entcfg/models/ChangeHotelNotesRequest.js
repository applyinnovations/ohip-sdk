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
exports.ChangeHotelNotesRequestToJSON = exports.ChangeHotelNotesRequestFromJSONTyped = exports.ChangeHotelNotesRequestFromJSON = exports.instanceOfChangeHotelNotesRequest = void 0;
const runtime_1 = require("../runtime");
const HotelNotesType_1 = require("./HotelNotesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeHotelNotesRequest interface.
 */
function instanceOfChangeHotelNotesRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeHotelNotesRequest = instanceOfChangeHotelNotesRequest;
function ChangeHotelNotesRequestFromJSON(json) {
    return ChangeHotelNotesRequestFromJSONTyped(json, false);
}
exports.ChangeHotelNotesRequestFromJSON = ChangeHotelNotesRequestFromJSON;
function ChangeHotelNotesRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelNotes': !(0, runtime_1.exists)(json, 'hotelNotes') ? undefined : (0, HotelNotesType_1.HotelNotesTypeFromJSON)(json['hotelNotes']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeHotelNotesRequestFromJSONTyped = ChangeHotelNotesRequestFromJSONTyped;
function ChangeHotelNotesRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelNotes': (0, HotelNotesType_1.HotelNotesTypeToJSON)(value.hotelNotes),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeHotelNotesRequestToJSON = ChangeHotelNotesRequestToJSON;
