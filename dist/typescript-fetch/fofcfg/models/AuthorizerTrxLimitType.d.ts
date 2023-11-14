/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AuthBillingInstructionsType } from './AuthBillingInstructionsType';
import type { AuthTransactionCodesType } from './AuthTransactionCodesType';
/**
 * A representation of the information of Transaction Limit.
 * @export
 * @interface AuthorizerTrxLimitType
 */
export interface AuthorizerTrxLimitType {
    /**
     *
     * @type {AuthBillingInstructionsType}
     * @memberof AuthorizerTrxLimitType
     */
    billingInstructions?: AuthBillingInstructionsType;
    /**
     * Credit Limit for a transaction.
     * @type {number}
     * @memberof AuthorizerTrxLimitType
     */
    creditLimit?: number;
    /**
     * Group Header Id for a transaction row.
     * @type {number}
     * @memberof AuthorizerTrxLimitType
     */
    groupHeaderId?: number;
    /**
     * Occurrence Limit for a transaction.
     * @type {number}
     * @memberof AuthorizerTrxLimitType
     */
    occurrenceLimit?: number;
    /**
     *
     * @type {AuthTransactionCodesType}
     * @memberof AuthorizerTrxLimitType
     */
    transactionCodes?: AuthTransactionCodesType;
}
/**
 * Check if a given object implements the AuthorizerTrxLimitType interface.
 */
export declare function instanceOfAuthorizerTrxLimitType(value: object): boolean;
export declare function AuthorizerTrxLimitTypeFromJSON(json: any): AuthorizerTrxLimitType;
export declare function AuthorizerTrxLimitTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizerTrxLimitType;
export declare function AuthorizerTrxLimitTypeToJSON(value?: AuthorizerTrxLimitType | null): any;