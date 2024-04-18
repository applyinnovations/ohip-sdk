"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StateTypeToJSON = exports.StateTypeFromJSONTyped = exports.StateTypeFromJSON = exports.instanceOfStateType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the StateType interface.
 */
function instanceOfStateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfStateType = instanceOfStateType;
function StateTypeFromJSON(json) {
    return StateTypeFromJSONTyped(json, false);
}
exports.StateTypeFromJSON = StateTypeFromJSON;
function StateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'countryCode': !(0, runtime_1.exists)(json, 'countryCode') ? undefined : json['countryCode'],
        'stateCode': !(0, runtime_1.exists)(json, 'stateCode') ? undefined : json['stateCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'stateID': !(0, runtime_1.exists)(json, 'stateID') ? undefined : json['stateID'],
    };
}
exports.StateTypeFromJSONTyped = StateTypeFromJSONTyped;
function StateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'countryCode': value.countryCode,
        'stateCode': value.stateCode,
        'description': value.description,
        'sequence': value.sequence,
        'stateID': value.stateID,
    };
}
exports.StateTypeToJSON = StateTypeToJSON;