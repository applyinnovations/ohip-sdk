"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.NameValueBaseSearchTypeToJSON = exports.NameValueBaseSearchTypeFromJSONTyped = exports.NameValueBaseSearchTypeFromJSON = exports.instanceOfNameValueBaseSearchType = void 0;
const runtime_1 = require("../runtime");
const CustomNameValueConfigType_1 = require("./CustomNameValueConfigType");
const NameValueModuleType_1 = require("./NameValueModuleType");
const NameValueTypeType_1 = require("./NameValueTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the NameValueBaseSearchType interface.
 */
function instanceOfNameValueBaseSearchType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfNameValueBaseSearchType = instanceOfNameValueBaseSearchType;
function NameValueBaseSearchTypeFromJSON(json) {
    return NameValueBaseSearchTypeFromJSONTyped(json, false);
}
exports.NameValueBaseSearchTypeFromJSON = NameValueBaseSearchTypeFromJSON;
function NameValueBaseSearchTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'configName': !(0, runtime_1.exists)(json, 'configName') ? undefined : (0, CustomNameValueConfigType_1.CustomNameValueConfigTypeFromJSON)(json['configName']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'moduleName': !(0, runtime_1.exists)(json, 'moduleName') ? undefined : (0, NameValueModuleType_1.NameValueModuleTypeFromJSON)(json['moduleName']),
        'nameValueType': !(0, runtime_1.exists)(json, 'nameValueType') ? undefined : (0, NameValueTypeType_1.NameValueTypeTypeFromJSON)(json['nameValueType']),
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['sequence']),
    };
}
exports.NameValueBaseSearchTypeFromJSONTyped = NameValueBaseSearchTypeFromJSONTyped;
function NameValueBaseSearchTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'configName': (0, CustomNameValueConfigType_1.CustomNameValueConfigTypeToJSON)(value.configName),
        'hotelId': value.hotelId,
        'moduleName': (0, NameValueModuleType_1.NameValueModuleTypeToJSON)(value.moduleName),
        'nameValueType': (0, NameValueTypeType_1.NameValueTypeTypeToJSON)(value.nameValueType),
        'sequence': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.sequence),
    };
}
exports.NameValueBaseSearchTypeToJSON = NameValueBaseSearchTypeToJSON;
