/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomOwnershipType } from './RoomOwnershipType';
/**
 * Room Ownership records.
 * @export
 * @interface ProfileEnrollmentTypeRoomOwnershipsList
 */
export interface ProfileEnrollmentTypeRoomOwnershipsList {
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileEnrollmentTypeRoomOwnershipsList
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof ProfileEnrollmentTypeRoomOwnershipsList
     */
    hasMore?: boolean;
    /**
     * Collection of Detailed information on Room Ownership records.
     * @type {Array<RoomOwnershipType>}
     * @memberof ProfileEnrollmentTypeRoomOwnershipsList
     */
    roomOwnershipInfo?: Array<RoomOwnershipType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileEnrollmentTypeRoomOwnershipsList
     */
    totalResults?: number;
}
/**
 * Check if a given object implements the ProfileEnrollmentTypeRoomOwnershipsList interface.
 */
export declare function instanceOfProfileEnrollmentTypeRoomOwnershipsList(value: object): boolean;
export declare function ProfileEnrollmentTypeRoomOwnershipsListFromJSON(json: any): ProfileEnrollmentTypeRoomOwnershipsList;
export declare function ProfileEnrollmentTypeRoomOwnershipsListFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileEnrollmentTypeRoomOwnershipsList;
export declare function ProfileEnrollmentTypeRoomOwnershipsListToJSON(value?: ProfileEnrollmentTypeRoomOwnershipsList | null): any;
