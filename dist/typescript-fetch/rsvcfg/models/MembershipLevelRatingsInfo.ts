/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { MembershipLevelRatingInfoType } from './MembershipLevelRatingInfoType';
import {
    MembershipLevelRatingInfoTypeFromJSON,
    MembershipLevelRatingInfoTypeFromJSONTyped,
    MembershipLevelRatingInfoTypeToJSON,
} from './MembershipLevelRatingInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching the membership levels and their rating details.
 * @export
 * @interface MembershipLevelRatingsInfo
 */
export interface MembershipLevelRatingsInfo {
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MembershipLevelRatingsInfo
     */
    hasMore?: boolean;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof MembershipLevelRatingsInfo
     */
    limit?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipLevelRatingsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of membership levels and their ratings.
     * @type {Array<MembershipLevelRatingInfoType>}
     * @memberof MembershipLevelRatingsInfo
     */
    membershipLevelRatingsInfo?: Array<MembershipLevelRatingInfoType>;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof MembershipLevelRatingsInfo
     */
    offset?: number;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof MembershipLevelRatingsInfo
     */
    totalPages?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MembershipLevelRatingsInfo
     */
    totalResults?: number;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipLevelRatingsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipLevelRatingsInfo interface.
 */
export function instanceOfMembershipLevelRatingsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipLevelRatingsInfoFromJSON(json: any): MembershipLevelRatingsInfo {
    return MembershipLevelRatingsInfoFromJSONTyped(json, false);
}

export function MembershipLevelRatingsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipLevelRatingsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'membershipLevelRatingsInfo': !exists(json, 'membershipLevelRatingsInfo') ? undefined : ((json['membershipLevelRatingsInfo'] as Array<any>).map(MembershipLevelRatingInfoTypeFromJSON)),
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipLevelRatingsInfoToJSON(value?: MembershipLevelRatingsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hasMore': value.hasMore,
        'limit': value.limit,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'membershipLevelRatingsInfo': value.membershipLevelRatingsInfo === undefined ? undefined : ((value.membershipLevelRatingsInfo as Array<any>).map(MembershipLevelRatingInfoTypeToJSON)),
        'offset': value.offset,
        'totalPages': value.totalPages,
        'totalResults': value.totalResults,
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

