/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Transaction Code's default amount details.
 * @export
 * @interface TrxCodeAmountsType
 */
export interface TrxCodeAmountsType {
    /**
     * Default currency code for the amounts.
     * @type {string}
     * @memberof TrxCodeAmountsType
     */
    currency?: string;
    /**
     * Default price of the Transaction Code.
     * @type {number}
     * @memberof TrxCodeAmountsType
     */
    defaultPrice?: number;
    /**
     * Maximum Amount to be posted on this Transaction Code.
     * @type {number}
     * @memberof TrxCodeAmountsType
     */
    maxAmount?: number;
    /**
     * Minimum amount to be posted on this Transaction Code.
     * @type {number}
     * @memberof TrxCodeAmountsType
     */
    minAmount?: number;
}
/**
 * Check if a given object implements the TrxCodeAmountsType interface.
 */
export declare function instanceOfTrxCodeAmountsType(value: object): boolean;
export declare function TrxCodeAmountsTypeFromJSON(json: any): TrxCodeAmountsType;
export declare function TrxCodeAmountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrxCodeAmountsType;
export declare function TrxCodeAmountsTypeToJSON(value?: TrxCodeAmountsType | null): any;
