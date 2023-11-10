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
exports.ExportDataSetupTypeToJSON = exports.ExportDataSetupTypeFromJSONTyped = exports.ExportDataSetupTypeFromJSON = exports.instanceOfExportDataSetupType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the ExportDataSetupType interface.
 */
function instanceOfExportDataSetupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportDataSetupType = instanceOfExportDataSetupType;
function ExportDataSetupTypeFromJSON(json) {
    return ExportDataSetupTypeFromJSONTyped(json, false);
}
exports.ExportDataSetupTypeFromJSON = ExportDataSetupTypeFromJSON;
function ExportDataSetupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addNewLine': !(0, runtime_1.exists)(json, 'addNewLine') ? undefined : json['addNewLine'],
        'appendToFile': !(0, runtime_1.exists)(json, 'appendToFile') ? undefined : json['appendToFile'],
        'columnSeparator': !(0, runtime_1.exists)(json, 'columnSeparator') ? undefined : json['columnSeparator'],
        'componentExport': !(0, runtime_1.exists)(json, 'componentExport') ? undefined : json['componentExport'],
        'compressData': !(0, runtime_1.exists)(json, 'compressData') ? undefined : json['compressData'],
        'createHeaderFooter': !(0, runtime_1.exists)(json, 'createHeaderFooter') ? undefined : json['createHeaderFooter'],
        'dataSourceName': !(0, runtime_1.exists)(json, 'dataSourceName') ? undefined : json['dataSourceName'],
        'filterCondition': !(0, runtime_1.exists)(json, 'filterCondition') ? undefined : json['filterCondition'],
        'postExportProcedure': !(0, runtime_1.exists)(json, 'postExportProcedure') ? undefined : json['postExportProcedure'],
        'preExportProcedure': !(0, runtime_1.exists)(json, 'preExportProcedure') ? undefined : json['preExportProcedure'],
        'xMLDocumentTypeName': !(0, runtime_1.exists)(json, 'xMLDocumentTypeName') ? undefined : json['xMLDocumentTypeName'],
        'xMLDocumentTypePublicId': !(0, runtime_1.exists)(json, 'xMLDocumentTypePublicId') ? undefined : json['xMLDocumentTypePublicId'],
        'xMLDocumentTypeSystemId': !(0, runtime_1.exists)(json, 'xMLDocumentTypeSystemId') ? undefined : json['xMLDocumentTypeSystemId'],
        'xMLEncoding': !(0, runtime_1.exists)(json, 'xMLEncoding') ? undefined : json['xMLEncoding'],
        'xMLProcessingInstructions': !(0, runtime_1.exists)(json, 'xMLProcessingInstructions') ? undefined : json['xMLProcessingInstructions'],
        'xMLRootTag': !(0, runtime_1.exists)(json, 'xMLRootTag') ? undefined : json['xMLRootTag'],
    };
}
exports.ExportDataSetupTypeFromJSONTyped = ExportDataSetupTypeFromJSONTyped;
function ExportDataSetupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addNewLine': value.addNewLine,
        'appendToFile': value.appendToFile,
        'columnSeparator': value.columnSeparator,
        'componentExport': value.componentExport,
        'compressData': value.compressData,
        'createHeaderFooter': value.createHeaderFooter,
        'dataSourceName': value.dataSourceName,
        'filterCondition': value.filterCondition,
        'postExportProcedure': value.postExportProcedure,
        'preExportProcedure': value.preExportProcedure,
        'xMLDocumentTypeName': value.xMLDocumentTypeName,
        'xMLDocumentTypePublicId': value.xMLDocumentTypePublicId,
        'xMLDocumentTypeSystemId': value.xMLDocumentTypeSystemId,
        'xMLEncoding': value.xMLEncoding,
        'xMLProcessingInstructions': value.xMLProcessingInstructions,
        'xMLRootTag': value.xMLRootTag,
    };
}
exports.ExportDataSetupTypeToJSON = ExportDataSetupTypeToJSON;
