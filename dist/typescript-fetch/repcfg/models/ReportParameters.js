"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportParametersToJSON = exports.ReportParametersFromJSONTyped = exports.ReportParametersFromJSON = exports.instanceOfReportParameters = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const ReportParameterType_1 = require("./ReportParameterType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ReportParameters interface.
 */
function instanceOfReportParameters(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReportParameters = instanceOfReportParameters;
function ReportParametersFromJSON(json) {
    return ReportParametersFromJSONTyped(json, false);
}
exports.ReportParametersFromJSON = ReportParametersFromJSON;
function ReportParametersFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reportParameters': !(0, runtime_1.exists)(json, 'reportParameters') ? undefined : (json['reportParameters'].map(ReportParameterType_1.ReportParameterTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReportParametersFromJSONTyped = ReportParametersFromJSONTyped;
function ReportParametersToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reportParameters': value.reportParameters === undefined ? undefined : (value.reportParameters.map(ReportParameterType_1.ReportParameterTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReportParametersToJSON = ReportParametersToJSON;
