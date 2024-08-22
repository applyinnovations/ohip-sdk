/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RevenueStatisticsSummaryType } from './RevenueStatisticsSummaryType';
import {
    RevenueStatisticsSummaryTypeFromJSON,
    RevenueStatisticsSummaryTypeFromJSONTyped,
    RevenueStatisticsSummaryTypeToJSON,
} from './RevenueStatisticsSummaryType';
import type { StatisticsReportType } from './StatisticsReportType';
import {
    StatisticsReportTypeFromJSON,
    StatisticsReportTypeFromJSONTyped,
    StatisticsReportTypeToJSON,
} from './StatisticsReportType';
import type { StatisticsSummaryListType } from './StatisticsSummaryListType';
import {
    StatisticsSummaryListTypeFromJSON,
    StatisticsSummaryListTypeFromJSONTyped,
    StatisticsSummaryListTypeToJSON,
} from './StatisticsSummaryListType';
import type { StayStatisticsDetailType } from './StayStatisticsDetailType';
import {
    StayStatisticsDetailTypeFromJSON,
    StayStatisticsDetailTypeFromJSONTyped,
    StayStatisticsDetailTypeToJSON,
} from './StayStatisticsDetailType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contains summary/detail/Revenue statistics information for Profile.
 * @export
 * @interface ProfileStatisticsType
 */
export interface ProfileStatisticsType {
    /**
     * Unique Id that references an object uniquely in the system.
     * @type {Array<UniqueIDType>}
     * @memberof ProfileStatisticsType
     */
    profileIdList?: Array<UniqueIDType>;
    /**
     * 
     * @type {StatisticsReportType}
     * @memberof ProfileStatisticsType
     */
    reportType?: StatisticsReportType;
    /**
     * List of the detailed and yearly summarized information about the profile revenue.
     * @type {Array<RevenueStatisticsSummaryType>}
     * @memberof ProfileStatisticsType
     */
    revenueStatisticsSummaryList?: Array<RevenueStatisticsSummaryType>;
    /**
     * Collection of stay statistics detail information
     * @type {Array<StayStatisticsDetailType>}
     * @memberof ProfileStatisticsType
     */
    stayStatisticsDetailList?: Array<StayStatisticsDetailType>;
    /**
     * 
     * @type {StatisticsSummaryListType}
     * @memberof ProfileStatisticsType
     */
    stayStatisticsSummaryList?: StatisticsSummaryListType;
}

/**
 * Check if a given object implements the ProfileStatisticsType interface.
 */
export function instanceOfProfileStatisticsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileStatisticsTypeFromJSON(json: any): ProfileStatisticsType {
    return ProfileStatisticsTypeFromJSONTyped(json, false);
}

export function ProfileStatisticsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileStatisticsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ((json['profileIdList'] as Array<any>).map(UniqueIDTypeFromJSON)),
        'reportType': !exists(json, 'reportType') ? undefined : StatisticsReportTypeFromJSON(json['reportType']),
        'revenueStatisticsSummaryList': !exists(json, 'revenueStatisticsSummaryList') ? undefined : ((json['revenueStatisticsSummaryList'] as Array<any>).map(RevenueStatisticsSummaryTypeFromJSON)),
        'stayStatisticsDetailList': !exists(json, 'stayStatisticsDetailList') ? undefined : ((json['stayStatisticsDetailList'] as Array<any>).map(StayStatisticsDetailTypeFromJSON)),
        'stayStatisticsSummaryList': !exists(json, 'stayStatisticsSummaryList') ? undefined : StatisticsSummaryListTypeFromJSON(json['stayStatisticsSummaryList']),
    };
}

export function ProfileStatisticsTypeToJSON(value?: ProfileStatisticsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileIdList': value.profileIdList === undefined ? undefined : ((value.profileIdList as Array<any>).map(UniqueIDTypeToJSON)),
        'reportType': StatisticsReportTypeToJSON(value.reportType),
        'revenueStatisticsSummaryList': value.revenueStatisticsSummaryList === undefined ? undefined : ((value.revenueStatisticsSummaryList as Array<any>).map(RevenueStatisticsSummaryTypeToJSON)),
        'stayStatisticsDetailList': value.stayStatisticsDetailList === undefined ? undefined : ((value.stayStatisticsDetailList as Array<any>).map(StayStatisticsDetailTypeToJSON)),
        'stayStatisticsSummaryList': StatisticsSummaryListTypeToJSON(value.stayStatisticsSummaryList),
    };
}

