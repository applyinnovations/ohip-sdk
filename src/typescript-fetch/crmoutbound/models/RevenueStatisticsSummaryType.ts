/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RevenueStatisticsDetailListType } from './RevenueStatisticsDetailListType';
import {
    RevenueStatisticsDetailListTypeFromJSON,
    RevenueStatisticsDetailListTypeFromJSONTyped,
    RevenueStatisticsDetailListTypeToJSON,
} from './RevenueStatisticsDetailListType';

/**
 * Summary of the revenue for a year
 * @export
 * @interface RevenueStatisticsSummaryType
 */
export interface RevenueStatisticsSummaryType {
    /**
     * 
     * @type {RevenueStatisticsDetailListType}
     * @memberof RevenueStatisticsSummaryType
     */
    revenueDetails?: RevenueStatisticsDetailListType;
    /**
     * Year of the revenue.
     * @type {string}
     * @memberof RevenueStatisticsSummaryType
     */
    year?: string;
}

/**
 * Check if a given object implements the RevenueStatisticsSummaryType interface.
 */
export function instanceOfRevenueStatisticsSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RevenueStatisticsSummaryTypeFromJSON(json: any): RevenueStatisticsSummaryType {
    return RevenueStatisticsSummaryTypeFromJSONTyped(json, false);
}

export function RevenueStatisticsSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RevenueStatisticsSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'revenueDetails': !exists(json, 'revenueDetails') ? undefined : RevenueStatisticsDetailListTypeFromJSON(json['revenueDetails']),
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function RevenueStatisticsSummaryTypeToJSON(value?: RevenueStatisticsSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'revenueDetails': RevenueStatisticsDetailListTypeToJSON(value.revenueDetails),
        'year': value.year,
    };
}
