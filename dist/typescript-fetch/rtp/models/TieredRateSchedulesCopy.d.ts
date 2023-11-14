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
import type { Links } from './Links';
import type { RateOffsetType } from './RateOffsetType';
import type { UniqueIDListType } from './UniqueIDListType';
import type { WarningsType } from './WarningsType';
/**
 * Request object to copy the specified tier 1 rate schedules into the specified tiers.
 * @export
 * @interface TieredRateSchedulesCopy
 */
export interface TieredRateSchedulesCopy {
    /**
     *
     * @type {RateOffsetType}
     * @memberof TieredRateSchedulesCopy
     */
    adultOffset?: RateOffsetType;
    /**
     *
     * @type {RateOffsetType}
     * @memberof TieredRateSchedulesCopy
     */
    childOffset?: RateOffsetType;
    /**
     *
     * @type {number}
     * @memberof TieredRateSchedulesCopy
     */
    copyFromTierId?: number;
    /**
     *
     * @type {number}
     * @memberof TieredRateSchedulesCopy
     */
    copyToTierId?: number;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof TieredRateSchedulesCopy
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof TieredRateSchedulesCopy
     */
    links?: Links;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof TieredRateSchedulesCopy
     */
    ratePlanCode?: string;
    /**
     *
     * @type {UniqueIDListType}
     * @memberof TieredRateSchedulesCopy
     */
    ratePlanSchedulesIdList?: UniqueIDListType;
    /**
     *
     * @type {WarningsType}
     * @memberof TieredRateSchedulesCopy
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TieredRateSchedulesCopy interface.
 */
export declare function instanceOfTieredRateSchedulesCopy(value: object): boolean;
export declare function TieredRateSchedulesCopyFromJSON(json: any): TieredRateSchedulesCopy;
export declare function TieredRateSchedulesCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TieredRateSchedulesCopy;
export declare function TieredRateSchedulesCopyToJSON(value?: TieredRateSchedulesCopy | null): any;