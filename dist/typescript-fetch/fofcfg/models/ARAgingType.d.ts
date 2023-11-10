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
import type { DateRangeType } from './DateRangeType';
/**
 * Aging information for an Aging Bucket.
 * @export
 * @interface ARAgingType
 */
export interface ARAgingType {
    /**
     * The bucket description in terms of days. Example : 0-31 days
     * @type {string}
     * @memberof ARAgingType
     */
    agingBucketRange?: string;
    /**
     *
     * @type {DateRangeType}
     * @memberof ARAgingType
     */
    agingDate?: DateRangeType;
    /**
     * The end number of days for this Aging bucket. Example: For the range 31-60 days, this would be 60.
     * @type {number}
     * @memberof ARAgingType
     */
    agingEndDay?: number;
    /**
     * The start number of days for this Aging bucket. Example: For the range 31-60 days, this would be 31.
     * @type {number}
     * @memberof ARAgingType
     */
    agingStartDay?: number;
    /**
     *
     * @type {ARBalanceType}
     * @memberof ARAgingType
     */
    balanceInfo?: ARBalanceType;
    /**
     * The sequence for display.
     * @type {number}
     * @memberof ARAgingType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the ARAgingType interface.
 */
export declare function instanceOfARAgingType(value: object): boolean;
export declare function ARAgingTypeFromJSON(json: any): ARAgingType;
export declare function ARAgingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARAgingType;
export declare function ARAgingTypeToJSON(value?: ARAgingType | null): any;
