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
exports.PostRateCodeCriteriaTypeToJSON = exports.PostRateCodeCriteriaTypeFromJSONTyped = exports.PostRateCodeCriteriaTypeFromJSON = exports.instanceOfPostRateCodeCriteriaType = void 0;
const runtime_1 = require("../runtime");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const GuestCountsType_1 = require("./GuestCountsType");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the PostRateCodeCriteriaType interface.
 */
function instanceOfPostRateCodeCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPostRateCodeCriteriaType = instanceOfPostRateCodeCriteriaType;
function PostRateCodeCriteriaTypeFromJSON(json) {
    return PostRateCodeCriteriaTypeFromJSONTyped(json, false);
}
exports.PostRateCodeCriteriaTypeFromJSON = PostRateCodeCriteriaTypeFromJSON;
function PostRateCodeCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'adjustmentCode': !(0, runtime_1.exists)(json, 'adjustmentCode') ? undefined : json['adjustmentCode'],
        'arrangementCode': !(0, runtime_1.exists)(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'checkNo': !(0, runtime_1.exists)(json, 'checkNo') ? undefined : json['checkNo'],
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'guestCounts': !(0, runtime_1.exists)(json, 'guestCounts') ? undefined : (0, GuestCountsType_1.GuestCountsTypeFromJSON)(json['guestCounts']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'nights': !(0, runtime_1.exists)(json, 'nights') ? undefined : json['nights'],
        'parentTrxNo': !(0, runtime_1.exists)(json, 'parentTrxNo') ? undefined : json['parentTrxNo'],
        'postProducts': !(0, runtime_1.exists)(json, 'postProducts') ? undefined : json['postProducts'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'remark': !(0, runtime_1.exists)(json, 'remark') ? undefined : json['remark'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : json['revenueDate'],
    };
}
exports.PostRateCodeCriteriaTypeFromJSONTyped = PostRateCodeCriteriaTypeFromJSONTyped;
function PostRateCodeCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'adjustmentCode': value.adjustmentCode,
        'arrangementCode': value.arrangementCode,
        'cashierId': value.cashierId,
        'checkNo': value.checkNo,
        'folioWindowNo': value.folioWindowNo,
        'guestCounts': (0, GuestCountsType_1.GuestCountsTypeToJSON)(value.guestCounts),
        'hotelId': value.hotelId,
        'nights': value.nights,
        'parentTrxNo': value.parentTrxNo,
        'postProducts': value.postProducts,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'quantity': value.quantity,
        'rateCode': value.rateCode,
        'reference': value.reference,
        'remark': value.remark,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'revenueDate': value.revenueDate,
    };
}
exports.PostRateCodeCriteriaTypeToJSON = PostRateCodeCriteriaTypeToJSON;
