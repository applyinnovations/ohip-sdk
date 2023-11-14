"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConfigPackagePrimaryDetailsTypeToJSON = exports.ConfigPackagePrimaryDetailsTypeFromJSONTyped = exports.ConfigPackagePrimaryDetailsTypeFromJSON = exports.instanceOfConfigPackagePrimaryDetailsType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ConfigPackagePrimaryDetailsType interface.
 */
function instanceOfConfigPackagePrimaryDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigPackagePrimaryDetailsType = instanceOfConfigPackagePrimaryDetailsType;
function ConfigPackagePrimaryDetailsTypeFromJSON(json) {
    return ConfigPackagePrimaryDetailsTypeFromJSONTyped(json, false);
}
exports.ConfigPackagePrimaryDetailsTypeFromJSON = ConfigPackagePrimaryDetailsTypeFromJSON;
function ConfigPackagePrimaryDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'arrangementCode': !(0, runtime_1.exists)(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'beginSellDate': !(0, runtime_1.exists)(json, 'beginSellDate') ? undefined : (new Date(json['beginSellDate'])),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'endSellDate': !(0, runtime_1.exists)(json, 'endSellDate') ? undefined : (new Date(json['endSellDate'])),
        'forecastGroup': !(0, runtime_1.exists)(json, 'forecastGroup') ? undefined : json['forecastGroup'],
        'shortDescription': !(0, runtime_1.exists)(json, 'shortDescription') ? undefined : json['shortDescription'],
    };
}
exports.ConfigPackagePrimaryDetailsTypeFromJSONTyped = ConfigPackagePrimaryDetailsTypeFromJSONTyped;
function ConfigPackagePrimaryDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'arrangementCode': value.arrangementCode,
        'beginSellDate': value.beginSellDate === undefined ? undefined : (value.beginSellDate.toISOString().substring(0, 10)),
        'description': value.description,
        'endSellDate': value.endSellDate === undefined ? undefined : (value.endSellDate.toISOString().substring(0, 10)),
        'forecastGroup': value.forecastGroup,
        'shortDescription': value.shortDescription,
    };
}
exports.ConfigPackagePrimaryDetailsTypeToJSON = ConfigPackagePrimaryDetailsTypeToJSON;