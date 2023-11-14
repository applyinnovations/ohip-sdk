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
exports.PreferenceGroupTypeToJSON = exports.PreferenceGroupTypeFromJSONTyped = exports.PreferenceGroupTypeFromJSON = exports.instanceOfPreferenceGroupType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PreferenceGroupType interface.
 */
function instanceOfPreferenceGroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPreferenceGroupType = instanceOfPreferenceGroupType;
function PreferenceGroupTypeFromJSON(json) {
    return PreferenceGroupTypeFromJSONTyped(json, false);
}
exports.PreferenceGroupTypeFromJSON = PreferenceGroupTypeFromJSON;
function PreferenceGroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allowSubTypes': !(0, runtime_1.exists)(json, 'allowSubTypes') ? undefined : json['allowSubTypes'],
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'mandatoryReservation': !(0, runtime_1.exists)(json, 'mandatoryReservation') ? undefined : json['mandatoryReservation'],
        'maxQuantity': !(0, runtime_1.exists)(json, 'maxQuantity') ? undefined : json['maxQuantity'],
        'reservationPreference': !(0, runtime_1.exists)(json, 'reservationPreference') ? undefined : json['reservationPreference'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.PreferenceGroupTypeFromJSONTyped = PreferenceGroupTypeFromJSONTyped;
function PreferenceGroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allowSubTypes': value.allowSubTypes,
        'code': value.code,
        'description': value.description,
        'mandatoryReservation': value.mandatoryReservation,
        'maxQuantity': value.maxQuantity,
        'reservationPreference': value.reservationPreference,
        'sequence': value.sequence,
    };
}
exports.PreferenceGroupTypeToJSON = PreferenceGroupTypeToJSON;