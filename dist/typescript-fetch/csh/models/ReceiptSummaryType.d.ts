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
import type { PayeeInfoType } from './PayeeInfoType';
import type { ReceiptType } from './ReceiptType';
/**
 * Contains Receipt Details.
 * @export
 * @interface ReceiptSummaryType
 */
export interface ReceiptSummaryType {
    /**
     * Custom Number.
     * @type {Array<string>}
     * @memberof ReceiptSummaryType
     */
    customNumbers?: Array<string>;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof ReceiptSummaryType
     */
    end?: Date;
    /**
     *
     * @type {PayeeInfoType}
     * @memberof ReceiptSummaryType
     */
    payeeInfo?: PayeeInfoType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ReceiptSummaryType
     */
    receiptAmount?: CurrencyAmountType;
    /**
     * Receipt Number.
     * @type {number}
     * @memberof ReceiptSummaryType
     */
    receiptNo?: number;
    /**
     *
     * @type {ReceiptType}
     * @memberof ReceiptSummaryType
     */
    receiptType?: ReceiptType;
    /**
     * Receipt Type Description.
     * @type {string}
     * @memberof ReceiptSummaryType
     */
    receiptTypeDescription?: string;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof ReceiptSummaryType
     */
    start?: Date;
    /**
     * Tax Invoice Number of the Receipt.
     * @type {string}
     * @memberof ReceiptSummaryType
     */
    taxInvoice?: string;
    /**
     * Transaction Number.
     * @type {string}
     * @memberof ReceiptSummaryType
     */
    transactionNo?: string;
}
/**
 * Check if a given object implements the ReceiptSummaryType interface.
 */
export declare function instanceOfReceiptSummaryType(value: object): boolean;
export declare function ReceiptSummaryTypeFromJSON(json: any): ReceiptSummaryType;
export declare function ReceiptSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReceiptSummaryType;
export declare function ReceiptSummaryTypeToJSON(value?: ReceiptSummaryType | null): any;
