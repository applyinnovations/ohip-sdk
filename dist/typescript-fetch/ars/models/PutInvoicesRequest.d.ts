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
import type { ARInvoicesCriteriaType } from './ARInvoicesCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PutInvoicesRequest
 */
export interface PutInvoicesRequest {
    /**
     *
     * @type {ARInvoicesCriteriaType}
     * @memberof PutInvoicesRequest
     */
    invoices?: ARInvoicesCriteriaType;
    /**
     *
     * @type {Links}
     * @memberof PutInvoicesRequest
     */
    links?: Links;
    /**
     *
     * @type {WarningsType}
     * @memberof PutInvoicesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PutInvoicesRequest interface.
 */
export declare function instanceOfPutInvoicesRequest(value: object): boolean;
export declare function PutInvoicesRequestFromJSON(json: any): PutInvoicesRequest;
export declare function PutInvoicesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PutInvoicesRequest;
export declare function PutInvoicesRequestToJSON(value?: PutInvoicesRequest | null): any;
