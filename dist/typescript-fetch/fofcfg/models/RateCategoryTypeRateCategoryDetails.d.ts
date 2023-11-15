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
 * Begin date for the rate category.
 * @export
 * @interface RateCategoryTypeRateCategoryDetails
 */
export interface RateCategoryTypeRateCategoryDetails {
    /**
     * Begin date for the rate category.
     * @type {string}
     * @memberof RateCategoryTypeRateCategoryDetails
     */
    beginDate?: string;
    /**
     * Description of rate category.
     * @type {string}
     * @memberof RateCategoryTypeRateCategoryDetails
     */
    description?: string;
    /**
     * End date for the rate category.
     * @type {string}
     * @memberof RateCategoryTypeRateCategoryDetails
     */
    endDate?: string;
    /**
     * Active date of the room category.
     * @type {string}
     * @memberof RateCategoryTypeRateCategoryDetails
     */
    rateClass?: string;
    /**
     * Indicates rate category sell sequence.
     * @type {number}
     * @memberof RateCategoryTypeRateCategoryDetails
     */
    sellSequence?: number;
}
/**
 * Check if a given object implements the RateCategoryTypeRateCategoryDetails interface.
 */
export declare function instanceOfRateCategoryTypeRateCategoryDetails(value: object): boolean;
export declare function RateCategoryTypeRateCategoryDetailsFromJSON(json: any): RateCategoryTypeRateCategoryDetails;
export declare function RateCategoryTypeRateCategoryDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateCategoryTypeRateCategoryDetails;
export declare function RateCategoryTypeRateCategoryDetailsToJSON(value?: RateCategoryTypeRateCategoryDetails | null): any;
