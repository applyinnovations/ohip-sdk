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
import type { RatePlanMasterInfoType } from './RatePlanMasterInfoType';
import type { RatePlanScheduleListType } from './RatePlanScheduleListType';
import type { WarningsType } from './WarningsType';
/**
 * Response object to fetch rate plan schedules.
 * @export
 * @interface RatePlanSchedulesInfo
 */
export interface RatePlanSchedulesInfo {
    /**
     *
     * @type {Links}
     * @memberof RatePlanSchedulesInfo
     */
    links?: Links;
    /**
     *
     * @type {RatePlanMasterInfoType}
     * @memberof RatePlanSchedulesInfo
     */
    ratePlanMasterInfo?: RatePlanMasterInfoType;
    /**
     *
     * @type {RatePlanScheduleListType}
     * @memberof RatePlanSchedulesInfo
     */
    ratePlanScheduleList?: RatePlanScheduleListType;
    /**
     *
     * @type {WarningsType}
     * @memberof RatePlanSchedulesInfo
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the RatePlanSchedulesInfo interface.
 */
export declare function instanceOfRatePlanSchedulesInfo(value: object): boolean;
export declare function RatePlanSchedulesInfoFromJSON(json: any): RatePlanSchedulesInfo;
export declare function RatePlanSchedulesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatePlanSchedulesInfo;
export declare function RatePlanSchedulesInfoToJSON(value?: RatePlanSchedulesInfo | null): any;
