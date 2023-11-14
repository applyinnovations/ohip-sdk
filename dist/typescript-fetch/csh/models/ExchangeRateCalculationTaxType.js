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
exports.ExchangeRateCalculationTaxTypeToJSON = exports.ExchangeRateCalculationTaxTypeFromJSONTyped = exports.ExchangeRateCalculationTaxTypeFromJSON = exports.instanceOfExchangeRateCalculationTaxType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ExchangeRateTransactionGenerateTaxesType_1 = require("./ExchangeRateTransactionGenerateTaxesType");
/**
 * Check if a given object implements the ExchangeRateCalculationTaxType interface.
 */
function instanceOfExchangeRateCalculationTaxType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExchangeRateCalculationTaxType = instanceOfExchangeRateCalculationTaxType;
function ExchangeRateCalculationTaxTypeFromJSON(json) {
    return ExchangeRateCalculationTaxTypeFromJSONTyped(json, false);
}
exports.ExchangeRateCalculationTaxTypeFromJSON = ExchangeRateCalculationTaxTypeFromJSON;
function ExchangeRateCalculationTaxTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseAmount': !(0, runtime_1.exists)(json, 'baseAmount') ? undefined : json['baseAmount'],
        'exchangeRateTransactionGenerateTaxes': !(0, runtime_1.exists)(json, 'exchangeRateTransactionGenerateTaxes') ? undefined : (0, ExchangeRateTransactionGenerateTaxesType_1.ExchangeRateTransactionGenerateTaxesTypeFromJSON)(json['exchangeRateTransactionGenerateTaxes']),
        'maxServiceTax': !(0, runtime_1.exists)(json, 'maxServiceTax') ? undefined : json['maxServiceTax'],
        'minServiceTax': !(0, runtime_1.exists)(json, 'minServiceTax') ? undefined : json['minServiceTax'],
        'percentage': !(0, runtime_1.exists)(json, 'percentage') ? undefined : json['percentage'],
        'percentageAppliedOn': !(0, runtime_1.exists)(json, 'percentageAppliedOn') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['percentageAppliedOn']),
    };
}
exports.ExchangeRateCalculationTaxTypeFromJSONTyped = ExchangeRateCalculationTaxTypeFromJSONTyped;
function ExchangeRateCalculationTaxTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseAmount': value.baseAmount,
        'exchangeRateTransactionGenerateTaxes': (0, ExchangeRateTransactionGenerateTaxesType_1.ExchangeRateTransactionGenerateTaxesTypeToJSON)(value.exchangeRateTransactionGenerateTaxes),
        'maxServiceTax': value.maxServiceTax,
        'minServiceTax': value.minServiceTax,
        'percentage': value.percentage,
        'percentageAppliedOn': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.percentageAppliedOn),
    };
}
exports.ExchangeRateCalculationTaxTypeToJSON = ExchangeRateCalculationTaxTypeToJSON;