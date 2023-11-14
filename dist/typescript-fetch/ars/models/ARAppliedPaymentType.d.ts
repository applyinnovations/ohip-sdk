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
import type { ARInvoiceCategory } from './ARInvoiceCategory';
import type { CashierInfoType } from './CashierInfoType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { FiscalResponseType } from './FiscalResponseType';
import type { FolioStatusType } from './FolioStatusType';
import type { FolioTextsType } from './FolioTextsType';
import type { MarketCodeInfoType } from './MarketCodeInfoType';
import type { ProfileInfoType } from './ProfileInfoType';
import type { ResPaymentCardType } from './ResPaymentCardType';
import type { ReservationId } from './ReservationId';
import type { ReservationInfoType } from './ReservationInfoType';
import type { RoomClassCodeInfoType } from './RoomClassCodeInfoType';
import type { SourceCodeInfoType } from './SourceCodeInfoType';
import type { TrxInfoType } from './TrxInfoType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Details of an AR Invoice.
 * @export
 * @interface ARAppliedPaymentType
 */
export interface ARAppliedPaymentType {
    /**
     *
     * @type {ProfileInfoType}
     * @memberof ARAppliedPaymentType
     */
    addresseeInfo?: ProfileInfoType;
    /**
     *
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    adjusted?: boolean;
    /**
     * The Aging age of the invoice
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    age?: number;
    /**
     * Flag to check Partail Transfer Allowed.
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    allowPartialTransferYn?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARAppliedPaymentType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARAppliedPaymentType
     */
    appliedAmount?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARAppliedPaymentType
     */
    balance?: CurrencyAmountType;
    /**
     * Flag to indicate if postings or adjustments can be made to the invoice.
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    canBeModified?: boolean;
    /**
     *
     * @type {CashierInfoType}
     * @memberof ARAppliedPaymentType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Close date of the invoice.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    closeDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    compressed?: boolean;
    /**
     *
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    compressedDate?: Date;
    /**
     * Unique Custom Numbers associated with this record.
     * @type {Array<string>}
     * @memberof ARAppliedPaymentType
     */
    customNumbers?: Array<string>;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    fiscalBillNo?: string;
    /**
     *
     * @type {FiscalResponseType}
     * @memberof ARAppliedPaymentType
     */
    fiscalResponseType?: FiscalResponseType;
    /**
     * Date of Folio Generation.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    folioDate?: Date;
    /**
     * Folio Number.
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    folioNoWithPrefix?: string;
    /**
     *
     * @type {FolioStatusType}
     * @memberof ARAppliedPaymentType
     */
    folioStatus?: FolioStatusType;
    /**
     *
     * @type {FolioTextsType}
     * @memberof ARAppliedPaymentType
     */
    folioTexts?: FolioTextsType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    folioTypeName?: string;
    /**
     * Name of the Guest who consumed these transactions.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    guestName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAppliedPaymentType
     */
    guestProfileId?: UniqueIDType;
    /**
     * Property where the invoice exists.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    hotelId?: string;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    invoiceNo?: number;
    /**
     *
     * @type {ARInvoiceCategory}
     * @memberof ARAppliedPaymentType
     */
    invoiceType?: ARInvoiceCategory;
    /**
     *
     * @type {MarketCodeInfoType}
     * @memberof ARAppliedPaymentType
     */
    market?: MarketCodeInfoType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARAppliedPaymentType
     */
    originalAmount?: CurrencyAmountType;
    /**
     *
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    parentInvoiceNo?: number;
    /**
     *
     * @type {ResPaymentCardType}
     * @memberof ARAppliedPaymentType
     */
    paymentCard?: ResPaymentCardType;
    /**
     * Transaction no of the Payment.
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    paymentTrxNo?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARAppliedPaymentType
     */
    payments?: CurrencyAmountType;
    /**
     * Posting date of the invoice.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    postingDate?: Date;
    /**
     * Flag to check Invoice Statement is Printed.
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    printed?: boolean;
    /**
     * Invoice Statement Printed Date.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    printedDate?: Date;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    reference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    remark?: string;
    /**
     *
     * @type {ReservationId}
     * @memberof ARAppliedPaymentType
     */
    reservationId?: ReservationId;
    /**
     *
     * @type {ReservationInfoType}
     * @memberof ARAppliedPaymentType
     */
    reservationInfo?: ReservationInfoType;
    /**
     * Revenue date ID of the invoice.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    revenueDate?: Date;
    /**
     *
     * @type {RoomClassCodeInfoType}
     * @memberof ARAppliedPaymentType
     */
    roomClass?: RoomClassCodeInfoType;
    /**
     *
     * @type {SourceCodeInfoType}
     * @memberof ARAppliedPaymentType
     */
    source?: SourceCodeInfoType;
    /**
     * Statementno of the invoice.
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    statementNo?: number;
    /**
     * Status of the invoice.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    status?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAppliedPaymentType
     */
    storedDebitFolioId?: UniqueIDType;
    /**
     * Name of the Stored Debit Folio.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    storedDebitFolioName?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ARAppliedPaymentType
     */
    storedFolioId?: UniqueIDType;
    /**
     * Name of the Stored Folio.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    storedFolioName?: string;
    /**
     * Transaction code of the invoice.
     * @type {string}
     * @memberof ARAppliedPaymentType
     */
    transactionCode?: string;
    /**
     * Transaction Date of the invoice.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    transactionDate?: Date;
    /**
     *
     * @type {TrxInfoType}
     * @memberof ARAppliedPaymentType
     */
    transactionInfo?: TrxInfoType;
    /**
     * Unique Transaction Identifier of the Invoice.
     * @type {number}
     * @memberof ARAppliedPaymentType
     */
    transactionNo?: number;
    /**
     * Transfer date of the invoice.
     * @type {Date}
     * @memberof ARAppliedPaymentType
     */
    transferDate?: Date;
    /**
     *
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    transferredIn?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ARAppliedPaymentType
     */
    transferredOut?: boolean;
}
/**
 * Check if a given object implements the ARAppliedPaymentType interface.
 */
export declare function instanceOfARAppliedPaymentType(value: object): boolean;
export declare function ARAppliedPaymentTypeFromJSON(json: any): ARAppliedPaymentType;
export declare function ARAppliedPaymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAppliedPaymentType;
export declare function ARAppliedPaymentTypeToJSON(value?: ARAppliedPaymentType | null): any;