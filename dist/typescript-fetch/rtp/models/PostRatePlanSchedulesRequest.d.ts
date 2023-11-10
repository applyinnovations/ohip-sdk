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
import type { RatePlanScheduleDetailType } from './RatePlanScheduleDetailType';
import type { WarningsType } from './WarningsType';
/**
 *
 * @export
 * @interface PostRatePlanSchedulesRequest
 */
export interface PostRatePlanSchedulesRequest {
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PostRatePlanSchedulesRequest
     */
    hotelId?: string;
    /**
     *
     * @type {Links}
     * @memberof PostRatePlanSchedulesRequest
     */
    links?: Links;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof PostRatePlanSchedulesRequest
     */
    ratePlanCode?: string;
    /**
     * List of rate plan schedules to be created.
     * @type {Array<RatePlanScheduleDetailType>}
     * @memberof PostRatePlanSchedulesRequest
     */
    ratePlanScheduleList?: Array<RatePlanScheduleDetailType>;
    /**
     *
     * @type {WarningsType}
     * @memberof PostRatePlanSchedulesRequest
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the PostRatePlanSchedulesRequest interface.
 */
export declare function instanceOfPostRatePlanSchedulesRequest(value: object): boolean;
export declare function PostRatePlanSchedulesRequestFromJSON(json: any): PostRatePlanSchedulesRequest;
export declare function PostRatePlanSchedulesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRatePlanSchedulesRequest;
export declare function PostRatePlanSchedulesRequestToJSON(value?: PostRatePlanSchedulesRequest | null): any;
