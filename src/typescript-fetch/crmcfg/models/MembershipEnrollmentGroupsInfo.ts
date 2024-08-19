/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { MembershipEnrollmentGroupType } from './MembershipEnrollmentGroupType';
import {
    MembershipEnrollmentGroupTypeFromJSON,
    MembershipEnrollmentGroupTypeFromJSONTyped,
    MembershipEnrollmentGroupTypeToJSON,
} from './MembershipEnrollmentGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching membership enrollment groups.
 * @export
 * @interface MembershipEnrollmentGroupsInfo
 */
export interface MembershipEnrollmentGroupsInfo {
    /**
     * Details of membership enrollment group type.
     * @type {Array<MembershipEnrollmentGroupType>}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    membershipEnrollmentGroups?: Array<MembershipEnrollmentGroupType>;
    /**
     * Evaluated total page count based on the requested max fetch count.
     * @type {number}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    totalPages?: number;
    /**
     * Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned.
     * @type {number}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    offset?: number;
    /**
     * Indicates maximum number of records a Web Service should return.
     * @type {number}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    limit?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    hasMore?: boolean;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    totalResults?: number;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    count?: number;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipEnrollmentGroupsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipEnrollmentGroupsInfo interface.
 */
export function instanceOfMembershipEnrollmentGroupsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipEnrollmentGroupsInfoFromJSON(json: any): MembershipEnrollmentGroupsInfo {
    return MembershipEnrollmentGroupsInfoFromJSONTyped(json, false);
}

export function MembershipEnrollmentGroupsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipEnrollmentGroupsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membershipEnrollmentGroups': !exists(json, 'membershipEnrollmentGroups') ? undefined : ((json['membershipEnrollmentGroups'] as Array<any>).map(MembershipEnrollmentGroupTypeFromJSON)),
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
        'offset': !exists(json, 'offset') ? undefined : json['offset'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipEnrollmentGroupsInfoToJSON(value?: MembershipEnrollmentGroupsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membershipEnrollmentGroups': value.membershipEnrollmentGroups === undefined ? undefined : ((value.membershipEnrollmentGroups as Array<any>).map(MembershipEnrollmentGroupTypeToJSON)),
        'totalPages': value.totalPages,
        'offset': value.offset,
        'limit': value.limit,
        'hasMore': value.hasMore,
        'totalResults': value.totalResults,
        'count': value.count,
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

