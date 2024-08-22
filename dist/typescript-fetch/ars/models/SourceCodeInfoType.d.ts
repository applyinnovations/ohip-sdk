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
 *
 * @export
 * @interface SourceCodeInfoType
 */
export interface SourceCodeInfoType {
    /**
     *
     * @type {string}
     * @memberof SourceCodeInfoType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof SourceCodeInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof SourceCodeInfoType
     */
    sourceCode?: string;
    /**
     *
     * @type {string}
     * @memberof SourceCodeInfoType
     */
    sourceGroup?: string;
}
/**
 * Check if a given object implements the SourceCodeInfoType interface.
 */
export declare function instanceOfSourceCodeInfoType(value: object): boolean;
export declare function SourceCodeInfoTypeFromJSON(json: any): SourceCodeInfoType;
export declare function SourceCodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceCodeInfoType;
export declare function SourceCodeInfoTypeToJSON(value?: SourceCodeInfoType | null): any;
