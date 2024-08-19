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
exports.InterfaceMachineTypeToJSON = exports.InterfaceMachineTypeFromJSONTyped = exports.InterfaceMachineTypeFromJSON = exports.instanceOfInterfaceMachineType = void 0;
const runtime_1 = require("../runtime");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the InterfaceMachineType interface.
 */
function instanceOfInterfaceMachineType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfInterfaceMachineType = instanceOfInterfaceMachineType;
function InterfaceMachineTypeFromJSON(json) {
    return InterfaceMachineTypeFromJSONTyped(json, false);
}
exports.InterfaceMachineTypeFromJSON = InterfaceMachineTypeFromJSON;
function InterfaceMachineTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['id']),
        'machine': !(0, runtime_1.exists)(json, 'machine') ? undefined : json['machine'],
        'program': !(0, runtime_1.exists)(json, 'program') ? undefined : json['program'],
        'controllerPort': !(0, runtime_1.exists)(json, 'controllerPort') ? undefined : json['controllerPort'],
        'vncPort': !(0, runtime_1.exists)(json, 'vncPort') ? undefined : json['vncPort'],
    };
}
exports.InterfaceMachineTypeFromJSONTyped = InterfaceMachineTypeFromJSONTyped;
function InterfaceMachineTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.id),
        'machine': value.machine,
        'program': value.program,
        'controllerPort': value.controllerPort,
        'vncPort': value.vncPort,
    };
}
exports.InterfaceMachineTypeToJSON = InterfaceMachineTypeToJSON;
