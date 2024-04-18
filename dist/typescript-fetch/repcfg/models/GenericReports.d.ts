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
import type { ConfigGenericReportsType } from './ConfigGenericReportsType';
import type { InstanceLink } from './InstanceLink';
import type { WarningType } from './WarningType';
/**
 * This request provides End of Day reports to be created.
 * @export
 * @interface GenericReports
 */
export interface GenericReports {
    /**
     *
     * @type {ConfigGenericReportsType}
     * @memberof GenericReports
     */
    reports?: ConfigGenericReportsType;
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof GenericReports
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof GenericReports
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the GenericReports interface.
 */
export declare function instanceOfGenericReports(value: object): boolean;
export declare function GenericReportsFromJSON(json: any): GenericReports;
export declare function GenericReportsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GenericReports;
export declare function GenericReportsToJSON(value?: GenericReports | null): any;