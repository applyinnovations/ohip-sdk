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
exports.ReportsToJSON = exports.ReportsFromJSONTyped = exports.ReportsFromJSON = exports.instanceOfReports = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const ReportsType_1 = require("./ReportsType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the Reports interface.
 */
function instanceOfReports(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReports = instanceOfReports;
function ReportsFromJSON(json) {
    return ReportsFromJSONTyped(json, false);
}
exports.ReportsFromJSON = ReportsFromJSON;
function ReportsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'reports': !(0, runtime_1.exists)(json, 'reports') ? undefined : (0, ReportsType_1.ReportsTypeFromJSON)(json['reports']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ReportsFromJSONTyped = ReportsFromJSONTyped;
function ReportsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'reports': (0, ReportsType_1.ReportsTypeToJSON)(value.reports),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ReportsToJSON = ReportsToJSON;