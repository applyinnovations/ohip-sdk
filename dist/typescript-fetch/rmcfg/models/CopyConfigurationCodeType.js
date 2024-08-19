"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyConfigurationCodeTypeToJSON = exports.CopyConfigurationCodeTypeFromJSONTyped = exports.CopyConfigurationCodeTypeFromJSON = exports.instanceOfCopyConfigurationCodeType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the CopyConfigurationCodeType interface.
 */
function instanceOfCopyConfigurationCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyConfigurationCodeType = instanceOfCopyConfigurationCodeType;
function CopyConfigurationCodeTypeFromJSON(json) {
    return CopyConfigurationCodeTypeFromJSONTyped(json, false);
}
exports.CopyConfigurationCodeTypeFromJSON = CopyConfigurationCodeTypeFromJSON;
function CopyConfigurationCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'sourceHotelCode': !(0, runtime_1.exists)(json, 'sourceHotelCode') ? undefined : json['sourceHotelCode'],
        'targetHotelCode': !(0, runtime_1.exists)(json, 'targetHotelCode') ? undefined : json['targetHotelCode'],
    };
}
exports.CopyConfigurationCodeTypeFromJSONTyped = CopyConfigurationCodeTypeFromJSONTyped;
function CopyConfigurationCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'sourceHotelCode': value.sourceHotelCode,
        'targetHotelCode': value.targetHotelCode,
    };
}
exports.CopyConfigurationCodeTypeToJSON = CopyConfigurationCodeTypeToJSON;
