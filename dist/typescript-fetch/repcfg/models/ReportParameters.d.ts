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
import type { InstanceLink } from './InstanceLink';
import type { ReportParameterType } from './ReportParameterType';
import type { WarningType } from './WarningType';
/**
 * The Fetch Report Parameters result object contains a collection of report parameters which allow/require user input prior to running the report.
 * @export
 * @interface ReportParameters
 */
export interface ReportParameters {
    /**
     * List of parameters required to run report.
     * @type {Array<ReportParameterType>}
     * @memberof ReportParameters
     */
    reportParameters?: Array<ReportParameterType>;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ReportParameters
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReportParameters
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ReportParameters interface.
 */
export declare function instanceOfReportParameters(value: object): boolean;
export declare function ReportParametersFromJSON(json: any): ReportParameters;
export declare function ReportParametersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportParameters;
export declare function ReportParametersToJSON(value?: ReportParameters | null): any;