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
import type { ExportColumnDetailType } from './ExportColumnDetailType';
import type { ExportComponentType } from './ExportComponentType';
import type { ExportDataSetupType } from './ExportDataSetupType';
import type { ExportDestinationType } from './ExportDestinationType';
import type { ExportGenerateConfigurationType } from './ExportGenerateConfigurationType';
import type { ExportHeaderSummaryType } from './ExportHeaderSummaryType';
import type { ExportXMLColumnsType } from './ExportXMLColumnsType';
/**
 * Type that hold configuration information related to export
 * @export
 * @interface ExportConfigurationType
 */
export interface ExportConfigurationType {
    /**
     * A collection of export columns.
     * @type {Array<ExportColumnDetailType>}
     * @memberof ExportConfigurationType
     */
    columns?: Array<ExportColumnDetailType>;
    /**
     * A collection of export components.
     * @type {Array<ExportComponentType>}
     * @memberof ExportConfigurationType
     */
    components?: Array<ExportComponentType>;
    /**
     *
     * @type {ExportDataSetupType}
     * @memberof ExportConfigurationType
     */
    dataSetup?: ExportDataSetupType;
    /**
     *
     * @type {ExportDestinationType}
     * @memberof ExportConfigurationType
     */
    destinationSetup?: ExportDestinationType;
    /**
     *
     * @type {ExportGenerateConfigurationType}
     * @memberof ExportConfigurationType
     */
    generateConfigSetup?: ExportGenerateConfigurationType;
    /**
     *
     * @type {ExportHeaderSummaryType}
     * @memberof ExportConfigurationType
     */
    summaryInfo?: ExportHeaderSummaryType;
    /**
     *
     * @type {ExportXMLColumnsType}
     * @memberof ExportConfigurationType
     */
    xmlColumns?: ExportXMLColumnsType;
}
/**
 * Check if a given object implements the ExportConfigurationType interface.
 */
export declare function instanceOfExportConfigurationType(value: object): boolean;
export declare function ExportConfigurationTypeFromJSON(json: any): ExportConfigurationType;
export declare function ExportConfigurationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportConfigurationType;
export declare function ExportConfigurationTypeToJSON(value?: ExportConfigurationType | null): any;
