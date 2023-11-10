/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * Contains Common Master configuration detail.
 * @export
 * @interface TemplateCodeType
 */
export interface TemplateCodeType {
    /**
     * Common Master unique code.
     * @type {string}
     * @memberof TemplateCodeType
     */
    code?: string;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof TemplateCodeType
     */
    description?: TranslationTextType2000;
    /**
     * Common Master record sequence number.
     * @type {number}
     * @memberof TemplateCodeType
     */
    displayOrder?: number;
    /**
     * Determines whether this code is inactive or not.
     * @type {boolean}
     * @memberof TemplateCodeType
     */
    inactive?: boolean;
}
/**
 * Check if a given object implements the TemplateCodeType interface.
 */
export declare function instanceOfTemplateCodeType(value: object): boolean;
export declare function TemplateCodeTypeFromJSON(json: any): TemplateCodeType;
export declare function TemplateCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateCodeType;
export declare function TemplateCodeTypeToJSON(value?: TemplateCodeType | null): any;
