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
import type { FacilityCodeType } from './FacilityCodeType';
import {
    FacilityCodeTypeFromJSON,
    FacilityCodeTypeFromJSONTyped,
    FacilityCodeTypeToJSON,
} from './FacilityCodeType';
import type { HousekeepingTaskCodeType } from './HousekeepingTaskCodeType';
import {
    HousekeepingTaskCodeTypeFromJSON,
    HousekeepingTaskCodeTypeFromJSONTyped,
    HousekeepingTaskCodeTypeToJSON,
} from './HousekeepingTaskCodeType';

/**
 * Information regarding facility task on a reservation.
 * @export
 * @interface FacilityTaskType
 */
export interface FacilityTaskType {
    /**
     * The Date on which the task is applicable.
     * @type {Date}
     * @memberof FacilityTaskType
     */
    date?: Date;
    /**
     * List of the facility codes.
     * @type {Array<FacilityCodeType>}
     * @memberof FacilityTaskType
     */
    supplies?: Array<FacilityCodeType>;
    /**
     * 
     * @type {HousekeepingTaskCodeType}
     * @memberof FacilityTaskType
     */
    task?: HousekeepingTaskCodeType;
}

/**
 * Check if a given object implements the FacilityTaskType interface.
 */
export function instanceOfFacilityTaskType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityTaskTypeFromJSON(json: any): FacilityTaskType {
    return FacilityTaskTypeFromJSONTyped(json, false);
}

export function FacilityTaskTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityTaskType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : (new Date(json['date'])),
        'supplies': !exists(json, 'supplies') ? undefined : ((json['supplies'] as Array<any>).map(FacilityCodeTypeFromJSON)),
        'task': !exists(json, 'task') ? undefined : HousekeepingTaskCodeTypeFromJSON(json['task']),
    };
}

export function FacilityTaskTypeToJSON(value?: FacilityTaskType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date === undefined ? undefined : (value.date.toISOString().substr(0,10)),
        'supplies': value.supplies === undefined ? undefined : ((value.supplies as Array<any>).map(FacilityCodeTypeToJSON)),
        'task': HousekeepingTaskCodeTypeToJSON(value.task),
    };
}

