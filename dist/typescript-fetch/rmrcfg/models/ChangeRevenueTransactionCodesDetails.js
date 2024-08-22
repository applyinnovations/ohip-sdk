"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Rotation Configuration Service API
 * APIs to cater for Room Rotation Configuration functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChangeRevenueTransactionCodesDetailsToJSON = exports.ChangeRevenueTransactionCodesDetailsFromJSONTyped = exports.ChangeRevenueTransactionCodesDetailsFromJSON = exports.instanceOfChangeRevenueTransactionCodesDetails = void 0;
const runtime_1 = require("../runtime");
const ErrorType_1 = require("./ErrorType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the ChangeRevenueTransactionCodesDetails interface.
 */
function instanceOfChangeRevenueTransactionCodesDetails(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfChangeRevenueTransactionCodesDetails = instanceOfChangeRevenueTransactionCodesDetails;
function ChangeRevenueTransactionCodesDetailsFromJSON(json) {
    return ChangeRevenueTransactionCodesDetailsFromJSONTyped(json, false);
}
exports.ChangeRevenueTransactionCodesDetailsFromJSON = ChangeRevenueTransactionCodesDetailsFromJSON;
function ChangeRevenueTransactionCodesDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'correlationId': !(0, runtime_1.exists)(json, 'correlationId') ? undefined : json['correlationId'],
        'echoToken': !(0, runtime_1.exists)(json, 'echoToken') ? undefined : json['echoToken'],
        'enforceAllowed': !(0, runtime_1.exists)(json, 'enforceAllowed') ? undefined : json['enforceAllowed'],
        'errors': !(0, runtime_1.exists)(json, 'errors') ? undefined : (json['errors'].map(ErrorType_1.ErrorTypeFromJSON)),
        'retryAllowed': !(0, runtime_1.exists)(json, 'retryAllowed') ? undefined : json['retryAllowed'],
        'success': !(0, runtime_1.exists)(json, 'success') ? undefined : json['success'],
        'timeStamp': !(0, runtime_1.exists)(json, 'timeStamp') ? undefined : json['timeStamp'],
        'useLocalAllowed': !(0, runtime_1.exists)(json, 'useLocalAllowed') ? undefined : json['useLocalAllowed'],
        'version': !(0, runtime_1.exists)(json, 'version') ? undefined : json['version'],
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.ChangeRevenueTransactionCodesDetailsFromJSONTyped = ChangeRevenueTransactionCodesDetailsFromJSONTyped;
function ChangeRevenueTransactionCodesDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'correlationId': value.correlationId,
        'echoToken': value.echoToken,
        'enforceAllowed': value.enforceAllowed,
        'errors': value.errors === undefined ? undefined : (value.errors.map(ErrorType_1.ErrorTypeToJSON)),
        'retryAllowed': value.retryAllowed,
        'success': value.success,
        'timeStamp': value.timeStamp,
        'useLocalAllowed': value.useLocalAllowed,
        'version': value.version,
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.ChangeRevenueTransactionCodesDetailsToJSON = ChangeRevenueTransactionCodesDetailsToJSON;
