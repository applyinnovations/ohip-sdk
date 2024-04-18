/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Export Configuration API
 * APIs catering to the managing export master data configuration. The exports feature in OPERA Cloud provides the ability to create and export data files, such as back office data, to third-party interfaces and receiving systems.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * If specified then export is scheduled to run at hourly intervals
 * @export
 * @interface ExportScheduleFrequencyHourlyType
 */
export interface ExportScheduleFrequencyHourlyType {
    /**
     * Interval at which export needs to be scheduled
     * @type {number}
     * @memberof ExportScheduleFrequencyHourlyType
     */
    interval?: number;
}

/**
 * Check if a given object implements the ExportScheduleFrequencyHourlyType interface.
 */
export function instanceOfExportScheduleFrequencyHourlyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExportScheduleFrequencyHourlyTypeFromJSON(json: any): ExportScheduleFrequencyHourlyType {
    return ExportScheduleFrequencyHourlyTypeFromJSONTyped(json, false);
}

export function ExportScheduleFrequencyHourlyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleFrequencyHourlyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'interval': !exists(json, 'interval') ? undefined : json['interval'],
    };
}

export function ExportScheduleFrequencyHourlyTypeToJSON(value?: ExportScheduleFrequencyHourlyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'interval': value.interval,
    };
}
