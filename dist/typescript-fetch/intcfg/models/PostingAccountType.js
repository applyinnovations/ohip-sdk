"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Integration Configuration API
 * APIs catering to Integration Configuration in OPERA Cloud.  Operations such as get Hotel Interface Types, or get UDF mappings can be found in this module.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostingAccountTypeToJSON = exports.PostingAccountTypeFromJSONTyped = exports.PostingAccountTypeFromJSON = exports.instanceOfPostingAccountType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the PostingAccountType interface.
 */
function instanceOfPostingAccountType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostingAccountType = instanceOfPostingAccountType;
function PostingAccountTypeFromJSON(json) {
    return PostingAccountTypeFromJSONTyped(json, false);
}
exports.PostingAccountTypeFromJSON = PostingAccountTypeFromJSON;
function PostingAccountTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'id': !(0, runtime_1.exists)(json, 'id') ? undefined : json['id'],
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
        'account': !(0, runtime_1.exists)(json, 'account') ? undefined : json['account'],
        'accountDescription': !(0, runtime_1.exists)(json, 'accountDescription') ? undefined : json['accountDescription'],
        'salesOutlet': !(0, runtime_1.exists)(json, 'salesOutlet') ? undefined : json['salesOutlet'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'autoBalance': !(0, runtime_1.exists)(json, 'autoBalance') ? undefined : json['autoBalance'],
    };
}
exports.PostingAccountTypeFromJSONTyped = PostingAccountTypeFromJSONTyped;
function PostingAccountTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'id': value.id,
        'paymentMethod': value.paymentMethod,
        'account': value.account,
        'accountDescription': value.accountDescription,
        'salesOutlet': value.salesOutlet,
        'transactionCode': value.transactionCode,
        'description': value.description,
        'autoBalance': value.autoBalance,
    };
}
exports.PostingAccountTypeToJSON = PostingAccountTypeToJSON;
