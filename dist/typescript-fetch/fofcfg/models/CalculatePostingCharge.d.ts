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
import type { GenerateLevelType } from './GenerateLevelType';
import type { PostingBucket } from './PostingBucket';
/**
 * Corresponds to each charge that will be posted against the transaction code based from the test criteria.
 * @export
 * @interface CalculatePostingCharge
 */
export interface CalculatePostingCharge {
    /**
     * The amount that will be posted against the transaction code.
     * @type {number}
     * @memberof CalculatePostingCharge
     */
    amount?: number;
    /**
     * Indicates whether it is the base posting.
     * @type {boolean}
     * @memberof CalculatePostingCharge
     */
    basePosting?: boolean;
    /**
     *
     * @type {PostingBucket}
     * @memberof CalculatePostingCharge
     */
    bucket?: PostingBucket;
    /**
     * Description of the transaction code.
     * @type {string}
     * @memberof CalculatePostingCharge
     */
    description?: string;
    /**
     * The formula that is used to calculate the generates.
     * @type {string}
     * @memberof CalculatePostingCharge
     */
    formula?: string;
    /**
     * Hotel code of the associated transaction code.
     * @type {string}
     * @memberof CalculatePostingCharge
     */
    hotelId?: string;
    /**
     *
     * @type {GenerateLevelType}
     * @memberof CalculatePostingCharge
     */
    level?: GenerateLevelType;
    /**
     * The order in which the charge will be posted. The base posting will always be 0 (zero) followed by generates associated in order of which they were created.
     * @type {number}
     * @memberof CalculatePostingCharge
     */
    sequence?: number;
    /**
     * The associated transaction code of the posting.
     * @type {string}
     * @memberof CalculatePostingCharge
     */
    transactionCode?: string;
}
/**
 * Check if a given object implements the CalculatePostingCharge interface.
 */
export declare function instanceOfCalculatePostingCharge(value: object): boolean;
export declare function CalculatePostingChargeFromJSON(json: any): CalculatePostingCharge;
export declare function CalculatePostingChargeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalculatePostingCharge;
export declare function CalculatePostingChargeToJSON(value?: CalculatePostingCharge | null): any;