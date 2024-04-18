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
exports.ChangeExternalDeviceConfigurationsToJSON = exports.ChangeExternalDeviceConfigurationsFromJSONTyped = exports.ChangeExternalDeviceConfigurationsFromJSON = exports.instanceOfChangeExternalDeviceConfigurations = void 0;
const runtime_1 = require("../runtime");
const ExternalDeviceConfigurationType_1 = require("./ExternalDeviceConfigurationType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChangeExternalDeviceConfigurations interface.
 */
function instanceOfChangeExternalDeviceConfigurations(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeExternalDeviceConfigurations = instanceOfChangeExternalDeviceConfigurations;
function ChangeExternalDeviceConfigurationsFromJSON(json) {
    return ChangeExternalDeviceConfigurationsFromJSONTyped(json, false);
}
exports.ChangeExternalDeviceConfigurationsFromJSON = ChangeExternalDeviceConfigurationsFromJSON;
function ChangeExternalDeviceConfigurationsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'externalDeviceConfigurations': !(0, runtime_1.exists)(json, 'externalDeviceConfigurations') ? undefined : (0, ExternalDeviceConfigurationType_1.ExternalDeviceConfigurationTypeFromJSON)(json['externalDeviceConfigurations']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChangeExternalDeviceConfigurationsFromJSONTyped = ChangeExternalDeviceConfigurationsFromJSONTyped;
function ChangeExternalDeviceConfigurationsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'externalDeviceConfigurations': (0, ExternalDeviceConfigurationType_1.ExternalDeviceConfigurationTypeToJSON)(value.externalDeviceConfigurations),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChangeExternalDeviceConfigurationsToJSON = ChangeExternalDeviceConfigurationsToJSON;