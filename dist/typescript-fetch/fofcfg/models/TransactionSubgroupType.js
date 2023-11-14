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
exports.TransactionSubgroupTypeToJSON = exports.TransactionSubgroupTypeFromJSONTyped = exports.TransactionSubgroupTypeFromJSON = exports.instanceOfTransactionSubgroupType = void 0;
const runtime_1 = require("../runtime");
const CashieringTransactionTypeType_1 = require("./CashieringTransactionTypeType");
/**
 * Check if a given object implements the TransactionSubgroupType interface.
 */
function instanceOfTransactionSubgroupType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransactionSubgroupType = instanceOfTransactionSubgroupType;
function TransactionSubgroupTypeFromJSON(json) {
    return TransactionSubgroupTypeFromJSONTyped(json, false);
}
exports.TransactionSubgroupTypeFromJSON = TransactionSubgroupTypeFromJSON;
function TransactionSubgroupTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'code': !(0, runtime_1.exists)(json, 'code') ? undefined : json['code'],
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'group': !(0, runtime_1.exists)(json, 'group') ? undefined : json['group'],
        'groupDescription': !(0, runtime_1.exists)(json, 'groupDescription') ? undefined : json['groupDescription'],
        'newGroup': !(0, runtime_1.exists)(json, 'newGroup') ? undefined : json['newGroup'],
        'sequence': !(0, runtime_1.exists)(json, 'sequence') ? undefined : json['sequence'],
        'type': !(0, runtime_1.exists)(json, 'type') ? undefined : (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeFromJSON)(json['type']),
    };
}
exports.TransactionSubgroupTypeFromJSONTyped = TransactionSubgroupTypeFromJSONTyped;
function TransactionSubgroupTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'code': value.code,
        'description': value.description,
        'group': value.group,
        'groupDescription': value.groupDescription,
        'newGroup': value.newGroup,
        'sequence': value.sequence,
        'type': (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeToJSON)(value.type),
    };
}
exports.TransactionSubgroupTypeToJSON = TransactionSubgroupTypeToJSON;