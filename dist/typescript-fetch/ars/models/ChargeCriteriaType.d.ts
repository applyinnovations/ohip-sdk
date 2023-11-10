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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { UniqueIDListType } from './UniqueIDListType';
/**
 * Criteria information for posting a charge.
 * @export
 * @interface ChargeCriteriaType
 */
export interface ChargeCriteriaType {
    /**
     * Apply room routing when making this posting.
     * @type {boolean}
     * @memberof ChargeCriteriaType
     */
    applyRoutingInstructions?: boolean;
    /**
     * Corrected arrangement code from the package associated to this transaction.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    arrangementCode?: string;
    /**
     * Article ID.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    articleCode?: string;
    /**
     * True indicates the Transaction Code is allowed to be posted automatically.
     * @type {boolean}
     * @memberof ChargeCriteriaType
     */
    autoPosting?: boolean;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ChargeCriteriaType
     */
    cashierId?: number;
    /**
     * Indicates the Cheque number.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    checkNumber?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof ChargeCriteriaType
     */
    financialTransactionIdList?: UniqueIDListType;
    /**
     *
     * @type {number}
     * @memberof ChargeCriteriaType
     */
    folioWindowNo?: number;
    /**
     * Quantity to post to the folio.
     * @type {number}
     * @memberof ChargeCriteriaType
     */
    postingQuantity?: number;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    postingReference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    postingRemark?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ChargeCriteriaType
     */
    price?: CurrencyAmountType;
    /**
     * Transaction Code to post.
     * @type {string}
     * @memberof ChargeCriteriaType
     */
    transactionCode?: string;
    /**
     * Use the applicable package allowance when making this posting.
     * @type {boolean}
     * @memberof ChargeCriteriaType
     */
    usePackageAllowance?: boolean;
}
/**
 * Check if a given object implements the ChargeCriteriaType interface.
 */
export declare function instanceOfChargeCriteriaType(value: object): boolean;
export declare function ChargeCriteriaTypeFromJSON(json: any): ChargeCriteriaType;
export declare function ChargeCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargeCriteriaType;
export declare function ChargeCriteriaTypeToJSON(value?: ChargeCriteriaType | null): any;
