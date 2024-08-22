"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationFolioWindowTypeToJSON = exports.ReservationFolioWindowTypeFromJSONTyped = exports.ReservationFolioWindowTypeFromJSON = exports.instanceOfReservationFolioWindowType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const PayeeInfoType_1 = require("./PayeeInfoType");
/**
 * Check if a given object implements the ReservationFolioWindowType interface.
 */
function instanceOfReservationFolioWindowType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfReservationFolioWindowType = instanceOfReservationFolioWindowType;
function ReservationFolioWindowTypeFromJSON(json) {
    return ReservationFolioWindowTypeFromJSONTyped(json, false);
}
exports.ReservationFolioWindowTypeFromJSON = ReservationFolioWindowTypeFromJSON;
function ReservationFolioWindowTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'payeeInfo': !(0, runtime_1.exists)(json, 'payeeInfo') ? undefined : (0, PayeeInfoType_1.PayeeInfoTypeFromJSON)(json['payeeInfo']),
        'paymentMethod': !(0, runtime_1.exists)(json, 'paymentMethod') ? undefined : json['paymentMethod'],
    };
}
exports.ReservationFolioWindowTypeFromJSONTyped = ReservationFolioWindowTypeFromJSONTyped;
function ReservationFolioWindowTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'folioWindowNo': value.folioWindowNo,
        'payeeInfo': (0, PayeeInfoType_1.PayeeInfoTypeToJSON)(value.payeeInfo),
        'paymentMethod': value.paymentMethod,
    };
}
exports.ReservationFolioWindowTypeToJSON = ReservationFolioWindowTypeToJSON;
