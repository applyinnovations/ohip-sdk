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
import type { ActivityId } from './ActivityId';
import type { TimeSpanType } from './TimeSpanType';
/**
 * A recently used activity details.
 * @export
 * @interface RecentlyAccessedActivityType
 */
export interface RecentlyAccessedActivityType {
    /**
     * The date the record was accessed.
     * @type {string}
     * @memberof RecentlyAccessedActivityType
     */
    accessDate?: string;
    /**
     * Unique identifier for the Activity.
     * @type {Array<ActivityId>}
     * @memberof RecentlyAccessedActivityType
     */
    activityIdList?: Array<ActivityId>;
    /**
     * Owner Code of the Activity.
     * @type {string}
     * @memberof RecentlyAccessedActivityType
     */
    activityOwnerCode?: string;
    /**
     * Description of the ActivityType.
     * @type {string}
     * @memberof RecentlyAccessedActivityType
     */
    activityTypeDescription?: string;
    /**
     * Hotel Code of the Activity.
     * @type {string}
     * @memberof RecentlyAccessedActivityType
     */
    hotelId?: string;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RecentlyAccessedActivityType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the RecentlyAccessedActivityType interface.
 */
export declare function instanceOfRecentlyAccessedActivityType(value: object): boolean;
export declare function RecentlyAccessedActivityTypeFromJSON(json: any): RecentlyAccessedActivityType;
export declare function RecentlyAccessedActivityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RecentlyAccessedActivityType;
export declare function RecentlyAccessedActivityTypeToJSON(value?: RecentlyAccessedActivityType | null): any;
