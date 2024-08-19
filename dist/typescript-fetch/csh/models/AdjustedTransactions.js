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
exports.AdjustedTransactionsToJSON = exports.AdjustedTransactionsFromJSONTyped = exports.AdjustedTransactionsFromJSON = exports.instanceOfAdjustedTransactions = void 0;
const runtime_1 = require("../runtime");
const InstanceLink_1 = require("./InstanceLink");
const SummaryPostingType_1 = require("./SummaryPostingType");
const TrxInfoType_1 = require("./TrxInfoType");
const WarningType_1 = require("./WarningType");
/**
 * Check if a given object implements the AdjustedTransactions interface.
 */
function instanceOfAdjustedTransactions(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAdjustedTransactions = instanceOfAdjustedTransactions;
function AdjustedTransactionsFromJSON(json) {
    return AdjustedTransactionsFromJSONTyped(json, false);
}
exports.AdjustedTransactionsFromJSON = AdjustedTransactionsFromJSON;
function AdjustedTransactionsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'links': !(0, runtime_1.exists)(json, 'links') ? undefined : (json['links'].map(InstanceLink_1.InstanceLinkFromJSON)),
        'serviceRecoveryAdjustments': !(0, runtime_1.exists)(json, 'serviceRecoveryAdjustments') ? undefined : (json['serviceRecoveryAdjustments'].map(SummaryPostingType_1.SummaryPostingTypeFromJSON)),
        'trxCodesInfo': !(0, runtime_1.exists)(json, 'trxCodesInfo') ? undefined : (json['trxCodesInfo'].map(TrxInfoType_1.TrxInfoTypeFromJSON)),
        'warnings': !(0, runtime_1.exists)(json, 'warnings') ? undefined : (json['warnings'].map(WarningType_1.WarningTypeFromJSON)),
    };
}
exports.AdjustedTransactionsFromJSONTyped = AdjustedTransactionsFromJSONTyped;
function AdjustedTransactionsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'links': value.links === undefined ? undefined : (value.links.map(InstanceLink_1.InstanceLinkToJSON)),
        'serviceRecoveryAdjustments': value.serviceRecoveryAdjustments === undefined ? undefined : (value.serviceRecoveryAdjustments.map(SummaryPostingType_1.SummaryPostingTypeToJSON)),
        'trxCodesInfo': value.trxCodesInfo === undefined ? undefined : (value.trxCodesInfo.map(TrxInfoType_1.TrxInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : (value.warnings.map(WarningType_1.WarningTypeToJSON)),
    };
}
exports.AdjustedTransactionsToJSON = AdjustedTransactionsToJSON;
