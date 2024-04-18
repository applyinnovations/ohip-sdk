"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferCompTransactionsCriteriaToJSON = exports.TransferCompTransactionsCriteriaFromJSONTyped = exports.TransferCompTransactionsCriteriaFromJSON = exports.instanceOfTransferCompTransactionsCriteria = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the TransferCompTransactionsCriteria interface.
 */
function instanceOfTransferCompTransactionsCriteria(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransferCompTransactionsCriteria = instanceOfTransferCompTransactionsCriteria;
function TransferCompTransactionsCriteriaFromJSON(json) {
    return TransferCompTransactionsCriteriaFromJSONTyped(json, false);
}
exports.TransferCompTransactionsCriteriaFromJSON = TransferCompTransactionsCriteriaFromJSON;
function TransferCompTransactionsCriteriaFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'targetFolioNo': !(0, runtime_1.exists)(json, 'targetFolioNo') ? undefined : json['targetFolioNo'],
        'transactionList': !(0, runtime_1.exists)(json, 'transactionList') ? undefined : json['transactionList'],
    };
}
exports.TransferCompTransactionsCriteriaFromJSONTyped = TransferCompTransactionsCriteriaFromJSONTyped;
function TransferCompTransactionsCriteriaToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'targetFolioNo': value.targetFolioNo,
        'transactionList': value.transactionList,
    };
}
exports.TransferCompTransactionsCriteriaToJSON = TransferCompTransactionsCriteriaToJSON;