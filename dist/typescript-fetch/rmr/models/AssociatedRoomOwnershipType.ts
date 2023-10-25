/* tslint:disable */
/* eslint-disable */
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


/**
 * Indicates if the associated room is an Owner or Referral room.
 * @export
 */
export const AssociatedRoomOwnershipType = {
    Owner: 'Owner',
    Referral: 'Referral'
} as const;
export type AssociatedRoomOwnershipType = typeof AssociatedRoomOwnershipType[keyof typeof AssociatedRoomOwnershipType];


export function AssociatedRoomOwnershipTypeFromJSON(json: any): AssociatedRoomOwnershipType {
    return AssociatedRoomOwnershipTypeFromJSONTyped(json, false);
}

export function AssociatedRoomOwnershipTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssociatedRoomOwnershipType {
    return json as AssociatedRoomOwnershipType;
}

export function AssociatedRoomOwnershipTypeToJSON(value?: AssociatedRoomOwnershipType | null): any {
    return value as any;
}

