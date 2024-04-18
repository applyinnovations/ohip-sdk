/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ARInvoiceCriteriaType } from './ARInvoiceCriteriaType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Response to the request to change invoice
 * @export
 * @interface Invoice
 */
export interface Invoice {
    /**
     *
     * @type {ARInvoiceCriteriaType}
     * @memberof Invoice
     */
    invoiceDetails?: ARInvoiceCriteriaType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof Invoice
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Invoice
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the Invoice interface.
 */
export declare function instanceOfInvoice(value: object): boolean;
export declare function InvoiceFromJSON(json: any): Invoice;
export declare function InvoiceFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoice;
export declare function InvoiceToJSON(value?: Invoice | null): any;