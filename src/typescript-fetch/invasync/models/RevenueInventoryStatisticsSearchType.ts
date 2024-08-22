/* tslint:disable */
/* eslint-disable */
/**
 * Opera Cloud Inventory Asynchronous API
 * APIs to cater for Inventory related asynchronous functionality in OPERA Cloud. This includes viewing inventory data along with its revenue and updating inventory&apos;s sell limits for date ranges. <p>This API follows an async pattern where</p><ul><li>You make an initial request, which returns a Location header</li><li>You poll HEAD on the Location header returned to obtain the status of the process</li><li>Once the process completes HEAD will return in the Location header the URL that must be called to obtain the results of the process</li><li>You call the URL to obtain the results of the process</li></ul><br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Fetch criteria type for fetching revenue inventory statistics.
 * @export
 * @interface RevenueInventoryStatisticsSearchType
 */
export interface RevenueInventoryStatisticsSearchType {
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    dateRangeEnd?: string;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    dateRangeStart?: string;
    /**
     * Group by instructions for revenue inventory statistics that can be used in request operation. Response data will be grouped according to the values provided in this array. MarketCode and RoomType grouping is used for past and future revenue and inventory statistics while GuaranteeType is used only for future revenue and inventory statistics.
     * @type {Set<string>}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    groupBy?: Set<RevenueInventoryStatisticsSearchTypeGroupByEnum>;
    /**
     * The reservation guarantee codes for which revenue and inventory statistics will be gathered.
     * @type {Array<string>}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    guaranteeCodes?: Array<string>;
    /**
     * The market codes for which revenue and inventory statistics will be gathered.
     * @type {Array<string>}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    marketCodes?: Array<string>;
    /**
     * The optional room types by which revenue and inventory statistics will be grouped.
     * @type {Array<string>}
     * @memberof RevenueInventoryStatisticsSearchType
     */
    roomTypes?: Array<string>;
}


/**
 * @export
 */
export const RevenueInventoryStatisticsSearchTypeGroupByEnum = {
    MarketCode: 'MarketCode',
    RoomType: 'RoomType',
    GuaranteeType: 'GuaranteeType'
} as const;
export type RevenueInventoryStatisticsSearchTypeGroupByEnum = typeof RevenueInventoryStatisticsSearchTypeGroupByEnum[keyof typeof RevenueInventoryStatisticsSearchTypeGroupByEnum];


/**
 * Check if a given object implements the RevenueInventoryStatisticsSearchType interface.
 */
export function instanceOfRevenueInventoryStatisticsSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueInventoryStatisticsSearchTypeFromJSON(json: any): RevenueInventoryStatisticsSearchType {
    return RevenueInventoryStatisticsSearchTypeFromJSONTyped(json, false);
}

export function RevenueInventoryStatisticsSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueInventoryStatisticsSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dateRangeEnd': !exists(json, 'dateRangeEnd') ? undefined : json['dateRangeEnd'],
        'dateRangeStart': !exists(json, 'dateRangeStart') ? undefined : json['dateRangeStart'],
        'groupBy': !exists(json, 'groupBy') ? undefined : json['groupBy'],
        'guaranteeCodes': !exists(json, 'guaranteeCodes') ? undefined : json['guaranteeCodes'],
        'marketCodes': !exists(json, 'marketCodes') ? undefined : json['marketCodes'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}

export function RevenueInventoryStatisticsSearchTypeToJSON(value?: RevenueInventoryStatisticsSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dateRangeEnd': value.dateRangeEnd,
        'dateRangeStart': value.dateRangeStart,
        'groupBy': value.groupBy === undefined ? undefined : Array.from(value.groupBy as Set<any>),
        'guaranteeCodes': value.guaranteeCodes,
        'marketCodes': value.marketCodes,
        'roomTypes': value.roomTypes,
    };
}

