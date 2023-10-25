/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud CRM Configuration API
 * APIs for Customer Relationship Management (profile) configuration, such as creating preferences, or address types.  It also includes Membership Configuration, where you can retrieve membership levels that are configured for a property, or create new membership enrollment codes.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { MembershipAwardType } from './MembershipAwardType';
import {
    MembershipAwardTypeFromJSON,
    MembershipAwardTypeFromJSONTyped,
    MembershipAwardTypeToJSON,
} from './MembershipAwardType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response to fetch Membership Awards.
 * @export
 * @interface MembershipAwardsInfo
 */
export interface MembershipAwardsInfo {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipAwardsInfo
     */
    links?: Array<InstanceLink>;
    /**
     * Membership Award details.
     * @type {Array<MembershipAwardType>}
     * @memberof MembershipAwardsInfo
     */
    membershipAwards?: Array<MembershipAwardType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipAwardsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipAwardsInfo interface.
 */
export function instanceOfMembershipAwardsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipAwardsInfoFromJSON(json: any): MembershipAwardsInfo {
    return MembershipAwardsInfoFromJSONTyped(json, false);
}

export function MembershipAwardsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipAwardsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'membershipAwards': !exists(json, 'membershipAwards') ? undefined : ((json['membershipAwards'] as Array<any>).map(MembershipAwardTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipAwardsInfoToJSON(value?: MembershipAwardsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'membershipAwards': value.membershipAwards === undefined ? undefined : ((value.membershipAwards as Array<any>).map(MembershipAwardTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

