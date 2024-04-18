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
import type { ReportsType } from './ReportsType';
import type { WarningType } from './WarningType';
/**
 * This type contains a collection of report modules which match the requested criteria. The object also may include a standard SUCCESS element or a WARNINGS or ERRORS collection.
 * @export
 * @interface Reports
 */
export interface Reports {
    /**
     *
     * @type {ReportsType}
     * @memberof Reports
     */
    reports?: ReportsType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof Reports
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof Reports
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the Reports interface.
 */
export declare function instanceOfReports(value: object): boolean;
export declare function ReportsFromJSON(json: any): Reports;
export declare function ReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Reports;
export declare function ReportsToJSON(value?: Reports | null): any;