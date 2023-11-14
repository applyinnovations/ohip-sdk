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
import type { ProfileHotelStatisticsbyYearSummaryType } from './ProfileHotelStatisticsbyYearSummaryType';
import {
    ProfileHotelStatisticsbyYearSummaryTypeFromJSON,
    ProfileHotelStatisticsbyYearSummaryTypeFromJSONTyped,
    ProfileHotelStatisticsbyYearSummaryTypeToJSON,
} from './ProfileHotelStatisticsbyYearSummaryType';
import type { ProfileStatisticsbyYearSummaryType } from './ProfileStatisticsbyYearSummaryType';
import {
    ProfileStatisticsbyYearSummaryTypeFromJSON,
    ProfileStatisticsbyYearSummaryTypeFromJSONTyped,
    ProfileStatisticsbyYearSummaryTypeToJSON,
} from './ProfileStatisticsbyYearSummaryType';

/**
 * Collection of Profile statistics summary information
 * @export
 * @interface StatisticsSummaryListType
 */
export interface StatisticsSummaryListType {
    /**
     * 
     * @type {Array<ProfileHotelStatisticsbyYearSummaryType>}
     * @memberof StatisticsSummaryListType
     */
    profileHotelStatisticsbyYearSummary?: Array<ProfileHotelStatisticsbyYearSummaryType>;
    /**
     * 
     * @type {Array<ProfileStatisticsbyYearSummaryType>}
     * @memberof StatisticsSummaryListType
     */
    profileStatisticsbyYearSummary?: Array<ProfileStatisticsbyYearSummaryType>;
}

/**
 * Check if a given object implements the StatisticsSummaryListType interface.
 */
export function instanceOfStatisticsSummaryListType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StatisticsSummaryListTypeFromJSON(json: any): StatisticsSummaryListType {
    return StatisticsSummaryListTypeFromJSONTyped(json, false);
}

export function StatisticsSummaryListTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StatisticsSummaryListType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileHotelStatisticsbyYearSummary': !exists(json, 'profileHotelStatisticsbyYearSummary') ? undefined : ((json['profileHotelStatisticsbyYearSummary'] as Array<any>).map(ProfileHotelStatisticsbyYearSummaryTypeFromJSON)),
        'profileStatisticsbyYearSummary': !exists(json, 'profileStatisticsbyYearSummary') ? undefined : ((json['profileStatisticsbyYearSummary'] as Array<any>).map(ProfileStatisticsbyYearSummaryTypeFromJSON)),
    };
}

export function StatisticsSummaryListTypeToJSON(value?: StatisticsSummaryListType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileHotelStatisticsbyYearSummary': value.profileHotelStatisticsbyYearSummary === undefined ? undefined : ((value.profileHotelStatisticsbyYearSummary as Array<any>).map(ProfileHotelStatisticsbyYearSummaryTypeToJSON)),
        'profileStatisticsbyYearSummary': value.profileStatisticsbyYearSummary === undefined ? undefined : ((value.profileStatisticsbyYearSummary as Array<any>).map(ProfileStatisticsbyYearSummaryTypeToJSON)),
    };
}
