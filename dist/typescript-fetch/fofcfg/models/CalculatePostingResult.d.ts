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
import type { CalculatePostingCharge } from './CalculatePostingCharge';
/**
 * List of charges that will be posted against the transaction code based from the test criteria.
 * @export
 * @interface CalculatePostingResult
 */
export interface CalculatePostingResult {
    /**
     * Charges that will be posted based from the criteria defined.
     * @type {Array<CalculatePostingCharge>}
     * @memberof CalculatePostingResult
     */
    charges?: Array<CalculatePostingCharge>;
    /**
     * The full amount that would be posted.
     * @type {number}
     * @memberof CalculatePostingResult
     */
    totalAmount?: number;
}
/**
 * Check if a given object implements the CalculatePostingResult interface.
 */
export declare function instanceOfCalculatePostingResult(value: object): boolean;
export declare function CalculatePostingResultFromJSON(json: any): CalculatePostingResult;
export declare function CalculatePostingResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalculatePostingResult;
export declare function CalculatePostingResultToJSON(value?: CalculatePostingResult | null): any;
