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
 * @interface MarketCodeInfoType
 */
export interface MarketCodeInfoType {
    /**
     *
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    description?: string;
    /**
     *
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    hotelId?: string;
    /**
     *
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    marketCode?: string;
    /**
     *
     * @type {string}
     * @memberof MarketCodeInfoType
     */
    marketGroup?: string;
}
/**
 * Check if a given object implements the MarketCodeInfoType interface.
 */
export declare function instanceOfMarketCodeInfoType(value: object): boolean;
export declare function MarketCodeInfoTypeFromJSON(json: any): MarketCodeInfoType;
export declare function MarketCodeInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketCodeInfoType;
export declare function MarketCodeInfoTypeToJSON(value?: MarketCodeInfoType | null): any;
