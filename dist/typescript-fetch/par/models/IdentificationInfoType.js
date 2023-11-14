"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.IdentificationInfoTypeToJSON = exports.IdentificationInfoTypeFromJSONTyped = exports.IdentificationInfoTypeFromJSON = exports.instanceOfIdentificationInfoType = void 0;
const runtime_1 = require("../runtime");
const IdentificationType_1 = require("./IdentificationType");
/**
 * Check if a given object implements the IdentificationInfoType interface.
 */
function instanceOfIdentificationInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfIdentificationInfoType = instanceOfIdentificationInfoType;
function IdentificationInfoTypeFromJSON(json) {
    return IdentificationInfoTypeFromJSONTyped(json, false);
}
exports.IdentificationInfoTypeFromJSON = IdentificationInfoTypeFromJSON;
function IdentificationInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'identification': !(0, runtime_1.exists)(json, 'identification') ? undefined : (0, IdentificationType_1.IdentificationTypeFromJSON)(json['identification']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : json['type'],
    };
}
exports.IdentificationInfoTypeFromJSONTyped = IdentificationInfoTypeFromJSONTyped;
function IdentificationInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'identification': (0, IdentificationType_1.IdentificationTypeToJSON)(value.identification),
        'type': value.type,
    };
}
exports.IdentificationInfoTypeToJSON = IdentificationInfoTypeToJSON;