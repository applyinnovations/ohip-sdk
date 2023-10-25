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

import { exists, mapValues } from '../runtime';
/**
 * Room Rotation Points Update Information
 * @export
 * @interface RoomRotationPointsAdjustmentInfoType
 */
export interface RoomRotationPointsAdjustmentInfoType {
    /**
     * Balance forward points to update
     * @type {number}
     * @memberof RoomRotationPointsAdjustmentInfoType
     */
    balanceForwardPoints?: number;
    /**
     * Room adjusted points to update
     * @type {number}
     * @memberof RoomRotationPointsAdjustmentInfoType
     */
    roomAdjustedPoints?: number;
    /**
     * Room Number
     * @type {string}
     * @memberof RoomRotationPointsAdjustmentInfoType
     */
    roomId?: string;
}

/**
 * Check if a given object implements the RoomRotationPointsAdjustmentInfoType interface.
 */
export function instanceOfRoomRotationPointsAdjustmentInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRotationPointsAdjustmentInfoTypeFromJSON(json: any): RoomRotationPointsAdjustmentInfoType {
    return RoomRotationPointsAdjustmentInfoTypeFromJSONTyped(json, false);
}

export function RoomRotationPointsAdjustmentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRotationPointsAdjustmentInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'balanceForwardPoints': !exists(json, 'balanceForwardPoints') ? undefined : json['balanceForwardPoints'],
        'roomAdjustedPoints': !exists(json, 'roomAdjustedPoints') ? undefined : json['roomAdjustedPoints'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
    };
}

export function RoomRotationPointsAdjustmentInfoTypeToJSON(value?: RoomRotationPointsAdjustmentInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'balanceForwardPoints': value.balanceForwardPoints,
        'roomAdjustedPoints': value.roomAdjustedPoints,
        'roomId': value.roomId,
    };
}

