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
import type { ARAccountsInvoicesPaymentsType } from './ARAccountsInvoicesPaymentsType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response after fetching on-hold invoices.
 * @export
 * @interface InvoicesOnHold
 */
export interface InvoicesOnHold {
    /**
     *
     * @type {ARAccountsInvoicesPaymentsType}
     * @memberof InvoicesOnHold
     */
    details?: ARAccountsInvoicesPaymentsType;
    /**
     *
     * @type {Links}
     * @memberof InvoicesOnHold
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof InvoicesOnHold
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the InvoicesOnHold interface.
 */
export declare function instanceOfInvoicesOnHold(value: object): boolean;
export declare function InvoicesOnHoldFromJSON(json: any): InvoicesOnHold;
export declare function InvoicesOnHoldFromJSONTyped(json: any, ignoreDiscriminator: boolean): InvoicesOnHold;
export declare function InvoicesOnHoldToJSON(value?: InvoicesOnHold | null): any;
