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
exports.CreditCardInfoToJSON = exports.CreditCardInfoFromJSONTyped = exports.CreditCardInfoFromJSON = exports.instanceOfCreditCardInfo = void 0;
const runtime_1 = require("../runtime");
const CardTypeType_1 = require("./CardTypeType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CreditCardInfo interface.
 */
function instanceOfCreditCardInfo(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCreditCardInfo = instanceOfCreditCardInfo;
function CreditCardInfoFromJSON(json) {
    return CreditCardInfoFromJSONTyped(json, false);
}
exports.CreditCardInfoFromJSON = CreditCardInfoFromJSON;
function CreditCardInfoFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cardHolderName': !(0, runtime_1.exists)(json, 'cardHolderName') ? undefined : json['cardHolderName'],
        'cardId': !(0, runtime_1.exists)(json, 'cardId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['cardId']),
        'cardNumberLast4Digits': !(0, runtime_1.exists)(json, 'cardNumberLast4Digits') ? undefined : json['cardNumberLast4Digits'],
        'cardNumberMasked': !(0, runtime_1.exists)(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'cardType': !(0, runtime_1.exists)(json, 'cardType') ? undefined : (0, CardTypeType_1.CardTypeTypeFromJSON)(json['cardType']),
        'expirationDateMasked': !(0, runtime_1.exists)(json, 'expirationDateMasked') ? undefined : json['expirationDateMasked'],
        'expirationDateString': !(0, runtime_1.exists)(json, 'expirationDateString') ? undefined : json['expirationDateString'],
    };
}
exports.CreditCardInfoFromJSONTyped = CreditCardInfoFromJSONTyped;
function CreditCardInfoToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cardHolderName': value.cardHolderName,
        'cardId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.cardId),
        'cardNumberLast4Digits': value.cardNumberLast4Digits,
        'cardNumberMasked': value.cardNumberMasked,
        'cardType': (0, CardTypeType_1.CardTypeTypeToJSON)(value.cardType),
        'expirationDateMasked': value.expirationDateMasked,
        'expirationDateString': value.expirationDateString,
    };
}
exports.CreditCardInfoToJSON = CreditCardInfoToJSON;
