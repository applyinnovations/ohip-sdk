"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnlinkStatementCriteriaTypeToJSON = exports.UnlinkStatementCriteriaTypeFromJSONTyped = exports.UnlinkStatementCriteriaTypeFromJSON = exports.instanceOfUnlinkStatementCriteriaType = void 0;
const runtime_1 = require("../runtime");
/**
 * Check if a given object implements the UnlinkStatementCriteriaType interface.
 */
function instanceOfUnlinkStatementCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfUnlinkStatementCriteriaType = instanceOfUnlinkStatementCriteriaType;
function UnlinkStatementCriteriaTypeFromJSON(json) {
    return UnlinkStatementCriteriaTypeFromJSONTyped(json, false);
}
exports.UnlinkStatementCriteriaTypeFromJSON = UnlinkStatementCriteriaTypeFromJSON;
function UnlinkStatementCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'invoiceTrxNoList': !(0, runtime_1.exists)(json, 'invoiceTrxNoList') ? undefined : json['invoiceTrxNoList'],
    };
}
exports.UnlinkStatementCriteriaTypeFromJSONTyped = UnlinkStatementCriteriaTypeFromJSONTyped;
function UnlinkStatementCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'invoiceTrxNoList': value.invoiceTrxNoList,
    };
}
exports.UnlinkStatementCriteriaTypeToJSON = UnlinkStatementCriteriaTypeToJSON;
