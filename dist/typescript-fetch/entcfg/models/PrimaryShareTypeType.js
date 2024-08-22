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
exports.PrimaryShareTypeTypeToJSON = exports.PrimaryShareTypeTypeFromJSONTyped = exports.PrimaryShareTypeTypeFromJSON = exports.PrimaryShareTypeType = void 0;
/**
 *
 * @export
 */
exports.PrimaryShareTypeType = {
    Primary: 'Primary',
    NonPrimary: 'NonPrimary'
};
function PrimaryShareTypeTypeFromJSON(json) {
    return PrimaryShareTypeTypeFromJSONTyped(json, false);
}
exports.PrimaryShareTypeTypeFromJSON = PrimaryShareTypeTypeFromJSON;
function PrimaryShareTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PrimaryShareTypeTypeFromJSONTyped = PrimaryShareTypeTypeFromJSONTyped;
function PrimaryShareTypeTypeToJSON(value) {
    return value;
}
exports.PrimaryShareTypeTypeToJSON = PrimaryShareTypeTypeToJSON;
