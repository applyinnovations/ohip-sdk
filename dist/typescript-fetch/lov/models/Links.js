"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud List of Values Management API
 * APIs to cater for List of Value functionality in OPERA Cloud. A List of Values in the OPERA Application can be configured by a property.  Then by using these APIs you can retrieve all configured codes.  As an example, Titles is a configurable ListOfValues.  A hotel can specify what titles they wish to use, and thus fetching the LOV for title, you can view the codes that are configured for a property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
