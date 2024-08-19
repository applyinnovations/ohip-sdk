/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface StayFutureListType
 */
export interface StayFutureListType {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof StayFutureListType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof StayFutureListType
     */
    hasMore?: boolean;
    /**
     * Additional reservation information attached to the profile . Eg : Future reservation details
     * @type {Array<StayReservationInfoType>}
     * @memberof StayFutureListType
     */
    reservationInfo?: Array<StayReservationInfoType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof StayFutureListType
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the StayFutureListType interface.
 */
export declare function instanceOfStayFutureListType(value: object): boolean;
export declare function StayFutureListTypeFromJSON(json: any): StayFutureListType;
export declare function StayFutureListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayFutureListType;
export declare function StayFutureListTypeToJSON(value?: StayFutureListType | null): any;
