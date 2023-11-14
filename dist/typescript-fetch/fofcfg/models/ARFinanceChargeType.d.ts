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
/**
 * Finance charges will allow user to post a flat amount or percentage finance charge based on user-defined cycle.
 * @export
 * @interface ARFinanceChargeType
 */
export interface ARFinanceChargeType {
    /**
     * Number of days after which an outstanding balance triggers
     * @type {number}
     * @memberof ARFinanceChargeType
     */
    daysOlderThan?: number;
    /**
     * Determines how the finance charge will be applied to outstanding balance valid values are F, P
     * @type {string}
     * @memberof ARFinanceChargeType
     */
    financeCharge?: string;
    /**
     * Amount or percentage value
     * @type {number}
     * @memberof ARFinanceChargeType
     */
    financeChargeValue?: number;
    /**
     * If true unallocated payments are subtracted from the outstanding balances before finance charge is calculated
     * @type {boolean}
     * @memberof ARFinanceChargeType
     */
    includeUnallocatedPayments?: boolean;
    /**
     * Day of the month when the end of day procedure should run
     * @type {number}
     * @memberof ARFinanceChargeType
     */
    postOnDay?: number;
}
/**
 * Check if a given object implements the ARFinanceChargeType interface.
 */
export declare function instanceOfARFinanceChargeType(value: object): boolean;
export declare function ARFinanceChargeTypeFromJSON(json: any): ARFinanceChargeType;
export declare function ARFinanceChargeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARFinanceChargeType;
export declare function ARFinanceChargeTypeToJSON(value?: ARFinanceChargeType | null): any;