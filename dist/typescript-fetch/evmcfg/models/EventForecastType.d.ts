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
import type { EventForecastInfoType } from './EventForecastInfoType';
import type { EventForecastRevDetailType } from './EventForecastRevDetailType';
import type { UniqueIDType } from './UniqueIDType';
/**
 * Type used for managing forecast for any event.
 * @export
 * @interface EventForecastType
 */
export interface EventForecastType {
    /**
     *
     * @type {UniqueIDType}
     * @memberof EventForecastType
     */
    forecastId?: UniqueIDType;
    /**
     * Provides information about the event forecast.
     * @type {Array<EventForecastInfoType>}
     * @memberof EventForecastType
     */
    forecastInfo?: Array<EventForecastInfoType>;
    /**
     * Hotel Code to which the Event Forecast belongs to.
     * @type {string}
     * @memberof EventForecastType
     */
    hotelId?: string;
    /**
     * Collection of Event Forecast Revenue Details.
     * @type {Array<EventForecastRevDetailType>}
     * @memberof EventForecastType
     */
    revenueDetails?: Array<EventForecastRevDetailType>;
}
/**
 * Check if a given object implements the EventForecastType interface.
 */
export declare function instanceOfEventForecastType(value: object): boolean;
export declare function EventForecastTypeFromJSON(json: any): EventForecastType;
export declare function EventForecastTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventForecastType;
export declare function EventForecastTypeToJSON(value?: EventForecastType | null): any;
