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
import type { TimeSpanType } from './TimeSpanType';
/**
 * A template rate class.
 * @export
 * @interface TemplateRateClassType
 */
export interface TemplateRateClassType {
    /**
     * Description of the rate class.
     * @type {string}
     * @memberof TemplateRateClassType
     */
    description?: string;
    /**
     * Code that uniquely identifies the rate class.
     * @type {string}
     * @memberof TemplateRateClassType
     */
    rateClass?: string;
    /**
     * Display Sequence of the rate class.
     * @type {number}
     * @memberof TemplateRateClassType
     */
    sequence?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof TemplateRateClassType
     */
    timeSpan?: TimeSpanType;
}
/**
 * Check if a given object implements the TemplateRateClassType interface.
 */
export declare function instanceOfTemplateRateClassType(value: object): boolean;
export declare function TemplateRateClassTypeFromJSON(json: any): TemplateRateClassType;
export declare function TemplateRateClassTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRateClassType;
export declare function TemplateRateClassTypeToJSON(value?: TemplateRateClassType | null): any;
