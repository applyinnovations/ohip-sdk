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
exports.ApplicationSettingGroupTypeToJSON = exports.ApplicationSettingGroupTypeFromJSONTyped = exports.ApplicationSettingGroupTypeFromJSON = exports.instanceOfApplicationSettingGroupType = void 0;
const runtime_1 = require("../runtime");
const ApplicationSettingType_1 = require("./ApplicationSettingType");
/**
 * Check if a given object implements the ApplicationSettingGroupType interface.
 */
function instanceOfApplicationSettingGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfApplicationSettingGroupType = instanceOfApplicationSettingGroupType;
function ApplicationSettingGroupTypeFromJSON(json) {
    return ApplicationSettingGroupTypeFromJSONTyped(json, false);
}
exports.ApplicationSettingGroupTypeFromJSON = ApplicationSettingGroupTypeFromJSON;
function ApplicationSettingGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'appSettings': !(0, runtime_1.exists)(json, 'appSettings') ? undefined : (json['appSettings'].map(ApplicationSettingType_1.ApplicationSettingTypeFromJSON)),
        'groupDisplayName': !(0, runtime_1.exists)(json, 'groupDisplayName') ? undefined : json['groupDisplayName'],
        'groupName': !(0, runtime_1.exists)(json, 'groupName') ? undefined : json['groupName'],
    };
}
exports.ApplicationSettingGroupTypeFromJSONTyped = ApplicationSettingGroupTypeFromJSONTyped;
function ApplicationSettingGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'appSettings': value.appSettings === undefined ? undefined : (value.appSettings.map(ApplicationSettingType_1.ApplicationSettingTypeToJSON)),
        'groupDisplayName': value.groupDisplayName,
        'groupName': value.groupName,
    };
}
exports.ApplicationSettingGroupTypeToJSON = ApplicationSettingGroupTypeToJSON;
