/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { FacilityTaskType } from './FacilityTaskType';
import type { GuestHousekeepingServiceRequestType } from './GuestHousekeepingServiceRequestType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
/**
 * Holds housekeeping turndown service information for the room.
 * @export
 * @interface ResHousekeepingType
 */
export interface ResHousekeepingType {
    /**
     * This will set/fetch cleaning priority for room.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    cleaningPriority?: boolean;
    /**
     * Expected Start Time for housekeeping task(s).
     * @type {string}
     * @memberof ResHousekeepingType
     */
    expectedServiceTime?: string;
    /**
     *
     * @type {FacilityTaskType}
     * @memberof ResHousekeepingType
     */
    facilityTaskInfo?: FacilityTaskType;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof ResHousekeepingType
     */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
    /**
     * Turndown instructions for the room.
     * @type {string}
     * @memberof ResHousekeepingType
     */
    instructions?: string;
    /**
     * Indicates if a linen change is necessary.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    linenChange?: boolean;
    /**
     * This is the Turndown room service time.
     * @type {string}
     * @memberof ResHousekeepingType
     */
    serviceTime?: string;
    /**
     *
     * @type {GuestHousekeepingServiceRequestType}
     * @memberof ResHousekeepingType
     */
    status?: GuestHousekeepingServiceRequestType;
    /**
     * Indicates whether guest wants turndown facility or not.
     * @type {boolean}
     * @memberof ResHousekeepingType
     */
    turndownRequested?: boolean;
}
/**
 * Check if a given object implements the ResHousekeepingType interface.
 */
export declare function instanceOfResHousekeepingType(value: object): boolean;
export declare function ResHousekeepingTypeFromJSON(json: any): ResHousekeepingType;
export declare function ResHousekeepingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResHousekeepingType;
export declare function ResHousekeepingTypeToJSON(value?: ResHousekeepingType | null): any;
