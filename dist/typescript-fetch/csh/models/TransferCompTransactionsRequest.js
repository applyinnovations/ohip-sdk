"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferCompTransactionsRequestToJSON = exports.TransferCompTransactionsRequestFromJSONTyped = exports.TransferCompTransactionsRequestFromJSON = exports.instanceOfTransferCompTransactionsRequest = void 0;
const runtime_1 = require("../runtime");
const TransferCompTransactionsCriteria_1 = require("./TransferCompTransactionsCriteria");
const WarningsType_1 = require("./WarningsType");
/**
 * Check if a given object implements the TransferCompTransactionsRequest interface.
 */
function instanceOfTransferCompTransactionsRequest(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTransferCompTransactionsRequest = instanceOfTransferCompTransactionsRequest;
function TransferCompTransactionsRequestFromJSON(json) {
    return TransferCompTransactionsRequestFromJSONTyped(json, false);
}
exports.TransferCompTransactionsRequestFromJSON = TransferCompTransactionsRequestFromJSON;
function TransferCompTransactionsRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'criteria': !(0, runtime_1.exists)(json, 'criteria') ? undefined : (0, TransferCompTransactionsCriteria_1.TransferCompTransactionsCriteriaFromJSON)(json['criteria']),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (0, WarningsType_1.WarningsTypeFromJSON)(json['warnings']),
    };
}
exports.TransferCompTransactionsRequestFromJSONTyped = TransferCompTransactionsRequestFromJSONTyped;
function TransferCompTransactionsRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'criteria': (0, TransferCompTransactionsCriteria_1.TransferCompTransactionsCriteriaToJSON)(value.criteria),
        'warnings': (0, WarningsType_1.WarningsTypeToJSON)(value.warnings),
    };
}
exports.TransferCompTransactionsRequestToJSON = TransferCompTransactionsRequestToJSON;
