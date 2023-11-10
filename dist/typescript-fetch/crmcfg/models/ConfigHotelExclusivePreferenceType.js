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
exports.ConfigHotelExclusivePreferenceTypeToJSON = exports.ConfigHotelExclusivePreferenceTypeFromJSONTyped = exports.ConfigHotelExclusivePreferenceTypeFromJSON = exports.instanceOfConfigHotelExclusivePreferenceType = void 0;
const runtime_1 = require("../runtime");
const PreferenceCodesType_1 = require("./PreferenceCodesType");
/**
 * Check if a given object implements the ConfigHotelExclusivePreferenceType interface.
 */
function instanceOfConfigHotelExclusivePreferenceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigHotelExclusivePreferenceType = instanceOfConfigHotelExclusivePreferenceType;
function ConfigHotelExclusivePreferenceTypeFromJSON(json) {
    return ConfigHotelExclusivePreferenceTypeFromJSONTyped(json, false);
}
exports.ConfigHotelExclusivePreferenceTypeFromJSON = ConfigHotelExclusivePreferenceTypeFromJSON;
function ConfigHotelExclusivePreferenceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'orderSequence': !(0, runtime_1.exists)(json, 'orderSequence') ? undefined : json['orderSequence'],
        'preferenceCodes': !(0, runtime_1.exists)(json, 'preferenceCodes') ? undefined : (0, PreferenceCodesType_1.PreferenceCodesTypeFromJSON)(json['preferenceCodes']),
        'preferenceGroup': !(0, runtime_1.exists)(json, 'preferenceGroup') ? undefined : json['preferenceGroup'],
    };
}
exports.ConfigHotelExclusivePreferenceTypeFromJSONTyped = ConfigHotelExclusivePreferenceTypeFromJSONTyped;
function ConfigHotelExclusivePreferenceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'hotelId': value.hotelId,
        'orderSequence': value.orderSequence,
        'preferenceCodes': (0, PreferenceCodesType_1.PreferenceCodesTypeToJSON)(value.preferenceCodes),
        'preferenceGroup': value.preferenceGroup,
    };
}
exports.ConfigHotelExclusivePreferenceTypeToJSON = ConfigHotelExclusivePreferenceTypeToJSON;
