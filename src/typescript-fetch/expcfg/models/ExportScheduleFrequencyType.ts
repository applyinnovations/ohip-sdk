/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExportScheduleFrequencyDailyType } from './ExportScheduleFrequencyDailyType';
import {
    ExportScheduleFrequencyDailyTypeFromJSON,
    ExportScheduleFrequencyDailyTypeFromJSONTyped,
    ExportScheduleFrequencyDailyTypeToJSON,
} from './ExportScheduleFrequencyDailyType';
import type { ExportScheduleFrequencyEODType } from './ExportScheduleFrequencyEODType';
import {
    ExportScheduleFrequencyEODTypeFromJSON,
    ExportScheduleFrequencyEODTypeFromJSONTyped,
    ExportScheduleFrequencyEODTypeToJSON,
} from './ExportScheduleFrequencyEODType';
import type { ExportScheduleFrequencyHourlyType } from './ExportScheduleFrequencyHourlyType';
import {
    ExportScheduleFrequencyHourlyTypeFromJSON,
    ExportScheduleFrequencyHourlyTypeFromJSONTyped,
    ExportScheduleFrequencyHourlyTypeToJSON,
} from './ExportScheduleFrequencyHourlyType';
import type { ExportScheduleFrequencyMonthlyType } from './ExportScheduleFrequencyMonthlyType';
import {
    ExportScheduleFrequencyMonthlyTypeFromJSON,
    ExportScheduleFrequencyMonthlyTypeFromJSONTyped,
    ExportScheduleFrequencyMonthlyTypeToJSON,
} from './ExportScheduleFrequencyMonthlyType';
import type { ExportScheduleFrequencyOnceType } from './ExportScheduleFrequencyOnceType';
import {
    ExportScheduleFrequencyOnceTypeFromJSON,
    ExportScheduleFrequencyOnceTypeFromJSONTyped,
    ExportScheduleFrequencyOnceTypeToJSON,
} from './ExportScheduleFrequencyOnceType';
import type { ExportScheduleFrequencyWeeklyType } from './ExportScheduleFrequencyWeeklyType';
import {
    ExportScheduleFrequencyWeeklyTypeFromJSON,
    ExportScheduleFrequencyWeeklyTypeFromJSONTyped,
    ExportScheduleFrequencyWeeklyTypeToJSON,
} from './ExportScheduleFrequencyWeeklyType';

/**
 * Frequency at which exports is scheduled to run
 * @export
 * @interface ExportScheduleFrequencyType
 */
export interface ExportScheduleFrequencyType {
    /**
     * 
     * @type {ExportScheduleFrequencyDailyType}
     * @memberof ExportScheduleFrequencyType
     */
    daily?: ExportScheduleFrequencyDailyType;
    /**
     * 
     * @type {ExportScheduleFrequencyEODType}
     * @memberof ExportScheduleFrequencyType
     */
    endOfDay?: ExportScheduleFrequencyEODType;
    /**
     * 
     * @type {ExportScheduleFrequencyHourlyType}
     * @memberof ExportScheduleFrequencyType
     */
    hourly?: ExportScheduleFrequencyHourlyType;
    /**
     * 
     * @type {ExportScheduleFrequencyMonthlyType}
     * @memberof ExportScheduleFrequencyType
     */
    monthly?: ExportScheduleFrequencyMonthlyType;
    /**
     * 
     * @type {ExportScheduleFrequencyOnceType}
     * @memberof ExportScheduleFrequencyType
     */
    once?: ExportScheduleFrequencyOnceType;
    /**
     * 
     * @type {ExportScheduleFrequencyWeeklyType}
     * @memberof ExportScheduleFrequencyType
     */
    weekly?: ExportScheduleFrequencyWeeklyType;
}

/**
 * Check if a given object implements the ExportScheduleFrequencyType interface.
 */
export function instanceOfExportScheduleFrequencyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportScheduleFrequencyTypeFromJSON(json: any): ExportScheduleFrequencyType {
    return ExportScheduleFrequencyTypeFromJSONTyped(json, false);
}

export function ExportScheduleFrequencyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleFrequencyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'daily': !exists(json, 'daily') ? undefined : ExportScheduleFrequencyDailyTypeFromJSON(json['daily']),
        'endOfDay': !exists(json, 'endOfDay') ? undefined : ExportScheduleFrequencyEODTypeFromJSON(json['endOfDay']),
        'hourly': !exists(json, 'hourly') ? undefined : ExportScheduleFrequencyHourlyTypeFromJSON(json['hourly']),
        'monthly': !exists(json, 'monthly') ? undefined : ExportScheduleFrequencyMonthlyTypeFromJSON(json['monthly']),
        'once': !exists(json, 'once') ? undefined : ExportScheduleFrequencyOnceTypeFromJSON(json['once']),
        'weekly': !exists(json, 'weekly') ? undefined : ExportScheduleFrequencyWeeklyTypeFromJSON(json['weekly']),
    };
}

export function ExportScheduleFrequencyTypeToJSON(value?: ExportScheduleFrequencyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'daily': ExportScheduleFrequencyDailyTypeToJSON(value.daily),
        'endOfDay': ExportScheduleFrequencyEODTypeToJSON(value.endOfDay),
        'hourly': ExportScheduleFrequencyHourlyTypeToJSON(value.hourly),
        'monthly': ExportScheduleFrequencyMonthlyTypeToJSON(value.monthly),
        'once': ExportScheduleFrequencyOnceTypeToJSON(value.once),
        'weekly': ExportScheduleFrequencyWeeklyTypeToJSON(value.weekly),
    };
}
