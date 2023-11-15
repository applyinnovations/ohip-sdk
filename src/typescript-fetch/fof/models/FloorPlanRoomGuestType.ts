/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface FloorPlanRoomGuestType
 */
export interface FloorPlanRoomGuestType {
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    arrival?: string;
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    confirmationNo?: string;
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    departure?: string;
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    lastName?: string;
    /**
     * 
     * @type {string}
     * @memberof FloorPlanRoomGuestType
     */
    shareID?: string;
}

/**
 * Check if a given object implements the FloorPlanRoomGuestType interface.
 */
export function instanceOfFloorPlanRoomGuestType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FloorPlanRoomGuestTypeFromJSON(json: any): FloorPlanRoomGuestType {
    return FloorPlanRoomGuestTypeFromJSONTyped(json, false);
}

export function FloorPlanRoomGuestTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FloorPlanRoomGuestType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrival': !exists(json, 'arrival') ? undefined : json['arrival'],
        'confirmationNo': !exists(json, 'confirmationNo') ? undefined : json['confirmationNo'],
        'departure': !exists(json, 'departure') ? undefined : json['departure'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'shareID': !exists(json, 'shareID') ? undefined : json['shareID'],
    };
}

export function FloorPlanRoomGuestTypeToJSON(value?: FloorPlanRoomGuestType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrival': value.arrival,
        'confirmationNo': value.confirmationNo,
        'departure': value.departure,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'shareID': value.shareID,
    };
}

