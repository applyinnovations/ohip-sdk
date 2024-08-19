"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Back Office Operations API
 * APIs to cater for Back Office Operations functionality in OPERA Cloud. <br /><br /> A common BackOffice industry term is End of Day.  This closes and balances each day\'s business activities. It reconciles guest folios and processes credit card transactions. The End of Day routine rolls the business date forward and prints final reports.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessDateToJSON = exports.BusinessDateFromJSONTyped = exports.BusinessDateFromJSON = exports.instanceOfBusinessDate = void 0;
const runtime_1 = require("../runtime");
const HotelActiveEndOfDayType_1 = require("./HotelActiveEndOfDayType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the BusinessDate interface.
 */
function instanceOfBusinessDate(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfBusinessDate = instanceOfBusinessDate;
function BusinessDateFromJSON(json) {
    return BusinessDateFromJSONTyped(json, false);
}
exports.BusinessDateFromJSON = BusinessDateFromJSON;
function BusinessDateFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotels': !(0, runtime_1.exists)(json, 'hotels') ? undefined : (json['hotels'].map(HotelActiveEndOfDayType_1.HotelActiveEndOfDayTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.BusinessDateFromJSONTyped = BusinessDateFromJSONTyped;
function BusinessDateToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotels': value.hotels === undefined ? undefined : (value.hotels.map(HotelActiveEndOfDayType_1.HotelActiveEndOfDayTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.BusinessDateToJSON = BusinessDateToJSON;
