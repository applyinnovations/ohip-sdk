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
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import type { DepositPolicyType } from './DepositPolicyType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * A deposit policy attached with the reservation.
 * @export
 * @interface ResDepositPolicyType
 */
export interface ResDepositPolicyType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ResDepositPolicyType
     */
    amountDue?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ResDepositPolicyType
     */
    amountPaid?: CurrencyAmountType;
    /**
     * Comments attached with a deposit.
     * @type {string}
     * @memberof ResDepositPolicyType
     */
    comments?: string;
    /**
     *
     * @type {DepositPolicyType}
     * @memberof ResDepositPolicyType
     */
    policy?: DepositPolicyType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ResDepositPolicyType
     */
    policyId?: UniqueIDType;
    /**
     *
     * @type {DepositCancelRevenueType}
     * @memberof ResDepositPolicyType
     */
    revenueType?: DepositCancelRevenueType;
}
/**
 * Check if a given object implements the ResDepositPolicyType interface.
 */
export declare function instanceOfResDepositPolicyType(value: object): boolean;
export declare function ResDepositPolicyTypeFromJSON(json: any): ResDepositPolicyType;
export declare function ResDepositPolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResDepositPolicyType;
export declare function ResDepositPolicyTypeToJSON(value?: ResDepositPolicyType | null): any;
