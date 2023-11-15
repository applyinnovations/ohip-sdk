/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import type { PolicyAmountPercentType } from './PolicyAmountPercentType';
import type { PolicyDeadlineType } from './PolicyDeadlineType';
/**
 * Used to define the deposit policy, guarantees policy, and/or accepted forms of payment.
 * @export
 * @interface DepositPolicyType
 */
export interface DepositPolicyType {
    /**
     *
     * @type {PolicyAmountPercentType}
     * @memberof DepositPolicyType
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     *
     * @type {PolicyDeadlineType}
     * @memberof DepositPolicyType
     */
    deadline?: PolicyDeadlineType;
    /**
     * Receipt number associated with the deposit policy
     * @type {number}
     * @memberof DepositPolicyType
     */
    depositReceiptNo?: number;
    /**
     * Flag to indicate if deposit policy is reversed
     * @type {boolean}
     * @memberof DepositPolicyType
     */
    depositReqReversed?: boolean;
    /**
     * Text description of the Payment in a given language.
     * @type {string}
     * @memberof DepositPolicyType
     */
    description?: string;
    /**
     * Formatted Text Rule of the deposit policy.
     * @type {string}
     * @memberof DepositPolicyType
     */
    formattedRule?: string;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof DepositPolicyType
     */
    manual?: boolean;
    /**
     * Deposit Policy Code
     * @type {string}
     * @memberof DepositPolicyType
     */
    policyCode?: string;
    /**
     * Transaction Date associated with the deposit policy
     * @type {string}
     * @memberof DepositPolicyType
     */
    transactionDate?: string;
    /**
     *
     * @type {DepositCancelRevenueType}
     * @memberof DepositPolicyType
     */
    typeOfCharges?: DepositCancelRevenueType;
}
/**
 * Check if a given object implements the DepositPolicyType interface.
 */
export declare function instanceOfDepositPolicyType(value: object): boolean;
export declare function DepositPolicyTypeFromJSON(json: any): DepositPolicyType;
export declare function DepositPolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPolicyType;
export declare function DepositPolicyTypeToJSON(value?: DepositPolicyType | null): any;
