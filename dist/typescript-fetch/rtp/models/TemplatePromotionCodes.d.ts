/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { InstanceLink } from './InstanceLink';
import type { TemplatePromotionCodeType } from './TemplatePromotionCodeType';
import type { WarningType } from './WarningType';
/**
 *
 * @export
 * @interface TemplatePromotionCodes
 */
export interface TemplatePromotionCodes {
    /**
     *
     * @type {Array<InstanceLink>}
     * @memberof TemplatePromotionCodes
     */
    links?: Array<InstanceLink>;
    /**
     * A template promotion.
     * @type {Array<TemplatePromotionCodeType>}
     * @memberof TemplatePromotionCodes
     */
    templatePromotionCodes?: Array<TemplatePromotionCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof TemplatePromotionCodes
     */
    warnings?: Array<WarningType>;
}
/**
 * Check if a given object implements the TemplatePromotionCodes interface.
 */
export declare function instanceOfTemplatePromotionCodes(value: object): boolean;
export declare function TemplatePromotionCodesFromJSON(json: any): TemplatePromotionCodes;
export declare function TemplatePromotionCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplatePromotionCodes;
export declare function TemplatePromotionCodesToJSON(value?: TemplatePromotionCodes | null): any;