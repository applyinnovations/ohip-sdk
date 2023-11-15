/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Allows for a choice in description of the amount of time spanned by this type. EndDate specifies a specific date, while Duration provides a measure of time to add to the StartDate to yield end date.
 * @export
 * @interface TimeSpanType
 */
export interface TimeSpanType {
    /**
     *
     * @type {string}
     * @memberof TimeSpanType
     */
    duration?: string;
    /**
     *
     * @type {string}
     * @memberof TimeSpanType
     */
    endDate?: string;
    /**
     *
     * @type {string}
     * @memberof TimeSpanType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the TimeSpanType interface.
 */
export declare function instanceOfTimeSpanType(value: object): boolean;
export declare function TimeSpanTypeFromJSON(json: any): TimeSpanType;
export declare function TimeSpanTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TimeSpanType;
export declare function TimeSpanTypeToJSON(value?: TimeSpanType | null): any;
