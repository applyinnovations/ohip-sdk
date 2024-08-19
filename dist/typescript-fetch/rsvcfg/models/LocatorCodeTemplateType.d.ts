/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
/**
 * Common code type for code, description
 * @export
 * @interface LocatorCodeTemplateType
 */
export interface LocatorCodeTemplateType {
    /**
     * Code for the code type.
     * @type {string}
     * @memberof LocatorCodeTemplateType
     */
    code?: string;
    /**
     * Description for the code type.
     * @type {string}
     * @memberof LocatorCodeTemplateType
     */
    description?: string;
    /**
     * Sequence for locator code
     * @type {number}
     * @memberof LocatorCodeTemplateType
     */
    displaySequence?: number;
    /**
     * Indicates whether the locator code is active or not
     * @type {boolean}
     * @memberof LocatorCodeTemplateType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the LocatorCodeTemplateType interface.
 */
export declare function instanceOfLocatorCodeTemplateType(value: object): boolean;
export declare function LocatorCodeTemplateTypeFromJSON(json: any): LocatorCodeTemplateType;
export declare function LocatorCodeTemplateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LocatorCodeTemplateType;
export declare function LocatorCodeTemplateTypeToJSON(value?: LocatorCodeTemplateType | null): any;
