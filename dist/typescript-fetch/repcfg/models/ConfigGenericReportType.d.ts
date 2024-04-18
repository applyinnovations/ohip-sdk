/**
 * OPERA Cloud Report Master Data Management API
 * APIs catering to the managing export master data configuration in a hotel.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ConfigReportParameterType } from './ConfigReportParameterType';
import type { ExternalUrlInfoType } from './ExternalUrlInfoType';
import type { PrintReportType } from './PrintReportType';
import type { ReportModuleTypeType } from './ReportModuleTypeType';
import type { ReportRunnableApps } from './ReportRunnableApps';
import type { TranslationTextType1000 } from './TranslationTextType1000';
import type { UniqueIDType } from './UniqueIDType';
import type { WatermarkType } from './WatermarkType';
/**
 * A mandatory or non-mandatory procedure or report.
 * @export
 * @interface ConfigGenericReportType
 */
export interface ConfigGenericReportType {
    /**
     *
     * @type {TranslationTextType1000}
     * @memberof ConfigGenericReportType
     */
    name?: TranslationTextType1000;
    /**
     * Name of the .REP or .RTF file. .REP or .RTF extension is not needed.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    reportName?: string;
    /**
     * Flag which indicates whether the report is user defined.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    userDefinedReport?: boolean;
    /**
     *
     * @type {ReportModuleTypeType}
     * @memberof ConfigGenericReportType
     */
    moduleType?: ReportModuleTypeType;
    /**
     * Report can be run in these applications - Global level, property level or in the Sales & Event Management.
     * @type {Array<ReportRunnableApps>}
     * @memberof ConfigGenericReportType
     */
    usedInApp?: Array<ReportRunnableApps>;
    /**
     * Set to ODT for BI Publisher reports.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    dataSourceType?: string;
    /**
     * Data source for BI Publisher reports.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    dataSource?: string;
    /**
     * Flag indicating whether procedure or report is mandatory or not.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    mandatory?: boolean;
    /**
     * Form which is run to collect parameter information to generate the report.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    formToRun?: string;
    /**
     * The language in which the report is configured. This language code will be used when running a report for guests like registration cards, folio etc when GUEST LANGUAGE functionality is turned on.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    reportLanguage?: string;
    /**
     * Flag indicating whether procedure or report is active to run.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    active?: boolean;
    /**
     * Flag indicating whether report is protected or not.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    _protected?: boolean;
    /**
     * Display sequence of procedure or report.
     * @type {number}
     * @memberof ConfigGenericReportType
     */
    sequence?: number;
    /**
     * Report group to which the report is being added.
     * @type {string}
     * @memberof ConfigGenericReportType
     */
    reportGroup?: string;
    /**
     * Flag which indicates if the report can be run for multiple properties.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    multiPropertyReport?: boolean;
    /**
     * Flag to indicate whether the report can be exported to Excel.
     * @type {boolean}
     * @memberof ConfigGenericReportType
     */
    excelOutput?: boolean;
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ConfigGenericReportType
     */
    attachedReports?: Array<UniqueIDType>;
    /**
     *
     * @type {WatermarkType}
     * @memberof ConfigGenericReportType
     */
    watermarkDetails?: WatermarkType;
    /**
     * A report parameter.
     * @type {Array<ConfigReportParameterType>}
     * @memberof ConfigGenericReportType
     */
    parameters?: Array<ConfigReportParameterType>;
    /**
     * Rows to be entered for Key Packet report group.
     * @type {number}
     * @memberof ConfigGenericReportType
     */
    rowsPerPage?: number;
    /**
     * Columns to be entered for Key Packet report group.
     * @type {number}
     * @memberof ConfigGenericReportType
     */
    columnsPerPage?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof ConfigGenericReportType
     */
    moduleId?: UniqueIDType;
    /**
     *
     * @type {ExternalUrlInfoType}
     * @memberof ConfigGenericReportType
     */
    externalReportUrl?: ExternalUrlInfoType;
    /**
     *
     * @type {PrintReportType}
     * @memberof ConfigGenericReportType
     */
    printReport?: PrintReportType;
}
/**
 * Check if a given object implements the ConfigGenericReportType interface.
 */
export declare function instanceOfConfigGenericReportType(value: object): boolean;
export declare function ConfigGenericReportTypeFromJSON(json: any): ConfigGenericReportType;
export declare function ConfigGenericReportTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigGenericReportType;
export declare function ConfigGenericReportTypeToJSON(value?: ConfigGenericReportType | null): any;