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
import type { ExportScheduleFrequencyDailyType } from './ExportScheduleFrequencyDailyType';
import type { ExportScheduleFrequencyEODType } from './ExportScheduleFrequencyEODType';
import type { ExportScheduleFrequencyHourlyType } from './ExportScheduleFrequencyHourlyType';
import type { ExportScheduleFrequencyMonthlyType } from './ExportScheduleFrequencyMonthlyType';
import type { ExportScheduleFrequencyOnceType } from './ExportScheduleFrequencyOnceType';
import type { ExportScheduleFrequencyWeeklyType } from './ExportScheduleFrequencyWeeklyType';
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
export declare function instanceOfExportScheduleFrequencyType(value: object): boolean;
export declare function ExportScheduleFrequencyTypeFromJSON(json: any): ExportScheduleFrequencyType;
export declare function ExportScheduleFrequencyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleFrequencyType;
export declare function ExportScheduleFrequencyTypeToJSON(value?: ExportScheduleFrequencyType | null): any;
