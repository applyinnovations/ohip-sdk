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
import type { TranslationTextType50 } from './TranslationTextType50';
/**
 * Common code type for code, description, seq and inactive
 * @export
 * @interface TemplateSourceCodeType
 */
export interface TemplateSourceCodeType {
    /**
     * Chain code for the code type.
     * @type {string}
     * @memberof TemplateSourceCodeType
     */
    chainCode?: string;
    /**
     * Code for the code type.
     * @type {string}
     * @memberof TemplateSourceCodeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType50}
     * @memberof TemplateSourceCodeType
     */
    description?: TranslationTextType50;
    /**
     * Group code to which this code type belongs.
     * @type {string}
     * @memberof TemplateSourceCodeType
     */
    groupCode?: string;
    /**
     * Indicates the code type is inactive or not.
     * @type {boolean}
     * @memberof TemplateSourceCodeType
     */
    inactive?: boolean;
    /**
     * Display sequence for the code type.
     * @type {number}
     * @memberof TemplateSourceCodeType
     */
    sequence?: number;
}
/**
 * Check if a given object implements the TemplateSourceCodeType interface.
 */
export declare function instanceOfTemplateSourceCodeType(value: object): boolean;
export declare function TemplateSourceCodeTypeFromJSON(json: any): TemplateSourceCodeType;
export declare function TemplateSourceCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateSourceCodeType;
export declare function TemplateSourceCodeTypeToJSON(value?: TemplateSourceCodeType | null): any;