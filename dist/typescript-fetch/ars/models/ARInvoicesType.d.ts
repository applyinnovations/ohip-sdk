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
import type { ARInvoiceType } from './ARInvoiceType';
/**
 * A collection of AR Invoices.
 * @export
 * @interface ARInvoicesType
 */
export interface ARInvoicesType extends Array<ARInvoiceType> {
}
/**
 * Check if a given object implements the ARInvoicesType interface.
 */
export declare function instanceOfARInvoicesType(value: object): boolean;
export declare function ARInvoicesTypeFromJSON(json: any): ARInvoicesType;
export declare function ARInvoicesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARInvoicesType;
export declare function ARInvoicesTypeToJSON(value?: ARInvoicesType | null): any;