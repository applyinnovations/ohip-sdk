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
exports.ARInvoiceTypeToJSON = exports.ARInvoiceTypeFromJSONTyped = exports.ARInvoiceTypeFromJSON = exports.instanceOfARInvoiceType = void 0;
const runtime_1 = require("../runtime");
const ARInvoiceCategory_1 = require("./ARInvoiceCategory");
const CashierInfoType_1 = require("./CashierInfoType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const FiscalResponseType_1 = require("./FiscalResponseType");
const FolioStatusType_1 = require("./FolioStatusType");
const FolioTextsTypeInner_1 = require("./FolioTextsTypeInner");
const MarketCodeInfoType_1 = require("./MarketCodeInfoType");
const ProfileInfoType_1 = require("./ProfileInfoType");
const ResPaymentCardType_1 = require("./ResPaymentCardType");
const ReservationId_1 = require("./ReservationId");
const ReservationInfoType_1 = require("./ReservationInfoType");
const RoomClassCodeInfoType_1 = require("./RoomClassCodeInfoType");
const SourceCodeInfoType_1 = require("./SourceCodeInfoType");
const TrxInfoType_1 = require("./TrxInfoType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the ARInvoiceType interface.
 */
function instanceOfARInvoiceType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfARInvoiceType = instanceOfARInvoiceType;
function ARInvoiceTypeFromJSON(json) {
    return ARInvoiceTypeFromJSONTyped(json, false);
}
exports.ARInvoiceTypeFromJSON = ARInvoiceTypeFromJSON;
function ARInvoiceTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'addresseeInfo': !(0, runtime_1.exists)(json, 'addresseeInfo') ? undefined : (0, ProfileInfoType_1.ProfileInfoTypeFromJSON)(json['addresseeInfo']),
        'adjusted': !(0, runtime_1.exists)(json, 'adjusted') ? undefined : json['adjusted'],
        'age': !(0, runtime_1.exists)(json, 'age') ? undefined : json['age'],
        'allowPartialTransferYn': !(0, runtime_1.exists)(json, 'allowPartialTransferYn') ? undefined : json['allowPartialTransferYn'],
        'amount': !(0, runtime_1.exists)(json, 'amount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['amount']),
        'balance': !(0, runtime_1.exists)(json, 'balance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['balance']),
        'canBeModified': !(0, runtime_1.exists)(json, 'canBeModified') ? undefined : json['canBeModified'],
        'cashierInfo': !(0, runtime_1.exists)(json, 'cashierInfo') ? undefined : (0, CashierInfoType_1.CashierInfoTypeFromJSON)(json['cashierInfo']),
        'closeDate': !(0, runtime_1.exists)(json, 'closeDate') ? undefined : json['closeDate'],
        'compressed': !(0, runtime_1.exists)(json, 'compressed') ? undefined : json['compressed'],
        'compressedDate': !(0, runtime_1.exists)(json, 'compressedDate') ? undefined : json['compressedDate'],
        'customNumbers': !(0, runtime_1.exists)(json, 'customNumbers') ? undefined : json['customNumbers'],
        'fiscalBillNo': !(0, runtime_1.exists)(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'fiscalResponseType': !(0, runtime_1.exists)(json, 'fiscalResponseType') ? undefined : (0, FiscalResponseType_1.FiscalResponseTypeFromJSON)(json['fiscalResponseType']),
        'folioDate': !(0, runtime_1.exists)(json, 'folioDate') ? undefined : json['folioDate'],
        'folioNo': !(0, runtime_1.exists)(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !(0, runtime_1.exists)(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioStatus': !(0, runtime_1.exists)(json, 'folioStatus') ? undefined : (0, FolioStatusType_1.FolioStatusTypeFromJSON)(json['folioStatus']),
        'folioTexts': !(0, runtime_1.exists)(json, 'folioTexts') ? undefined : (json['folioTexts'].map(FolioTextsTypeInner_1.FolioTextsTypeInnerFromJSON)),
        'folioTypeName': !(0, runtime_1.exists)(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'guestName': !(0, runtime_1.exists)(json, 'guestName') ? undefined : json['guestName'],
        'guestProfileId': !(0, runtime_1.exists)(json, 'guestProfileId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['guestProfileId']),
        'hotelId': !(0, runtime_1.exists)(json, 'hotelId') ? undefined : json['hotelId'],
        'internalFolioWindowID': !(0, runtime_1.exists)(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'invoiceNo': !(0, runtime_1.exists)(json, 'invoiceNo') ? undefined : json['invoiceNo'],
        'invoiceType': !(0, runtime_1.exists)(json, 'invoiceType') ? undefined : (0, ARInvoiceCategory_1.ARInvoiceCategoryFromJSON)(json['invoiceType']),
        'market': !(0, runtime_1.exists)(json, 'market') ? undefined : (0, MarketCodeInfoType_1.MarketCodeInfoTypeFromJSON)(json['market']),
        'originalAmount': !(0, runtime_1.exists)(json, 'originalAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['originalAmount']),
        'parentInvoiceNo': !(0, runtime_1.exists)(json, 'parentInvoiceNo') ? undefined : json['parentInvoiceNo'],
        'paymentCard': !(0, runtime_1.exists)(json, 'paymentCard') ? undefined : (0, ResPaymentCardType_1.ResPaymentCardTypeFromJSON)(json['paymentCard']),
        'payments': !(0, runtime_1.exists)(json, 'payments') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['payments']),
        'postingDate': !(0, runtime_1.exists)(json, 'postingDate') ? undefined : json['postingDate'],
        'printed': !(0, runtime_1.exists)(json, 'printed') ? undefined : json['printed'],
        'printedDate': !(0, runtime_1.exists)(json, 'printedDate') ? undefined : json['printedDate'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'remark': !(0, runtime_1.exists)(json, 'remark') ? undefined : json['remark'],
        'reservationId': !(0, runtime_1.exists)(json, 'reservationId') ? undefined : (0, ReservationId_1.ReservationIdFromJSON)(json['reservationId']),
        'reservationInfo': !(0, runtime_1.exists)(json, 'reservationInfo') ? undefined : (0, ReservationInfoType_1.ReservationInfoTypeFromJSON)(json['reservationInfo']),
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : json['revenueDate'],
        'roomClass': !(0, runtime_1.exists)(json, 'roomClass') ? undefined : (0, RoomClassCodeInfoType_1.RoomClassCodeInfoTypeFromJSON)(json['roomClass']),
        'source': !(0, runtime_1.exists)(json, 'source') ? undefined : (0, SourceCodeInfoType_1.SourceCodeInfoTypeFromJSON)(json['source']),
        'statementNo': !(0, runtime_1.exists)(json, 'statementNo') ? undefined : json['statementNo'],
        'status': !(0, runtime_1.exists)(json, 'status') ? undefined : json['status'],
        'storedDebitFolioId': !(0, runtime_1.exists)(json, 'storedDebitFolioId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['storedDebitFolioId']),
        'storedDebitFolioName': !(0, runtime_1.exists)(json, 'storedDebitFolioName') ? undefined : json['storedDebitFolioName'],
        'storedFolioId': !(0, runtime_1.exists)(json, 'storedFolioId') ? undefined : (0, UniqueIDType_1.UniqueIDTypeFromJSON)(json['storedFolioId']),
        'storedFolioName': !(0, runtime_1.exists)(json, 'storedFolioName') ? undefined : json['storedFolioName'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionInfo': !(0, runtime_1.exists)(json, 'transactionInfo') ? undefined : (0, TrxInfoType_1.TrxInfoTypeFromJSON)(json['transactionInfo']),
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transferDate': !(0, runtime_1.exists)(json, 'transferDate') ? undefined : json['transferDate'],
        'transferredIn': !(0, runtime_1.exists)(json, 'transferredIn') ? undefined : json['transferredIn'],
        'transferredOut': !(0, runtime_1.exists)(json, 'transferredOut') ? undefined : json['transferredOut'],
    };
}
exports.ARInvoiceTypeFromJSONTyped = ARInvoiceTypeFromJSONTyped;
function ARInvoiceTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'addresseeInfo': (0, ProfileInfoType_1.ProfileInfoTypeToJSON)(value.addresseeInfo),
        'adjusted': value.adjusted,
        'age': value.age,
        'allowPartialTransferYn': value.allowPartialTransferYn,
        'amount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.amount),
        'balance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.balance),
        'canBeModified': value.canBeModified,
        'cashierInfo': (0, CashierInfoType_1.CashierInfoTypeToJSON)(value.cashierInfo),
        'closeDate': value.closeDate,
        'compressed': value.compressed,
        'compressedDate': value.compressedDate,
        'customNumbers': value.customNumbers,
        'fiscalBillNo': value.fiscalBillNo,
        'fiscalResponseType': (0, FiscalResponseType_1.FiscalResponseTypeToJSON)(value.fiscalResponseType),
        'folioDate': value.folioDate,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioStatus': (0, FolioStatusType_1.FolioStatusTypeToJSON)(value.folioStatus),
        'folioTexts': value.folioTexts === undefined ? undefined : (value.folioTexts.map(FolioTextsTypeInner_1.FolioTextsTypeInnerToJSON)),
        'folioTypeName': value.folioTypeName,
        'guestName': value.guestName,
        'guestProfileId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.guestProfileId),
        'hotelId': value.hotelId,
        'internalFolioWindowID': value.internalFolioWindowID,
        'invoiceNo': value.invoiceNo,
        'invoiceType': (0, ARInvoiceCategory_1.ARInvoiceCategoryToJSON)(value.invoiceType),
        'market': (0, MarketCodeInfoType_1.MarketCodeInfoTypeToJSON)(value.market),
        'originalAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.originalAmount),
        'parentInvoiceNo': value.parentInvoiceNo,
        'paymentCard': (0, ResPaymentCardType_1.ResPaymentCardTypeToJSON)(value.paymentCard),
        'payments': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.payments),
        'postingDate': value.postingDate,
        'printed': value.printed,
        'printedDate': value.printedDate,
        'reference': value.reference,
        'remark': value.remark,
        'reservationId': (0, ReservationId_1.ReservationIdToJSON)(value.reservationId),
        'reservationInfo': (0, ReservationInfoType_1.ReservationInfoTypeToJSON)(value.reservationInfo),
        'revenueDate': value.revenueDate,
        'roomClass': (0, RoomClassCodeInfoType_1.RoomClassCodeInfoTypeToJSON)(value.roomClass),
        'source': (0, SourceCodeInfoType_1.SourceCodeInfoTypeToJSON)(value.source),
        'statementNo': value.statementNo,
        'status': value.status,
        'storedDebitFolioId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.storedDebitFolioId),
        'storedDebitFolioName': value.storedDebitFolioName,
        'storedFolioId': (0, UniqueIDType_1.UniqueIDTypeToJSON)(value.storedFolioId),
        'storedFolioName': value.storedFolioName,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate,
        'transactionInfo': (0, TrxInfoType_1.TrxInfoTypeToJSON)(value.transactionInfo),
        'transactionNo': value.transactionNo,
        'transferDate': value.transferDate,
        'transferredIn': value.transferredIn,
        'transferredOut': value.transferredOut,
    };
}
exports.ARInvoiceTypeToJSON = ARInvoiceTypeToJSON;
