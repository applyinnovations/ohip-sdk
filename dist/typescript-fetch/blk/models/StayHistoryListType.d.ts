/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { StayReservationInfoType } from './StayReservationInfoType';
/**
 * A collection of reservation history details attached to Profiles.
 * @export
 * @interface StayHistoryListType
 */
export interface StayHistoryListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof StayHistoryListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof StayHistoryListType
     */
    hasMore?: boolean;
    /**
     * Additional reservation information attached to the profile . Eg : History reservation details
     * @type {Array<StayReservationInfoType>}
     * @memberof StayHistoryListType
     */
    reservationInfo?: Array<StayReservationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof StayHistoryListType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the StayHistoryListType interface.
 */
export declare function instanceOfStayHistoryListType(value: object): boolean;
export declare function StayHistoryListTypeFromJSON(json: any): StayHistoryListType;
export declare function StayHistoryListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayHistoryListType;
export declare function StayHistoryListTypeToJSON(value?: StayHistoryListType | null): any;
