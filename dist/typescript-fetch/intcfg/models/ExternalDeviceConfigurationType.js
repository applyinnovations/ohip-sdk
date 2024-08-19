"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExternalDeviceConfigurationTypeToJSON = exports.ExternalDeviceConfigurationTypeFromJSONTyped = exports.ExternalDeviceConfigurationTypeFromJSON = exports.instanceOfExternalDeviceConfigurationType = void 0;
const runtime_1 = require("../runtime");
const DeviceConfigurationType_1 = require("./DeviceConfigurationType");
const DeviceMappingType_1 = require("./DeviceMappingType");
const SupportedExternalDeviceType_1 = require("./SupportedExternalDeviceType");
/**
 * Check if a given object implements the ExternalDeviceConfigurationType interface.
 */
function instanceOfExternalDeviceConfigurationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExternalDeviceConfigurationType = instanceOfExternalDeviceConfigurationType;
function ExternalDeviceConfigurationTypeFromJSON(json) {
    return ExternalDeviceConfigurationTypeFromJSONTyped(json, false);
}
exports.ExternalDeviceConfigurationTypeFromJSON = ExternalDeviceConfigurationTypeFromJSON;
function ExternalDeviceConfigurationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'device': !(0, runtime_1.exists)(json, 'device') ? undefined : (0, SupportedExternalDeviceType_1.SupportedExternalDeviceTypeFromJSON)(json['device']),
        'deviceConfigurations': !(0, runtime_1.exists)(json, 'deviceConfigurations') ? undefined : (json['deviceConfigurations'].map(DeviceConfigurationType_1.DeviceConfigurationTypeFromJSON)),
        'codeMappings': !(0, runtime_1.exists)(json, 'codeMappings') ? undefined : (json['codeMappings'].map(DeviceMappingType_1.DeviceMappingTypeFromJSON)),
    };
}
exports.ExternalDeviceConfigurationTypeFromJSONTyped = ExternalDeviceConfigurationTypeFromJSONTyped;
function ExternalDeviceConfigurationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'hotelId': value.hotelId,
        'device': (0, SupportedExternalDeviceType_1.SupportedExternalDeviceTypeToJSON)(value.device),
        'deviceConfigurations': value.deviceConfigurations === undefined ? undefined : (value.deviceConfigurations.map(DeviceConfigurationType_1.DeviceConfigurationTypeToJSON)),
        'codeMappings': value.codeMappings === undefined ? undefined : (value.codeMappings.map(DeviceMappingType_1.DeviceMappingTypeToJSON)),
    };
}
exports.ExternalDeviceConfigurationTypeToJSON = ExternalDeviceConfigurationTypeToJSON;
