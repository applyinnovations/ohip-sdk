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
import type { ARTransferPostingsCriteriaTypeFromInvoice } from './ARTransferPostingsCriteriaTypeFromInvoice';
import type { ARTransferPostingsCriteriaTypeToInvoice } from './ARTransferPostingsCriteriaTypeToInvoice';
/**
 *
 * @export
 * @interface ARTransferPostingsCriteriaType
 */
export interface ARTransferPostingsCriteriaType {
    /**
     *
     * @type {ARTransferPostingsCriteriaTypeFromInvoice}
     * @memberof ARTransferPostingsCriteriaType
     */
    fromInvoice?: ARTransferPostingsCriteriaTypeFromInvoice;
    /**
     *
     * @type {ARTransferPostingsCriteriaTypeToInvoice}
     * @memberof ARTransferPostingsCriteriaType
     */
    toInvoice?: ARTransferPostingsCriteriaTypeToInvoice;
}
/**
 * Check if a given object implements the ARTransferPostingsCriteriaType interface.
 */
export declare function instanceOfARTransferPostingsCriteriaType(value: object): boolean;
export declare function ARTransferPostingsCriteriaTypeFromJSON(json: any): ARTransferPostingsCriteriaType;
export declare function ARTransferPostingsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARTransferPostingsCriteriaType;
export declare function ARTransferPostingsCriteriaTypeToJSON(value?: ARTransferPostingsCriteriaType | null): any;
