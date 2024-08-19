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
import type { UniqueIDType } from './UniqueIDType';
/**
 * Define the search criteria for retrieving room ownership records
 * @export
 * @interface RoomOwnershipType
 */
export interface RoomOwnershipType {
    /**
     * Contract number for room owner.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    contractNumber?: string;
    /**
     * End Date of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    endDate?: string;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoomOwnershipType
     */
    profileId?: UniqueIDType;
    /**
     * Room Category of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomCategory?: string;
    /**
     * Room Id of room owner.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomId?: string;
    /**
     * Unique Id for Room Owner record.
     * @type {number}
     * @memberof RoomOwnershipType
     */
    roomOwnershipId?: number;
    /**
     * Room Type of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    roomType?: string;
    /**
     * Start Date of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    startDate?: string;
    /**
     * Status of the room ownership record.
     * @type {string}
     * @memberof RoomOwnershipType
     */
    status?: string;
}
/**
 * Check if a given object implements the RoomOwnershipType interface.
 */
export declare function instanceOfRoomOwnershipType(value: object): boolean;
export declare function RoomOwnershipTypeFromJSON(json: any): RoomOwnershipType;
export declare function RoomOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomOwnershipType;
export declare function RoomOwnershipTypeToJSON(value?: RoomOwnershipType | null): any;
