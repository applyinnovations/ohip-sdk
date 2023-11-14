/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityLogType } from './ActivityLogType';
/**
 *
 * @export
 * @interface ActivityLogListType
 */
export interface ActivityLogListType {
    /**
     *
     * @type {Array<ActivityLogType>}
     * @memberof ActivityLogListType
     */
    activityLog?: Array<ActivityLogType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ActivityLogListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ActivityLogListType
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ActivityLogListType
     */
    limit?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ActivityLogListType
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ActivityLogListType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ActivityLogListType interface.
 */
export declare function instanceOfActivityLogListType(value: object): boolean;
export declare function ActivityLogListTypeFromJSON(json: any): ActivityLogListType;
export declare function ActivityLogListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivityLogListType;
export declare function ActivityLogListTypeToJSON(value?: ActivityLogListType | null): any;