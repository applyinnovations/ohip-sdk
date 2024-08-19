"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportMappingCodesToLinkTypeToJSON = exports.ExportMappingCodesToLinkTypeFromJSONTyped = exports.ExportMappingCodesToLinkTypeFromJSON = exports.instanceOfExportMappingCodesToLinkType = void 0;
const runtime_1 = require("../runtime");
const ExportMappingConfigType_1 = require("./ExportMappingConfigType");
/**
 * Check if a given object implements the ExportMappingCodesToLinkType interface.
 */
function instanceOfExportMappingCodesToLinkType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportMappingCodesToLinkType = instanceOfExportMappingCodesToLinkType;
function ExportMappingCodesToLinkTypeFromJSON(json) {
    return ExportMappingCodesToLinkTypeFromJSONTyped(json, false);
}
exports.ExportMappingCodesToLinkTypeFromJSON = ExportMappingCodesToLinkTypeFromJSON;
function ExportMappingCodesToLinkTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'codeToLink': !(0, runtime_1.exists)(json, 'codeToLink') ? undefined : json['codeToLink'],
        'codeToLinkDescription': !(0, runtime_1.exists)(json, 'codeToLinkDescription') ? undefined : json['codeToLinkDescription'],
        'configType': !(0, runtime_1.exists)(json, 'configType') ? undefined : (0, ExportMappingConfigType_1.ExportMappingConfigTypeFromJSON)(json['configType']),
        'sequenceNumber': !(0, runtime_1.exists)(json, 'sequenceNumber') ? undefined : json['sequenceNumber'],
    };
}
exports.ExportMappingCodesToLinkTypeFromJSONTyped = ExportMappingCodesToLinkTypeFromJSONTyped;
function ExportMappingCodesToLinkTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'codeToLink': value.codeToLink,
        'codeToLinkDescription': value.codeToLinkDescription,
        'configType': (0, ExportMappingConfigType_1.ExportMappingConfigTypeToJSON)(value.configType),
        'sequenceNumber': value.sequenceNumber,
    };
}
exports.ExportMappingCodesToLinkTypeToJSON = ExportMappingCodesToLinkTypeToJSON;
