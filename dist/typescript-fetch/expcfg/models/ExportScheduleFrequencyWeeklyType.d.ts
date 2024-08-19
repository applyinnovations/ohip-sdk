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
/**
 * If specified then export is scheduled to run Weekly
 * @export
 * @interface ExportScheduleFrequencyWeeklyType
 */
export interface ExportScheduleFrequencyWeeklyType {
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    friday?: boolean;
    /**
     * Interval at which export needs to be scheduled
     * @type {number}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    interval?: number;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    monday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    saturday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    sunday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    thursday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    tuesday?: boolean;
    /**
     *
     * @type {boolean}
     * @memberof ExportScheduleFrequencyWeeklyType
     */
    wednesday?: boolean;
}
/**
 * Check if a given object implements the ExportScheduleFrequencyWeeklyType interface.
 */
export declare function instanceOfExportScheduleFrequencyWeeklyType(value: object): boolean;
export declare function ExportScheduleFrequencyWeeklyTypeFromJSON(json: any): ExportScheduleFrequencyWeeklyType;
export declare function ExportScheduleFrequencyWeeklyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleFrequencyWeeklyType;
export declare function ExportScheduleFrequencyWeeklyTypeToJSON(value?: ExportScheduleFrequencyWeeklyType | null): any;
