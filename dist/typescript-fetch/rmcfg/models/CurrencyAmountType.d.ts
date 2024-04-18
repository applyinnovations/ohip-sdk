/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * A monetary value expressed with a currency code.
 * @export
 * @interface CurrencyAmountType
 */
export interface CurrencyAmountType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof CurrencyAmountType
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof CurrencyAmountType
     */
    currencyCode?: string;
}
/**
 * Check if a given object implements the CurrencyAmountType interface.
 */
export declare function instanceOfCurrencyAmountType(value: object): boolean;
export declare function CurrencyAmountTypeFromJSON(json: any): CurrencyAmountType;
export declare function CurrencyAmountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyAmountType;
export declare function CurrencyAmountTypeToJSON(value?: CurrencyAmountType | null): any;