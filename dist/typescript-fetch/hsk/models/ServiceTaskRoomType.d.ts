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
import type { CodeListType } from './CodeListType';
import type { FrontOfficeRoomStatusType } from './FrontOfficeRoomStatusType';
import type { HousekeepingRoomStatusType } from './HousekeepingRoomStatusType';
/**
 * Criteria for servicing a task room.
 * @export
 * @interface ServiceTaskRoomType
 */
export interface ServiceTaskRoomType {
    /**
     * The allotted minutes for completing the task.
     * @type {number}
     * @memberof ServiceTaskRoomType
     */
    allottedMinutes?: number;
    /**
     * The Attendant ID who is currently servicing the room.
     * @type {string}
     * @memberof ServiceTaskRoomType
     */
    attendant?: string;
    /**
     *
     * @type {FrontOfficeRoomStatusType}
     * @memberof ServiceTaskRoomType
     */
    frontOfficeStatus?: FrontOfficeRoomStatusType;
    /**
     * Property where the task sheet exists.
     * @type {string}
     * @memberof ServiceTaskRoomType
     */
    hotelId?: string;
    /**
     *
     * @type {HousekeepingRoomStatusType}
     * @memberof ServiceTaskRoomType
     */
    housekeepingRoomStatus?: HousekeepingRoomStatusType;
    /**
     * The room number to service.
     * @type {string}
     * @memberof ServiceTaskRoomType
     */
    roomId?: string;
    /**
     * The task code for the current room which is to be done.
     * @type {string}
     * @memberof ServiceTaskRoomType
     */
    roomTaskCode?: string;
    /**
     * The Task Sheet number where the room exists.
     * @type {number}
     * @memberof ServiceTaskRoomType
     */
    sheetNumber?: number;
    /**
     *
     * @type {CodeListType}
     * @memberof ServiceTaskRoomType
     */
    taskCodes?: CodeListType;
    /**
     * Date for which the task sheet was created. By default this would be the current business date.
     * @type {Date}
     * @memberof ServiceTaskRoomType
     */
    taskDate?: Date;
}
/**
 * Check if a given object implements the ServiceTaskRoomType interface.
 */
export declare function instanceOfServiceTaskRoomType(value: object): boolean;
export declare function ServiceTaskRoomTypeFromJSON(json: any): ServiceTaskRoomType;
export declare function ServiceTaskRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ServiceTaskRoomType;
export declare function ServiceTaskRoomTypeToJSON(value?: ServiceTaskRoomType | null): any;