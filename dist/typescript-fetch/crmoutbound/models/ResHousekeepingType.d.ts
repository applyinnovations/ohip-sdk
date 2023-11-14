/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FacilityTaskType } from './FacilityTaskType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
/**
 * Holds housekeeping turndown service information for the room.
 * @export
 * @interface ResHousekeepingType
 */
export interface ResHousekeepingType {
    /**
     * Turndown instructions for the room.
     * @type {string}
     * @memberof ResHousekeepingType
     */
    instructions?: string;
    /**
     *
     * @type {FacilityTaskType}
     * @memberof ResHousekeepingType
     */
    facilityTaskInfo?: FacilityTaskType;
    /**
     * Indicates if a linen change is necessary.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    linenChange?: boolean;
    /**
     * Indicates whether guest wants turndown facility or not.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    turndownRequested?: boolean;
    /**
     * This is the Turndown room service time.
     * @type {Date}
     * @memberof ResHousekeepingType
     */
    serviceTime?: Date;
    /**
     * Expected Start Time for housekeeping task(s).
     * @type {string}
     * @memberof ResHousekeepingType
     */
    expectedServiceTime?: string;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof ResHousekeepingType
     */
    roomStatus?: HousekeepingRoomStatusType;
}
/**
 * Check if a given object implements the ResHousekeepingType interface.
 */
export declare function instanceOfResHousekeepingType(value: object): boolean;
export declare function ResHousekeepingTypeFromJSON(json: any): ResHousekeepingType;
export declare function ResHousekeepingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResHousekeepingType;
export declare function ResHousekeepingTypeToJSON(value?: ResHousekeepingType | null): any;