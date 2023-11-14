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
import type { TotalType } from './TotalType';
/**
 * Rate Range details like maximum rate amount and minimum rate amount in each available rate category.
 * @export
 * @interface RateRangeType
 */
export interface RateRangeType {
    /**
     * The base amount charged for the accommodation or service.
     * @type {Array<TotalType>}
     * @memberof RateRangeType
     */
    base?: Array<TotalType>;
    /**
     * Rate Change Indicator.
     * @type {boolean}
     * @memberof RateRangeType
     */
    rateChange?: boolean;
}
/**
 * Check if a given object implements the RateRangeType interface.
 */
export declare function instanceOfRateRangeType(value: object): boolean;
export declare function RateRangeTypeFromJSON(json: any): RateRangeType;
export declare function RateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RateRangeType;
export declare function RateRangeTypeToJSON(value?: RateRangeType | null): any;