/**
 * Opera Cloud Rate Plan Asynchronous Service API
 * APIs catering to the Rate Plan asynchronous related functionality in a hotel.  This includes adding/updating daily rates&apos; pricing schedules and best available rates by day or length of stay. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Unique identifier for hurdle rate.
 * @export
 * @interface HurdleRateType
 */
export interface HurdleRateType {
    /**
     * Maximum number of rooms to sell for which the delta is applicable to be aded to hurdle rate.
     * @type {number}
     * @memberof HurdleRateType
     */
    ceiling?: number;
    /**
     * Defines the amount to be added to hurdle rate for each additional rooms sold up to the ceiling.
     * @type {number}
     * @memberof HurdleRateType
     */
    delta?: number;
    /**
     * Defines the amount to be reached before rate code or room type is made available.
     * @type {number}
     * @memberof HurdleRateType
     */
    hurdle?: number;
    /**
     * Hurdle date for which the hurdle rate is scheduled.
     * @type {string}
     * @memberof HurdleRateType
     */
    hurdleDate?: string;
    /**
     * Length of stay for which the hurdle rate applies to.
     * @type {number}
     * @memberof HurdleRateType
     */
    lengthOfStay?: number;
    /**
     * Maximum number of rooms to sell.
     * @type {number}
     * @memberof HurdleRateType
     */
    maximumSolds?: number;
    /**
     * Specifies whether to override hurdle rate or not.
     * @type {boolean}
     * @memberof HurdleRateType
     */
    override?: boolean;
    /**
     * Internal room category of the room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    roomCategory?: string;
    /**
     * Room type for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    roomType?: string;
    /**
     * Defines the actual number of rooms sold.
     * @type {number}
     * @memberof HurdleRateType
     */
    roomsSold?: number;
    /**
     * Yield category for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    yieldCategory?: string;
    /**
     * Yield market code for which the hurdle rate applies to.
     * @type {string}
     * @memberof HurdleRateType
     */
    yieldMarketCode?: string;
}
/**
 * Check if a given object implements the HurdleRateType interface.
 */
export declare function instanceOfHurdleRateType(value: object): boolean;
export declare function HurdleRateTypeFromJSON(json: any): HurdleRateType;
export declare function HurdleRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HurdleRateType;
export declare function HurdleRateTypeToJSON(value?: HurdleRateType | null): any;
