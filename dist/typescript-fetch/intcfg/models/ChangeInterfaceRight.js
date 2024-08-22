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
exports.ChangeInterfaceRightToJSON = exports.ChangeInterfaceRightFromJSONTyped = exports.ChangeInterfaceRightFromJSON = exports.instanceOfChangeInterfaceRight = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const InterfaceRightType_1 = require("./InterfaceRightType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChangeInterfaceRight interface.
 */
function instanceOfChangeInterfaceRight(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeInterfaceRight = instanceOfChangeInterfaceRight;
function ChangeInterfaceRightFromJSON(json) {
    return ChangeInterfaceRightFromJSONTyped(json, false);
}
exports.ChangeInterfaceRightFromJSON = ChangeInterfaceRightFromJSON;
function ChangeInterfaceRightFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'details': !(0, runtime_1.exists)(json, 'details') ? undefined : (0, InterfaceRightType_1.InterfaceRightTypeFromJSON)(json['details']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChangeInterfaceRightFromJSONTyped = ChangeInterfaceRightFromJSONTyped;
function ChangeInterfaceRightToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'details': (0, InterfaceRightType_1.InterfaceRightTypeToJSON)(value.details),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChangeInterfaceRightToJSON = ChangeInterfaceRightToJSON;
