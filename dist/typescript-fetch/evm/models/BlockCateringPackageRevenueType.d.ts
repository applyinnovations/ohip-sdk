/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { DateTimeSpanType } from './DateTimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Type used for managing Revenue Details associated with a particular Catering Package Price Code.
 * @export
 * @interface BlockCateringPackageRevenueType
 */
export interface BlockCateringPackageRevenueType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof BlockCateringPackageRevenueType
     */
    costExpected?: CurrencyAmountType;
    /**
     * Name of event.
     * @type {string}
     * @memberof BlockCateringPackageRevenueType
     */
    eventName?: string;
    /**
     *
     * @type {DateTimeSpanType}
     * @memberof BlockCateringPackageRevenueType
     */
    eventTimeSpan?: DateTimeSpanType;
    /**
     * Type of event.
     * @type {string}
     * @memberof BlockCateringPackageRevenueType
     */
    eventType?: string;
    /**
     * Sorting Order.
     * @type {number}
     * @memberof BlockCateringPackageRevenueType
     */
    orderBy?: number;
    /**
     *
     * @type {UniqueIDType}
     * @memberof BlockCateringPackageRevenueType
     */
    packageEventId?: UniqueIDType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof BlockCateringPackageRevenueType
     */
    revExpected?: CurrencyAmountType;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof BlockCateringPackageRevenueType
     */
    revForecast?: CurrencyAmountType;
    /**
     * Revenue Type associated with the Catering Package Price Code.
     * @type {string}
     * @memberof BlockCateringPackageRevenueType
     */
    revType?: string;
}
/**
 * Check if a given object implements the BlockCateringPackageRevenueType interface.
 */
export declare function instanceOfBlockCateringPackageRevenueType(value: object): boolean;
export declare function BlockCateringPackageRevenueTypeFromJSON(json: any): BlockCateringPackageRevenueType;
export declare function BlockCateringPackageRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockCateringPackageRevenueType;
export declare function BlockCateringPackageRevenueTypeToJSON(value?: BlockCateringPackageRevenueType | null): any;