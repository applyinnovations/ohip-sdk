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
import type { AmountType } from './AmountType';
import type { RateRangeType } from './RateRangeType';
/**
 * Individual rate amount.
 * @export
 * @interface RatesType
 */
export interface RatesType {
    /**
     * The Rate contains a collection of elements that define the amount of the rate, associated fees, additional occupant amounts. Taxes can be broken out or included within the various amounts. A currency can be associated to each amount.
     * @type {Array<AmountType>}
     * @memberof RatesType
     */
    rate?: Array<AmountType>;
    /**
     * Rate Range details like maximum rate amount and minimum rate amount in each available rate category.
     * @type {Array<RateRangeType>}
     * @memberof RatesType
     */
    rateRange?: Array<RateRangeType>;
}
/**
 * Check if a given object implements the RatesType interface.
 */
export declare function instanceOfRatesType(value: object): boolean;
export declare function RatesTypeFromJSON(json: any): RatesType;
export declare function RatesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RatesType;
export declare function RatesTypeToJSON(value?: RatesType | null): any;