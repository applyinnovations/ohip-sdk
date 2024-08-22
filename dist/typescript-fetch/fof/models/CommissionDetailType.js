"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommissionDetailTypeToJSON = exports.CommissionDetailTypeFromJSONTyped = exports.CommissionDetailTypeFromJSON = exports.instanceOfCommissionDetailType = void 0;
const runtime_1 = require("../runtime");
const CodeDescriptionType_1 = require("./CodeDescriptionType");
const CommissionCodeType_1 = require("./CommissionCodeType");
const CommissionStatusType_1 = require("./CommissionStatusType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ResGuestInfoType_1 = require("./ResGuestInfoType");
const TimeSpanType_1 = require("./TimeSpanType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the CommissionDetailType interface.
 */
function instanceOfCommissionDetailType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfCommissionDetailType = instanceOfCommissionDetailType;
function CommissionDetailTypeFromJSON(json) {
    return CommissionDetailTypeFromJSONTyped(json, false);
}
exports.CommissionDetailTypeFromJSON = CommissionDetailTypeFromJSON;
function CommissionDetailTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aROffset': !(0, runtime_1.exists)(json, 'aROffset') ? undefined : json['aROffset'],
        'aROffsetAmount': !(0, runtime_1.exists)(json, 'aROffsetAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['aROffsetAmount']),
        'adjustmentNotes': !(0, runtime_1.exists)(json, 'adjustmentNotes') ? undefined : json['adjustmentNotes'],
        'blockCode': !(0, runtime_1.exists)(json, 'blockCode') ? undefined : json['blockCode'],
        'commissionAmount': !(0, runtime_1.exists)(json, 'commissionAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['commissionAmount']),
        'commissionCode': !(0, runtime_1.exists)(json, 'commissionCode') ? undefined : (0, CommissionCodeType_1.CommissionCodeTypeFromJSON)(json['commissionCode']),
        'commissionId': !(0, runtime_1.exists)(json, 'commissionId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['commissionId']),
        'commissionRevenue': !(0, runtime_1.exists)(json, 'commissionRevenue') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['commissionRevenue']),
        'commissionRevenueTaxAmount': !(0, runtime_1.exists)(json, 'commissionRevenueTaxAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['commissionRevenueTaxAmount']),
        'commissionStatus': !(0, runtime_1.exists)(json, 'commissionStatus') ? undefined : (0, CommissionStatusType_1.CommissionStatusTypeFromJSON)(json['commissionStatus']),
        'commissionTaxAmount': !(0, runtime_1.exists)(json, 'commissionTaxAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['commissionTaxAmount']),
        'exchangeRate': !(0, runtime_1.exists)(json, 'exchangeRate') ? undefined : json['exchangeRate'],
        'guestInfo': !(0, runtime_1.exists)(json, 'guestInfo') ? undefined : (0, ResGuestInfoType_1.ResGuestInfoTypeFromJSON)(json['guestInfo']),
        'holdReason': !(0, runtime_1.exists)(json, 'holdReason') ? undefined : (0, CodeDescriptionType_1.CodeDescriptionTypeFromJSON)(json['holdReason']),
        'onHold': !(0, runtime_1.exists)(json, 'onHold') ? undefined : json['onHold'],
        'prepaid': !(0, runtime_1.exists)(json, 'prepaid') ? undefined : json['prepaid'],
        'prepaidCommissionAmount': !(0, runtime_1.exists)(json, 'prepaidCommissionAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['prepaidCommissionAmount']),
        'rateAmount': !(0, runtime_1.exists)(json, 'rateAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['rateAmount']),
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'recordLocator': !(0, runtime_1.exists)(json, 'recordLocator') ? undefined : json['recordLocator'],
        'remarks': !(0, runtime_1.exists)(json, 'remarks') ? undefined : json['remarks'],
        'reservationIdList': !(0, runtime_1.exists)(json, 'reservationIdList') ? undefined : (json['reservationIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'reservationStatus': !(0, runtime_1.exists)(json, 'reservationStatus') ? undefined : json['reservationStatus'],
        'roomId': !(0, runtime_1.exists)(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !(0, runtime_1.exists)(json, 'roomType') ? undefined : json['roomType'],
        'routing': !(0, runtime_1.exists)(json, 'routing') ? undefined : json['routing'],
        'timeSpan': !(0, runtime_1.exists)(json, 'timeSpan') ? undefined : (0, TimeSpanType_1.TimeSpanTypeFromJSON)(json['timeSpan']),
        'totalCommission': !(0, runtime_1.exists)(json, 'totalCommission') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['totalCommission']),
    };
}
exports.CommissionDetailTypeFromJSONTyped = CommissionDetailTypeFromJSONTyped;
function CommissionDetailTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aROffset': value.aROffset,
        'aROffsetAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.aROffsetAmount),
        'adjustmentNotes': value.adjustmentNotes,
        'blockCode': value.blockCode,
        'commissionAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.commissionAmount),
        'commissionCode': (0, CommissionCodeType_1.CommissionCodeTypeToJSON)(value.commissionCode),
        'commissionId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.commissionId),
        'commissionRevenue': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.commissionRevenue),
        'commissionRevenueTaxAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.commissionRevenueTaxAmount),
        'commissionStatus': (0, CommissionStatusType_1.CommissionStatusTypeToJSON)(value.commissionStatus),
        'commissionTaxAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.commissionTaxAmount),
        'exchangeRate': value.exchangeRate,
        'guestInfo': (0, ResGuestInfoType_1.ResGuestInfoTypeToJSON)(value.guestInfo),
        'holdReason': (0, CodeDescriptionType_1.CodeDescriptionTypeToJSON)(value.holdReason),
        'onHold': value.onHold,
        'prepaid': value.prepaid,
        'prepaidCommissionAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.prepaidCommissionAmount),
        'rateAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.rateAmount),
        'rateCode': value.rateCode,
        'recordLocator': value.recordLocator,
        'remarks': value.remarks,
        'reservationIdList': value.reservationIdList === undefined ? undefined : (value.reservationIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'reservationStatus': value.reservationStatus,
        'roomId': value.roomId,
        'roomType': value.roomType,
        'routing': value.routing,
        'timeSpan': (0, TimeSpanType_1.TimeSpanTypeToJSON)(value.timeSpan),
        'totalCommission': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.totalCommission),
    };
}
exports.CommissionDetailTypeToJSON = CommissionDetailTypeToJSON;
