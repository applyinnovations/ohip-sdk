"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CopyTransactionCodeTypeToJSON = exports.CopyTransactionCodeTypeFromJSONTyped = exports.CopyTransactionCodeTypeFromJSON = exports.instanceOfCopyTransactionCodeType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
/**
 * Check if a given object implements the CopyTransactionCodeType interface.
 */
function instanceOfCopyTransactionCodeType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCopyTransactionCodeType = instanceOfCopyTransactionCodeType;
function CopyTransactionCodeTypeFromJSON(json) {
    return CopyTransactionCodeTypeFromJSONTyped(json, false);
}
exports.CopyTransactionCodeTypeFromJSON = CopyTransactionCodeTypeFromJSON;
function CopyTransactionCodeTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'copyAs': !(0, runtime_1.exists)(json, 'copyAs') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['copyAs']),
        'sourceTransactionCode': !(0, runtime_1.exists)(json, 'sourceTransactionCode') ? undefined : json['sourceTransactionCode'],
    };
}
exports.CopyTransactionCodeTypeFromJSONTyped = CopyTransactionCodeTypeFromJSONTyped;
function CopyTransactionCodeTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'copyAs': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.copyAs),
        'sourceTransactionCode': value.sourceTransactionCode,
    };
}
exports.CopyTransactionCodeTypeToJSON = CopyTransactionCodeTypeToJSON;
