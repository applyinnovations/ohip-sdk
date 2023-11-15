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
exports.TrxAdjustCriteriaTypeToJSON = exports.TrxAdjustCriteriaTypeFromJSONTyped = exports.TrxAdjustCriteriaTypeFromJSON = exports.instanceOfTrxAdjustCriteriaType = void 0;
const runtime_1 = require("../runtime");
const AdjustmentDetailsType_1 = require("./AdjustmentDetailsType");
const CustomChargeExemptionType_1 = require("./CustomChargeExemptionType");
const ReservationId_1 = require("./ReservationId");
/**
 * Check if a given object implements the TrxAdjustCriteriaType interface.
 */
function instanceOfTrxAdjustCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfTrxAdjustCriteriaType = instanceOfTrxAdjustCriteriaType;
function TrxAdjustCriteriaTypeFromJSON(json) {
    return TrxAdjustCriteriaTypeFromJSONTyped(json, false);
}
exports.TrxAdjustCriteriaTypeFromJSON = TrxAdjustCriteriaTypeFromJSON;
function TrxAdjustCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'aRAccountNo': !(0, runtime_1.exists)(json, 'aRAccountNo') ? undefined : json['aRAccountNo'],
        'aRInvoiceNo': !(0, runtime_1.exists)(json, 'aRInvoiceNo') ? undefined : json['aRInvoiceNo'],
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'customChargeExemptionDetails': !(0, runtime_1.exists)(json, 'customChargeExemptionDetails') ? undefined : (json['customChargeExemptionDetails'].map(CustomChargeExemptionType_1.CustomChargeExemptionTypeFromJSON)),
        'details': !(0, runtime_1.exists)(json, 'details') ? undefined : (0, AdjustmentDetailsType_1.AdjustmentDetailsTypeFromJSON)(json['details']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'incomeAuditDate': !(0, runtime_1.exists)(json, 'incomeAuditDate') ? undefined : json['incomeAuditDate'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'transactionList': !(0, runtime_1.exists)(json, 'transactionList') ? undefined : json['transactionList'],
    };
}
exports.TrxAdjustCriteriaTypeFromJSONTyped = TrxAdjustCriteriaTypeFromJSONTyped;
function TrxAdjustCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'aRAccountNo': value.aRAccountNo,
        'aRInvoiceNo': value.aRInvoiceNo,
        'cashierId': value.cashierId,
        'customChargeExemptionDetails': value.customChargeExemptionDetails === undefined ? undefined : (value.customChargeExemptionDetails.map(CustomChargeExemptionType_1.CustomChargeExemptionTypeToJSON)),
        'details': (0, AdjustmentDetailsType_1.AdjustmentDetailsTypeToJSON)(value.details),
        'hotelId': value.hotelId,
        'incomeAuditDate': value.incomeAuditDate,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'transactionList': value.transactionList,
    };
}
exports.TrxAdjustCriteriaTypeToJSON = TrxAdjustCriteriaTypeToJSON;
