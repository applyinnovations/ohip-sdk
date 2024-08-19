"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SetDayTypesToJSON = exports.SetDayTypesFromJSONTyped = exports.SetDayTypesFromJSON = exports.instanceOfSetDayTypes = void 0;
const runtime_1 = require("../runtime");
const HotelDayTypeType_1 = require("./HotelDayTypeType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the SetDayTypes interface.
 */
function instanceOfSetDayTypes(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSetDayTypes = instanceOfSetDayTypes;
function SetDayTypesFromJSON(json) {
    return SetDayTypesFromJSONTyped(json, false);
}
exports.SetDayTypesFromJSON = SetDayTypesFromJSON;
function SetDayTypesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelDayTypes': !(0, runtime_1.exists)(json, 'hotelDayTypes') ? undefined : (json['hotelDayTypes'].map(HotelDayTypeType_1.HotelDayTypeTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.SetDayTypesFromJSONTyped = SetDayTypesFromJSONTyped;
function SetDayTypesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelDayTypes': value.hotelDayTypes === undefined ? undefined : (value.hotelDayTypes.map(HotelDayTypeType_1.HotelDayTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.SetDayTypesToJSON = SetDayTypesToJSON;
