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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { ResHousekeepingType } from './ResHousekeepingType';
import {
    ResHousekeepingTypeFromJSON,
    ResHousekeepingTypeFromJSONTyped,
    ResHousekeepingTypeToJSON,
} from './ResHousekeepingType';
import type { ReservationHousekeepingScheduleType } from './ReservationHousekeepingScheduleType';
import {
    ReservationHousekeepingScheduleTypeFromJSON,
    ReservationHousekeepingScheduleTypeFromJSONTyped,
    ReservationHousekeepingScheduleTypeToJSON,
} from './ReservationHousekeepingScheduleType';
import type { ReservationId } from './ReservationId';
import {
    ReservationIdFromJSON,
    ReservationIdFromJSONTyped,
    ReservationIdToJSON,
} from './ReservationId';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Return object that contains a list of facility tasks for the reservation specified in RQ.
 * @export
 * @interface Schedule
 */
export interface Schedule {
    /**
     * 
     * @type {ResHousekeepingType}
     * @memberof Schedule
     */
    guestHouseKeepingInstructions?: ResHousekeepingType;
    /**
     * Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X.
     * @type {string}
     * @memberof Schedule
     */
    hotelId?: string;
    /**
     * 
     * @type {ReservationHousekeepingScheduleType}
     * @memberof Schedule
     */
    housekeepingSchedule?: ReservationHousekeepingScheduleType;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof Schedule
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {ReservationId}
     * @memberof Schedule
     */
    reservationId?: ReservationId;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Schedule
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the Schedule interface.
 */
export function instanceOfSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScheduleFromJSON(json: any): Schedule {
    return ScheduleFromJSONTyped(json, false);
}

export function ScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): Schedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'guestHouseKeepingInstructions': !exists(json, 'guestHouseKeepingInstructions') ? undefined : ResHousekeepingTypeFromJSON(json['guestHouseKeepingInstructions']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'housekeepingSchedule': !exists(json, 'housekeepingSchedule') ? undefined : ReservationHousekeepingScheduleTypeFromJSON(json['housekeepingSchedule']),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'reservationId': !exists(json, 'reservationId') ? undefined : ReservationIdFromJSON(json['reservationId']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ScheduleToJSON(value?: Schedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'guestHouseKeepingInstructions': ResHousekeepingTypeToJSON(value.guestHouseKeepingInstructions),
        'hotelId': value.hotelId,
        'housekeepingSchedule': ReservationHousekeepingScheduleTypeToJSON(value.housekeepingSchedule),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'reservationId': ReservationIdToJSON(value.reservationId),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
