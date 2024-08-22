/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ActivityDetailsType } from './ActivityDetailsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface ActivitiesInfo
 */
export interface ActivitiesInfo {
    /**
     * Activity information in detail.
     * @type {Array<ActivityDetailsType>}
     * @memberof ActivitiesInfo
     */
    activitiesInformation?: Array<ActivityDetailsType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ActivitiesInfo
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ActivitiesInfo
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof ActivitiesInfo
     */
    limit?: number;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ActivitiesInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof ActivitiesInfo
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof ActivitiesInfo
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ActivitiesInfo
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ActivitiesInfo
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ActivitiesInfo interface.
 */
export declare function instanceOfActivitiesInfo(value: object): boolean;
export declare function ActivitiesInfoFromJSON(json: any): ActivitiesInfo;
export declare function ActivitiesInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ActivitiesInfo;
export declare function ActivitiesInfoToJSON(value?: ActivitiesInfo | null): any;
