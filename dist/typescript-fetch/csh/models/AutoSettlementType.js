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
exports.AutoSettlementTypeToJSON = exports.AutoSettlementTypeFromJSONTyped = exports.AutoSettlementTypeFromJSON = exports.instanceOfAutoSettlementType = void 0;
const runtime_1 = require("../runtime");
const AutoFolioSettlementCriteriaType_1 = require("./AutoFolioSettlementCriteriaType");
const CashieringEventType_1 = require("./CashieringEventType");
const PaymentMethodSearchType_1 = require("./PaymentMethodSearchType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the AutoSettlementType interface.
 */
function instanceOfAutoSettlementType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfAutoSettlementType = instanceOfAutoSettlementType;
function AutoSettlementTypeFromJSON(json) {
    return AutoSettlementTypeFromJSONTyped(json, false);
}
exports.AutoSettlementTypeFromJSON = AutoSettlementTypeFromJSON;
function AutoSettlementTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'eventType': !(0, runtime_1.exists)(json, 'eventType') ? undefined : (0, CashieringEventType_1.CashieringEventTypeFromJSON)(json['eventType']),
        'folioWindowsToSettle': !(0, runtime_1.exists)(json, 'folioWindowsToSettle') ? undefined : json['folioWindowsToSettle'],
        'folioWindowsToTransfer': !(0, runtime_1.exists)(json, 'folioWindowsToTransfer') ? undefined : json['folioWindowsToTransfer'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'includeCreditCardBalance': !(0, runtime_1.exists)(json, 'includeCreditCardBalance') ? undefined : json['includeCreditCardBalance'],
        'minimumWindowBalance': !(0, runtime_1.exists)(json, 'minimumWindowBalance') ? undefined : json['minimumWindowBalance'],
        'paymentMethods': !(0, runtime_1.exists)(json, 'paymentMethods') ? undefined : (json['paymentMethods'].map(PaymentMethodSearchType_1.PaymentMethodSearchTypeFromJSON)),
        'reservationCriteria': !(0, runtime_1.exists)(json, 'reservationCriteria') ? undefined : (0, AutoFolioSettlementCriteriaType_1.AutoFolioSettlementCriteriaTypeFromJSON)(json['reservationCriteria']),
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
    };
}
exports.AutoSettlementTypeFromJSONTyped = AutoSettlementTypeFromJSONTyped;
function AutoSettlementTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'cashierId': value.cashierId,
        'eventType': (0, CashieringEventType_1.CashieringEventTypeToJSON)(value.eventType),
        'folioWindowsToSettle': value.folioWindowsToSettle,
        'folioWindowsToTransfer': value.folioWindowsToTransfer,
        'hotelId': value.hotelId,
        'includeCreditCardBalance': value.includeCreditCardBalance,
        'minimumWindowBalance': value.minimumWindowBalance,
        'paymentMethods': value.paymentMethods === undefined ? undefined : (value.paymentMethods.map(PaymentMethodSearchType_1.PaymentMethodSearchTypeToJSON)),
        'reservationCriteria': (0, AutoFolioSettlementCriteriaType_1.AutoFolioSettlementCriteriaTypeToJSON)(value.reservationCriteria),
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
    };
}
exports.AutoSettlementTypeToJSON = AutoSettlementTypeToJSON;
