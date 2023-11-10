"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsedInModuleTypeToJSON = exports.UsedInModuleTypeFromJSONTyped = exports.UsedInModuleTypeFromJSON = exports.UsedInModuleType = void 0;
/**
 * Simple type for indicating the module for which user wants to create the SellMessage. Valid module types are Look To Book Sales,Reservations,Blocks,Function Diary and Group Rooms Control.
 * @export
 */
exports.UsedInModuleType = {
    Blocks: 'Blocks',
    Reservations: 'Reservations',
    FunctionDiary: 'FunctionDiary',
    LookToBookSales: 'LookToBookSales',
    GroupRoomsControl: 'GroupRoomsControl'
};
function UsedInModuleTypeFromJSON(json) {
    return UsedInModuleTypeFromJSONTyped(json, false);
}
exports.UsedInModuleTypeFromJSON = UsedInModuleTypeFromJSON;
function UsedInModuleTypeFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.UsedInModuleTypeFromJSONTyped = UsedInModuleTypeFromJSONTyped;
function UsedInModuleTypeToJSON(value) {
    return value;
}
exports.UsedInModuleTypeToJSON = UsedInModuleTypeToJSON;
