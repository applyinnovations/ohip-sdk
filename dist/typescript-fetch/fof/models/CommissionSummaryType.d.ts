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
/**
 * Summary of the commission payment information totaled for all agents/sources.
 * @export
 * @interface CommissionSummaryType
 */
export interface CommissionSummaryType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CommissionSummaryType
     */
    aR?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CommissionSummaryType
     */
    onHold?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CommissionSummaryType
     */
    potential?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof CommissionSummaryType
     */
    toBePaid?: CurrencyAmountType;
}
/**
 * Check if a given object implements the CommissionSummaryType interface.
 */
export declare function instanceOfCommissionSummaryType(value: object): boolean;
export declare function CommissionSummaryTypeFromJSON(json: any): CommissionSummaryType;
export declare function CommissionSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionSummaryType;
export declare function CommissionSummaryTypeToJSON(value?: CommissionSummaryType | null): any;
