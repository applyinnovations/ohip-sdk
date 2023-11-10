"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigCopyExclusivePreferencesTypeToJSON = exports.ConfigCopyExclusivePreferencesTypeFromJSONTyped = exports.ConfigCopyExclusivePreferencesTypeFromJSON = exports.instanceOfConfigCopyExclusivePreferencesType = void 0;
const runtime_1 = require("../runtime");
const CodeListType_1 = require("./CodeListType");
const ConfigExclusivePrefCodeAndGroupType_1 = require("./ConfigExclusivePrefCodeAndGroupType");
/**
 * Check if a given object implements the ConfigCopyExclusivePreferencesType interface.
 */
function instanceOfConfigCopyExclusivePreferencesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigCopyExclusivePreferencesType = instanceOfConfigCopyExclusivePreferencesType;
function ConfigCopyExclusivePreferencesTypeFromJSON(json) {
    return ConfigCopyExclusivePreferencesTypeFromJSONTyped(json, false);
}
exports.ConfigCopyExclusivePreferencesTypeFromJSON = ConfigCopyExclusivePreferencesTypeFromJSON;
function ConfigCopyExclusivePreferencesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelCodes': !(0, runtime_1.exists)(json, 'hotelCodes') ? undefined : (0, CodeListType_1.CodeListTypeFromJSON)(json['hotelCodes']),
        'templateExclusivePreference': !(0, runtime_1.exists)(json, 'templateExclusivePreference') ? undefined : (json['templateExclusivePreference'].map(ConfigExclusivePrefCodeAndGroupType_1.ConfigExclusivePrefCodeAndGroupTypeFromJSON)),
    };
}
exports.ConfigCopyExclusivePreferencesTypeFromJSONTyped = ConfigCopyExclusivePreferencesTypeFromJSONTyped;
function ConfigCopyExclusivePreferencesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelCodes': (0, CodeListType_1.CodeListTypeToJSON)(value.hotelCodes),
        'templateExclusivePreference': value.templateExclusivePreference === undefined ? undefined : (value.templateExclusivePreference.map(ConfigExclusivePrefCodeAndGroupType_1.ConfigExclusivePrefCodeAndGroupTypeToJSON)),
    };
}
exports.ConfigCopyExclusivePreferencesTypeToJSON = ConfigCopyExclusivePreferencesTypeToJSON;
