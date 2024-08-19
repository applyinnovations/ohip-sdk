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
import type { CopyReportsType } from './CopyReportsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * Request object to copy the Report Text Configurations from Source Property to Destination Properties.
 * @export
 * @interface ReportTextConfigurationsCopy
 */
export interface ReportTextConfigurationsCopy {
    /**
     *
     * @type {CopyReportsType}
     * @memberof ReportTextConfigurationsCopy
     */
    copyReports?: CopyReportsType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof ReportTextConfigurationsCopy
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ReportTextConfigurationsCopy
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the ReportTextConfigurationsCopy interface.
 */
export declare function instanceOfReportTextConfigurationsCopy(value: object): boolean;
export declare function ReportTextConfigurationsCopyFromJSON(json: any): ReportTextConfigurationsCopy;
export declare function ReportTextConfigurationsCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportTextConfigurationsCopy;
export declare function ReportTextConfigurationsCopyToJSON(value?: ReportTextConfigurationsCopy | null): any;
