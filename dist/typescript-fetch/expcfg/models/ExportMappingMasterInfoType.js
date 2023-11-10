"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExportMappingMasterInfoTypeToJSON = exports.ExportMappingMasterInfoTypeFromJSONTyped = exports.ExportMappingMasterInfoTypeFromJSON = exports.instanceOfExportMappingMasterInfoType = void 0;
const runtime_1 = require("../runtime");
const ExportMappingCodeType_1 = require("./ExportMappingCodeType");
const ExportMappingType_1 = require("./ExportMappingType");
/**
 * Check if a given object implements the ExportMappingMasterInfoType interface.
 */
function instanceOfExportMappingMasterInfoType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportMappingMasterInfoType = instanceOfExportMappingMasterInfoType;
function ExportMappingMasterInfoTypeFromJSON(json) {
    return ExportMappingMasterInfoTypeFromJSONTyped(json, false);
}
exports.ExportMappingMasterInfoTypeFromJSON = ExportMappingMasterInfoTypeFromJSON;
function ExportMappingMasterInfoTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'mappingCodes': !(0, runtime_1.exists)(json, 'mappingCodes') ? undefined : (json['mappingCodes'].map(ExportMappingCodeType_1.ExportMappingCodeTypeFromJSON)),
        'mappingCodesCount': !(0, runtime_1.exists)(json, 'mappingCodesCount') ? undefined : json['mappingCodesCount'],
        'mappingTypes': !(0, runtime_1.exists)(json, 'mappingTypes') ? undefined : (json['mappingTypes'].map(ExportMappingType_1.ExportMappingTypeFromJSON)),
        'mappingTypesCount': !(0, runtime_1.exists)(json, 'mappingTypesCount') ? undefined : json['mappingTypesCount'],
    };
}
exports.ExportMappingMasterInfoTypeFromJSONTyped = ExportMappingMasterInfoTypeFromJSONTyped;
function ExportMappingMasterInfoTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'mappingCodes': value.mappingCodes === undefined ? undefined : (value.mappingCodes.map(ExportMappingCodeType_1.ExportMappingCodeTypeToJSON)),
        'mappingCodesCount': value.mappingCodesCount,
        'mappingTypes': value.mappingTypes === undefined ? undefined : (value.mappingTypes.map(ExportMappingType_1.ExportMappingTypeToJSON)),
        'mappingTypesCount': value.mappingTypesCount,
    };
}
exports.ExportMappingMasterInfoTypeToJSON = ExportMappingMasterInfoTypeToJSON;
