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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import type { DepositPolicyType } from './DepositPolicyType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * A deposit policy attached with the reservation.
 * @export
 * @interface GuaranteePolicyTypeDepositPolicy
 */
export interface GuaranteePolicyTypeDepositPolicy {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    amountDue?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    amountPaid?: CurrencyAmountType;
    /**
     * Comments attached with a deposit.
     * @type {string}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    comments?: string;
    /**
     * Message.
     * @type {number}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    estimatedAmount?: number;
    /**
     *
     * @type {DepositPolicyType}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    policy?: DepositPolicyType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    policyId?: UniqueIDType;
    /**
     *
     * @type {DepositCancelRevenueType}
     * @memberof GuaranteePolicyTypeDepositPolicy
     */
    revenueType?: DepositCancelRevenueType;
}
/**
 * Check if a given object implements the GuaranteePolicyTypeDepositPolicy interface.
 */
export declare function instanceOfGuaranteePolicyTypeDepositPolicy(value: object): boolean;
export declare function GuaranteePolicyTypeDepositPolicyFromJSON(json: any): GuaranteePolicyTypeDepositPolicy;
export declare function GuaranteePolicyTypeDepositPolicyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteePolicyTypeDepositPolicy;
export declare function GuaranteePolicyTypeDepositPolicyToJSON(value?: GuaranteePolicyTypeDepositPolicy | null): any;
