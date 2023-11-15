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
import type { FolioStatusType } from './FolioStatusType';
import type { PayeeInfoType } from './PayeeInfoType';
import type { SummaryPostingType } from './SummaryPostingType';
/**
 * Represents a single page in a reservation's ledger which will contain transactions and payee information.
 * @export
 * @interface FolioType
 */
export interface FolioType {
    /**
     * Flag to check Folio Conversion Allowed.
     * @type {boolean}
     * @memberof FolioType
     */
    allowConvertFolioYn?: boolean;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof FolioType
     */
    end?: string;
    /**
     * The Fiscal Bill number of this posting
     * @type {string}
     * @memberof FolioType
     */
    fiscalBillNo?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof FolioType
     */
    folioAmount?: CurrencyAmountType;
    /**
     * Date of Folio Generation.
     * @type {string}
     * @memberof FolioType
     */
    folioDate?: string;
    /**
     * Folio Number.
     * @type {number}
     * @memberof FolioType
     */
    folioNo?: number;
    /**
     * The folio number with prefix value.
     * @type {string}
     * @memberof FolioType
     */
    folioNoWithPrefix?: string;
    /**
     * Unique sequence number. Used to identify the current folio tax record.
     * @type {number}
     * @memberof FolioType
     */
    folioSeqNo?: number;
    /**
     *
     * @type {FolioStatusType}
     * @memberof FolioType
     */
    folioStatus?: FolioStatusType;
    /**
     * The name of the Folio Type used for the Folio Number sequence.
     * @type {string}
     * @memberof FolioType
     */
    folioTypeName?: string;
    /**
     * Internal window ID which is unique to the reservation. This ID can only be used for reference.
     * @type {string}
     * @memberof FolioType
     */
    internalFolioWindowID?: string;
    /**
     * Invoice No after the folio is generated. Same invoice number may be referred in multiple folios
     * @type {number}
     * @memberof FolioType
     */
    invoiceNo?: number;
    /**
     *
     * @type {PayeeInfoType}
     * @memberof FolioType
     */
    payeeInfo?: PayeeInfoType;
    /**
     * List of postings.
     * @type {Array<SummaryPostingType>}
     * @memberof FolioType
     */
    postings?: Array<SummaryPostingType>;
    /**
     * Folio Revison number.
     * @type {number}
     * @memberof FolioType
     */
    revisionNo?: number;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof FolioType
     */
    start?: string;
}
/**
 * Check if a given object implements the FolioType interface.
 */
export declare function instanceOfFolioType(value: object): boolean;
export declare function FolioTypeFromJSON(json: any): FolioType;
export declare function FolioTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FolioType;
export declare function FolioTypeToJSON(value?: FolioType | null): any;
