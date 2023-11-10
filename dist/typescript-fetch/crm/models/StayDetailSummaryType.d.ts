/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { StayReservationType } from './StayReservationType';
/**
 * Contains stay related information such as reservation nights,room nights,arrival rooms,cancel rooms,etc.
 * @export
 * @interface StayDetailSummaryType
 */
export interface StayDetailSummaryType {
    /**
     *
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    arrivalRooms?: number;
    /**
     *
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    cancelRooms?: number;
    /**
     *
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    dayUseRooms?: number;
    /**
     *
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    noShowRooms?: number;
    /**
     *
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    roomNights?: number;
    /**
     *
     * @type {StayReservationType}
     * @memberof StayDetailSummaryType
     */
    stayReservation?: StayReservationType;
    /**
     * Total Booked Stays/Reservations for Profile
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    totalBooked?: number;
    /**
     * Total Stayed Reservations for Profile
     * @type {number}
     * @memberof StayDetailSummaryType
     */
    totalStays?: number;
}
/**
 * Check if a given object implements the StayDetailSummaryType interface.
 */
export declare function instanceOfStayDetailSummaryType(value: object): boolean;
export declare function StayDetailSummaryTypeFromJSON(json: any): StayDetailSummaryType;
export declare function StayDetailSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayDetailSummaryType;
export declare function StayDetailSummaryTypeToJSON(value?: StayDetailSummaryType | null): any;
