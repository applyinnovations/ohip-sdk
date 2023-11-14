/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ApplicationUserType } from './ApplicationUserType';
import {
    ApplicationUserTypeFromJSON,
    ApplicationUserTypeFromJSONTyped,
    ApplicationUserTypeToJSON,
} from './ApplicationUserType';
import type { HousekeepingSectionType } from './HousekeepingSectionType';
import {
    HousekeepingSectionTypeFromJSON,
    HousekeepingSectionTypeFromJSONTyped,
    HousekeepingSectionTypeToJSON,
} from './HousekeepingSectionType';
import type { ServicingAttendantStatusType } from './ServicingAttendantStatusType';
import {
    ServicingAttendantStatusTypeFromJSON,
    ServicingAttendantStatusTypeFromJSONTyped,
    ServicingAttendantStatusTypeToJSON,
} from './ServicingAttendantStatusType';

/**
 * The Attendant Name and ID of the attendant servicing the room.
 * @export
 * @interface CurrentServicingAttendantType
 */
export interface CurrentServicingAttendantType {
    /**
     * Indicates if the Attendant is active.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    activeFlag?: string;
    /**
     * 
     * @type {ApplicationUserType}
     * @memberof CurrentServicingAttendantType
     */
    appUser?: ApplicationUserType;
    /**
     * Attendant's unique identifier.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    attendantId?: string;
    /**
     * Attendant's name.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    attendantName?: string;
    /**
     * The Floor which is assigned to the attendant.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    floor?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    friday?: boolean;
    /**
     * Property where the attendant belongs.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    hotelId?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    monday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    saturday?: boolean;
    /**
     * 
     * @type {HousekeepingSectionType}
     * @memberof CurrentServicingAttendantType
     */
    section?: HousekeepingSectionType;
    /**
     * The start time of the service.
     * @type {string}
     * @memberof CurrentServicingAttendantType
     */
    startTime?: string;
    /**
     * 
     * @type {ServicingAttendantStatusType}
     * @memberof CurrentServicingAttendantType
     */
    status?: ServicingAttendantStatusType;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CurrentServicingAttendantType
     */
    wednesday?: boolean;
}

/**
 * Check if a given object implements the CurrentServicingAttendantType interface.
 */
export function instanceOfCurrentServicingAttendantType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CurrentServicingAttendantTypeFromJSON(json: any): CurrentServicingAttendantType {
    return CurrentServicingAttendantTypeFromJSONTyped(json, false);
}

export function CurrentServicingAttendantTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CurrentServicingAttendantType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activeFlag': !exists(json, 'activeFlag') ? undefined : json['activeFlag'],
        'appUser': !exists(json, 'appUser') ? undefined : ApplicationUserTypeFromJSON(json['appUser']),
        'attendantId': !exists(json, 'attendantId') ? undefined : json['attendantId'],
        'attendantName': !exists(json, 'attendantName') ? undefined : json['attendantName'],
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'section': !exists(json, 'section') ? undefined : HousekeepingSectionTypeFromJSON(json['section']),
        'startTime': !exists(json, 'startTime') ? undefined : json['startTime'],
        'status': !exists(json, 'status') ? undefined : ServicingAttendantStatusTypeFromJSON(json['status']),
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
    };
}

export function CurrentServicingAttendantTypeToJSON(value?: CurrentServicingAttendantType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activeFlag': value.activeFlag,
        'appUser': ApplicationUserTypeToJSON(value.appUser),
        'attendantId': value.attendantId,
        'attendantName': value.attendantName,
        'floor': value.floor,
        'friday': value.friday,
        'hotelId': value.hotelId,
        'monday': value.monday,
        'saturday': value.saturday,
        'section': HousekeepingSectionTypeToJSON(value.section),
        'startTime': value.startTime,
        'status': ServicingAttendantStatusTypeToJSON(value.status),
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
    };
}
