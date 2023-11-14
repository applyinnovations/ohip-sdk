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
exports.ExportConfigurationTypeToJSON = exports.ExportConfigurationTypeFromJSONTyped = exports.ExportConfigurationTypeFromJSON = exports.instanceOfExportConfigurationType = void 0;
const runtime_1 = require("../runtime");
const ExportColumnsType_1 = require("./ExportColumnsType");
const ExportComponentsType_1 = require("./ExportComponentsType");
const ExportDataSetupType_1 = require("./ExportDataSetupType");
const ExportDestinationType_1 = require("./ExportDestinationType");
const ExportGenerateConfigurationType_1 = require("./ExportGenerateConfigurationType");
const ExportHeaderSummaryType_1 = require("./ExportHeaderSummaryType");
const ExportXMLColumnsType_1 = require("./ExportXMLColumnsType");
/**
 * Check if a given object implements the ExportConfigurationType interface.
 */
function instanceOfExportConfigurationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportConfigurationType = instanceOfExportConfigurationType;
function ExportConfigurationTypeFromJSON(json) {
    return ExportConfigurationTypeFromJSONTyped(json, false);
}
exports.ExportConfigurationTypeFromJSON = ExportConfigurationTypeFromJSON;
function ExportConfigurationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'columns': !(0, runtime_1.exists)(json, 'columns') ? undefined : (0, ExportColumnsType_1.ExportColumnsTypeFromJSON)(json['columns']),
        'components': !(0, runtime_1.exists)(json, 'components') ? undefined : (0, ExportComponentsType_1.ExportComponentsTypeFromJSON)(json['components']),
        'dataSetup': !(0, runtime_1.exists)(json, 'dataSetup') ? undefined : (0, ExportDataSetupType_1.ExportDataSetupTypeFromJSON)(json['dataSetup']),
        'destinationSetup': !(0, runtime_1.exists)(json, 'destinationSetup') ? undefined : (0, ExportDestinationType_1.ExportDestinationTypeFromJSON)(json['destinationSetup']),
        'generateConfigSetup': !(0, runtime_1.exists)(json, 'generateConfigSetup') ? undefined : (0, ExportGenerateConfigurationType_1.ExportGenerateConfigurationTypeFromJSON)(json['generateConfigSetup']),
        'summaryInfo': !(0, runtime_1.exists)(json, 'summaryInfo') ? undefined : (0, ExportHeaderSummaryType_1.ExportHeaderSummaryTypeFromJSON)(json['summaryInfo']),
        'xmlColumns': !(0, runtime_1.exists)(json, 'xmlColumns') ? undefined : (0, ExportXMLColumnsType_1.ExportXMLColumnsTypeFromJSON)(json['xmlColumns']),
    };
}
exports.ExportConfigurationTypeFromJSONTyped = ExportConfigurationTypeFromJSONTyped;
function ExportConfigurationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'columns': (0, ExportColumnsType_1.ExportColumnsTypeToJSON)(value.columns),
        'components': (0, ExportComponentsType_1.ExportComponentsTypeToJSON)(value.components),
        'dataSetup': (0, ExportDataSetupType_1.ExportDataSetupTypeToJSON)(value.dataSetup),
        'destinationSetup': (0, ExportDestinationType_1.ExportDestinationTypeToJSON)(value.destinationSetup),
        'generateConfigSetup': (0, ExportGenerateConfigurationType_1.ExportGenerateConfigurationTypeToJSON)(value.generateConfigSetup),
        'summaryInfo': (0, ExportHeaderSummaryType_1.ExportHeaderSummaryTypeToJSON)(value.summaryInfo),
        'xmlColumns': (0, ExportXMLColumnsType_1.ExportXMLColumnsTypeToJSON)(value.xmlColumns),
    };
}
exports.ExportConfigurationTypeToJSON = ExportConfigurationTypeToJSON;