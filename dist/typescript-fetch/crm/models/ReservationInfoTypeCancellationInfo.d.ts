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
/**
 * Information regarding why reservation has been/was cancelled.
 * @export
 * @interface ReservationInfoTypeCancellationInfo
 */
export interface ReservationInfoTypeCancellationInfo {
    /**
     *
     * @type {string}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    code?: string;
    /**
     * Date when reservation was last cancelled.
     * @type {Date}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    date?: Date;
    /**
     *
     * @type {string}
     * @memberof ReservationInfoTypeCancellationInfo
     */
    description?: string;
}
/**
 * Check if a given object implements the ReservationInfoTypeCancellationInfo interface.
 */
export declare function instanceOfReservationInfoTypeCancellationInfo(value: object): boolean;
export declare function ReservationInfoTypeCancellationInfoFromJSON(json: any): ReservationInfoTypeCancellationInfo;
export declare function ReservationInfoTypeCancellationInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationInfoTypeCancellationInfo;
export declare function ReservationInfoTypeCancellationInfoToJSON(value?: ReservationInfoTypeCancellationInfo | null): any;