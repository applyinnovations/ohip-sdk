"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResPaymentCardTypeToJSON = exports.ResPaymentCardTypeFromJSONTyped = exports.ResPaymentCardTypeFromJSON = exports.instanceOfResPaymentCardType = void 0;
const runtime_1 = require("../runtime");
const CardNumberTypeType_1 = require("./CardNumberTypeType");
const CardProcessingType_1 = require("./CardProcessingType");
const CardTypeType_1 = require("./CardTypeType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ResPaymentCardType interface.
 */
function instanceOfResPaymentCardType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfResPaymentCardType = instanceOfResPaymentCardType;
function ResPaymentCardTypeFromJSON(json) {
    return ResPaymentCardTypeFromJSONTyped(json, false);
}
exports.ResPaymentCardTypeFromJSON = ResPaymentCardTypeFromJSON;
function ResPaymentCardTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalAmountNeeded': !(0, runtime_1.exists)(json, 'approvalAmountNeeded') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['approvalAmountNeeded']),
        'attachCreditCardToProfile': !(0, runtime_1.exists)(json, 'attachCreditCardToProfile') ? undefined : json['attachCreditCardToProfile'],
        'cardHolderName': !(0, runtime_1.exists)(json, 'cardHolderName') ? undefined : json['cardHolderName'],
        'cardId': !(0, runtime_1.exists)(json, 'cardId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['cardId']),
        'cardNumber': !(0, runtime_1.exists)(json, 'cardNumber') ? undefined : json['cardNumber'],
        'cardNumberLast4Digits': !(0, runtime_1.exists)(json, 'cardNumberLast4Digits') ? undefined : json['cardNumberLast4Digits'],
        'cardNumberMasked': !(0, runtime_1.exists)(json, 'cardNumberMasked') ? undefined : json['cardNumberMasked'],
        'cardOrToken': !(0, runtime_1.exists)(json, 'cardOrToken') ? undefined : (0, CardNumberTypeType_1.CardNumberTypeTypeFromJSON)(json['cardOrToken']),
        'cardPresent': !(0, runtime_1.exists)(json, 'cardPresent') ? undefined : json['cardPresent'],
        'cardType': !(0, runtime_1.exists)(json, 'cardType') ? undefined : (0, CardTypeType_1.CardTypeTypeFromJSON)(json['cardType']),
        'currentAuthorizedAmount': !(0, runtime_1.exists)(json, 'currentAuthorizedAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['currentAuthorizedAmount']),
        'expirationDate': !(0, runtime_1.exists)(json, 'expirationDate') ? undefined : (new Date(json['expirationDate'])),
        'expirationDateExpired': !(0, runtime_1.exists)(json, 'expirationDateExpired') ? undefined : json['expirationDateExpired'],
        'expirationDateMasked': !(0, runtime_1.exists)(json, 'expirationDateMasked') ? undefined : json['expirationDateMasked'],
        'processing': !(0, runtime_1.exists)(json, 'processing') ? undefined : (0, CardProcessingType_1.CardProcessingTypeFromJSON)(json['processing']),
        'swiped': !(0, runtime_1.exists)(json, 'swiped') ? undefined : json['swiped'],
        'userDefinedCardType': !(0, runtime_1.exists)(json, 'userDefinedCardType') ? undefined : json['userDefinedCardType'],
    };
}
exports.ResPaymentCardTypeFromJSONTyped = ResPaymentCardTypeFromJSONTyped;
function ResPaymentCardTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'approvalAmountNeeded': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.approvalAmountNeeded),
        'attachCreditCardToProfile': value.attachCreditCardToProfile,
        'cardHolderName': value.cardHolderName,
        'cardId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.cardId),
        'cardNumber': value.cardNumber,
        'cardNumberLast4Digits': value.cardNumberLast4Digits,
        'cardNumberMasked': value.cardNumberMasked,
        'cardOrToken': (0, CardNumberTypeType_1.CardNumberTypeTypeToJSON)(value.cardOrToken),
        'cardPresent': value.cardPresent,
        'cardType': (0, CardTypeType_1.CardTypeTypeToJSON)(value.cardType),
        'currentAuthorizedAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.currentAuthorizedAmount),
        'expirationDate': value.expirationDate === undefined ? undefined : (value.expirationDate.toISOString().substr(0, 10)),
        'expirationDateExpired': value.expirationDateExpired,
        'expirationDateMasked': value.expirationDateMasked,
        'processing': (0, CardProcessingType_1.CardProcessingTypeToJSON)(value.processing),
        'swiped': value.swiped,
        'userDefinedCardType': value.userDefinedCardType,
    };
}
exports.ResPaymentCardTypeToJSON = ResPaymentCardTypeToJSON;
