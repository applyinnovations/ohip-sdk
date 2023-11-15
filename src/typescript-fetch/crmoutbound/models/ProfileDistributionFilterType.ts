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
import type { ProfileDistributionFilterIDType } from './ProfileDistributionFilterIDType';
import {
    ProfileDistributionFilterIDTypeFromJSON,
    ProfileDistributionFilterIDTypeFromJSONTyped,
    ProfileDistributionFilterIDTypeToJSON,
} from './ProfileDistributionFilterIDType';

/**
 * Profile Distribution Filter details.
 * @export
 * @interface ProfileDistributionFilterType
 */
export interface ProfileDistributionFilterType {
    /**
     * 
     * @type {ProfileDistributionFilterIDType}
     * @memberof ProfileDistributionFilterType
     */
    queryId?: ProfileDistributionFilterIDType;
    /**
     * Name or code for the query.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    code?: string;
    /**
     * Short description for the query.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    description?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    toDatabases?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    fromDatabases?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    fromCountry?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    fromTerritory?: Array<string>;
    /**
     * Profile Type.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    profileType?: string;
    /**
     * Membership Type.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    membershipType?: string;
    /**
     * List of membership levels for the membership type.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    membershipLevels?: string;
    /**
     * List of nationalities to which profile could belong to.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    nationalities?: string;
    /**
     * VIP status list.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    vIPStatuses?: string;
    /**
     * Restricted profiles. Restricted/Unrestricted/All
     * @type {boolean}
     * @memberof ProfileDistributionFilterType
     */
    restricted?: boolean;
    /**
     * Name keyword type.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    keywordType?: string;
    /**
     * Name keyword.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    keyword?: string;
    /**
     * List of guest Languages.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    guestLanguages?: string;
    /**
     * From date range from for arrival or departure date on stay record.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    fromStayDate?: string;
    /**
     * To date range from for arrival or departure date on stay record.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    toStayDate?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    roomLabels?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    stayResorts?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    stayChains?: Array<string>;
    /**
     * Sum of total revenue on stay records for the time period.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    totalRevenue?: number;
    /**
     * Sum of room revenue on stay records for the time period.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    totalRoomRevenue?: number;
    /**
     * Sum of nights on stay records for the time period.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    totalNights?: number;
    /**
     * Sum of total number of stays on stay records for the time period.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    totalStays?: number;
    /**
     * Minimum number of different resorts profile has stayed for the time period.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    minimumStayResorts?: number;
    /**
     * Last server date time when the query was run.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    lastRunDate?: string;
    /**
     * Include inactive profiles also. Inactive profiles are profiles which are marked as N on active_yn flag.
     * @type {boolean}
     * @memberof ProfileDistributionFilterType
     */
    includeInactiveProfile?: boolean;
    /**
     * Profile credit rating.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    creditRating?: string;
    /**
     * Number of top records (for the Top filter).
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    topNumber?: number;
    /**
     * What is the top filter based on (e.g. total revenue, or number of nights).
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    topBasedOn?: string;
    /**
     * Exclude the from and to stay period.
     * @type {boolean}
     * @memberof ProfileDistributionFilterType
     */
    excludeStay?: boolean;
    /**
     * 
     * @type {Array<string>}
     * @memberof ProfileDistributionFilterType
     */
    revenueType?: Array<string>;
    /**
     * Total amount of Membership Revenue Type.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    totalRevenueTypeAmount?: number;
    /**
     * User defined custom sql filter. It is to be used by users who know SQL. Basic purpose is that user who know sql should not have to come to development for small changes in the filter.
     * @type {string}
     * @memberof ProfileDistributionFilterType
     */
    customFilter?: string;
    /**
     * Membership TSC Report Id.
     * @type {number}
     * @memberof ProfileDistributionFilterType
     */
    reportId?: number;
}

/**
 * Check if a given object implements the ProfileDistributionFilterType interface.
 */
export function instanceOfProfileDistributionFilterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileDistributionFilterTypeFromJSON(json: any): ProfileDistributionFilterType {
    return ProfileDistributionFilterTypeFromJSONTyped(json, false);
}

export function ProfileDistributionFilterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileDistributionFilterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'queryId': !exists(json, 'queryId') ? undefined : ProfileDistributionFilterIDTypeFromJSON(json['queryId']),
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'toDatabases': !exists(json, 'toDatabases') ? undefined : json['toDatabases'],
        'fromDatabases': !exists(json, 'fromDatabases') ? undefined : json['fromDatabases'],
        'fromCountry': !exists(json, 'fromCountry') ? undefined : json['fromCountry'],
        'fromTerritory': !exists(json, 'fromTerritory') ? undefined : json['fromTerritory'],
        'profileType': !exists(json, 'profileType') ? undefined : json['profileType'],
        'membershipType': !exists(json, 'membershipType') ? undefined : json['membershipType'],
        'membershipLevels': !exists(json, 'membershipLevels') ? undefined : json['membershipLevels'],
        'nationalities': !exists(json, 'nationalities') ? undefined : json['nationalities'],
        'vIPStatuses': !exists(json, 'vIPStatuses') ? undefined : json['vIPStatuses'],
        'restricted': !exists(json, 'restricted') ? undefined : json['restricted'],
        'keywordType': !exists(json, 'keywordType') ? undefined : json['keywordType'],
        'keyword': !exists(json, 'keyword') ? undefined : json['keyword'],
        'guestLanguages': !exists(json, 'guestLanguages') ? undefined : json['guestLanguages'],
        'fromStayDate': !exists(json, 'fromStayDate') ? undefined : json['fromStayDate'],
        'toStayDate': !exists(json, 'toStayDate') ? undefined : json['toStayDate'],
        'roomLabels': !exists(json, 'roomLabels') ? undefined : json['roomLabels'],
        'stayResorts': !exists(json, 'stayResorts') ? undefined : json['stayResorts'],
        'stayChains': !exists(json, 'stayChains') ? undefined : json['stayChains'],
        'totalRevenue': !exists(json, 'totalRevenue') ? undefined : json['totalRevenue'],
        'totalRoomRevenue': !exists(json, 'totalRoomRevenue') ? undefined : json['totalRoomRevenue'],
        'totalNights': !exists(json, 'totalNights') ? undefined : json['totalNights'],
        'totalStays': !exists(json, 'totalStays') ? undefined : json['totalStays'],
        'minimumStayResorts': !exists(json, 'minimumStayResorts') ? undefined : json['minimumStayResorts'],
        'lastRunDate': !exists(json, 'lastRunDate') ? undefined : json['lastRunDate'],
        'includeInactiveProfile': !exists(json, 'includeInactiveProfile') ? undefined : json['includeInactiveProfile'],
        'creditRating': !exists(json, 'creditRating') ? undefined : json['creditRating'],
        'topNumber': !exists(json, 'topNumber') ? undefined : json['topNumber'],
        'topBasedOn': !exists(json, 'topBasedOn') ? undefined : json['topBasedOn'],
        'excludeStay': !exists(json, 'excludeStay') ? undefined : json['excludeStay'],
        'revenueType': !exists(json, 'revenueType') ? undefined : json['revenueType'],
        'totalRevenueTypeAmount': !exists(json, 'totalRevenueTypeAmount') ? undefined : json['totalRevenueTypeAmount'],
        'customFilter': !exists(json, 'customFilter') ? undefined : json['customFilter'],
        'reportId': !exists(json, 'reportId') ? undefined : json['reportId'],
    };
}

export function ProfileDistributionFilterTypeToJSON(value?: ProfileDistributionFilterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'queryId': ProfileDistributionFilterIDTypeToJSON(value.queryId),
        'code': value.code,
        'description': value.description,
        'toDatabases': value.toDatabases,
        'fromDatabases': value.fromDatabases,
        'fromCountry': value.fromCountry,
        'fromTerritory': value.fromTerritory,
        'profileType': value.profileType,
        'membershipType': value.membershipType,
        'membershipLevels': value.membershipLevels,
        'nationalities': value.nationalities,
        'vIPStatuses': value.vIPStatuses,
        'restricted': value.restricted,
        'keywordType': value.keywordType,
        'keyword': value.keyword,
        'guestLanguages': value.guestLanguages,
        'fromStayDate': value.fromStayDate,
        'toStayDate': value.toStayDate,
        'roomLabels': value.roomLabels,
        'stayResorts': value.stayResorts,
        'stayChains': value.stayChains,
        'totalRevenue': value.totalRevenue,
        'totalRoomRevenue': value.totalRoomRevenue,
        'totalNights': value.totalNights,
        'totalStays': value.totalStays,
        'minimumStayResorts': value.minimumStayResorts,
        'lastRunDate': value.lastRunDate,
        'includeInactiveProfile': value.includeInactiveProfile,
        'creditRating': value.creditRating,
        'topNumber': value.topNumber,
        'topBasedOn': value.topBasedOn,
        'excludeStay': value.excludeStay,
        'revenueType': value.revenueType,
        'totalRevenueTypeAmount': value.totalRevenueTypeAmount,
        'customFilter': value.customFilter,
        'reportId': value.reportId,
    };
}

