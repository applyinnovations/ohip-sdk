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
/**
 * Collection of comp postings.
 * @export
 * @interface CompPostingsType
 */
export interface CompPostingsType {
    /**
     * Approval status of the comp account.
     * @type {string}
     * @memberof CompPostingsType
     */
    approvalStatus?: string;
    /**
     * Authorizer name of the Comp Account.
     * @type {string}
     * @memberof CompPostingsType
     */
    authorizer?: string;
}
/**
 * Check if a given object implements the CompPostingsType interface.
 */
export declare function instanceOfCompPostingsType(value: object): boolean;
export declare function CompPostingsTypeFromJSON(json: any): CompPostingsType;
export declare function CompPostingsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompPostingsType;
export declare function CompPostingsTypeToJSON(value?: CompPostingsType | null): any;
