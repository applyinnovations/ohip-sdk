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
import type { LovParamDetailsType } from './LovParamDetailsType';
import type { ParamDataType } from './ParamDataType';
import type { ParamFormatMaskType } from './ParamFormatMaskType';
/**
 * Defines an individual report parameter.
 * @export
 * @interface ReportParameterType
 */
export interface ReportParameterType {
    /**
     * Individual report parameter details.
     * @type {string}
     * @memberof ReportParameterType
     */
    name?: string;
    /**
     * Display label for report parameter.
     * @type {string}
     * @memberof ReportParameterType
     */
    label?: string;
    /**
     *
     * @type {ParamDataType}
     * @memberof ReportParameterType
     */
    dataType?: ParamDataType;
    /**
     * Initial report parameter value.
     * @type {string}
     * @memberof ReportParameterType
     */
    value?: string;
    /**
     * Date value from offset.
     * @type {string}
     * @memberof ReportParameterType
     */
    calculatedDateValue?: string;
    /**
     * Format mask for date report parameters.
     * @type {string}
     * @memberof ReportParameterType
     */
    dateFormatMask?: string;
    /**
     * Report parameter display order.
     * @type {number}
     * @memberof ReportParameterType
     */
    orderBy?: number;
    /**
     * Number of days to offset from current business date for date report parameter.
     * @type {number}
     * @memberof ReportParameterType
     */
    dateOffset?: number;
    /**
     *
     * @type {ParamFormatMaskType}
     * @memberof ReportParameterType
     */
    formatMask?: ParamFormatMaskType;
    /**
     *
     * @type {string}
     * @memberof ReportParameterType
     */
    buildStringForDateOffset?: string;
    /**
     *
     * @type {LovParamDetailsType}
     * @memberof ReportParameterType
     */
    lovParam?: LovParamDetailsType;
}
/**
 * Check if a given object implements the ReportParameterType interface.
 */
export declare function instanceOfReportParameterType(value: object): boolean;
export declare function ReportParameterTypeFromJSON(json: any): ReportParameterType;
export declare function ReportParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportParameterType;
export declare function ReportParameterTypeToJSON(value?: ReportParameterType | null): any;