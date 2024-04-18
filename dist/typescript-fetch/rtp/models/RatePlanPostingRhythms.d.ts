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
import type { GenericHotelCodeCodeType } from './GenericHotelCodeCodeType';
import type { InstanceLink } from './InstanceLink';
import type { RatePlanAdvancedPostingRhythmType } from './RatePlanAdvancedPostingRhythmType';
import type { WarningType } from './WarningType';
/**
 * Request object for creating new rate plan advanced posting rhythms.
 * @export
 * @interface RatePlanPostingRhythms
 */
export interface RatePlanPostingRhythms {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof RatePlanPostingRhythms
     */
    links?: Array<InstanceLink>;
    /**
     * Posting rhythm details for a rate plan containing Buy x Get y functionality.
     * @type {Array<RatePlanAdvancedPostingRhythmType>}
     * @memberof RatePlanPostingRhythms
     */
    postingRhythms?: Array<RatePlanAdvancedPostingRhythmType>;
    /**
     *
     * @type {GenericHotelCodeCodeType}
     * @memberof RatePlanPostingRhythms
     */
    ratePlan?: GenericHotelCodeCodeType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RatePlanPostingRhythms
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the RatePlanPostingRhythms interface.
 */
export declare function instanceOfRatePlanPostingRhythms(value: object): boolean;
export declare function RatePlanPostingRhythmsFromJSON(json: any): RatePlanPostingRhythms;
export declare function RatePlanPostingRhythmsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanPostingRhythms;
export declare function RatePlanPostingRhythmsToJSON(value?: RatePlanPostingRhythms | null): any;