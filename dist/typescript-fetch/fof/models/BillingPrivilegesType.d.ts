/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * This stores the information for Bed Tax Reporting. Mainly used in Maldives.
 * @export
 * @interface BillingPrivilegesType
 */
export interface BillingPrivilegesType {
    /**
     * Indicated if a new reservation should be created and automatically checked in whenever the room is checked out. Available for pseudo room types only.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    allowAutoCheckin?: boolean;
    /**
     * Indicates if the is a candidate for auto folio settlement.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    autoSettlement?: boolean;
    /**
     * The interval of days between each auto folio settlement.
     * @type {number}
     * @memberof BillingPrivilegesType
     */
    autoSettlementFreq?: number;
    /**
     * The folio settlement type for auto folio settlement.
     * @type {string}
     * @memberof BillingPrivilegesType
     */
    autoSettlementType?: string;
    /**
     * Indicates if the reservation will be included in the Automatic Credit Limit Overages process and also be listed in the Credit Limit Overages screen results.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    creditLimitAutoPay?: boolean;
    /**
     * If Direct bill is authorized this will hold User ID who authorized it.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    directBillAuthorized?: boolean;
    /**
     * Date when folio was closed. This works with PostStayCharging flag.
     * @type {string}
     * @memberof BillingPrivilegesType
     */
    folioCloseDate?: string;
    /**
     * Indicates if the reservation has charging privileges after checkout.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    postStayCharging?: boolean;
    /**
     * Flag used by interface program during check in.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    postingRestriction?: boolean;
    /**
     * Indicates if the reservation has charging privileges before arrival.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    preStayCharging?: boolean;
    /**
     * Indicates if the guest is scheduled for automatic check out.
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    scheduledCheckout?: boolean;
    /**
     * Time of automatic check out if guest is schedule for automatic check out.
     * @type {string}
     * @memberof BillingPrivilegesType
     */
    scheduledCheckoutTime?: string;
    /**
     * Indicates if the guest can do video checkout
     * @type {boolean}
     * @memberof BillingPrivilegesType
     */
    videoCheckout?: boolean;
}
/**
 * Check if a given object implements the BillingPrivilegesType interface.
 */
export declare function instanceOfBillingPrivilegesType(value: object): boolean;
export declare function BillingPrivilegesTypeFromJSON(json: any): BillingPrivilegesType;
export declare function BillingPrivilegesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BillingPrivilegesType;
export declare function BillingPrivilegesTypeToJSON(value?: BillingPrivilegesType | null): any;
