"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchHotelsDetailsToJSON = exports.SearchHotelsDetailsFromJSONTyped = exports.SearchHotelsDetailsFromJSON = exports.instanceOfSearchHotelsDetails = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const SearchHotelsDetailsHotels_1 = require("./SearchHotelsDetailsHotels");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the SearchHotelsDetails interface.
 */
function instanceOfSearchHotelsDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfSearchHotelsDetails = instanceOfSearchHotelsDetails;
function SearchHotelsDetailsFromJSON(json) {
    return SearchHotelsDetailsFromJSONTyped(json, false);
}
exports.SearchHotelsDetailsFromJSON = SearchHotelsDetailsFromJSON;
function SearchHotelsDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotels': !(0, runtime_1.exists)(json, 'hotels') ? undefined : (0, SearchHotelsDetailsHotels_1.SearchHotelsDetailsHotelsFromJSON)(json['hotels']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.SearchHotelsDetailsFromJSONTyped = SearchHotelsDetailsFromJSONTyped;
function SearchHotelsDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotels': (0, SearchHotelsDetailsHotels_1.SearchHotelsDetailsHotelsToJSON)(value.hotels),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.SearchHotelsDetailsToJSON = SearchHotelsDetailsToJSON;