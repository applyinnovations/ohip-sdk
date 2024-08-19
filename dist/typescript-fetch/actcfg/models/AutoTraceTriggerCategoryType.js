"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoTraceTriggerCategoryTypeToJSON = exports.AutoTraceTriggerCategoryTypeFromJSONTyped = exports.AutoTraceTriggerCategoryTypeFromJSON = exports.AutoTraceTriggerCategoryType = void 0;
/**
 * Contains information on when auto trace would be created.
 * @export
 */
exports.AutoTraceTriggerCategoryType = {
    Create: 'Create',
    Update: 'Update',
    Delete: 'Delete'
};
function AutoTraceTriggerCategoryTypeFromJSON(json) {
    return AutoTraceTriggerCategoryTypeFromJSONTyped(json, false);
}
exports.AutoTraceTriggerCategoryTypeFromJSON = AutoTraceTriggerCategoryTypeFromJSON;
function AutoTraceTriggerCategoryTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.AutoTraceTriggerCategoryTypeFromJSONTyped = AutoTraceTriggerCategoryTypeFromJSONTyped;
function AutoTraceTriggerCategoryTypeToJSON(value) {
    return value;
}
exports.AutoTraceTriggerCategoryTypeToJSON = AutoTraceTriggerCategoryTypeToJSON;
