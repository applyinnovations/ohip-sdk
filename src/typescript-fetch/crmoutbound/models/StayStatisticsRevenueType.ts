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
import type { StatisticsRevenueTypeType } from './StatisticsRevenueTypeType';
import {
    StatisticsRevenueTypeTypeFromJSON,
    StatisticsRevenueTypeTypeFromJSONTyped,
    StatisticsRevenueTypeTypeToJSON,
} from './StatisticsRevenueTypeType';
import type { StayReservationType } from './StayReservationType';
import {
    StayReservationTypeFromJSON,
    StayReservationTypeFromJSONTyped,
    StayReservationTypeToJSON,
} from './StayReservationType';

/**
 * Contains different list of stay statistics revenue information
 * @export
 * @interface StayStatisticsRevenueType
 */
export interface StayStatisticsRevenueType {
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    averageDailyRate?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    totalRevenue?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    roomRevenue?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    fBRevenue?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    extraRevenue?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {StatisticsRevenueTypeType}
     * @memberof StayStatisticsRevenueType
     */
    nonRevenue?: StatisticsRevenueTypeType;
    /**
     * 
     * @type {string}
     * @memberof StayStatisticsRevenueType
     */
    currency?: string;
    /**
     * 
     * @type {StayReservationType}
     * @memberof StayStatisticsRevenueType
     */
    stayReservation?: StayReservationType;
}

/**
 * Check if a given object implements the StayStatisticsRevenueType interface.
 */
export function instanceOfStayStatisticsRevenueType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayStatisticsRevenueTypeFromJSON(json: any): StayStatisticsRevenueType {
    return StayStatisticsRevenueTypeFromJSONTyped(json, false);
}

export function StayStatisticsRevenueTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayStatisticsRevenueType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'averageDailyRate': !exists(json, 'averageDailyRate') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['averageDailyRate']),
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['totalRevenue']),
        'roomRevenue': !exists(json, 'roomRevenue') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['roomRevenue']),
        'fBRevenue': !exists(json, 'fBRevenue') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['fBRevenue']),
        'extraRevenue': !exists(json, 'extraRevenue') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['extraRevenue']),
        'nonRevenue': !exists(json, 'nonRevenue') ? undefined : StatisticsRevenueTypeTypeFromJSON(json['nonRevenue']),
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'stayReservation': !exists(json, 'stayReservation') ? undefined : StayReservationTypeFromJSON(json['stayReservation']),
    };
}

export function StayStatisticsRevenueTypeToJSON(value?: StayStatisticsRevenueType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'averageDailyRate': StatisticsRevenueTypeTypeToJSON(value.averageDailyRate),
        'totalRevenue': StatisticsRevenueTypeTypeToJSON(value.totalRevenue),
        'roomRevenue': StatisticsRevenueTypeTypeToJSON(value.roomRevenue),
        'fBRevenue': StatisticsRevenueTypeTypeToJSON(value.fBRevenue),
        'extraRevenue': StatisticsRevenueTypeTypeToJSON(value.extraRevenue),
        'nonRevenue': StatisticsRevenueTypeTypeToJSON(value.nonRevenue),
        'currency': value.currency,
        'stayReservation': StayReservationTypeToJSON(value.stayReservation),
    };
}
