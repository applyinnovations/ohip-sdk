/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { AutoGenerateTaskSheetsCriteriaType } from './AutoGenerateTaskSheetsCriteriaType';
import type { Links } from './Links';
import type { WarningsType } from './WarningsType';
/**
 * Response for retrieving a task sheet template. It contains all the information of the previously generated tasksheet.
 * @export
 * @interface TaskSheetTemplate
 */
export interface TaskSheetTemplate {
    /**
     *
     * @type {Links}
     * @memberof TaskSheetTemplate
     */
    links?: Links;
    /**
     *
     * @type {AutoGenerateTaskSheetsCriteriaType}
     * @memberof TaskSheetTemplate
     */
    taskSheetTemplateDetails?: AutoGenerateTaskSheetsCriteriaType;
    /**
     *
     * @type {WarningsType}
     * @memberof TaskSheetTemplate
     */
    warnings?: WarningsType;
}
/**
 * Check if a given object implements the TaskSheetTemplate interface.
 */
export declare function instanceOfTaskSheetTemplate(value: object): boolean;
export declare function TaskSheetTemplateFromJSON(json: any): TaskSheetTemplate;
export declare function TaskSheetTemplateFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSheetTemplate;
export declare function TaskSheetTemplateToJSON(value?: TaskSheetTemplate | null): any;