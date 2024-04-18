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
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 *
 * @export
 * @interface BillingChargeType
 */
export interface BillingChargeType {
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof BillingChargeType
     */
    approvalCode?: string;
    /**
     * Approval date of the posting.
     * @type {string}
     * @memberof BillingChargeType
     */
    approvalDate?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof BillingChargeType
     */
    approvalStatus?: string;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof BillingChargeType
     */
    arrangementCode?: string;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof BillingChargeType
     */
    cashierId?: number;
    /**
     * Corrected Cheque number.
     * @type {string}
     * @memberof BillingChargeType
     */
    checkNumber?: string;
    /**
     * Corrected POS covers - number of copies of receipts that got printed for that particular receipt.
     * @type {string}
     * @memberof BillingChargeType
     */
    covers?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof BillingChargeType
     */
    price?: CurrencyAmountType;
    /**
     * Corrected posting quantity.
     * @type {number}
     * @memberof BillingChargeType
     */
    quantity?: number;
    /**
     * Corrected user-defined posting reference.
     * @type {string}
     * @memberof BillingChargeType
     */
    reference?: string;
    /**
     * Corrected user-defined posting remark.
     * @type {string}
     * @memberof BillingChargeType
     */
    remark?: string;
    /**
     * Corrected Revenue Date.
     * @type {string}
     * @memberof BillingChargeType
     */
    revenueDate?: string;
    /**
     * Transaction number of the posting being corrected.
     * @type {number}
     * @memberof BillingChargeType
     */
    transactionNo?: number;
}
/**
 * Check if a given object implements the BillingChargeType interface.
 */
export declare function instanceOfBillingChargeType(value: object): boolean;
export declare function BillingChargeTypeFromJSON(json: any): BillingChargeType;
export declare function BillingChargeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingChargeType;
export declare function BillingChargeTypeToJSON(value?: BillingChargeType | null): any;