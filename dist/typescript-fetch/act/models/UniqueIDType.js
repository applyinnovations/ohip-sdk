"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueIDTypeToJSON = exports.UniqueIDTypeFromJSONTyped = exports.UniqueIDTypeFromJSON = exports.instanceOfUniqueIDType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UniqueIDType interface.
 */
function instanceOfUniqueIDType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUniqueIDType = instanceOfUniqueIDType;
function UniqueIDTypeFromJSON(json) {
    return UniqueIDTypeFromJSONTyped(json, false);
}
exports.UniqueIDTypeFromJSON = UniqueIDTypeFromJSON;
function UniqueIDTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.UniqueIDTypeFromJSONTyped = UniqueIDTypeFromJSONTyped;
function UniqueIDTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'type': value.type,
    };
}
exports.UniqueIDTypeToJSON = UniqueIDTypeToJSON;
