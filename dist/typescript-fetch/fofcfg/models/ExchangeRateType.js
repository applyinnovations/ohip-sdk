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
exports.ExchangeRateTypeToJSON = exports.ExchangeRateTypeFromJSONTyped = exports.ExchangeRateTypeFromJSON = exports.instanceOfExchangeRateType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CurrencyExchangeType_1 = require("./CurrencyExchangeType");
const StatusTypes_1 = require("./StatusTypes");
/**
 * Check if a given object implements the ExchangeRateType interface.
 */
function instanceOfExchangeRateType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfExchangeRateType = instanceOfExchangeRateType;
function ExchangeRateTypeFromJSON(json) {
    return ExchangeRateTypeFromJSONTyped(json, false);
}
exports.ExchangeRateTypeFromJSON = ExchangeRateTypeFromJSON;
function ExchangeRateTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'baseCurrency': !(0, runtime_1.exists)(json, 'baseCurrency') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['baseCurrency']),
        'beginDate': !(0, runtime_1.exists)(json, 'beginDate') ? undefined : json['beginDate'],
        'buyCommission': !(0, runtime_1.exists)(json, 'buyCommission') ? undefined : json['buyCommission'],
        'buyRate': !(0, runtime_1.exists)(json, 'buyRate') ? undefined : json['buyRate'],
        'comment': !(0, runtime_1.exists)(json, 'comment') ? undefined : json['comment'],
        'currency': !(0, runtime_1.exists)(json, 'currency') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['currency']),
        'exchangeType': !(0, runtime_1.exists)(json, 'exchangeType') ? undefined : (json['exchangeType'].map(CurrencyExchangeType_1.CurrencyExchangeTypeFromJSON)),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'sellCommission': !(0, runtime_1.exists)(json, 'sellCommission') ? undefined : json['sellCommission'],
        'sellRate': !(0, runtime_1.exists)(json, 'sellRate') ? undefined : json['sellRate'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : (0, StatusTypes_1.StatusTypesFromJSON)(json['status']),
    };
}
exports.ExchangeRateTypeFromJSONTyped = ExchangeRateTypeFromJSONTyped;
function ExchangeRateTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'baseCurrency': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.baseCurrency),
        'beginDate': value.beginDate,
        'buyCommission': value.buyCommission,
        'buyRate': value.buyRate,
        'comment': value.comment,
        'currency': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.currency),
        'exchangeType': value.exchangeType === undefined ? undefined : (value.exchangeType.map(CurrencyExchangeType_1.CurrencyExchangeTypeToJSON)),
        'hotelId': value.hotelId,
        'sellCommission': value.sellCommission,
        'sellRate': value.sellRate,
        'status': (0, StatusTypes_1.StatusTypesToJSON)(value.status),
    };
}
exports.ExchangeRateTypeToJSON = ExchangeRateTypeToJSON;