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
import type { ARTransactionType } from './ARTransactionType';
import type { Links } from './Links';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
import type { WarningsType } from './WarningsType';
/**
 * Response after fetching AR transaction details.
 * @export
 * @interface ArTransactions
 */
export interface ArTransactions {
    /**
     *
     * @type {Links}
     * @memberof ArTransactions
     */
    links?: Links;
    /**
     *
     * @type {ARTransactionType}
     * @memberof ArTransactions
     */
    transactions?: ARTransactionType;
    /**
     *
     * @type {TrxCodesInfoType}
     * @memberof ArTransactions
     */
    trxCodesInfo?: TrxCodesInfoType;
    /**
     *
     * @type {WarningsType}
     * @memberof ArTransactions
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the ArTransactions interface.
 */
export declare function instanceOfArTransactions(value: object): boolean;
export declare function ArTransactionsFromJSON(json: any): ArTransactions;
export declare function ArTransactionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ArTransactions;
export declare function ArTransactionsToJSON(value?: ArTransactions | null): any;