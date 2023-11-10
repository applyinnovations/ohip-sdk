"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventResourceTypeToJSON = exports.EventResourceTypeFromJSONTyped = exports.EventResourceTypeFromJSON = exports.EventResourceType = void 0;
/**
 * It represents Menu as Resource.
 * @export
 */
exports.EventResourceType = {
    Space: 'Space',
    Item: 'Item',
    Menu: 'Menu'
};
function EventResourceTypeFromJSON(json) {
    return EventResourceTypeFromJSONTyped(json, false);
}
exports.EventResourceTypeFromJSON = EventResourceTypeFromJSON;
function EventResourceTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.EventResourceTypeFromJSONTyped = EventResourceTypeFromJSONTyped;
function EventResourceTypeToJSON(value) {
    return value;
}
exports.EventResourceTypeToJSON = EventResourceTypeToJSON;
