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
import type { ApplicationUserType } from './ApplicationUserType';
import type { CashierTypeType } from './CashierTypeType';
import type { CashierTypeUsageInfo } from './CashierTypeUsageInfo';
/**
 * Cashiers Information.
 * @export
 * @interface CashierType
 */
export interface CashierType {
    /**
     * List of application users associated with the cashier
     * @type {Array<ApplicationUserType>}
     * @memberof CashierType
     */
    appUsers?: Array<ApplicationUserType>;
    /**
     * User(s) assigned to the cashier.
     * @type {string}
     * @memberof CashierType
     */
    attachedUser?: string;
    /**
     * Numeric code for cashier ID.
     * @type {number}
     * @memberof CashierType
     */
    cashierId?: number;
    /**
     *
     * @type {CashierTypeType}
     * @memberof CashierType
     */
    cashierType?: CashierTypeType;
    /**
     * The currency code used by the hotel that the cashier belongs to.
     * @type {string}
     * @memberof CashierType
     */
    currencyCode?: string;
    /**
     * Selected if the cashier is allowed to drop below or above the required drop amount.
     * @type {boolean}
     * @memberof CashierType
     */
    floatOverShort?: boolean;
    /**
     * Indicator that tells whether the cashier is active or not.
     * @type {boolean}
     * @memberof CashierType
     */
    inactive?: boolean;
    /**
     * Indicator that this cashier is the one to be used by Kiosk Partner to carry out postings and payments for the guest.
     * @type {boolean}
     * @memberof CashierType
     */
    kiosk?: boolean;
    /**
     * Name assigned to the cashier.
     * @type {string}
     * @memberof CashierType
     */
    name?: string;
    /**
     * Indicator that tells whether the cashier is open or not.
     * @type {boolean}
     * @memberof CashierType
     */
    open?: boolean;
    /**
     * The Starting Amount in the Cashier drawer.
     * @type {number}
     * @memberof CashierType
     */
    startingAmount?: number;
    /**
     *
     * @type {CashierTypeUsageInfo}
     * @memberof CashierType
     */
    usageInfo?: CashierTypeUsageInfo;
}
/**
 * Check if a given object implements the CashierType interface.
 */
export declare function instanceOfCashierType(value: object): boolean;
export declare function CashierTypeFromJSON(json: any): CashierType;
export declare function CashierTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CashierType;
export declare function CashierTypeToJSON(value?: CashierType | null): any;