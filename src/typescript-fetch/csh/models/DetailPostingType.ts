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

import { exists, mapValues } from '../runtime';
import type { CashierInfoType } from './CashierInfoType';
import {
    CashierInfoTypeFromJSON,
    CashierInfoTypeFromJSONTyped,
    CashierInfoTypeToJSON,
} from './CashierInfoType';
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import {
    CashieringTransactionTypeTypeFromJSON,
    CashieringTransactionTypeTypeFromJSONTyped,
    CashieringTransactionTypeTypeToJSON,
} from './CashieringTransactionTypeType';
import type { CompPostingsType } from './CompPostingsType';
import {
    CompPostingsTypeFromJSON,
    CompPostingsTypeFromJSONTyped,
    CompPostingsTypeToJSON,
} from './CompPostingsType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { DepositDetailPostingTypeUpdateInfo } from './DepositDetailPostingTypeUpdateInfo';
import {
    DepositDetailPostingTypeUpdateInfoFromJSON,
    DepositDetailPostingTypeUpdateInfoFromJSONTyped,
    DepositDetailPostingTypeUpdateInfoToJSON,
} from './DepositDetailPostingTypeUpdateInfo';
import type { DetailPostingTypeGuestInfo } from './DetailPostingTypeGuestInfo';
import {
    DetailPostingTypeGuestInfoFromJSON,
    DetailPostingTypeGuestInfoFromJSONTyped,
    DetailPostingTypeGuestInfoToJSON,
} from './DetailPostingTypeGuestInfo';
import type { DetailPostingTypeMiscellaneousInfo } from './DetailPostingTypeMiscellaneousInfo';
import {
    DetailPostingTypeMiscellaneousInfoFromJSON,
    DetailPostingTypeMiscellaneousInfoFromJSONTyped,
    DetailPostingTypeMiscellaneousInfoToJSON,
} from './DetailPostingTypeMiscellaneousInfo';
import type { ExchangeAmounts } from './ExchangeAmounts';
import {
    ExchangeAmountsFromJSON,
    ExchangeAmountsFromJSONTyped,
    ExchangeAmountsToJSON,
} from './ExchangeAmounts';
import type { PayeeInfoType } from './PayeeInfoType';
import {
    PayeeInfoTypeFromJSON,
    PayeeInfoTypeFromJSONTyped,
    PayeeInfoTypeToJSON,
} from './PayeeInfoType';
import type { PostingGroupType } from './PostingGroupType';
import {
    PostingGroupTypeFromJSON,
    PostingGroupTypeFromJSONTyped,
    PostingGroupTypeToJSON,
} from './PostingGroupType';
import type { ReservationPaymentMethodType } from './ReservationPaymentMethodType';
import {
    ReservationPaymentMethodTypeFromJSON,
    ReservationPaymentMethodTypeFromJSONTyped,
    ReservationPaymentMethodTypeToJSON,
} from './ReservationPaymentMethodType';
import type { SummaryPostingType } from './SummaryPostingType';
import {
    SummaryPostingTypeFromJSON,
    SummaryPostingTypeFromJSONTyped,
    SummaryPostingTypeToJSON,
} from './SummaryPostingType';
import type { TransactionARInfoType } from './TransactionARInfoType';
import {
    TransactionARInfoTypeFromJSON,
    TransactionARInfoTypeFromJSONTyped,
    TransactionARInfoTypeToJSON,
} from './TransactionARInfoType';
import type { TransactionAdjustmentInfoType } from './TransactionAdjustmentInfoType';
import {
    TransactionAdjustmentInfoTypeFromJSON,
    TransactionAdjustmentInfoTypeFromJSONTyped,
    TransactionAdjustmentInfoTypeToJSON,
} from './TransactionAdjustmentInfoType';
import type { TransactionCurrencyExchangeInfoType } from './TransactionCurrencyExchangeInfoType';
import {
    TransactionCurrencyExchangeInfoTypeFromJSON,
    TransactionCurrencyExchangeInfoTypeFromJSONTyped,
    TransactionCurrencyExchangeInfoTypeToJSON,
} from './TransactionCurrencyExchangeInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Posting information of the transaction.
 * @export
 * @interface DetailPostingType
 */
export interface DetailPostingType {
    /**
     * 
     * @type {TransactionARInfoType}
     * @memberof DetailPostingType
     */
    aRInfo?: TransactionARInfoType;
    /**
     * 
     * @type {TransactionAdjustmentInfoType}
     * @memberof DetailPostingType
     */
    adjustmentInfo?: TransactionAdjustmentInfoType;
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof DetailPostingType
     */
    approvalCode?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof DetailPostingType
     */
    approvalStatus?: string;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof DetailPostingType
     */
    arrangementCode?: string;
    /**
     * Information regarding the Article(Using Articles Functionality) of this transaction.
     * @type {string}
     * @memberof DetailPostingType
     */
    articleCode?: string;
    /**
     * Indicator to determine if the transaction can be adjusted.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    canAdjustInvoice?: boolean;
    /**
     * 
     * @type {CashierInfoType}
     * @memberof DetailPostingType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Check number count for the posting.
     * @type {string}
     * @memberof DetailPostingType
     */
    checkCount?: string;
    /**
     * Check number for the posting.
     * @type {string}
     * @memberof DetailPostingType
     */
    checkNo?: string;
    /**
     * Indicator to determine if the transaction is commissionable.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    commissionable?: boolean;
    /**
     * 
     * @type {CompPostingsType}
     * @memberof DetailPostingType
     */
    compPostingsInfo?: CompPostingsType;
    /**
     * Comp redemption code assiciated to the transaction.
     * @type {string}
     * @memberof DetailPostingType
     */
    compRedemptionCode?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DetailPostingType
     */
    creditAmount?: CurrencyAmountType;
    /**
     * 
     * @type {TransactionCurrencyExchangeInfoType}
     * @memberof DetailPostingType
     */
    currencyExchangeInfo?: TransactionCurrencyExchangeInfoType;
    /**
     * Flag to identify a Custom Charge.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    customCharge?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DetailPostingType
     */
    debitAmount?: CurrencyAmountType;
    /**
     * Flag to indicate if the Posting is a deferred tax record. Set to true only when the posting is a deferred tax record. Set to false only when the posting is not a deferred tax record.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    deferredTax?: boolean;
    /**
     * Tax Service Accounting Codes used.
     * @type {string}
     * @memberof DetailPostingType
     */
    depositTransactionId?: string;
    /**
     * 
     * @type {ExchangeAmounts}
     * @memberof DetailPostingType
     */
    exchange?: ExchangeAmounts;
    /**
     * Exchange Information - text presentation of the exchange operation including formula, buy rate, etc.
     * @type {string}
     * @memberof DetailPostingType
     */
    exchangeInformation?: string;
    /**
     * Flag indicates that the posting is Flexible Benefits Awards Certificate
     * @type {boolean}
     * @memberof DetailPostingType
     */
    fbaCertificate?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof DetailPostingType
     */
    financialTransactionIdList?: Array<UniqueIDType>;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof DetailPostingType
     */
    fiscalBillNo?: string;
    /**
     * The Folio number of this posting, if there was a Folio already generated.
     * @type {number}
     * @memberof DetailPostingType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof DetailPostingType
     */
    folioNoWithPrefix?: string;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof DetailPostingType
     */
    folioTypeName?: string;
    /**
     * 
     * @type {number}
     * @memberof DetailPostingType
     */
    folioWindowNo?: number;
    /**
     * 
     * @type {PostingGroupType}
     * @memberof DetailPostingType
     */
    groupTypeInfo?: PostingGroupType;
    /**
     * 
     * @type {DetailPostingTypeGuestInfo}
     * @memberof DetailPostingType
     */
    guestInfo?: DetailPostingTypeGuestInfo;
    /**
     * Property code.
     * @type {string}
     * @memberof DetailPostingType
     */
    hotelId?: string;
    /**
     * Internal Unique id for the Folio Window.
     * @type {string}
     * @memberof DetailPostingType
     */
    internalFolioWindowID?: string;
    /**
     * 
     * @type {DetailPostingTypeMiscellaneousInfo}
     * @memberof DetailPostingType
     */
    miscellaneousInfo?: DetailPostingTypeMiscellaneousInfo;
    /**
     * Indicates if this transaction is a paid out transaction.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    paidOut?: boolean;
    /**
     * 
     * @type {PayeeInfoType}
     * @memberof DetailPostingType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * 
     * @type {ReservationPaymentMethodType}
     * @memberof DetailPostingType
     */
    paymentMethod?: ReservationPaymentMethodType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DetailPostingType
     */
    postedAmount?: CurrencyAmountType;
    /**
     * Date and time of posting.
     * @type {string}
     * @memberof DetailPostingType
     */
    postingDate?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof DetailPostingType
     */
    price?: CurrencyAmountType;
    /**
     * Indicates Quantity.
     * @type {number}
     * @memberof DetailPostingType
     */
    quantity?: number;
    /**
     * Rate code associated to this transaction.
     * @type {string}
     * @memberof DetailPostingType
     */
    rateCode?: string;
    /**
     * The receipt number of the transaction, if there is a receipt generated.
     * @type {number}
     * @memberof DetailPostingType
     */
    receiptNo?: number;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof DetailPostingType
     */
    reference?: string;
    /**
     * Package transaction number for the Posting.
     * @type {number}
     * @memberof DetailPostingType
     */
    referencePackageTransactionNo?: number;
    /**
     * Generate transaction number for the Posting.
     * @type {number}
     * @memberof DetailPostingType
     */
    referenceTransactionNo?: number;
    /**
     * Posting remarks.
     * @type {string}
     * @memberof DetailPostingType
     */
    remark?: string;
    /**
     * The date on which the transaction has its revenue effect.
     * @type {string}
     * @memberof DetailPostingType
     */
    revenueDate?: string;
    /**
     * Reverse payment transaction unique identifier.
     * @type {number}
     * @memberof DetailPostingType
     */
    reversePaymentTransactionNo?: number;
    /**
     * 
     * @type {number}
     * @memberof DetailPostingType
     */
    revisionNo?: number;
    /**
     * Indicator to determine if the posting was a posting for the Rounding Difference.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    roundingDifferenceTrx?: boolean;
    /**
     * Flag to indicates service recovery
     * @type {boolean}
     * @memberof DetailPostingType
     */
    serviceRecovery?: boolean;
    /**
     * Flag to identify a Stamp Duty Transaction.
     * @type {boolean}
     * @memberof DetailPostingType
     */
    stampDuty?: boolean;
    /**
     * List of postings.
     * @type {Array<SummaryPostingType>}
     * @memberof DetailPostingType
     */
    subPostings?: Array<SummaryPostingType>;
    /**
     * Cross property posting hotel code.
     * @type {string}
     * @memberof DetailPostingType
     */
    targetHotel?: string;
    /**
     * Tax invoice number generated by payment tax.
     * @type {string}
     * @memberof DetailPostingType
     */
    taxInvoiceNo?: string;
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof DetailPostingType
     */
    transactionAmount?: number;
    /**
     * Billing Transaction Code.
     * @type {string}
     * @memberof DetailPostingType
     */
    transactionCode?: string;
    /**
     * Transaction Date.
     * @type {string}
     * @memberof DetailPostingType
     */
    transactionDate?: string;
    /**
     * Billing Transaction Description.
     * @type {string}
     * @memberof DetailPostingType
     */
    transactionDescription?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof DetailPostingType
     */
    transactionNo?: number;
    /**
     * 
     * @type {CashieringTransactionTypeType}
     * @memberof DetailPostingType
     */
    transactionType?: CashieringTransactionTypeType;
    /**
     * 
     * @type {DepositDetailPostingTypeUpdateInfo}
     * @memberof DetailPostingType
     */
    updateInfo?: DepositDetailPostingTypeUpdateInfo;
}

/**
 * Check if a given object implements the DetailPostingType interface.
 */
export function instanceOfDetailPostingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DetailPostingTypeFromJSON(json: any): DetailPostingType {
    return DetailPostingTypeFromJSONTyped(json, false);
}

export function DetailPostingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DetailPostingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'aRInfo': !exists(json, 'aRInfo') ? undefined : TransactionARInfoTypeFromJSON(json['aRInfo']),
        'adjustmentInfo': !exists(json, 'adjustmentInfo') ? undefined : TransactionAdjustmentInfoTypeFromJSON(json['adjustmentInfo']),
        'approvalCode': !exists(json, 'approvalCode') ? undefined : json['approvalCode'],
        'approvalStatus': !exists(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'arrangementCode': !exists(json, 'arrangementCode') ? undefined : json['arrangementCode'],
        'articleCode': !exists(json, 'articleCode') ? undefined : json['articleCode'],
        'canAdjustInvoice': !exists(json, 'canAdjustInvoice') ? undefined : json['canAdjustInvoice'],
        'cashierInfo': !exists(json, 'cashierInfo') ? undefined : CashierInfoTypeFromJSON(json['cashierInfo']),
        'checkCount': !exists(json, 'checkCount') ? undefined : json['checkCount'],
        'checkNo': !exists(json, 'checkNo') ? undefined : json['checkNo'],
        'commissionable': !exists(json, 'commissionable') ? undefined : json['commissionable'],
        'compPostingsInfo': !exists(json, 'compPostingsInfo') ? undefined : CompPostingsTypeFromJSON(json['compPostingsInfo']),
        'compRedemptionCode': !exists(json, 'compRedemptionCode') ? undefined : json['compRedemptionCode'],
        'creditAmount': !exists(json, 'creditAmount') ? undefined : CurrencyAmountTypeFromJSON(json['creditAmount']),
        'currencyExchangeInfo': !exists(json, 'currencyExchangeInfo') ? undefined : TransactionCurrencyExchangeInfoTypeFromJSON(json['currencyExchangeInfo']),
        'customCharge': !exists(json, 'customCharge') ? undefined : json['customCharge'],
        'debitAmount': !exists(json, 'debitAmount') ? undefined : CurrencyAmountTypeFromJSON(json['debitAmount']),
        'deferredTax': !exists(json, 'deferredTax') ? undefined : json['deferredTax'],
        'depositTransactionId': !exists(json, 'depositTransactionId') ? undefined : json['depositTransactionId'],
        'exchange': !exists(json, 'exchange') ? undefined : ExchangeAmountsFromJSON(json['exchange']),
        'exchangeInformation': !exists(json, 'exchangeInformation') ? undefined : json['exchangeInformation'],
        'fbaCertificate': !exists(json, 'fbaCertificate') ? undefined : json['fbaCertificate'],
        'financialTransactionIdList': !exists(json, 'financialTransactionIdList') ? undefined : ((json['financialTransactionIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'fiscalBillNo': !exists(json, 'fiscalBillNo') ? undefined : json['fiscalBillNo'],
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'folioNoWithPrefix': !exists(json, 'folioNoWithPrefix') ? undefined : json['folioNoWithPrefix'],
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'folioWindowNo': !exists(json, 'folioWindowNo') ? undefined : json['folioWindowNo'],
        'groupTypeInfo': !exists(json, 'groupTypeInfo') ? undefined : PostingGroupTypeFromJSON(json['groupTypeInfo']),
        'guestInfo': !exists(json, 'guestInfo') ? undefined : DetailPostingTypeGuestInfoFromJSON(json['guestInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'internalFolioWindowID': !exists(json, 'internalFolioWindowID') ? undefined : json['internalFolioWindowID'],
        'miscellaneousInfo': !exists(json, 'miscellaneousInfo') ? undefined : DetailPostingTypeMiscellaneousInfoFromJSON(json['miscellaneousInfo']),
        'paidOut': !exists(json, 'paidOut') ? undefined : json['paidOut'],
        'payeeInfo': !exists(json, 'payeeInfo') ? undefined : PayeeInfoTypeFromJSON(json['payeeInfo']),
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : ReservationPaymentMethodTypeFromJSON(json['paymentMethod']),
        'postedAmount': !exists(json, 'postedAmount') ? undefined : CurrencyAmountTypeFromJSON(json['postedAmount']),
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'receiptNo': !exists(json, 'receiptNo') ? undefined : json['receiptNo'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'referencePackageTransactionNo': !exists(json, 'referencePackageTransactionNo') ? undefined : json['referencePackageTransactionNo'],
        'referenceTransactionNo': !exists(json, 'referenceTransactionNo') ? undefined : json['referenceTransactionNo'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !exists(json, 'revenueDate') ? undefined : json['revenueDate'],
        'reversePaymentTransactionNo': !exists(json, 'reversePaymentTransactionNo') ? undefined : json['reversePaymentTransactionNo'],
        'revisionNo': !exists(json, 'revisionNo') ? undefined : json['revisionNo'],
        'roundingDifferenceTrx': !exists(json, 'roundingDifferenceTrx') ? undefined : json['roundingDifferenceTrx'],
        'serviceRecovery': !exists(json, 'serviceRecovery') ? undefined : json['serviceRecovery'],
        'stampDuty': !exists(json, 'stampDuty') ? undefined : json['stampDuty'],
        'subPostings': !exists(json, 'subPostings') ? undefined : ((json['subPostings'] as Array<any>).map(SummaryPostingTypeFromJSON)),
        'targetHotel': !exists(json, 'targetHotel') ? undefined : json['targetHotel'],
        'taxInvoiceNo': !exists(json, 'taxInvoiceNo') ? undefined : json['taxInvoiceNo'],
        'transactionAmount': !exists(json, 'transactionAmount') ? undefined : json['transactionAmount'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionDescription': !exists(json, 'transactionDescription') ? undefined : json['transactionDescription'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transactionType': !exists(json, 'transactionType') ? undefined : CashieringTransactionTypeTypeFromJSON(json['transactionType']),
        'updateInfo': !exists(json, 'updateInfo') ? undefined : DepositDetailPostingTypeUpdateInfoFromJSON(json['updateInfo']),
    };
}

export function DetailPostingTypeToJSON(value?: DetailPostingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'aRInfo': TransactionARInfoTypeToJSON(value.aRInfo),
        'adjustmentInfo': TransactionAdjustmentInfoTypeToJSON(value.adjustmentInfo),
        'approvalCode': value.approvalCode,
        'approvalStatus': value.approvalStatus,
        'arrangementCode': value.arrangementCode,
        'articleCode': value.articleCode,
        'canAdjustInvoice': value.canAdjustInvoice,
        'cashierInfo': CashierInfoTypeToJSON(value.cashierInfo),
        'checkCount': value.checkCount,
        'checkNo': value.checkNo,
        'commissionable': value.commissionable,
        'compPostingsInfo': CompPostingsTypeToJSON(value.compPostingsInfo),
        'compRedemptionCode': value.compRedemptionCode,
        'creditAmount': CurrencyAmountTypeToJSON(value.creditAmount),
        'currencyExchangeInfo': TransactionCurrencyExchangeInfoTypeToJSON(value.currencyExchangeInfo),
        'customCharge': value.customCharge,
        'debitAmount': CurrencyAmountTypeToJSON(value.debitAmount),
        'deferredTax': value.deferredTax,
        'depositTransactionId': value.depositTransactionId,
        'exchange': ExchangeAmountsToJSON(value.exchange),
        'exchangeInformation': value.exchangeInformation,
        'fbaCertificate': value.fbaCertificate,
        'financialTransactionIdList': value.financialTransactionIdList === undefined ? undefined : ((value.financialTransactionIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'fiscalBillNo': value.fiscalBillNo,
        'folioNo': value.folioNo,
        'folioNoWithPrefix': value.folioNoWithPrefix,
        'folioTypeName': value.folioTypeName,
        'folioWindowNo': value.folioWindowNo,
        'groupTypeInfo': PostingGroupTypeToJSON(value.groupTypeInfo),
        'guestInfo': DetailPostingTypeGuestInfoToJSON(value.guestInfo),
        'hotelId': value.hotelId,
        'internalFolioWindowID': value.internalFolioWindowID,
        'miscellaneousInfo': DetailPostingTypeMiscellaneousInfoToJSON(value.miscellaneousInfo),
        'paidOut': value.paidOut,
        'payeeInfo': PayeeInfoTypeToJSON(value.payeeInfo),
        'paymentMethod': ReservationPaymentMethodTypeToJSON(value.paymentMethod),
        'postedAmount': CurrencyAmountTypeToJSON(value.postedAmount),
        'postingDate': value.postingDate,
        'price': CurrencyAmountTypeToJSON(value.price),
        'quantity': value.quantity,
        'rateCode': value.rateCode,
        'receiptNo': value.receiptNo,
        'reference': value.reference,
        'referencePackageTransactionNo': value.referencePackageTransactionNo,
        'referenceTransactionNo': value.referenceTransactionNo,
        'remark': value.remark,
        'revenueDate': value.revenueDate,
        'reversePaymentTransactionNo': value.reversePaymentTransactionNo,
        'revisionNo': value.revisionNo,
        'roundingDifferenceTrx': value.roundingDifferenceTrx,
        'serviceRecovery': value.serviceRecovery,
        'stampDuty': value.stampDuty,
        'subPostings': value.subPostings === undefined ? undefined : ((value.subPostings as Array<any>).map(SummaryPostingTypeToJSON)),
        'targetHotel': value.targetHotel,
        'taxInvoiceNo': value.taxInvoiceNo,
        'transactionAmount': value.transactionAmount,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate,
        'transactionDescription': value.transactionDescription,
        'transactionNo': value.transactionNo,
        'transactionType': CashieringTransactionTypeTypeToJSON(value.transactionType),
        'updateInfo': DepositDetailPostingTypeUpdateInfoToJSON(value.updateInfo),
    };
}
