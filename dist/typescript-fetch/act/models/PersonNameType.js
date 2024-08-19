"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonNameTypeToJSON = exports.PersonNameTypeFromJSONTyped = exports.PersonNameTypeFromJSON = exports.instanceOfPersonNameType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PersonNameType interface.
 */
function instanceOfPersonNameType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPersonNameType = instanceOfPersonNameType;
function PersonNameTypeFromJSON(json) {
    return PersonNameTypeFromJSONTyped(json, false);
}
exports.PersonNameTypeFromJSON = PersonNameTypeFromJSON;
function PersonNameTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'givenName': !(0, runtime_1.exists)(json, 'givenName') ? undefined : json['givenName'],
    };
}
exports.PersonNameTypeFromJSONTyped = PersonNameTypeFromJSONTyped;
function PersonNameTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'givenName': value.givenName,
    };
}
exports.PersonNameTypeToJSON = PersonNameTypeToJSON;
