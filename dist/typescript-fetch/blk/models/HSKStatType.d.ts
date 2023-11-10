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
import type { HSKStatCodeType } from './HSKStatCodeType';
import type { StatUnitCategoryType } from './StatUnitCategoryType';
/**
 * Since the statistical value can be represented in different measure of units, this element will provide a flexible definition for the supported Opera9 statistical units.
 * @export
 * @interface HSKStatType
 */
export interface HSKStatType {
    /**
     *
     * @type {HSKStatCodeType}
     * @memberof HSKStatType
     */
    code?: HSKStatCodeType;
    /**
     *
     * @type {StatUnitCategoryType}
     * @memberof HSKStatType
     */
    unitCategory?: StatUnitCategoryType;
    /**
     * Unit of measurement or the actual code that defines the value. Eg. CurrencyCode for the Amount Category.
     * @type {string}
     * @memberof HSKStatType
     */
    unitType?: string;
    /**
     * Statistical value.
     * @type {number}
     * @memberof HSKStatType
     */
    unitValue?: number;
}
/**
 * Check if a given object implements the HSKStatType interface.
 */
export declare function instanceOfHSKStatType(value: object): boolean;
export declare function HSKStatTypeFromJSON(json: any): HSKStatType;
export declare function HSKStatTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HSKStatType;
export declare function HSKStatTypeToJSON(value?: HSKStatType | null): any;
