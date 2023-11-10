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
import type { HotelPackageSchedulePriceType } from './HotelPackageSchedulePriceType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * A Hotel Package Schedule.
 * @export
 * @interface ConfigPackageScheduleType
 */
export interface ConfigPackageScheduleType {
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof ConfigPackageScheduleType
     */
    end?: Date;
    /**
     * Maximum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    maxNights?: number;
    /**
     * Maximum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    maxPersons?: number;
    /**
     * Minimum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    minNights?: number;
    /**
     * Minimum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    minPersons?: number;
    /**
     * New maximum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMaxNights?: number;
    /**
     * New maximum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMaxPersons?: number;
    /**
     * New minimum number of nights that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMinNights?: number;
    /**
     * New minimum number of persons that are required on a reservation to avail the package.
     * @type {number}
     * @memberof ConfigPackageScheduleType
     */
    newMinPersons?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof ConfigPackageScheduleType
     */
    newTimeSpan?: TimeSpanType;
    /**
     * The rate plan code specific prices for the package (if any).
     * @type {string}
     * @memberof ConfigPackageScheduleType
     */
    ratePlanCode?: string;
    /**
     * Collection of price schedule for the package.
     * @type {Array<HotelPackageSchedulePriceType>}
     * @memberof ConfigPackageScheduleType
     */
    schedulePrices?: Array<HotelPackageSchedulePriceType>;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof ConfigPackageScheduleType
     */
    start?: Date;
}
/**
 * Check if a given object implements the ConfigPackageScheduleType interface.
 */
export declare function instanceOfConfigPackageScheduleType(value: object): boolean;
export declare function ConfigPackageScheduleTypeFromJSON(json: any): ConfigPackageScheduleType;
export declare function ConfigPackageScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigPackageScheduleType;
export declare function ConfigPackageScheduleTypeToJSON(value?: ConfigPackageScheduleType | null): any;
