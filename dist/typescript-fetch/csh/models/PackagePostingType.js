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
exports.PackagePostingTypeToJSON = exports.PackagePostingTypeFromJSONTyped = exports.PackagePostingTypeFromJSON = exports.instanceOfPackagePostingType = void 0;
const runtime_1 = require("../runtime");
const CashierInfoType_1 = require("./CashierInfoType");
const CashieringTransactionTypeType_1 = require("./CashieringTransactionTypeType");
const CompPostingsType_1 = require("./CompPostingsType");
const CurrencyAmountType_1 = require("./CurrencyAmountType");
const DepositDetailPostingTypeUpdateInfo_1 = require("./DepositDetailPostingTypeUpdateInfo");
const ExchangeAmounts_1 = require("./ExchangeAmounts");
const PostingGroupType_1 = require("./PostingGroupType");
const UniqueIDType_1 = require("./UniqueIDType");
/**
 * Check if a given object implements the PackagePostingType interface.
 */
function instanceOfPackagePostingType(value) {
    let isInstance = true;
    return isInstance;
}
exports.instanceOfPackagePostingType = instanceOfPackagePostingType;
function PackagePostingTypeFromJSON(json) {
    return PackagePostingTypeFromJSONTyped(json, false);
}
exports.PackagePostingTypeFromJSON = PackagePostingTypeFromJSON;
function PackagePostingTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'approvalCode': !(0, runtime_1.exists)(json, 'approvalCode') ? undefined : json['approvalCode'],
        'approvalStatus': !(0, runtime_1.exists)(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'arrangementCode': !(0, runtime_1.exists)(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'articleCode': !(0, runtime_1.exists)(json, 'articleCode') ? undefined : json['articleCode'],
        'canAdjustInvoice': !(0, runtime_1.exists)(json, 'canAdjustInvoice') ? undefined : json['canAdjustInvoice'],
        'cashierInfo': !(0, runtime_1.exists)(json, 'cashierInfo') ? undefined : (0, CashierInfoType_1.CashierInfoTypeFromJSON)(json['cashierInfo']),
        'checkCount': !(0, runtime_1.exists)(json, 'checkCount') ? undefined : json['checkCount'],
        'checkNo': !(0, runtime_1.exists)(json, 'checkNo') ? undefined : json['checkNo'],
        'commissionable': !(0, runtime_1.exists)(json, 'commissionable') ? undefined : json['commissionable'],
        'compPostingsInfo': !(0, runtime_1.exists)(json, 'compPostingsInfo') ? undefined : (0, CompPostingsType_1.CompPostingsTypeFromJSON)(json['compPostingsInfo']),
        'compRedemptionCode': !(0, runtime_1.exists)(json, 'compRedemptionCode') ? undefined : json['compRedemptionCode'],
        'creditAmount': !(0, runtime_1.exists)(json, 'creditAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['creditAmount']),
        'customCharge': !(0, runtime_1.exists)(json, 'customCharge') ? undefined : json['customCharge'],
        'debitAmount': !(0, runtime_1.exists)(json, 'debitAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['debitAmount']),
        'depositTransactionId': !(0, runtime_1.exists)(json, 'depositTransactionId') ? undefined : json['depositTransactionId'],
        'exchange': !(0, runtime_1.exists)(json, 'exchange') ? undefined : (0, ExchangeAmounts_1.ExchangeAmountsFromJSON)(json['exchange']),
        'fbaCertificate': !(0, runtime_1.exists)(json, 'fbaCertificate') ? undefined : json['fbaCertificate'],
        'financialTransactionIdList': !(0, runtime_1.exists)(json, 'financialTransactionIdList') ? undefined : (json['financialTransactionIdList'].map(UniqueIDType_1.UniqueIDTypeFromJSON)),
        'fromRoom': !(0, runtime_1.exists)(json, 'fromRoom') ? undefined : json['fromRoom'],
        'groupTypeInfo': !(0, runtime_1.exists)(json, 'groupTypeInfo') ? undefined : (0, PostingGroupType_1.PostingGroupTypeFromJSON)(json['groupTypeInfo']),
        'overageAmount': !(0, runtime_1.exists)(json, 'overageAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['overageAmount']),
        'packageAllowance': !(0, runtime_1.exists)(json, 'packageAllowance') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['packageAllowance']),
        'packageCode': !(0, runtime_1.exists)(json, 'packageCode') ? undefined : json['packageCode'],
        'paidOut': !(0, runtime_1.exists)(json, 'paidOut') ? undefined : json['paidOut'],
        'postedAmount': !(0, runtime_1.exists)(json, 'postedAmount') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['postedAmount']),
        'postingDate': !(0, runtime_1.exists)(json, 'postingDate') ? undefined : json['postingDate'],
        'price': !(0, runtime_1.exists)(json, 'price') ? undefined : (0, CurrencyAmountType_1.CurrencyAmountTypeFromJSON)(json['price']),
        'quantity': !(0, runtime_1.exists)(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !(0, runtime_1.exists)(json, 'rateCode') ? undefined : json['rateCode'],
        'receiptNo': !(0, runtime_1.exists)(json, 'receiptNo') ? undefined : json['receiptNo'],
        'reference': !(0, runtime_1.exists)(json, 'reference') ? undefined : json['reference'],
        'referenceTransactionNo': !(0, runtime_1.exists)(json, 'referenceTransactionNo') ? undefined : json['referenceTransactionNo'],
        'remark': !(0, runtime_1.exists)(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !(0, runtime_1.exists)(json, 'revenueDate') ? undefined : json['revenueDate'],
        'reversePaymentTransactionNo': !(0, runtime_1.exists)(json, 'reversePaymentTransactionNo') ? undefined : json['reversePaymentTransactionNo'],
        'roundingDifferenceTrx': !(0, runtime_1.exists)(json, 'roundingDifferenceTrx') ? undefined : json['roundingDifferenceTrx'],
        'serviceRecovery': !(0, runtime_1.exists)(json, 'serviceRecovery') ? undefined : json['serviceRecovery'],
        'stampDuty': !(0, runtime_1.exists)(json, 'stampDuty') ? undefined : json['stampDuty'],
        'taxInvoiceNo': !(0, runtime_1.exists)(json, 'taxInvoiceNo') ? undefined : json['taxInvoiceNo'],
        'transactionAmount': !(0, runtime_1.exists)(json, 'transactionAmount') ? undefined : json['transactionAmount'],
        'transactionCode': !(0, runtime_1.exists)(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !(0, runtime_1.exists)(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionDescription': !(0, runtime_1.exists)(json, 'transactionDescription') ? undefined : json['transactionDescription'],
        'transactionNo': !(0, runtime_1.exists)(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transactionType': !(0, runtime_1.exists)(json, 'transactionType') ? undefined : (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeFromJSON)(json['transactionType']),
        'updateInfo': !(0, runtime_1.exists)(json, 'updateInfo') ? undefined : (0, DepositDetailPostingTypeUpdateInfo_1.DepositDetailPostingTypeUpdateInfoFromJSON)(json['updateInfo']),
    };
}
exports.PackagePostingTypeFromJSONTyped = PackagePostingTypeFromJSONTyped;
function PackagePostingTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'approvalCode': value.approvalCode,
        'approvalStatus': value.approvalStatus,
        'arrangementCode': value.arrangementCode,
        'articleCode': value.articleCode,
        'canAdjustInvoice': value.canAdjustInvoice,
        'cashierInfo': (0, CashierInfoType_1.CashierInfoTypeToJSON)(value.cashierInfo),
        'checkCount': value.checkCount,
        'checkNo': value.checkNo,
        'commissionable': value.commissionable,
        'compPostingsInfo': (0, CompPostingsType_1.CompPostingsTypeToJSON)(value.compPostingsInfo),
        'compRedemptionCode': value.compRedemptionCode,
        'creditAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.creditAmount),
        'customCharge': value.customCharge,
        'debitAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.debitAmount),
        'depositTransactionId': value.depositTransactionId,
        'exchange': (0, ExchangeAmounts_1.ExchangeAmountsToJSON)(value.exchange),
        'fbaCertificate': value.fbaCertificate,
        'financialTransactionIdList': value.financialTransactionIdList === undefined ? undefined : (value.financialTransactionIdList.map(UniqueIDType_1.UniqueIDTypeToJSON)),
        'fromRoom': value.fromRoom,
        'groupTypeInfo': (0, PostingGroupType_1.PostingGroupTypeToJSON)(value.groupTypeInfo),
        'overageAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.overageAmount),
        'packageAllowance': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.packageAllowance),
        'packageCode': value.packageCode,
        'paidOut': value.paidOut,
        'postedAmount': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.postedAmount),
        'postingDate': value.postingDate,
        'price': (0, CurrencyAmountType_1.CurrencyAmountTypeToJSON)(value.price),
        'quantity': value.quantity,
        'rateCode': value.rateCode,
        'receiptNo': value.receiptNo,
        'reference': value.reference,
        'referenceTransactionNo': value.referenceTransactionNo,
        'remark': value.remark,
        'revenueDate': value.revenueDate,
        'reversePaymentTransactionNo': value.reversePaymentTransactionNo,
        'roundingDifferenceTrx': value.roundingDifferenceTrx,
        'serviceRecovery': value.serviceRecovery,
        'stampDuty': value.stampDuty,
        'taxInvoiceNo': value.taxInvoiceNo,
        'transactionAmount': value.transactionAmount,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate,
        'transactionDescription': value.transactionDescription,
        'transactionNo': value.transactionNo,
        'transactionType': (0, CashieringTransactionTypeType_1.CashieringTransactionTypeTypeToJSON)(value.transactionType),
        'updateInfo': (0, DepositDetailPostingTypeUpdateInfo_1.DepositDetailPostingTypeUpdateInfoToJSON)(value.updateInfo),
    };
}
exports.PackagePostingTypeToJSON = PackagePostingTypeToJSON;
