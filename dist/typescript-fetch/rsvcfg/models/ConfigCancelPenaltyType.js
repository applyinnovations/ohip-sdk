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
exports.ConfigCancelPenaltyTypeToJSON = exports.ConfigCancelPenaltyTypeFromJSONTyped = exports.ConfigCancelPenaltyTypeFromJSON = exports.instanceOfConfigCancelPenaltyType = void 0;
const runtime_1 = require("../runtime");
const OffsetUnitType_1 = require("./OffsetUnitType");
const PolicyAmountPercentType_1 = require("./PolicyAmountPercentType");
const PolicyDeadlineType_1 = require("./PolicyDeadlineType");
/**
 * Check if a given object implements the ConfigCancelPenaltyType interface.
 */
function instanceOfConfigCancelPenaltyType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfConfigCancelPenaltyType = instanceOfConfigCancelPenaltyType;
function ConfigCancelPenaltyTypeFromJSON(json) {
    return ConfigCancelPenaltyTypeFromJSONTyped(json, false);
}
exports.ConfigCancelPenaltyTypeFromJSON = ConfigCancelPenaltyTypeFromJSON;
function ConfigCancelPenaltyTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'amountPercent': !(0, runtime_1.exists)(json, 'amountPercent') ? undefined : (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeFromJSON)(json['amountPercent']),
        'deadline': !(0, runtime_1.exists)(json, 'deadline') ? undefined : (0, PolicyDeadlineType_1.PolicyDeadlineTypeFromJSON)(json['deadline']),
        'formattedRule': !(0, runtime_1.exists)(json, 'formattedRule') ? undefined : json['formattedRule'],
        'inactive': !(0, runtime_1.exists)(json, 'inactive') ? undefined : json['inactive'],
        'manual': !(0, runtime_1.exists)(json, 'manual') ? undefined : json['manual'],
        'nonRefundable': !(0, runtime_1.exists)(json, 'nonRefundable') ? undefined : json['nonRefundable'],
        'offsetUnit': !(0, runtime_1.exists)(json, 'offsetUnit') ? undefined : (0, OffsetUnitType_1.OffsetUnitTypeFromJSON)(json['offsetUnit']),
        'penaltyDescription': !(0, runtime_1.exists)(json, 'penaltyDescription') ? undefined : json['penaltyDescription'],
        'policyCode': !(0, runtime_1.exists)(json, 'policyCode') ? undefined : json['policyCode'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
    };
}
exports.ConfigCancelPenaltyTypeFromJSONTyped = ConfigCancelPenaltyTypeFromJSONTyped;
function ConfigCancelPenaltyTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'amountPercent': (0, PolicyAmountPercentType_1.PolicyAmountPercentTypeToJSON)(value.amountPercent),
        'deadline': (0, PolicyDeadlineType_1.PolicyDeadlineTypeToJSON)(value.deadline),
        'formattedRule': value.formattedRule,
        'inactive': value.inactive,
        'manual': value.manual,
        'nonRefundable': value.nonRefundable,
        'offsetUnit': (0, OffsetUnitType_1.OffsetUnitTypeToJSON)(value.offsetUnit),
        'penaltyDescription': value.penaltyDescription,
        'policyCode': value.policyCode,
        'sequence': value.sequence,
    };
}
exports.ConfigCancelPenaltyTypeToJSON = ConfigCancelPenaltyTypeToJSON;
