/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ProfileDiscountType } from './ProfileDiscountType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Details of Negotiated rate.
 * @export
 * @interface NegRateAccessType
 */
export interface NegRateAccessType {
    /**
     * Commission code for the negotiated rate.
     * @type {string}
     * @memberof NegRateAccessType
     */
    commissionCode?: string;
    /**
     * List of discounts for the negotiated rate.
     * @type {Array<ProfileDiscountType>}
     * @memberof NegRateAccessType
     */
    discounts?: Array<ProfileDiscountType>;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof NegRateAccessType
     */
    end?: string;
    /**
     * Sequence for the negotiated rate.
     * @type {number}
     * @memberof NegRateAccessType
     */
    negotiatedRateOrder?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof NegRateAccessType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof NegRateAccessType
     */
    start?: string;
}
/**
 * Check if a given object implements the NegRateAccessType interface.
 */
export declare function instanceOfNegRateAccessType(value: object): boolean;
export declare function NegRateAccessTypeFromJSON(json: any): NegRateAccessType;
export declare function NegRateAccessTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NegRateAccessType;
export declare function NegRateAccessTypeToJSON(value?: NegRateAccessType | null): any;
