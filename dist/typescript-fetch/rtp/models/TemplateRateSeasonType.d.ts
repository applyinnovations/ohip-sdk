/**
 * OPERA Cloud Rate API
 * APIs to cater for Rate Availability functionality in OPERA Cloud. <br /><br /> Rate Management provides all the tools you need to effectively define and manage the rate structures for a property in OPERA Cloud. Some of the things you can do include creating and managing rate codes, rate classes, rate categories, display sets, rate strategies, as well as managing promotion groups and codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { TimeSpanType } from './TimeSpanType';
/**
 * Base details common between hotel and template rate seasons.
 * @export
 * @interface TemplateRateSeasonType
 */
export interface TemplateRateSeasonType {
    /**
     *
     * @type {TimeSpanType}
     * @memberof TemplateRateSeasonType
     */
    dateRange?: TimeSpanType;
    /**
     * Description of the rate season.
     * @type {string}
     * @memberof TemplateRateSeasonType
     */
    description?: string;
    /**
     * Season code to identify the rate season.
     * @type {string}
     * @memberof TemplateRateSeasonType
     */
    seasonCode?: string;
}
/**
 * Check if a given object implements the TemplateRateSeasonType interface.
 */
export declare function instanceOfTemplateRateSeasonType(value: object): boolean;
export declare function TemplateRateSeasonTypeFromJSON(json: any): TemplateRateSeasonType;
export declare function TemplateRateSeasonTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TemplateRateSeasonType;
export declare function TemplateRateSeasonTypeToJSON(value?: TemplateRateSeasonType | null): any;
