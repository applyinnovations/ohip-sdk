/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 * Currency code configuration.
 * @export
 * @interface CurrencyExchangeRateType
 */
export interface CurrencyExchangeRateType {
    /**
     * The code specifying a monetary unit. Use ISO 4217, three alpha code.
     * @type {string}
     * @memberof CurrencyExchangeRateType
     */
    currencyCode?: string;
    /**
     * The symbol for the currency, e.g, for currencyCode USD the symbol is $.
     * @type {string}
     * @memberof CurrencyExchangeRateType
     */
    currencySymbol?: string;
    /**
     * Indicates the number of decimal places for a particular currency. This is equivalent to the ISO 4217 standard "minor unit". Typically used when the amount provided includes the minor unit of currency without a decimal point (e.g., USD 8500 needs DecimalPlaces="2" to represent $85).
     * @type {number}
     * @memberof CurrencyExchangeRateType
     */
    decimalPlaces?: number;
    /**
     * Description of the currency code.
     * @type {string}
     * @memberof CurrencyExchangeRateType
     */
    description?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CurrencyExchangeRateType
     */
    exchangeRate?: CurrencyAmountType;
}
/**
 * Check if a given object implements the CurrencyExchangeRateType interface.
 */
export declare function instanceOfCurrencyExchangeRateType(value: object): boolean;
export declare function CurrencyExchangeRateTypeFromJSON(json: any): CurrencyExchangeRateType;
export declare function CurrencyExchangeRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrencyExchangeRateType;
export declare function CurrencyExchangeRateTypeToJSON(value?: CurrencyExchangeRateType | null): any;