"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNameTypeTypeToJSON = exports.PersonNameTypeTypeFromJSONTyped = exports.PersonNameTypeTypeFromJSON = exports.PersonNameTypeType = void 0;
/**
 * Person's name in an external system.
 * @export
 */
exports.PersonNameTypeType = {
    Primary: 'Primary',
    Alternate: 'Alternate',
    Incognito: 'Incognito',
    External: 'External',
    Phonetic: 'Phonetic'
};
function PersonNameTypeTypeFromJSON(json) {
    return PersonNameTypeTypeFromJSONTyped(json, false);
}
exports.PersonNameTypeTypeFromJSON = PersonNameTypeTypeFromJSON;
function PersonNameTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.PersonNameTypeTypeFromJSONTyped = PersonNameTypeTypeFromJSONTyped;
function PersonNameTypeTypeToJSON(value) {
    return value;
}
exports.PersonNameTypeTypeToJSON = PersonNameTypeTypeToJSON;
