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
import type { ExchangeAmounts } from './ExchangeAmounts';
import {
    ExchangeAmountsFromJSON,
    ExchangeAmountsFromJSONTyped,
    ExchangeAmountsToJSON,
} from './ExchangeAmounts';
import type { PostingGroupType } from './PostingGroupType';
import {
    PostingGroupTypeFromJSON,
    PostingGroupTypeFromJSONTyped,
    PostingGroupTypeToJSON,
} from './PostingGroupType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Posting details.
 * @export
 * @interface PackagePostingType
 */
export interface PackagePostingType {
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof PackagePostingType
     */
    approvalCode?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof PackagePostingType
     */
    approvalStatus?: string;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof PackagePostingType
     */
    arrangementCode?: string;
    /**
     * Information regarding the Article(Using Articles Functionality) of this transaction.
     * @type {string}
     * @memberof PackagePostingType
     */
    articleCode?: string;
    /**
     * Indicator to determine if the transaction can be adjusted.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    canAdjustInvoice?: boolean;
    /**
     * 
     * @type {CashierInfoType}
     * @memberof PackagePostingType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Check number count for the posting.
     * @type {string}
     * @memberof PackagePostingType
     */
    checkCount?: string;
    /**
     * Check number for the posting.
     * @type {string}
     * @memberof PackagePostingType
     */
    checkNo?: string;
    /**
     * Indicator to determine if the transaction is commissionable.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    commissionable?: boolean;
    /**
     * 
     * @type {CompPostingsType}
     * @memberof PackagePostingType
     */
    compPostingsInfo?: CompPostingsType;
    /**
     * Comp redemption code assiciated to the transaction.
     * @type {string}
     * @memberof PackagePostingType
     */
    compRedemptionCode?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    creditAmount?: CurrencyAmountType;
    /**
     * Flag to identify a Custom Charge.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    customCharge?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    debitAmount?: CurrencyAmountType;
    /**
     * Tax Service Accounting Codes used.
     * @type {string}
     * @memberof PackagePostingType
     */
    depositTransactionId?: string;
    /**
     * 
     * @type {ExchangeAmounts}
     * @memberof PackagePostingType
     */
    exchange?: ExchangeAmounts;
    /**
     * Flag indicates that the posting is Flexible Benefits Awards Certificate
     * @type {boolean}
     * @memberof PackagePostingType
     */
    fbaCertificate?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof PackagePostingType
     */
    financialTransactionIdList?: Array<UniqueIDType>;
    /**
     * Room number for linked reservation package allowance or consumption.
     * @type {string}
     * @memberof PackagePostingType
     */
    fromRoom?: string;
    /**
     * 
     * @type {PostingGroupType}
     * @memberof PackagePostingType
     */
    groupTypeInfo?: PostingGroupType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    overageAmount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    packageAllowance?: CurrencyAmountType;
    /**
     * Package Code
     * @type {string}
     * @memberof PackagePostingType
     */
    packageCode?: string;
    /**
     * Indicates if this transaction is a paid out transaction.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    paidOut?: boolean;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    postedAmount?: CurrencyAmountType;
    /**
     * Date and time of posting.
     * @type {string}
     * @memberof PackagePostingType
     */
    postingDate?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof PackagePostingType
     */
    price?: CurrencyAmountType;
    /**
     * Indicates Quantity.
     * @type {number}
     * @memberof PackagePostingType
     */
    quantity?: number;
    /**
     * Rate code associated to this transaction.
     * @type {string}
     * @memberof PackagePostingType
     */
    rateCode?: string;
    /**
     * The receipt number of the transaction, if there is a receipt generated.
     * @type {number}
     * @memberof PackagePostingType
     */
    receiptNo?: number;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof PackagePostingType
     */
    reference?: string;
    /**
     * Generate transaction number for the Posting.
     * @type {number}
     * @memberof PackagePostingType
     */
    referenceTransactionNo?: number;
    /**
     * Posting remarks.
     * @type {string}
     * @memberof PackagePostingType
     */
    remark?: string;
    /**
     * The date on which the transaction has its revenue effect.
     * @type {string}
     * @memberof PackagePostingType
     */
    revenueDate?: string;
    /**
     * Reverse payment transaction unique identifier.
     * @type {number}
     * @memberof PackagePostingType
     */
    reversePaymentTransactionNo?: number;
    /**
     * Indicator to determine if the posting was a posting for the Rounding Difference.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    roundingDifferenceTrx?: boolean;
    /**
     * Flag to indicates service recovery
     * @type {boolean}
     * @memberof PackagePostingType
     */
    serviceRecovery?: boolean;
    /**
     * Flag to identify a Stamp Duty Transaction.
     * @type {boolean}
     * @memberof PackagePostingType
     */
    stampDuty?: boolean;
    /**
     * Tax invoice number generated by payment tax.
     * @type {string}
     * @memberof PackagePostingType
     */
    taxInvoiceNo?: string;
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof PackagePostingType
     */
    transactionAmount?: number;
    /**
     * Billing Transaction Code.
     * @type {string}
     * @memberof PackagePostingType
     */
    transactionCode?: string;
    /**
     * Transaction Date.
     * @type {string}
     * @memberof PackagePostingType
     */
    transactionDate?: string;
    /**
     * Billing Transaction Description.
     * @type {string}
     * @memberof PackagePostingType
     */
    transactionDescription?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof PackagePostingType
     */
    transactionNo?: number;
    /**
     * 
     * @type {CashieringTransactionTypeType}
     * @memberof PackagePostingType
     */
    transactionType?: CashieringTransactionTypeType;
    /**
     * 
     * @type {DepositDetailPostingTypeUpdateInfo}
     * @memberof PackagePostingType
     */
    updateInfo?: DepositDetailPostingTypeUpdateInfo;
}

/**
 * Check if a given object implements the PackagePostingType interface.
 */
export function instanceOfPackagePostingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PackagePostingTypeFromJSON(json: any): PackagePostingType {
    return PackagePostingTypeFromJSONTyped(json, false);
}

export function PackagePostingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PackagePostingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
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
        'customCharge': !exists(json, 'customCharge') ? undefined : json['customCharge'],
        'debitAmount': !exists(json, 'debitAmount') ? undefined : CurrencyAmountTypeFromJSON(json['debitAmount']),
        'depositTransactionId': !exists(json, 'depositTransactionId') ? undefined : json['depositTransactionId'],
        'exchange': !exists(json, 'exchange') ? undefined : ExchangeAmountsFromJSON(json['exchange']),
        'fbaCertificate': !exists(json, 'fbaCertificate') ? undefined : json['fbaCertificate'],
        'financialTransactionIdList': !exists(json, 'financialTransactionIdList') ? undefined : ((json['financialTransactionIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'fromRoom': !exists(json, 'fromRoom') ? undefined : json['fromRoom'],
        'groupTypeInfo': !exists(json, 'groupTypeInfo') ? undefined : PostingGroupTypeFromJSON(json['groupTypeInfo']),
        'overageAmount': !exists(json, 'overageAmount') ? undefined : CurrencyAmountTypeFromJSON(json['overageAmount']),
        'packageAllowance': !exists(json, 'packageAllowance') ? undefined : CurrencyAmountTypeFromJSON(json['packageAllowance']),
        'packageCode': !exists(json, 'packageCode') ? undefined : json['packageCode'],
        'paidOut': !exists(json, 'paidOut') ? undefined : json['paidOut'],
        'postedAmount': !exists(json, 'postedAmount') ? undefined : CurrencyAmountTypeFromJSON(json['postedAmount']),
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
        'price': !exists(json, 'price') ? undefined : CurrencyAmountTypeFromJSON(json['price']),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'receiptNo': !exists(json, 'receiptNo') ? undefined : json['receiptNo'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'referenceTransactionNo': !exists(json, 'referenceTransactionNo') ? undefined : json['referenceTransactionNo'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !exists(json, 'revenueDate') ? undefined : json['revenueDate'],
        'reversePaymentTransactionNo': !exists(json, 'reversePaymentTransactionNo') ? undefined : json['reversePaymentTransactionNo'],
        'roundingDifferenceTrx': !exists(json, 'roundingDifferenceTrx') ? undefined : json['roundingDifferenceTrx'],
        'serviceRecovery': !exists(json, 'serviceRecovery') ? undefined : json['serviceRecovery'],
        'stampDuty': !exists(json, 'stampDuty') ? undefined : json['stampDuty'],
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

export function PackagePostingTypeToJSON(value?: PackagePostingType | null): any {
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
        'cashierInfo': CashierInfoTypeToJSON(value.cashierInfo),
        'checkCount': value.checkCount,
        'checkNo': value.checkNo,
        'commissionable': value.commissionable,
        'compPostingsInfo': CompPostingsTypeToJSON(value.compPostingsInfo),
        'compRedemptionCode': value.compRedemptionCode,
        'creditAmount': CurrencyAmountTypeToJSON(value.creditAmount),
        'customCharge': value.customCharge,
        'debitAmount': CurrencyAmountTypeToJSON(value.debitAmount),
        'depositTransactionId': value.depositTransactionId,
        'exchange': ExchangeAmountsToJSON(value.exchange),
        'fbaCertificate': value.fbaCertificate,
        'financialTransactionIdList': value.financialTransactionIdList === undefined ? undefined : ((value.financialTransactionIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'fromRoom': value.fromRoom,
        'groupTypeInfo': PostingGroupTypeToJSON(value.groupTypeInfo),
        'overageAmount': CurrencyAmountTypeToJSON(value.overageAmount),
        'packageAllowance': CurrencyAmountTypeToJSON(value.packageAllowance),
        'packageCode': value.packageCode,
        'paidOut': value.paidOut,
        'postedAmount': CurrencyAmountTypeToJSON(value.postedAmount),
        'postingDate': value.postingDate,
        'price': CurrencyAmountTypeToJSON(value.price),
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
        'transactionType': CashieringTransactionTypeTypeToJSON(value.transactionType),
        'updateInfo': DepositDetailPostingTypeUpdateInfoToJSON(value.updateInfo),
    };
}

