"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeTemplateCancellationPolicyRequestToJSON = exports.ChangeTemplateCancellationPolicyRequestFromJSONTyped = exports.ChangeTemplateCancellationPolicyRequestFromJSON = exports.instanceOfChangeTemplateCancellationPolicyRequest = void 0;
const runtime_1 = require("../runtime");
const ConfigCancelPenaltyType_1 = require("./ConfigCancelPenaltyType");
const Links_1 = require("./Links");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the ChangeTemplateCancellationPolicyRequest interface.
 */
function instanceOfChangeTemplateCancellationPolicyRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeTemplateCancellationPolicyRequest = instanceOfChangeTemplateCancellationPolicyRequest;
function ChangeTemplateCancellationPolicyRequestFromJSON(json) {
    return ChangeTemplateCancellationPolicyRequestFromJSONTyped(json, false);
}
exports.ChangeTemplateCancellationPolicyRequestFromJSON = ChangeTemplateCancellationPolicyRequestFromJSON;
function ChangeTemplateCancellationPolicyRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (0, Links_1.LinksFromJSON)(json['links']),
        'templateCancelPenalty': !(0, runtime_1.exists)(json, 'templateCancelPenalty') ? undefined : (0, ConfigCancelPenaltyType_1.ConfigCancelPenaltyTypeFromJSON)(json['templateCancelPenalty']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.ChangeTemplateCancellationPolicyRequestFromJSONTyped = ChangeTemplateCancellationPolicyRequestFromJSONTyped;
function ChangeTemplateCancellationPolicyRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': (0, Links_1.LinksToJSON)(value.links),
        'templateCancelPenalty': (0, ConfigCancelPenaltyType_1.ConfigCancelPenaltyTypeToJSON)(value.templateCancelPenalty),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.ChangeTemplateCancellationPolicyRequestToJSON = ChangeTemplateCancellationPolicyRequestToJSON;
