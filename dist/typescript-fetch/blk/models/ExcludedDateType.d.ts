/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { ExclusionReasonType } from './ExclusionReasonType';
/**
 * Specifies all the enabled dates.
 * @export
 * @interface ExcludedDateType
 */
export interface ExcludedDateType {
    /**
     * Contains exclusion date.
     * @type {string}
     * @memberof ExcludedDateType
     */
    date?: string;
    /**
     *
     * @type {ExclusionReasonType}
     * @memberof ExcludedDateType
     */
    reason?: ExclusionReasonType;
}
/**
 * Check if a given object implements the ExcludedDateType interface.
 */
export declare function instanceOfExcludedDateType(value: object): boolean;
export declare function ExcludedDateTypeFromJSON(json: any): ExcludedDateType;
export declare function ExcludedDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExcludedDateType;
export declare function ExcludedDateTypeToJSON(value?: ExcludedDateType | null): any;
