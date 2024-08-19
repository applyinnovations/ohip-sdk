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
import type { StrategyRestrictionStatusesType } from './StrategyRestrictionStatusesType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
/**
 * The Rate strategy restriction details.
 * @export
 * @interface StrategyRestrictionType
 */
export interface StrategyRestrictionType {
    /**
     * Number of rooms for this room type.
     * @type {number}
     * @memberof StrategyRestrictionType
     */
    numberOfRooms?: number;
    /**
     * Rate category for the strategy.
     * @type {string}
     * @memberof StrategyRestrictionType
     */
    rateCategory?: string;
    /**
     * Rate class for the strategy.
     * @type {string}
     * @memberof StrategyRestrictionType
     */
    rateClass?: string;
    /**
     * Rate code for the strategy.
     * @type {string}
     * @memberof StrategyRestrictionType
     */
    rateCode?: string;
    /**
     *
     * @type {TimeSpanDaysOfWeekType}
     * @memberof StrategyRestrictionType
     */
    restrictionRange?: TimeSpanDaysOfWeekType;
    /**
     * Room class for the strategy.
     * @type {string}
     * @memberof StrategyRestrictionType
     */
    roomClass?: string;
    /**
     * Room Type for the strategy.
     * @type {string}
     * @memberof StrategyRestrictionType
     */
    roomType?: string;
    /**
     *
     * @type {StrategyRestrictionStatusesType}
     * @memberof StrategyRestrictionType
     */
    status?: StrategyRestrictionStatusesType;
    /**
     * Defines restriction in conjunction with Status. Value must be specified for Status MinimumStayThrough, MaximumStayThrough, MinimumLengthOfStay, MaximumLengthOfStay, MinimumAdvanceBooking, MaximumAdvanceBooking.
     * @type {number}
     * @memberof StrategyRestrictionType
     */
    unit?: number;
}
/**
 * Check if a given object implements the StrategyRestrictionType interface.
 */
export declare function instanceOfStrategyRestrictionType(value: object): boolean;
export declare function StrategyRestrictionTypeFromJSON(json: any): StrategyRestrictionType;
export declare function StrategyRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StrategyRestrictionType;
export declare function StrategyRestrictionTypeToJSON(value?: StrategyRestrictionType | null): any;
