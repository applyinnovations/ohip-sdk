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
import type { RateByAgeBucketsType } from './RateByAgeBucketsType';
/**
 *
 * @export
 * @interface RateAmountsType
 */
export interface RateAmountsType {
    /**
     *
     * @type {number}
     * @memberof RateAmountsType
     */
    baseAmount?: number;
    /**
     * Rate amount for the extra child..
     * @type {number}
     * @memberof RateAmountsType
     */
    extraChildRate?: number;
    /**
     * Rate amount for each extra person.
     * @type {number}
     * @memberof RateAmountsType
     */
    extraPersonRate?: number;
    /**
     * Rate amount for five persons.
     * @type {number}
     * @memberof RateAmountsType
     */
    fivePersonsRate?: number;
    /**
     * Rate amount for four Children.
     * @type {number}
     * @memberof RateAmountsType
     */
    fourChildrenRate?: number;
    /**
     * Rate amount for four persons.
     * @type {number}
     * @memberof RateAmountsType
     */
    fourPersonsRate?: number;
    /**
     * Rate amount for one Child.
     * @type {number}
     * @memberof RateAmountsType
     */
    oneChildRate?: number;
    /**
     * Rate amount for one person.
     * @type {number}
     * @memberof RateAmountsType
     */
    onePersonRate?: number;
    /**
     *
     * @type {RateByAgeBucketsType}
     * @memberof RateAmountsType
     */
    rateByAgeBuckets?: RateByAgeBucketsType;
    /**
     * Rate amount for three Children.
     * @type {number}
     * @memberof RateAmountsType
     */
    threeChildrenRate?: number;
    /**
     * Rate amount for three persons.
     * @type {number}
     * @memberof RateAmountsType
     */
    threePersonsRate?: number;
    /**
     * Rate amount for two Children.
     * @type {number}
     * @memberof RateAmountsType
     */
    twoChildrenRate?: number;
    /**
     * Rate amount for two persons.
     * @type {number}
     * @memberof RateAmountsType
     */
    twoPersonsRate?: number;
}
/**
 * Check if a given object implements the RateAmountsType interface.
 */
export declare function instanceOfRateAmountsType(value: object): boolean;
export declare function RateAmountsTypeFromJSON(json: any): RateAmountsType;
export declare function RateAmountsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateAmountsType;
export declare function RateAmountsTypeToJSON(value?: RateAmountsType | null): any;
