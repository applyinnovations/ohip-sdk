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
exports.TrxCodeClassificationTypeToJSON = exports.TrxCodeClassificationTypeFromJSONTyped = exports.TrxCodeClassificationTypeFromJSON = exports.instanceOfTrxCodeClassificationType = void 0;
const runtime_1 = require("../runtime");
const CashieringTransactionTypeType_1 = require("./CashieringTransactionTypeType");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const TrxCodeClassificationTypeTransactionType_1 = require("./TrxCodeClassificationTypeTransactionType");
/**
 * Check if a given object implements the TrxCodeClassificationType interface.
 */
function instanceOfTrxCodeClassificationType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrxCodeClassificationType = instanceOfTrxCodeClassificationType;
function TrxCodeClassificationTypeFromJSON(json) {
    return TrxCodeClassificationTypeFromJSONTyped(json, false);
}
exports.TrxCodeClassificationTypeFromJSON = TrxCodeClassificationTypeFromJSON;
function TrxCodeClassificationTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'fiscalTransactionType': !(0, runtime_1.exists)(json, 'fiscalTransactionType') ? undefined : json['fiscalTransactionType'],
        'group': !(0, runtime_1.exists)(json, 'group') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['group']),
        'subgroup': !(0, runtime_1.exists)(json, 'subgroup') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['subgroup']),
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : (0, TrxCodeClassificationTypeTransactionType_1.TrxCodeClassificationTypeTransactionTypeFromJSON)(json['transactionType']),
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeFromJSON)(json['type']),
    };
}
exports.TrxCodeClassificationTypeFromJSONTyped = TrxCodeClassificationTypeFromJSONTyped;
function TrxCodeClassificationTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'fiscalTransactionType': value.fiscalTransactionType,
        'group': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.group),
        'subgroup': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.subgroup),
        'transactionType': (0, TrxCodeClassificationTypeTransactionType_1.TrxCodeClassificationTypeTransactionTypeToJSON)(value.transactionType),
        'type': (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeToJSON)(value.type),
    };
}
exports.TrxCodeClassificationTypeToJSON = TrxCodeClassificationTypeToJSON;