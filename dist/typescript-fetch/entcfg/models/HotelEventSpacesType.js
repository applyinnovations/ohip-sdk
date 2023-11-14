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
exports.HotelEventSpacesTypeToJSON = exports.HotelEventSpacesTypeFromJSONTyped = exports.HotelEventSpacesTypeFromJSON = exports.instanceOfHotelEventSpacesType = void 0;
const runtime_1 = require("../runtime");
const HotelEventSpaceDetailsType_1 = require("./HotelEventSpaceDetailsType");
const HotelEventSpaceSummariesType_1 = require("./HotelEventSpaceSummariesType");
const HotelSetupStylesType_1 = require("./HotelSetupStylesType");
/**
 * Check if a given object implements the HotelEventSpacesType interface.
 */
function instanceOfHotelEventSpacesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfHotelEventSpacesType = instanceOfHotelEventSpacesType;
function HotelEventSpacesTypeFromJSON(json) {
    return HotelEventSpacesTypeFromJSONTyped(json, false);
}
exports.HotelEventSpacesTypeFromJSON = HotelEventSpacesTypeFromJSON;
function HotelEventSpacesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'eventSpaceDetails': !(0, runtime_1.exists)(json, 'eventSpaceDetails') ? undefined : (0, HotelEventSpaceDetailsType_1.HotelEventSpaceDetailsTypeFromJSON)(json['eventSpaceDetails']),
        'eventSpaceSummaries': !(0, runtime_1.exists)(json, 'eventSpaceSummaries') ? undefined : (0, HotelEventSpaceSummariesType_1.HotelEventSpaceSummariesTypeFromJSON)(json['eventSpaceSummaries']),
        'setupStyles': !(0, runtime_1.exists)(json, 'setupStyles') ? undefined : (0, HotelSetupStylesType_1.HotelSetupStylesTypeFromJSON)(json['setupStyles']),
    };
}
exports.HotelEventSpacesTypeFromJSONTyped = HotelEventSpacesTypeFromJSONTyped;
function HotelEventSpacesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'eventSpaceDetails': (0, HotelEventSpaceDetailsType_1.HotelEventSpaceDetailsTypeToJSON)(value.eventSpaceDetails),
        'eventSpaceSummaries': (0, HotelEventSpaceSummariesType_1.HotelEventSpaceSummariesTypeToJSON)(value.eventSpaceSummaries),
        'setupStyles': (0, HotelSetupStylesType_1.HotelSetupStylesTypeToJSON)(value.setupStyles),
    };
}
exports.HotelEventSpacesTypeToJSON = HotelEventSpacesTypeToJSON;