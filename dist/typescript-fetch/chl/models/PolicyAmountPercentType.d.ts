/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { PolicyBasisTypeType } from './PolicyBasisTypeType';
/**
 * Defines the percentage basis for calculating the fee amount or the amount.
 * @export
 * @interface PolicyAmountPercentType
 */
export interface PolicyAmountPercentType {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof PolicyAmountPercentType
     */
    amount?: number;
    /**
     *
     * @type {PolicyBasisTypeType}
     * @memberof PolicyAmountPercentType
     */
    basisType?: PolicyBasisTypeType;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof PolicyAmountPercentType
     */
    currencyCode?: string;
    /**
     * The number of nights of the hotel stay that are used to calculate the fee amount.
     * @type {number}
     * @memberof PolicyAmountPercentType
     */
    nights?: number;
    /**
     * The percentage used to calculate the amount.
     * @type {number}
     * @memberof PolicyAmountPercentType
     */
    percent?: number;
}
/**
 * Check if a given object implements the PolicyAmountPercentType interface.
 */
export declare function instanceOfPolicyAmountPercentType(value: object): boolean;
export declare function PolicyAmountPercentTypeFromJSON(json: any): PolicyAmountPercentType;
export declare function PolicyAmountPercentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PolicyAmountPercentType;
export declare function PolicyAmountPercentTypeToJSON(value?: PolicyAmountPercentType | null): any;
