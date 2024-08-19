"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationPaymentMethodTypeToJSON = exports.ReservationPaymentMethodTypeFromJSONTyped = exports.ReservationPaymentMethodTypeFromJSON = exports.instanceOfReservationPaymentMethodType = void 0;
const runtime_1 = require("../runtime");
const AuthorizationRuleType_1 = require("./AuthorizationRuleType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ResPaymentCardType_1 = require("./ResPaymentCardType");
const ReservationPaymentMethodTypeEmailFolioInfo_1 = require("./ReservationPaymentMethodTypeEmailFolioInfo");
/**
 * Check if a given object implements the ReservationPaymentMethodType interface.
 */
function instanceOfReservationPaymentMethodType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationPaymentMethodType = instanceOfReservationPaymentMethodType;
function ReservationPaymentMethodTypeFromJSON(json) {
    return ReservationPaymentMethodTypeFromJSONTyped(json, false);
}
exports.ReservationPaymentMethodTypeFromJSON = ReservationPaymentMethodTypeFromJSON;
function ReservationPaymentMethodTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'authorizationRule': !(0, runtime_1.exists)(json, 'authorizationRule') ? undefined : (0, AuthorizationRuleType_1.AuthorizationRuleTypeFromJSON)(json['authorizationRule']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'description': !(0, runtime_1.exists)(json, 'description') ? undefined : json['description'],
        'emailFolioInfo': !(0, runtime_1.exists)(json, 'emailFolioInfo') ? undefined : (0, ReservationPaymentMethodTypeEmailFolioInfo_1.ReservationPaymentMethodTypeEmailFolioInfoFromJSON)(json['emailFolioInfo']),
        'folioView': !(0, runtime_1.exists)(json, 'folioView') ? undefined : json['folioView'],
        'paymentCard': !(0, runtime_1.exists)(json, 'paymentCard') ? undefined : (0, ResPaymentCardType_1.ResPaymentCardTypeFromJSON)(json['paymentCard']),
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}
exports.ReservationPaymentMethodTypeFromJSONTyped = ReservationPaymentMethodTypeFromJSONTyped;
function ReservationPaymentMethodTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'authorizationRule': (0, AuthorizationRuleType_1.AuthorizationRuleTypeToJSON)(value.authorizationRule),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'description': value.description,
        'emailFolioInfo': (0, ReservationPaymentMethodTypeEmailFolioInfo_1.ReservationPaymentMethodTypeEmailFolioInfoToJSON)(value.emailFolioInfo),
        'folioView': value.folioView,
        'paymentCard': (0, ResPaymentCardType_1.ResPaymentCardTypeToJSON)(value.paymentCard),
        'paymentMethod': value.paymentMethod,
    };
}
exports.ReservationPaymentMethodTypeToJSON = ReservationPaymentMethodTypeToJSON;
