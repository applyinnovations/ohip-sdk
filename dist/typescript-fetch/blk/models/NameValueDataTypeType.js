"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameValueDataTypeTypeToJSON = exports.NameValueDataTypeTypeFromJSONTyped = exports.NameValueDataTypeTypeFromJSON = exports.NameValueDataTypeType = void 0;
/**
 *
 * @export
 */
exports.NameValueDataTypeType = {
    String: 'String',
    Number: 'Number',
    Date: 'Date',
    Datetime: 'Datetime',
    Time: 'Time',
    Integer: 'Integer'
};
function NameValueDataTypeTypeFromJSON(json) {
    return NameValueDataTypeTypeFromJSONTyped(json, false);
}
exports.NameValueDataTypeTypeFromJSON = NameValueDataTypeTypeFromJSON;
function NameValueDataTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NameValueDataTypeTypeFromJSONTyped = NameValueDataTypeTypeFromJSONTyped;
function NameValueDataTypeTypeToJSON(value) {
    return value;
}
exports.NameValueDataTypeTypeToJSON = NameValueDataTypeTypeToJSON;
