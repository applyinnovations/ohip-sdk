"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyGuaranteeCodeSchedulesToJSON = exports.CopyGuaranteeCodeSchedulesFromJSONTyped = exports.CopyGuaranteeCodeSchedulesFromJSON = exports.instanceOfCopyGuaranteeCodeSchedules = void 0;
const runtime_1 = require("../runtime");
const CopySchedulesCriteriaType_1 = require("./CopySchedulesCriteriaType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CopyGuaranteeCodeSchedules interface.
 */
function instanceOfCopyGuaranteeCodeSchedules(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyGuaranteeCodeSchedules = instanceOfCopyGuaranteeCodeSchedules;
function CopyGuaranteeCodeSchedulesFromJSON(json) {
    return CopyGuaranteeCodeSchedulesFromJSONTyped(json, false);
}
exports.CopyGuaranteeCodeSchedulesFromJSON = CopyGuaranteeCodeSchedulesFromJSON;
function CopyGuaranteeCodeSchedulesFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, CopySchedulesCriteriaType_1.CopySchedulesCriteriaTypeFromJSON)(json['criteria']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CopyGuaranteeCodeSchedulesFromJSONTyped = CopyGuaranteeCodeSchedulesFromJSONTyped;
function CopyGuaranteeCodeSchedulesToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, CopySchedulesCriteriaType_1.CopySchedulesCriteriaTypeToJSON)(value.criteria),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CopyGuaranteeCodeSchedulesToJSON = CopyGuaranteeCodeSchedulesToJSON;
