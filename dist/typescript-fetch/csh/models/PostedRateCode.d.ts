/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { Links } from './Links';
import type { SummaryPostingsType } from './SummaryPostingsType';
import type { WarningsType } from './WarningsType';
/**
 * Response for the operation that posts a Rate Code amount on the reservation.
 * @export
 * @interface PostedRateCode
 */
export interface PostedRateCode {
    /**
     *
     * @type {Links}
     * @memberof PostedRateCode
     */
    links?: Links;
    /**
     *
     * @type {SummaryPostingsType}
     * @memberof PostedRateCode
     */
    postings?: SummaryPostingsType;
    /**
     *
     * @type {WarningsType}
     * @memberof PostedRateCode
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostedRateCode interface.
 */
export declare function instanceOfPostedRateCode(value: object): boolean;
export declare function PostedRateCodeFromJSON(json: any): PostedRateCode;
export declare function PostedRateCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostedRateCode;
export declare function PostedRateCodeToJSON(value?: PostedRateCode | null): any;