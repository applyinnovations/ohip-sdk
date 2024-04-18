"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagePostingRulesTypeToJSON = exports.PackagePostingRulesTypeFromJSONTyped = exports.PackagePostingRulesTypeFromJSON = exports.instanceOfPackagePostingRulesType = void 0;
const runtime_1 = require("../runtime");
const PackageTransactionCodeType_1 = require("./PackageTransactionCodeType");
/**
 * Check if a given object implements the PackagePostingRulesType interface.
 */
function instanceOfPackagePostingRulesType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackagePostingRulesType = instanceOfPackagePostingRulesType;
function PackagePostingRulesTypeFromJSON(json) {
    return PackagePostingRulesTypeFromJSONTyped(json, false);
}
exports.PackagePostingRulesTypeFromJSON = PackagePostingRulesTypeFromJSON;
function PackagePostingRulesTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'alternateCodesList': !(0, runtime_1.exists)(json, 'alternateCodesList') ? undefined : (json['alternateCodesList'].map(PackageTransactionCodeType_1.PackageTransactionCodeTypeFromJSON)),
        'lossCode': !(0, runtime_1.exists)(json, 'lossCode') ? undefined : (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeFromJSON)(json['lossCode']),
        'overageCode': !(0, runtime_1.exists)(json, 'overageCode') ? undefined : (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeFromJSON)(json['overageCode']),
        'profitCode': !(0, runtime_1.exists)(json, 'profitCode') ? undefined : (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeFromJSON)(json['profitCode']),
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeFromJSON)(json['transactionCode']),
    };
}
exports.PackagePostingRulesTypeFromJSONTyped = PackagePostingRulesTypeFromJSONTyped;
function PackagePostingRulesTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'alternateCodesList': value.alternateCodesList === undefined ? undefined : (value.alternateCodesList.map(PackageTransactionCodeType_1.PackageTransactionCodeTypeToJSON)),
        'lossCode': (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeToJSON)(value.lossCode),
        'overageCode': (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeToJSON)(value.overageCode),
        'profitCode': (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeToJSON)(value.profitCode),
        'transactionCode': (0, PackageTransactionCodeType_1.PackageTransactionCodeTypeToJSON)(value.transactionCode),
    };
}
exports.PackagePostingRulesTypeToJSON = PackagePostingRulesTypeToJSON;