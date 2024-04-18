/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EventCodeDetailType } from './EventCodeDetailType';
import type { EventSpaceScheduleType } from './EventSpaceScheduleType';
import type { SellMessagesType } from './SellMessagesType';
/**
 * Collection of the Events Booked/Scheduled for the function spaces in the Hotel for the particular time period.
 * @export
 * @interface EventCalendarType
 */
export interface EventCalendarType {
    /**
     * Collection of the Event Codes in a Property for a particular time period.
     * @type {Array<EventCodeDetailType>}
     * @memberof EventCalendarType
     */
    eventCodes?: Array<EventCodeDetailType>;
    /**
     * Collection of the Events Booked/Scheduled for the function space/functionSpaceDetails for the particular time period.
     * @type {Array<EventSpaceScheduleType>}
     * @memberof EventCalendarType
     */
    eventSpace?: Array<EventSpaceScheduleType>;
    /**
     * Current Page the group of Rooms is included in.
     * @type {number}
     * @memberof EventCalendarType
     */
    pageIndex?: number;
    /**
     * Number of records per page.
     * @type {number}
     * @memberof EventCalendarType
     */
    recordsPerPage?: number;
    /**
     *
     * @type {SellMessagesType}
     * @memberof EventCalendarType
     */
    sellMessages?: SellMessagesType;
    /**
     * Total Number of Rooms.
     * @type {number}
     * @memberof EventCalendarType
     */
    totalRooms?: number;
}
/**
 * Check if a given object implements the EventCalendarType interface.
 */
export declare function instanceOfEventCalendarType(value: object): boolean;
export declare function EventCalendarTypeFromJSON(json: any): EventCalendarType;
export declare function EventCalendarTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventCalendarType;
export declare function EventCalendarTypeToJSON(value?: EventCalendarType | null): any;