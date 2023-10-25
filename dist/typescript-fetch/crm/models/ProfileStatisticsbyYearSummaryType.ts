/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { StayDetailSummaryType } from './StayDetailSummaryType';
import {
    StayDetailSummaryTypeFromJSON,
    StayDetailSummaryTypeFromJSONTyped,
    StayDetailSummaryTypeToJSON,
} from './StayDetailSummaryType';
import type { StayStatisticsRevenueType } from './StayStatisticsRevenueType';
import {
    StayStatisticsRevenueTypeFromJSON,
    StayStatisticsRevenueTypeFromJSONTyped,
    StayStatisticsRevenueTypeToJSON,
} from './StayStatisticsRevenueType';

/**
 * Contains stay statistics summary information by year
 * @export
 * @interface ProfileStatisticsbyYearSummaryType
 */
export interface ProfileStatisticsbyYearSummaryType {
    /**
     * 
     * @type {Array<StayStatisticsRevenueType>}
     * @memberof ProfileStatisticsbyYearSummaryType
     */
    netRevenue?: Array<StayStatisticsRevenueType>;
    /**
     * 
     * @type {Array<StayDetailSummaryType>}
     * @memberof ProfileStatisticsbyYearSummaryType
     */
    stayDetail?: Array<StayDetailSummaryType>;
    /**
     * 
     * @type {string}
     * @memberof ProfileStatisticsbyYearSummaryType
     */
    year?: string;
}

/**
 * Check if a given object implements the ProfileStatisticsbyYearSummaryType interface.
 */
export function instanceOfProfileStatisticsbyYearSummaryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileStatisticsbyYearSummaryTypeFromJSON(json: any): ProfileStatisticsbyYearSummaryType {
    return ProfileStatisticsbyYearSummaryTypeFromJSONTyped(json, false);
}

export function ProfileStatisticsbyYearSummaryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileStatisticsbyYearSummaryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'netRevenue': !exists(json, 'netRevenue') ? undefined : ((json['netRevenue'] as Array<any>).map(StayStatisticsRevenueTypeFromJSON)),
        'stayDetail': !exists(json, 'stayDetail') ? undefined : ((json['stayDetail'] as Array<any>).map(StayDetailSummaryTypeFromJSON)),
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function ProfileStatisticsbyYearSummaryTypeToJSON(value?: ProfileStatisticsbyYearSummaryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'netRevenue': value.netRevenue === undefined ? undefined : ((value.netRevenue as Array<any>).map(StayStatisticsRevenueTypeToJSON)),
        'stayDetail': value.stayDetail === undefined ? undefined : ((value.stayDetail as Array<any>).map(StayDetailSummaryTypeToJSON)),
        'year': value.year,
    };
}

