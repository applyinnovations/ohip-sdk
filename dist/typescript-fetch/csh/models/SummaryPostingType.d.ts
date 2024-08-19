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
import type { CashierInfoType } from './CashierInfoType';
import type { CashieringTransactionTypeType } from './CashieringTransactionTypeType';
import type { CompPostingsType } from './CompPostingsType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DepositDetailPostingTypeUpdateInfo } from './DepositDetailPostingTypeUpdateInfo';
import type { ExchangeAmounts } from './ExchangeAmounts';
import type { PostingGroupType } from './PostingGroupType';
import type { PostingTimeType } from './PostingTimeType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Posting details.
 * @export
 * @interface SummaryPostingType
 */
export interface SummaryPostingType {
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof SummaryPostingType
     */
    approvalCode?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof SummaryPostingType
     */
    approvalStatus?: string;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof SummaryPostingType
     */
    arrangementCode?: string;
    /**
     * Information regarding the Article(Using Articles Functionality) of this transaction.
     * @type {string}
     * @memberof SummaryPostingType
     */
    articleCode?: string;
    /**
     * Indicator to determine if the transaction can be adjusted.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    canAdjustInvoice?: boolean;
    /**
     *
     * @type {CashierInfoType}
     * @memberof SummaryPostingType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Check number count for the posting.
     * @type {string}
     * @memberof SummaryPostingType
     */
    checkCount?: string;
    /**
     * Check number for the posting.
     * @type {string}
     * @memberof SummaryPostingType
     */
    checkNo?: string;
    /**
     * Indicator to determine if the transaction is commissionable.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    commissionable?: boolean;
    /**
     *
     * @type {CompPostingsType}
     * @memberof SummaryPostingType
     */
    compPostingsInfo?: CompPostingsType;
    /**
     * Comp redemption code assiciated to the transaction.
     * @type {string}
     * @memberof SummaryPostingType
     */
    compRedemptionCode?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof SummaryPostingType
     */
    creditAmount?: CurrencyAmountType;
    /**
     * Flag to identify a Custom Charge.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    customCharge?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof SummaryPostingType
     */
    debitAmount?: CurrencyAmountType;
    /**
     * Flag to indicate if the Posting is a deferred tax record. Set to true only when the posting is a deferred tax record. Set to false only when the posting is not a deferred tax record.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    deferredTax?: boolean;
    /**
     * Tax Service Accounting Codes used.
     * @type {string}
     * @memberof SummaryPostingType
     */
    depositTransactionId?: string;
    /**
     *
     * @type {ExchangeAmounts}
     * @memberof SummaryPostingType
     */
    exchange?: ExchangeAmounts;
    /**
     * Flag indicates that the posting is Flexible Benefits Awards Certificate
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    fbaCertificate?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof SummaryPostingType
     */
    financialTransactionIdList?: Array<UniqueIDType>;
    /**
     * The Folio Window number of this posting.
     * @type {number}
     * @memberof SummaryPostingType
     */
    folioWindowNo?: number;
    /**
     * When some SummaryPostingsGroupBy element is send as request ,then this element will represent how many transactions rolled up into this Summary Posting Type.
     * @type {number}
     * @memberof SummaryPostingType
     */
    groupByCount?: number;
    /**
     *
     * @type {PostingGroupType}
     * @memberof SummaryPostingType
     */
    groupTypeInfo?: PostingGroupType;
    /**
     * Flag to indicate if an Official Receipt is generated for the folio window. Applicable only in the Philippines.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    officialBIRReceiptExists?: boolean;
    /**
     * Indicates if this transaction is a paid out transaction.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    paidOut?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof SummaryPostingType
     */
    postedAmount?: CurrencyAmountType;
    /**
     * Date and time of posting.
     * @type {string}
     * @memberof SummaryPostingType
     */
    postingDate?: string;
    /**
     *
     * @type {PostingTimeType}
     * @memberof SummaryPostingType
     */
    postingTime?: PostingTimeType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof SummaryPostingType
     */
    price?: CurrencyAmountType;
    /**
     * Indicates Quantity.
     * @type {number}
     * @memberof SummaryPostingType
     */
    quantity?: number;
    /**
     * Rate code associated to this transaction.
     * @type {string}
     * @memberof SummaryPostingType
     */
    rateCode?: string;
    /**
     * The receipt number of the transaction, if there is a receipt generated.
     * @type {number}
     * @memberof SummaryPostingType
     */
    receiptNo?: number;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof SummaryPostingType
     */
    reference?: string;
    /**
     * Generate transaction number for the Posting.
     * @type {number}
     * @memberof SummaryPostingType
     */
    referenceTransactionNo?: number;
    /**
     * Posting remarks.
     * @type {string}
     * @memberof SummaryPostingType
     */
    remark?: string;
    /**
     * The date on which the transaction has its revenue effect.
     * @type {string}
     * @memberof SummaryPostingType
     */
    revenueDate?: string;
    /**
     * Reverse payment transaction unique identifier.
     * @type {number}
     * @memberof SummaryPostingType
     */
    reversePaymentTransactionNo?: number;
    /**
     * Indicator to determine if the posting was a posting for the Rounding Difference.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    roundingDifferenceTrx?: boolean;
    /**
     * Flag to indicates service recovery
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    serviceRecovery?: boolean;
    /**
     * Flag to identify a Stamp Duty Transaction.
     * @type {boolean}
     * @memberof SummaryPostingType
     */
    stampDuty?: boolean;
    /**
     * Tax invoice number generated by payment tax.
     * @type {string}
     * @memberof SummaryPostingType
     */
    taxInvoiceNo?: string;
    /**
     * The amount of the transaction.
     * @type {number}
     * @memberof SummaryPostingType
     */
    transactionAmount?: number;
    /**
     * Billing Transaction Code.
     * @type {string}
     * @memberof SummaryPostingType
     */
    transactionCode?: string;
    /**
     * Transaction Date.
     * @type {string}
     * @memberof SummaryPostingType
     */
    transactionDate?: string;
    /**
     * Billing Transaction Description.
     * @type {string}
     * @memberof SummaryPostingType
     */
    transactionDescription?: string;
    /**
     * Unique Transaction Identifier.
     * @type {number}
     * @memberof SummaryPostingType
     */
    transactionNo?: number;
    /**
     *
     * @type {CashieringTransactionTypeType}
     * @memberof SummaryPostingType
     */
    transactionType?: CashieringTransactionTypeType;
    /**
     *
     * @type {DepositDetailPostingTypeUpdateInfo}
     * @memberof SummaryPostingType
     */
    updateInfo?: DepositDetailPostingTypeUpdateInfo;
}
/**
 * Check if a given object implements the SummaryPostingType interface.
 */
export declare function instanceOfSummaryPostingType(value: object): boolean;
export declare function SummaryPostingTypeFromJSON(json: any): SummaryPostingType;
export declare function SummaryPostingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SummaryPostingType;
export declare function SummaryPostingTypeToJSON(value?: SummaryPostingType | null): any;
