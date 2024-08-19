/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CodeDescriptionType } from './CodeDescriptionType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { ForecastRevenueAmountTypeType } from './ForecastRevenueAmountTypeType';
/**
 * Revenue Details for a revenue type attached to an event forecast.
 * @export
 * @interface EventForecastRevDetailType
 */
export interface EventForecastRevDetailType {
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof EventForecastRevDetailType
     */
    amount?: CurrencyAmountType;
    /**
     *
     * @type {ForecastRevenueAmountTypeType}
     * @memberof EventForecastRevDetailType
     */
    amountType?: ForecastRevenueAmountTypeType;
    /**
     *
     * @type {CodeDescriptionType}
     * @memberof EventForecastRevDetailType
     */
    revenueType?: CodeDescriptionType;
}
/**
 * Check if a given object implements the EventForecastRevDetailType interface.
 */
export declare function instanceOfEventForecastRevDetailType(value: object): boolean;
export declare function EventForecastRevDetailTypeFromJSON(json: any): EventForecastRevDetailType;
export declare function EventForecastRevDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventForecastRevDetailType;
export declare function EventForecastRevDetailTypeToJSON(value?: EventForecastRevDetailType | null): any;
