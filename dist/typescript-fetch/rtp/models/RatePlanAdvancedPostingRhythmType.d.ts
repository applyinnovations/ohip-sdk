/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Posting rhythm details for a rate plan containing Buy x Get y functionality.
 * @export
 * @interface RatePlanAdvancedPostingRhythmType
 */
export interface RatePlanAdvancedPostingRhythmType {
    /**
     * Date which the posting rhythm becomes applicable.
     * @type {string}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    beginSellDate?: string;
    /**
     * Code identifying the posting rhythm within the rate plan.
     * @type {string}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    code?: string;
    /**
     * Description of the posting rhythm offer.
     * @type {string}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    description?: string;
    /**
     * The number of free nights which are eligible when the number of required paid nights has been met.
     * @type {number}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    eligibleFreeNights?: number;
    /**
     * Date which the posting rhythm ceases to be applicable.
     * @type {string}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    endSellDate?: string;
    /**
     * Indicates if the posting rhythm offer can be repeated more than once within a specific sell segment of the reservation.
     * @type {boolean}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    repeatWithinSellSegment?: boolean;
    /**
     * Indicates if the posting rhythm offer can be repeated more than once during the entire stay.
     * @type {boolean}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    repeatWithinStay?: boolean;
    /**
     * The number of nights which are required to be paid in order to receive free nights.
     * @type {number}
     * @memberof RatePlanAdvancedPostingRhythmType
     */
    requiredPaidNights?: number;
}
/**
 * Check if a given object implements the RatePlanAdvancedPostingRhythmType interface.
 */
export declare function instanceOfRatePlanAdvancedPostingRhythmType(value: object): boolean;
export declare function RatePlanAdvancedPostingRhythmTypeFromJSON(json: any): RatePlanAdvancedPostingRhythmType;
export declare function RatePlanAdvancedPostingRhythmTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanAdvancedPostingRhythmType;
export declare function RatePlanAdvancedPostingRhythmTypeToJSON(value?: RatePlanAdvancedPostingRhythmType | null): any;