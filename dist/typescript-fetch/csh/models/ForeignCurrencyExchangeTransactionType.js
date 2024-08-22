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
exports.ForeignCurrencyExchangeTransactionTypeToJSON = exports.ForeignCurrencyExchangeTransactionTypeFromJSONTyped = exports.ForeignCurrencyExchangeTransactionTypeFromJSON = exports.instanceOfForeignCurrencyExchangeTransactionType = void 0;
const runtime_1 = require("../runtime");
const FolioType_1 = require("./FolioType");
const SummaryPostingType_1 = require("./SummaryPostingType");
/**
 * Check if a given object implements the ForeignCurrencyExchangeTransactionType interface.
 */
function instanceOfForeignCurrencyExchangeTransactionType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfForeignCurrencyExchangeTransactionType = instanceOfForeignCurrencyExchangeTransactionType;
function ForeignCurrencyExchangeTransactionTypeFromJSON(json) {
    return ForeignCurrencyExchangeTransactionTypeFromJSONTyped(json, false);
}
exports.ForeignCurrencyExchangeTransactionTypeFromJSON = ForeignCurrencyExchangeTransactionTypeFromJSON;
function ForeignCurrencyExchangeTransactionTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'folio': !(0, runtime_1.exists)(json, 'folio') ? undefined : (0, FolioType_1.FolioTypeFromJSON)(json['folio']),
        'posting': !(0, runtime_1.exists)(json, 'posting') ? undefined : (0, SummaryPostingType_1.SummaryPostingTypeFromJSON)(json['posting']),
    };
}
exports.ForeignCurrencyExchangeTransactionTypeFromJSONTyped = ForeignCurrencyExchangeTransactionTypeFromJSONTyped;
function ForeignCurrencyExchangeTransactionTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'folio': (0, FolioType_1.FolioTypeToJSON)(value.folio),
        'posting': (0, SummaryPostingType_1.SummaryPostingTypeToJSON)(value.posting),
    };
}
exports.ForeignCurrencyExchangeTransactionTypeToJSON = ForeignCurrencyExchangeTransactionTypeToJSON;
