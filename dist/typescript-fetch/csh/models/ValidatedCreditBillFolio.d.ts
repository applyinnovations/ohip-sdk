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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ExchangeRateInfoType } from './ExchangeRateInfoType';
import type { FolioStatusType } from './FolioStatusType';
import type { FolioSummaryTypeReservationInfo } from './FolioSummaryTypeReservationInfo';
import type { PayeeInfoType } from './PayeeInfoType';
import type { ProfileInfoType } from './ProfileInfoType';
import type { SummaryPostingType } from './SummaryPostingType';
/**
 * Contains Folio Details including payee information and the reservation which it's attached to.
 * @export
 * @interface ValidatedCreditBillFolio
 */
export interface ValidatedCreditBillFolio {
    /**
     * Account Code.
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    accountCode?: number;
    /**
     * Flag to check Folio generated from Acoount Receivables.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    accountReceivablesFolio?: boolean;
    /**
     *
     * @type {ProfileInfoType}
     * @memberof ValidatedCreditBillFolio
     */
    addresseeInfo?: ProfileInfoType;
    /**
     * Flag to check Folio Conversion Allowed.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    allowConvertFolioYn?: boolean;
    /**
     * Indicates if this folio is linked to an anonymized Guest/Payee/Addressee.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    anonymizedFolio?: boolean;
    /**
     * Bill Number.
     * @type {Array<string>}
     * @memberof ValidatedCreditBillFolio
     */
    associatedBills?: Array<string>;
    /**
     * A flag which indicates whether credit folio has been generated.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    creditBillGenerated?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ValidatedCreditBillFolio
     */
    creditableAmount?: CurrencyAmountType;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    end?: string;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    fiscalBillNo?: string;
    /**
     * Bill Number returned by the Fiscal Printer.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    fiscalFolioNo?: string;
    /**
     *
     * @type {ExchangeRateInfoType}
     * @memberof ValidatedCreditBillFolio
     */
    fiscalInvoicingCurrencyInfo?: ExchangeRateInfoType;
    /**
     * Applicable for Fiscal Terminal. The ID of the terminal where the fiscal device is connected.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    fiscalTerminalId?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ValidatedCreditBillFolio
     */
    folioAmount?: CurrencyAmountType;
    /**
     * Date of Folio Generation.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    folioDate?: string;
    /**
     * Folio Number.
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    folioNo?: number;
    /**
     *
     * @type {FolioStatusType}
     * @memberof ValidatedCreditBillFolio
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    folioTypeName?: string;
    /**
     *
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    folioWindowNo?: number;
    /**
     * Fiscal folio flag to call fiscal Information folio web service.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    generateFiscalFolio?: boolean;
    /**
     * A flag which indicates whether selected folio has deposit transfer or not.
     * @type {boolean}
     * @memberof ValidatedCreditBillFolio
     */
    hasDepositTransfer?: boolean;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    invoiceNo?: number;
    /**
     *
     * @type {PayeeInfoType}
     * @memberof ValidatedCreditBillFolio
     */
    payeeInfo?: PayeeInfoType;
    /**
     *
     * @type {SummaryPostingType}
     * @memberof ValidatedCreditBillFolio
     */
    payment?: SummaryPostingType;
    /**
     * Bill Payment transaction Number.
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    paymentTrxNo?: number;
    /**
     * Number for Post-It transactions.
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    postItNo?: number;
    /**
     * Folio Queue name.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    queueName?: string;
    /**
     *
     * @type {FolioSummaryTypeReservationInfo}
     * @memberof ValidatedCreditBillFolio
     */
    reservationInfo?: FolioSummaryTypeReservationInfo;
    /**
     * Folio Revision number.
     * @type {number}
     * @memberof ValidatedCreditBillFolio
     */
    revisionNo?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof ValidatedCreditBillFolio
     */
    start?: string;
}
/**
 * Check if a given object implements the ValidatedCreditBillFolio interface.
 */
export declare function instanceOfValidatedCreditBillFolio(value: object): boolean;
export declare function ValidatedCreditBillFolioFromJSON(json: any): ValidatedCreditBillFolio;
export declare function ValidatedCreditBillFolioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ValidatedCreditBillFolio;
export declare function ValidatedCreditBillFolioToJSON(value?: ValidatedCreditBillFolio | null): any;
