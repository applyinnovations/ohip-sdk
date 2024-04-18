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
exports.UniqueNameIDTypeToJSON = exports.UniqueNameIDTypeFromJSONTyped = exports.UniqueNameIDTypeFromJSON = exports.instanceOfUniqueNameIDType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UniqueNameIDType interface.
 */
function instanceOfUniqueNameIDType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUniqueNameIDType = instanceOfUniqueNameIDType;
function UniqueNameIDTypeFromJSON(json) {
    return UniqueNameIDTypeFromJSONTyped(json, false);
}
exports.UniqueNameIDTypeFromJSON = UniqueNameIDTypeFromJSON;
function UniqueNameIDTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !(0, runtime_1.exists)(json, 'email') ? undefined : json['email'],
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'name': !(0, runtime_1.exists)(json, 'name') ? undefined : json['name'],
        'phoneNumber': !(0, runtime_1.exists)(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'primaryInd': !(0, runtime_1.exists)(json, 'primaryInd') ? undefined : json['primaryInd'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.UniqueNameIDTypeFromJSONTyped = UniqueNameIDTypeFromJSONTyped;
function UniqueNameIDTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'id': value.id,
        'name': value.name,
        'phoneNumber': value.phoneNumber,
        'primaryInd': value.primaryInd,
        'type': value.type,
    };
}
exports.UniqueNameIDTypeToJSON = UniqueNameIDTypeToJSON;