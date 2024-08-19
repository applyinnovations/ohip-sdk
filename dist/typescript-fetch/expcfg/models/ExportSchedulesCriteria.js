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
exports.ExportSchedulesCriteriaToJSON = exports.ExportSchedulesCriteriaFromJSONTyped = exports.ExportSchedulesCriteriaFromJSON = exports.instanceOfExportSchedulesCriteria = void 0;
const runtime_1 = require("../runtime");
const ExportSchedulesConfigType_1 = require("./ExportSchedulesConfigType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ExportSchedulesCriteria interface.
 */
function instanceOfExportSchedulesCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExportSchedulesCriteria = instanceOfExportSchedulesCriteria;
function ExportSchedulesCriteriaFromJSON(json) {
    return ExportSchedulesCriteriaFromJSONTyped(json, false);
}
exports.ExportSchedulesCriteriaFromJSON = ExportSchedulesCriteriaFromJSON;
function ExportSchedulesCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'exportScheduleConfig': !(0, runtime_1.exists)(json, 'exportScheduleConfig') ? undefined : (0, ExportSchedulesConfigType_1.ExportSchedulesConfigTypeFromJSON)(json['exportScheduleConfig']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ExportSchedulesCriteriaFromJSONTyped = ExportSchedulesCriteriaFromJSONTyped;
function ExportSchedulesCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'exportScheduleConfig': (0, ExportSchedulesConfigType_1.ExportSchedulesConfigTypeToJSON)(value.exportScheduleConfig),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ExportSchedulesCriteriaToJSON = ExportSchedulesCriteriaToJSON;
