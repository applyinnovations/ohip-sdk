"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameTypeTypeToJSON = exports.NameTypeTypeFromJSONTyped = exports.NameTypeTypeFromJSON = exports.NameTypeType = void 0;
/**
 *
 * @export
 */
exports.NameTypeType = {
    Guest: 'Guest',
    Company: 'Company',
    Agent: 'Agent',
    Contact: 'Contact',
    Source: 'Source',
    Group: 'Group',
    Employee: 'Employee',
    Hotel: 'Hotel',
    Purge: 'Purge'
};
function NameTypeTypeFromJSON(json) {
    return NameTypeTypeFromJSONTyped(json, false);
}
exports.NameTypeTypeFromJSON = NameTypeTypeFromJSON;
function NameTypeTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.NameTypeTypeFromJSONTyped = NameTypeTypeFromJSONTyped;
function NameTypeTypeToJSON(value) {
    return value;
}
exports.NameTypeTypeToJSON = NameTypeTypeToJSON;
