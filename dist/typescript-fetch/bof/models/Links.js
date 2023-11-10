"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Back Office Operations API
 * APIs to cater for Back Office Operations functionality in OPERA Cloud. <br /><br /> A common BackOffice industry term is End of Day.  This closes and balances each day\'s business activities. It reconciles guest folios and processes credit card transactions. The End of Day routine rolls the business date forward and prints final reports.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinksToJSON = exports.LinksFromJSONTyped = exports.LinksFromJSON = exports.instanceOfLinks = void 0;
/**
 * Check if a given object implements the Links interface.
 */
function instanceOfLinks(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfLinks = instanceOfLinks;
function LinksFromJSON(json) {
    return LinksFromJSONTyped(json, false);
}
exports.LinksFromJSON = LinksFromJSON;
function LinksFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.LinksFromJSONTyped = LinksFromJSONTyped;
function LinksToJSON(value) {
    return value;
}
exports.LinksToJSON = LinksToJSON;
