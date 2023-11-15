/**
 * OPERA Cloud Room Rotation Service API
 * APIs to facilitate Room Rotation functionality in OPERA Cloud. Api provides capability to handle Room Rotation in OPERA Cloud. Room Rotation provides room ownership options for automatic inventory rotation and prioritization for owner rooms assignment and occupancy.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AssociatedRoomOwnershipType } from './AssociatedRoomOwnershipType';
/**
 * Associated Room Ownership Information
 * @export
 * @interface AssociatedRoomOwnershipInfoType
 */
export interface AssociatedRoomOwnershipInfoType {
    /**
     *
     * @type {AssociatedRoomOwnershipType}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    associatedRoomOwnershipType?: AssociatedRoomOwnershipType;
    /**
     * End date of Room Ownership contract
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    endDate?: string;
    /**
     * Hotel Id
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    hotelId?: string;
    /**
     * Whether Room is available for the exclusive use of its designated owner and owner referrals, or if it is available in general availability
     * @type {boolean}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    ownerExclusive?: boolean;
    /**
     * Room Number
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomId?: string;
    /**
     * Unique Id for Room Owner record.
     * @type {number}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomOwnershipId?: number;
    /**
     * Room Type
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    roomType?: string;
    /**
     * Start date of Room Ownership contract
     * @type {string}
     * @memberof AssociatedRoomOwnershipInfoType
     */
    startDate?: string;
}
/**
 * Check if a given object implements the AssociatedRoomOwnershipInfoType interface.
 */
export declare function instanceOfAssociatedRoomOwnershipInfoType(value: object): boolean;
export declare function AssociatedRoomOwnershipInfoTypeFromJSON(json: any): AssociatedRoomOwnershipInfoType;
export declare function AssociatedRoomOwnershipInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociatedRoomOwnershipInfoType;
export declare function AssociatedRoomOwnershipInfoTypeToJSON(value?: AssociatedRoomOwnershipInfoType | null): any;
