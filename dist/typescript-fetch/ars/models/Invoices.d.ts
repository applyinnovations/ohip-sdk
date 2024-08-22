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
 * Request to close invoice(s)
 * @export
 * @interface Invoices
 */
export interface Invoices {
    /**
     * Criteria for searching Invoices.
     * @type {Array<ARInvoiceCriteriaType>}
     * @memberof Invoices
     */
    invoices?: Array<ARInvoiceCriteriaType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof Invoices
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Invoices
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the Invoices interface.
 */
export declare function instanceOfInvoices(value: object): boolean;
export declare function InvoicesFromJSON(json: any): Invoices;
export declare function InvoicesFromJSONTyped(json: any, ignoreDiscriminator: boolean): Invoices;
export declare function InvoicesToJSON(value?: Invoices | null): any;
