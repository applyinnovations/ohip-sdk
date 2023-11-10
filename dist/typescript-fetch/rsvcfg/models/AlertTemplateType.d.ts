/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Common code type for code, description
 * @export
 * @interface AlertTemplateType
 */
export interface AlertTemplateType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof AlertTemplateType
     */
    code?: string;
    /**
     * Description for the code type.
     * @type {string}
     * @memberof AlertTemplateType
     */
    description?: string;
    /**
     * Sequence for alert template.
     * @type {number}
     * @memberof AlertTemplateType
     */
    displaySequence?: number;
}
/**
 * Check if a given object implements the AlertTemplateType interface.
 */
export declare function instanceOfAlertTemplateType(value: object): boolean;
export declare function AlertTemplateTypeFromJSON(json: any): AlertTemplateType;
export declare function AlertTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AlertTemplateType;
export declare function AlertTemplateTypeToJSON(value?: AlertTemplateType | null): any;
