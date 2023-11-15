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
/**
 * Criteria to manage the attendant schedule.
 * @export
 * @interface HousekeepingAttendantScheduleType
 */
export interface HousekeepingAttendantScheduleType {
    /**
     * ID of the attendant.
     * @type {string}
     * @memberof HousekeepingAttendantScheduleType
     */
    attendantId?: string;
    /**
     * Date the attendant will be assigned.
     * @type {string}
     * @memberof HousekeepingAttendantScheduleType
     */
    date?: string;
    /**
     * Partial name of an attendant.
     * @type {string}
     * @memberof HousekeepingAttendantScheduleType
     */
    name?: string;
}

/**
 * Check if a given object implements the HousekeepingAttendantScheduleType interface.
 */
export function instanceOfHousekeepingAttendantScheduleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingAttendantScheduleTypeFromJSON(json: any): HousekeepingAttendantScheduleType {
    return HousekeepingAttendantScheduleTypeFromJSONTyped(json, false);
}

export function HousekeepingAttendantScheduleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingAttendantScheduleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendantId': !exists(json, 'attendantId') ? undefined : json['attendantId'],
        'date': !exists(json, 'date') ? undefined : json['date'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function HousekeepingAttendantScheduleTypeToJSON(value?: HousekeepingAttendantScheduleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendantId': value.attendantId,
        'date': value.date,
        'name': value.name,
    };
}

