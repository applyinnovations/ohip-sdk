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
import type { ExportSchedulesType } from './ExportSchedulesType';
/**
 * Export schedules information that are required to configure schedules
 * @export
 * @interface ExportSchedulesConfigType
 */
export interface ExportSchedulesConfigType {
    /**
     *
     * @type {ExportSchedulesType}
     * @memberof ExportSchedulesConfigType
     */
    exportSchedules?: ExportSchedulesType;
    /**
     * Time zone hour and minute specified in the format TZH:TZM example:-05:00
     * @type {string}
     * @memberof ExportSchedulesConfigType
     */
    timeZone?: string;
}
/**
 * Check if a given object implements the ExportSchedulesConfigType interface.
 */
export declare function instanceOfExportSchedulesConfigType(value: object): boolean;
export declare function ExportSchedulesConfigTypeFromJSON(json: any): ExportSchedulesConfigType;
export declare function ExportSchedulesConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportSchedulesConfigType;
export declare function ExportSchedulesConfigTypeToJSON(value?: ExportSchedulesConfigType | null): any;
