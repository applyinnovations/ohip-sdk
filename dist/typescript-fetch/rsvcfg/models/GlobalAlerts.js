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
exports.GlobalAlertsToJSON = exports.GlobalAlertsFromJSONTyped = exports.GlobalAlertsFromJSON = exports.instanceOfGlobalAlerts = void 0;
const runtime_1 = require("../runtime");
const GlobalAlertType_1 = require("./GlobalAlertType");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the GlobalAlerts interface.
 */
function instanceOfGlobalAlerts(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGlobalAlerts = instanceOfGlobalAlerts;
function GlobalAlertsFromJSON(json) {
    return GlobalAlertsFromJSONTyped(json, false);
}
exports.GlobalAlertsFromJSON = GlobalAlertsFromJSON;
function GlobalAlertsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'globalAlerts': !(0, runtime_1.exists)(json, 'globalAlerts') ? undefined : (json['globalAlerts'].map(GlobalAlertType_1.GlobalAlertTypeFromJSON)),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.GlobalAlertsFromJSONTyped = GlobalAlertsFromJSONTyped;
function GlobalAlertsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'globalAlerts': value.globalAlerts === undefined ? undefined : (value.globalAlerts.map(GlobalAlertType_1.GlobalAlertTypeToJSON)),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.GlobalAlertsToJSON = GlobalAlertsToJSON;
