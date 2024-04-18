/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AssignedUserType } from './AssignedUserType';
import {
    AssignedUserTypeFromJSON,
    AssignedUserTypeFromJSONTyped,
    AssignedUserTypeToJSON,
} from './AssignedUserType';

/**
 * Base maintenance type
 * @export
 * @interface RoomMaintenanceRequestType
 */
export interface RoomMaintenanceRequestType {
    /**
     * 
     * @type {AssignedUserType}
     * @memberof RoomMaintenanceRequestType
     */
    assignedUserInfo?: AssignedUserType;
    /**
     * Hotel code
     * @type {string}
     * @memberof RoomMaintenanceRequestType
     */
    hotelId?: string;
    /**
     * Maintenance Code
     * @type {string}
     * @memberof RoomMaintenanceRequestType
     */
    maintenanceCode?: string;
    /**
     * Maintenance remarks
     * @type {string}
     * @memberof RoomMaintenanceRequestType
     */
    remarks?: string;
    /**
     * Collection of room numbers to be process.
     * @type {Array<string>}
     * @memberof RoomMaintenanceRequestType
     */
    roomIds?: Array<string>;
}

/**
 * Check if a given object implements the RoomMaintenanceRequestType interface.
 */
export function instanceOfRoomMaintenanceRequestType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomMaintenanceRequestTypeFromJSON(json: any): RoomMaintenanceRequestType {
    return RoomMaintenanceRequestTypeFromJSONTyped(json, false);
}

export function RoomMaintenanceRequestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomMaintenanceRequestType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assignedUserInfo': !exists(json, 'assignedUserInfo') ? undefined : AssignedUserTypeFromJSON(json['assignedUserInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'maintenanceCode': !exists(json, 'maintenanceCode') ? undefined : json['maintenanceCode'],
        'remarks': !exists(json, 'remarks') ? undefined : json['remarks'],
        'roomIds': !exists(json, 'roomIds') ? undefined : json['roomIds'],
    };
}

export function RoomMaintenanceRequestTypeToJSON(value?: RoomMaintenanceRequestType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assignedUserInfo': AssignedUserTypeToJSON(value.assignedUserInfo),
        'hotelId': value.hotelId,
        'maintenanceCode': value.maintenanceCode,
        'remarks': value.remarks,
        'roomIds': value.roomIds,
    };
}
