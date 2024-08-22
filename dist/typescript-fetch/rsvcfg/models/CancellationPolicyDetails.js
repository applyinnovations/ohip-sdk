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
exports.CancellationPolicyDetailsToJSON = exports.CancellationPolicyDetailsFromJSONTyped = exports.CancellationPolicyDetailsFromJSON = exports.instanceOfCancellationPolicyDetails = void 0;
const runtime_1 = require("../runtime");
const CancellationPolicyDetailsCancelPenalties_1 = require("./CancellationPolicyDetailsCancelPenalties");
const InstanceLink_1 = require("./InstanceLink");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the CancellationPolicyDetails interface.
 */
function instanceOfCancellationPolicyDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCancellationPolicyDetails = instanceOfCancellationPolicyDetails;
function CancellationPolicyDetailsFromJSON(json) {
    return CancellationPolicyDetailsFromJSONTyped(json, false);
}
exports.CancellationPolicyDetailsFromJSON = CancellationPolicyDetailsFromJSON;
function CancellationPolicyDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cancelPenalties': !(0, runtime_1.exists)(json, 'cancelPenalties') ? undefined : (0, CancellationPolicyDetailsCancelPenalties_1.CancellationPolicyDetailsCancelPenaltiesFromJSON)(json['cancelPenalties']),
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.CancellationPolicyDetailsFromJSONTyped = CancellationPolicyDetailsFromJSONTyped;
function CancellationPolicyDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cancelPenalties': (0, CancellationPolicyDetailsCancelPenalties_1.CancellationPolicyDetailsCancelPenaltiesToJSON)(value.cancelPenalties),
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.CancellationPolicyDetailsToJSON = CancellationPolicyDetailsToJSON;
