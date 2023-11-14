/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARInvoicePostingTypeUpdateInfo } from './ARInvoicePostingTypeUpdateInfo';
import type { CashierInfoType } from './CashierInfoType';
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import type { CompPostingsType } from './CompPostingsType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ExchangeAmounts } from './ExchangeAmounts';
import type { PostingGroupType } from './PostingGroupType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * Posting details.
 * @export
 * @interface ARInvoicePostingType
 */
export interface ARInvoicePostingType {
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    approvalCode?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    approvalStatus?: string;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    arrangementCode?: string;
    /**
     * Information regarding the Article(Using Articles Functionality) of this transaction.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    articleCode?: string;
    /**
     * Indicator to determine if the transaction can be adjusted.
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    canAdjustInvoice?: boolean;
    /**
     *
     * @type {CashierInfoType}
     * @memberof ARInvoicePostingType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Check number count for the posting.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    checkCount?: string;
    /**
     * Check number for the posting.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    checkNo?: string;
    /**
     * Indicator to determine if the transaction is commissionable.
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    commissionable?: boolean;
    /**
     *
     * @type {CompPostingsType}
     * @memberof ARInvoicePostingType
     */
    compPostingsInfo?: CompPostingsType;
    /**
     * Comp redemption code assiciated to the transaction.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    compRedemptionCode?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARInvoicePostingType
     */
    creditAmount?: CurrencyAmountType;
    /**
     * Guest Name of the Credit Invoice. For other invoices, this element will be empty.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    creditInvoiceGuestName?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARInvoicePostingType
     */
    debitAmount?: CurrencyAmountType;
    /**
     * Tax Service Accounting Codes used.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    depositTransactionId?: string;
    /**
     *
     * @type {ExchangeAmounts}
     * @memberof ARInvoicePostingType
     */
    exchange?: ExchangeAmounts;
    /**
     * Flag indicates that the posting is Flexible Benefits Awards Certificate
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    fbaCertificate?: boolean;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof ARInvoicePostingType
     */
    financialTransactionIdList?: UniqueIDListType;
    /**
     * When some SummaryPostingsGroupBy element is send as request ,then this element will represent how many transactions rolled up into this Summary Posting Type.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    groupByCount?: number;
    /**
     *
     * @type {PostingGroupType}
     * @memberof ARInvoicePostingType
     */
    groupTypeInfo?: PostingGroupType;
    /**
     * Indicates if this transaction is a paid out transaction.
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    paidOut?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARInvoicePostingType
     */
    postedAmount?: CurrencyAmountType;
    /**
     * Date and time of posting.
     * @type {Date}
     * @memberof ARInvoicePostingType
     */
    postingDate?: Date;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARInvoicePostingType
     */
    price?: CurrencyAmountType;
    /**
     * Indicates Quantity.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    quantity?: number;
    /**
     * Rate code associated to this transaction.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    rateCode?: string;
    /**
     * The receipt number of the transaction, if there is a receipt generated.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    receiptNo?: number;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    reference?: string;
    /**
     * Generate transaction number for the Posting.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    referenceTransactionNo?: number;
    /**
     * Posting remarks.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    remark?: string;
    /**
     * The date on which the transaction has its revenue effect.
     * @type {Date}
     * @memberof ARInvoicePostingType
     */
    revenueDate?: Date;
    /**
     * Reverse payment transaction unique identifier.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    reversePaymentTransactionNo?: number;
    /**
     * Indicator to determine if the posting was a posting for the Rounding Difference.
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    roundingDifferenceTrx?: boolean;
    /**
     * Flag to indicates service recovery
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    serviceRecovery?: boolean;
    /**
     * Flag to identify a Stamp Duty Transaction.
     * @type {boolean}
     * @memberof ARInvoicePostingType
     */
    stampDuty?: boolean;
    /**
     * Tax invoice number generated by payment tax.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    taxInvoiceNo?: string;
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    transactionAmount?: number;
    /**
     * Billing Transaction Code.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    transactionCode?: string;
    /**
     * Transaction Date.
     * @type {Date}
     * @memberof ARInvoicePostingType
     */
    transactionDate?: Date;
    /**
     * Billing Transaction Description.
     * @type {string}
     * @memberof ARInvoicePostingType
     */
    transactionDescription?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof ARInvoicePostingType
     */
    transactionNo?: number;
    /**
     *
     * @type {CashieringTransactionTypeType}
     * @memberof ARInvoicePostingType
     */
    transactionType?: CashieringTransactionTypeType;
    /**
     *
     * @type {ARInvoicePostingTypeUpdateInfo}
     * @memberof ARInvoicePostingType
     */
    updateInfo?: ARInvoicePostingTypeUpdateInfo;
}
/**
 * Check if a given object implements the ARInvoicePostingType interface.
 */
export declare function instanceOfARInvoicePostingType(value: object): boolean;
export declare function ARInvoicePostingTypeFromJSON(json: any): ARInvoicePostingType;
export declare function ARInvoicePostingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARInvoicePostingType;
export declare function ARInvoicePostingTypeToJSON(value?: ARInvoicePostingType | null): any;