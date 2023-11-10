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
import type { ARAppliedPaymentsType } from './ARAppliedPaymentsType';
import type { Links } from './Links';
import type { TrxCodesInfoType } from './TrxCodesInfoType';
import type { WarningsType } from './WarningsType';
/**
 * Response to the applied payment details,Contains errors or warnings if any.
 * @export
 * @interface InvoiceAppliedPayments
 */
export interface InvoiceAppliedPayments {
    /**
     *
     * @type {ARAppliedPaymentsType}
     * @memberof InvoiceAppliedPayments
     */
    details?: ARAppliedPaymentsType;
    /**
     *
     * @type {Links}
     * @memberof InvoiceAppliedPayments
     */
    links?: Links;
    /**
     *
     * @type {TrxCodesInfoType}
     * @memberof InvoiceAppliedPayments
     */
    trxCodesInfo?: TrxCodesInfoType;
    /**
     *
     * @type {WarningsType}
     * @memberof InvoiceAppliedPayments
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the InvoiceAppliedPayments interface.
 */
export declare function instanceOfInvoiceAppliedPayments(value: object): boolean;
export declare function InvoiceAppliedPaymentsFromJSON(json: any): InvoiceAppliedPayments;
export declare function InvoiceAppliedPaymentsFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoiceAppliedPayments;
export declare function InvoiceAppliedPaymentsToJSON(value?: InvoiceAppliedPayments | null): any;
