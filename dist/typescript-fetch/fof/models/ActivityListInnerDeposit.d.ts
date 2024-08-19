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
 * A monetary value expressed with a currency code.
 * @export
 * @interface ActivityListInnerDeposit
 */
export interface ActivityListInnerDeposit {
    /**
     * A monetary amount.
     * @type {number}
     * @memberof ActivityListInnerDeposit
     */
    amount?: number;
    /**
     *
     * @type {string}
     * @memberof ActivityListInnerDeposit
     */
    collectedBy?: ActivityListInnerDepositCollectedByEnum;
    /**
     * Provides a currency code to reflect the currency in which an amount may be expressed.
     * @type {string}
     * @memberof ActivityListInnerDeposit
     */
    currencyCode?: string;
}
/**
 * @export
 */
export declare const ActivityListInnerDepositCollectedByEnum: {
    readonly Vendor: "Vendor";
    readonly Agent: "Agent";
    readonly Other: "Other";
};
export type ActivityListInnerDepositCollectedByEnum = typeof ActivityListInnerDepositCollectedByEnum[keyof typeof ActivityListInnerDepositCollectedByEnum];
/**
 * Check if a given object implements the ActivityListInnerDeposit interface.
 */
export declare function instanceOfActivityListInnerDeposit(value: object): boolean;
export declare function ActivityListInnerDepositFromJSON(json: any): ActivityListInnerDeposit;
export declare function ActivityListInnerDepositFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityListInnerDeposit;
export declare function ActivityListInnerDepositToJSON(value?: ActivityListInnerDeposit | null): any;
