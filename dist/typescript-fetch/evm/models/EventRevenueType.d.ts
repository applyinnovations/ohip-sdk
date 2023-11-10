/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
/**
 *
 * @export
 * @interface EventRevenueType
 */
export interface EventRevenueType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof EventRevenueType
     */
    revenue?: CurrencyAmountType;
    /**
     * Type of Revenue
     * @type {string}
     * @memberof EventRevenueType
     */
    revenueType?: string;
}
/**
 * Check if a given object implements the EventRevenueType interface.
 */
export declare function instanceOfEventRevenueType(value: object): boolean;
export declare function EventRevenueTypeFromJSON(json: any): EventRevenueType;
export declare function EventRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventRevenueType;
export declare function EventRevenueTypeToJSON(value?: EventRevenueType | null): any;
