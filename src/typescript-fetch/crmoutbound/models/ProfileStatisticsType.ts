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
import type { ProfileIdList } from './ProfileIdList';
import {
    ProfileIdListFromJSON,
    ProfileIdListFromJSONTyped,
    ProfileIdListToJSON,
} from './ProfileIdList';
import type { RevenueStatisticsSummaryListType } from './RevenueStatisticsSummaryListType';
import {
    RevenueStatisticsSummaryListTypeFromJSON,
    RevenueStatisticsSummaryListTypeFromJSONTyped,
    RevenueStatisticsSummaryListTypeToJSON,
} from './RevenueStatisticsSummaryListType';
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
import type { StayStatisticsDetailListType } from './StayStatisticsDetailListType';
import {
    StayStatisticsDetailListTypeFromJSON,
    StayStatisticsDetailListTypeFromJSONTyped,
    StayStatisticsDetailListTypeToJSON,
} from './StayStatisticsDetailListType';

/**
 * Contains summary/detail/Revenue statistics information for Profile.
 * @export
 * @interface ProfileStatisticsType
 */
export interface ProfileStatisticsType {
    /**
     * 
     * @type {ProfileIdList}
     * @memberof ProfileStatisticsType
     */
    profileIdList?: ProfileIdList;
    /**
     * 
     * @type {StatisticsSummaryListType}
     * @memberof ProfileStatisticsType
     */
    stayStatisticsSummaryList?: StatisticsSummaryListType;
    /**
     * 
     * @type {StayStatisticsDetailListType}
     * @memberof ProfileStatisticsType
     */
    stayStatisticsDetailList?: StayStatisticsDetailListType;
    /**
     * 
     * @type {RevenueStatisticsSummaryListType}
     * @memberof ProfileStatisticsType
     */
    revenueStatisticsSummaryList?: RevenueStatisticsSummaryListType;
    /**
     * 
     * @type {StatisticsReportType}
     * @memberof ProfileStatisticsType
     */
    reportType?: StatisticsReportType;
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
        
        'profileIdList': !exists(json, 'profileIdList') ? undefined : ProfileIdListFromJSON(json['profileIdList']),
        'stayStatisticsSummaryList': !exists(json, 'stayStatisticsSummaryList') ? undefined : StatisticsSummaryListTypeFromJSON(json['stayStatisticsSummaryList']),
        'stayStatisticsDetailList': !exists(json, 'stayStatisticsDetailList') ? undefined : StayStatisticsDetailListTypeFromJSON(json['stayStatisticsDetailList']),
        'revenueStatisticsSummaryList': !exists(json, 'revenueStatisticsSummaryList') ? undefined : RevenueStatisticsSummaryListTypeFromJSON(json['revenueStatisticsSummaryList']),
        'reportType': !exists(json, 'reportType') ? undefined : StatisticsReportTypeFromJSON(json['reportType']),
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
        
        'profileIdList': ProfileIdListToJSON(value.profileIdList),
        'stayStatisticsSummaryList': StatisticsSummaryListTypeToJSON(value.stayStatisticsSummaryList),
        'stayStatisticsDetailList': StayStatisticsDetailListTypeToJSON(value.stayStatisticsDetailList),
        'revenueStatisticsSummaryList': RevenueStatisticsSummaryListTypeToJSON(value.revenueStatisticsSummaryList),
        'reportType': StatisticsReportTypeToJSON(value.reportType),
    };
}
