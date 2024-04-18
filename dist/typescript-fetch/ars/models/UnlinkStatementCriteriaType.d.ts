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
/**
 * Criteria for unlinking invoice from statement.
 * @export
 * @interface UnlinkStatementCriteriaType
 */
export interface UnlinkStatementCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof UnlinkStatementCriteriaType
     */
    cashierId?: number;
    /**
     * Hotel code.
     * @type {string}
     * @memberof UnlinkStatementCriteriaType
     */
    hotelId?: string;
    /**
     * Transaction Number .
     * @type {Array<number>}
     * @memberof UnlinkStatementCriteriaType
     */
    invoiceTrxNoList?: Array<number>;
}
/**
 * Check if a given object implements the UnlinkStatementCriteriaType interface.
 */
export declare function instanceOfUnlinkStatementCriteriaType(value: object): boolean;
export declare function UnlinkStatementCriteriaTypeFromJSON(json: any): UnlinkStatementCriteriaType;
export declare function UnlinkStatementCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UnlinkStatementCriteriaType;
export declare function UnlinkStatementCriteriaTypeToJSON(value?: UnlinkStatementCriteriaType | null): any;