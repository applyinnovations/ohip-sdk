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
exports.GenerateFolioCriteriaTypeToJSON = exports.GenerateFolioCriteriaTypeFromJSONTyped = exports.GenerateFolioCriteriaTypeFromJSON = exports.instanceOfGenerateFolioCriteriaType = void 0;
const runtime_1 = require("../runtime");
const AssociatedBillInfoType_1 = require("./AssociatedBillInfoType");
const CashieringEventType_1 = require("./CashieringEventType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const ExchangeRateInfoType_1 = require("./ExchangeRateInfoType");
const FiscalFolioInstruction_1 = require("./FiscalFolioInstruction");
const FolioQueueType_1 = require("./FolioQueueType");
const FolioReasonType_1 = require("./FolioReasonType");
const FolioTypeValidationType_1 = require("./FolioTypeValidationType");
const NameValueHeaderDetailType_1 = require("./NameValueHeaderDetailType");
const ProfileId_1 = require("./ProfileId");
const ReservationId_1 = require("./ReservationId");
const TransactionsType_1 = require("./TransactionsType");
/**
 * Check if a given object implements the GenerateFolioCriteriaType interface.
 */
function instanceOfGenerateFolioCriteriaType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfGenerateFolioCriteriaType = instanceOfGenerateFolioCriteriaType;
function GenerateFolioCriteriaTypeFromJSON(json) {
    return GenerateFolioCriteriaTypeFromJSONTyped(json, false);
}
exports.GenerateFolioCriteriaTypeFromJSON = GenerateFolioCriteriaTypeFromJSON;
function GenerateFolioCriteriaTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'allFolioWindow': !(0, runtime_1.exists)(json, 'allFolioWindow') ? undefined : json['allFolioWindow'],
        'associatedBillInfo': !(0, runtime_1.exists)(json, 'associatedBillInfo') ? undefined : (0, AssociatedBillInfoType_1.AssociatedBillInfoTypeFromJSON)(json['associatedBillInfo']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'cashierId': !(0, runtime_1.exists)(json, 'cashierId') ? undefined : json['cashierId'],
        'correction': !(0, runtime_1.exists)(json, 'correction') ? undefined : json['correction'],
        'debitFolio': !(0, runtime_1.exists)(json, 'debitFolio') ? undefined : json['debitFolio'],
        'eventType': !(0, runtime_1.exists)(json, 'eventType') ? undefined : (0, CashieringEventType_1.CashieringEventTypeFromJSON)(json['eventType']),
        'fiscalFolioInstruction': !(0, runtime_1.exists)(json, 'fiscalFolioInstruction') ? undefined : (0, FiscalFolioInstruction_1.FiscalFolioInstructionFromJSON)(json['fiscalFolioInstruction']),
        'fiscalInvoicingCurrencyInfo': !(0, runtime_1.exists)(json, 'fiscalInvoicingCurrencyInfo') ? undefined : (0, ExchangeRateInfoType_1.ExchangeRateInfoTypeFromJSON)(json['fiscalInvoicingCurrencyInfo']),
        'fiscalTerminalId': !(0, runtime_1.exists)(json, 'fiscalTerminalId') ? undefined : json['fiscalTerminalId'],
        'folioNameValue': !(0, runtime_1.exists)(json, 'folioNameValue') ? undefined : (json['folioNameValue'].map(NameValueHeaderDetailType_1.NameValueHeaderDetailTypeFromJSON)),
        'folioQueue': !(0, runtime_1.exists)(json, 'folioQueue') ? undefined : (0, FolioQueueType_1.FolioQueueTypeFromJSON)(json['folioQueue']),
        'folioSeqId': !(0, runtime_1.exists)(json, 'folioSeqId') ? undefined : json['folioSeqId'],
        'folioTypeValidation': !(0, runtime_1.exists)(json, 'folioTypeValidation') ? undefined : (0, FolioTypeValidationType_1.FolioTypeValidationTypeFromJSON)(json['folioTypeValidation']),
        'folioWindowNo': !(0, runtime_1.exists)(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'manualFolioNo': !(0, runtime_1.exists)(json, 'manualFolioNo') ? undefined : json['manualFolioNo'],
        'profileId': !(0, runtime_1.exists)(json, 'profileId') ? undefined : (0, ProfileId_1.ProfileIdFromJSON)(json['profileId']),
        'reason': !(0, runtime_1.exists)(json, 'reason') ? undefined : (0, FolioReasonType_1.FolioReasonTypeFromJSON)(json['reason']),
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'simpleFolio': !(0, runtime_1.exists)(json, 'simpleFolio') ? undefined : json['simpleFolio'],
        'transactionServiceType': !(0, runtime_1.exists)(json, 'transactionServiceType') ? undefined : json['transactionServiceType'],
        'transactions': !(0, runtime_1.exists)(json, 'transactions') ? undefined : (0, TransactionsType_1.TransactionsTypeFromJSON)(json['transactions']),
    };
}
exports.GenerateFolioCriteriaTypeFromJSONTyped = GenerateFolioCriteriaTypeFromJSONTyped;
function GenerateFolioCriteriaTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'allFolioWindow': value.allFolioWindow,
        'associatedBillInfo': (0, AssociatedBillInfoType_1.AssociatedBillInfoTypeToJSON)(value.associatedBillInfo),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'cashierId': value.cashierId,
        'correction': value.correction,
        'debitFolio': value.debitFolio,
        'eventType': (0, CashieringEventType_1.CashieringEventTypeToJSON)(value.eventType),
        'fiscalFolioInstruction': (0, FiscalFolioInstruction_1.FiscalFolioInstructionToJSON)(value.fiscalFolioInstruction),
        'fiscalInvoicingCurrencyInfo': (0, ExchangeRateInfoType_1.ExchangeRateInfoTypeToJSON)(value.fiscalInvoicingCurrencyInfo),
        'fiscalTerminalId': value.fiscalTerminalId,
        'folioNameValue': value.folioNameValue === undefined ? undefined : (value.folioNameValue.map(NameValueHeaderDetailType_1.NameValueHeaderDetailTypeToJSON)),
        'folioQueue': (0, FolioQueueType_1.FolioQueueTypeToJSON)(value.folioQueue),
        'folioSeqId': value.folioSeqId,
        'folioTypeValidation': (0, FolioTypeValidationType_1.FolioTypeValidationTypeToJSON)(value.folioTypeValidation),
        'folioWindowNo': value.folioWindowNo,
        'hotelId': value.hotelId,
        'manualFolioNo': value.manualFolioNo,
        'profileId': (0, ProfileId_1.ProfileIdToJSON)(value.profileId),
        'reason': (0, FolioReasonType_1.FolioReasonTypeToJSON)(value.reason),
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'simpleFolio': value.simpleFolio,
        'transactionServiceType': value.transactionServiceType,
        'transactions': (0, TransactionsType_1.TransactionsTypeToJSON)(value.transactions),
    };
}
exports.GenerateFolioCriteriaTypeToJSON = GenerateFolioCriteriaTypeToJSON;