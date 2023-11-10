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
/**
 * If specified then export is scheduled to run only once
 * @export
 * @interface ExportScheduleFrequencyOnceType
 */
export interface ExportScheduleFrequencyOnceType {
    /**
     * Export will be generated using the date and time specified. Time will be specified in the format dd-MM-yyyy:hh:mm:ss a Z
     * @type {string}
     * @memberof ExportScheduleFrequencyOnceType
     */
    runAt?: string;
}
/**
 * Check if a given object implements the ExportScheduleFrequencyOnceType interface.
 */
export declare function instanceOfExportScheduleFrequencyOnceType(value: object): boolean;
export declare function ExportScheduleFrequencyOnceTypeFromJSON(json: any): ExportScheduleFrequencyOnceType;
export declare function ExportScheduleFrequencyOnceTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportScheduleFrequencyOnceType;
export declare function ExportScheduleFrequencyOnceTypeToJSON(value?: ExportScheduleFrequencyOnceType | null): any;
