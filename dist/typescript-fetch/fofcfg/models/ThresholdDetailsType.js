"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThresholdDetailsTypeToJSON = exports.ThresholdDetailsTypeFromJSONTyped = exports.ThresholdDetailsTypeFromJSON = exports.instanceOfThresholdDetailsType = void 0;
const runtime_1 = require("../runtime");
const EntityType_1 = require("./EntityType");
const ScopeType_1 = require("./ScopeType");
/**
 * Check if a given object implements the ThresholdDetailsType interface.
 */
function instanceOfThresholdDetailsType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfThresholdDetailsType = instanceOfThresholdDetailsType;
function ThresholdDetailsTypeFromJSON(json) {
    return ThresholdDetailsTypeFromJSONTyped(json, false);
}
exports.ThresholdDetailsTypeFromJSON = ThresholdDetailsTypeFromJSON;
function ThresholdDetailsTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'complimentary': !(0, runtime_1.exists)(json, 'complimentary') ? undefined : json['complimentary'],
        'entity': !(0, runtime_1.exists)(json, 'entity') ? undefined : (0, EntityType_1.EntityTypeFromJSON)(json['entity']),
        'isEditable': !(0, runtime_1.exists)(json, 'isEditable') ? undefined : json['isEditable'],
        'minRequired': !(0, runtime_1.exists)(json, 'minRequired') ? undefined : json['minRequired'],
        'scope': !(0, runtime_1.exists)(json, 'scope') ? undefined : (0, ScopeType_1.ScopeTypeFromJSON)(json['scope']),
    };
}
exports.ThresholdDetailsTypeFromJSONTyped = ThresholdDetailsTypeFromJSONTyped;
function ThresholdDetailsTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'complimentary': value.complimentary,
        'entity': (0, EntityType_1.EntityTypeToJSON)(value.entity),
        'isEditable': value.isEditable,
        'minRequired': value.minRequired,
        'scope': (0, ScopeType_1.ScopeTypeToJSON)(value.scope),
    };
}
exports.ThresholdDetailsTypeToJSON = ThresholdDetailsTypeToJSON;
