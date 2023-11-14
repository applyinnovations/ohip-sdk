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
exports.ExportSchedulesDetailsToJSON = exports.ExportSchedulesDetailsFromJSONTyped = exports.ExportSchedulesDetailsFromJSON = exports.instanceOfExportSchedulesDetails = void 0;
const runtime_1 = require("../runtime");
const ExportSchedulesType_1 = require("./ExportSchedulesType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ExportSchedulesDetails interface.
 */
function instanceOfExportSchedulesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportSchedulesDetails = instanceOfExportSchedulesDetails;
function ExportSchedulesDetailsFromJSON(json) {
    return ExportSchedulesDetailsFromJSONTyped(json, false);
}
exports.ExportSchedulesDetailsFromJSON = ExportSchedulesDetailsFromJSON;
function ExportSchedulesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exportSchedules': !(0, runtime_1.exists)(json, 'exportSchedules') ? undefined : (0, ExportSchedulesType_1.ExportSchedulesTypeFromJSON)(json['exportSchedules']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ExportSchedulesDetailsFromJSONTyped = ExportSchedulesDetailsFromJSONTyped;
function ExportSchedulesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exportSchedules': (0, ExportSchedulesType_1.ExportSchedulesTypeToJSON)(value.exportSchedules),
        'links': (0, Links_1.LinksToJSON)(value.links),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ExportSchedulesDetailsToJSON = ExportSchedulesDetailsToJSON;