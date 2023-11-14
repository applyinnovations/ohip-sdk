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
import type { ARBalanceType } from './ARBalanceType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DateRangeType } from './DateRangeType';
/**
 * Year information for an Year View.
 * @export
 * @interface ARYearViewType
 */
export interface ARYearViewType {
    /**
     *
     * @type {ARBalanceType}
     * @memberof ARYearViewType
     */
    balanceInfo?: ARBalanceType;
    /**
     *
     * @type {DateRangeType}
     * @memberof ARYearViewType
     */
    dateRange?: DateRangeType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof ARYearViewType
     */
    runningTotal?: CurrencyAmountType;
}
/**
 * Check if a given object implements the ARYearViewType interface.
 */
export declare function instanceOfARYearViewType(value: object): boolean;
export declare function ARYearViewTypeFromJSON(json: any): ARYearViewType;
export declare function ARYearViewTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARYearViewType;
export declare function ARYearViewTypeToJSON(value?: ARYearViewType | null): any;