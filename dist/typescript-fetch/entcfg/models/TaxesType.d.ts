/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TaxType } from './TaxType';
/**
 * A collection of taxes.
 * @export
 * @interface TaxesType
 */
export interface TaxesType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof TaxesType
     */
    amount?: number;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof TaxesType
     */
    currencyCode?: string;
    /**
     * An individual tax.
     * @type {Array<TaxType>}
     * @memberof TaxesType
     */
    tax?: Array<TaxType>;
}
/**
 * Check if a given object implements the TaxesType interface.
 */
export declare function instanceOfTaxesType(value: object): boolean;
export declare function TaxesTypeFromJSON(json: any): TaxesType;
export declare function TaxesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxesType;
export declare function TaxesTypeToJSON(value?: TaxesType | null): any;
