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
import type { ARAccountCriteriaType } from './ARAccountCriteriaType';
import type { ARInvoicesType } from './ARInvoicesType';
/**
 * Criteria type compressing invoices i.e grouping multiple invoices into one,for an Account.
 * @export
 * @interface ARCompressInvoicesType
 */
export interface ARCompressInvoicesType {
    /**
     *
     * @type {ARAccountCriteriaType}
     * @memberof ARCompressInvoicesType
     */
    account?: ARAccountCriteriaType;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ARCompressInvoicesType
     */
    cashierId?: number;
    /**
     * Folio Type for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    folioTypeName?: string;
    /**
     *
     * @type {ARInvoicesType}
     * @memberof ARCompressInvoicesType
     */
    invoices?: ARInvoicesType;
    /**
     * Reference Text for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    reference?: string;
    /**
     * Remarks for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    remark?: string;
}
/**
 * Check if a given object implements the ARCompressInvoicesType interface.
 */
export declare function instanceOfARCompressInvoicesType(value: object): boolean;
export declare function ARCompressInvoicesTypeFromJSON(json: any): ARCompressInvoicesType;
export declare function ARCompressInvoicesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARCompressInvoicesType;
export declare function ARCompressInvoicesTypeToJSON(value?: ARCompressInvoicesType | null): any;
