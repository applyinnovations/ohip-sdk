/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AmountDeterminationType } from './AmountDeterminationType';
/**
 * Applicable service charges or fees.
 * @export
 * @interface FeeType
 */
export interface FeeType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof FeeType
     */
    amount?: number;
    /**
     * Code identifying the fee (e.g.,agency fee, municipality fee).
     * @type {string}
     * @memberof FeeType
     */
    code?: string;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof FeeType
     */
    currencyCode?: string;
    /**
     *
     * @type {string}
     * @memberof FeeType
     */
    description?: string;
    /**
     *
     * @type {AmountDeterminationType}
     * @memberof FeeType
     */
    type?: AmountDeterminationType;
}
/**
 * Check if a given object implements the FeeType interface.
 */
export declare function instanceOfFeeType(value: object): boolean;
export declare function FeeTypeFromJSON(json: any): FeeType;
export declare function FeeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FeeType;
export declare function FeeTypeToJSON(value?: FeeType | null): any;
