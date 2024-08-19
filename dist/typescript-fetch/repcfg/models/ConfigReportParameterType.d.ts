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
import type { ParamDataType } from './ParamDataType';
/**
 * A report parameter.
 * @export
 * @interface ConfigReportParameterType
 */
export interface ConfigReportParameterType {
    /**
     * Report parameter name.
     * @type {string}
     * @memberof ConfigReportParameterType
     */
    name?: string;
    /**
     * Display label for report parameter.
     * @type {string}
     * @memberof ConfigReportParameterType
     */
    label?: string;
    /**
     *
     * @type {ParamDataType}
     * @memberof ConfigReportParameterType
     */
    dataType?: ParamDataType;
    /**
     * Default report parameter value.
     * @type {string}
     * @memberof ConfigReportParameterType
     */
    value?: string;
    /**
     * Date Ofset could be in the format +x DAYS.
     * @type {string}
     * @memberof ConfigReportParameterType
     */
    dateOffset?: string;
    /**
     * Query statement for LOV based report parameters.
     * @type {string}
     * @memberof ConfigReportParameterType
     */
    lovSql?: string;
    /**
     * Display sequence of report parameter.
     * @type {number}
     * @memberof ConfigReportParameterType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the ConfigReportParameterType interface.
 */
export declare function instanceOfConfigReportParameterType(value: object): boolean;
export declare function ConfigReportParameterTypeFromJSON(json: any): ConfigReportParameterType;
export declare function ConfigReportParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigReportParameterType;
export declare function ConfigReportParameterTypeToJSON(value?: ConfigReportParameterType | null): any;
