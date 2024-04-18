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
import type { MembershipMarketGroupType } from './MembershipMarketGroupType';
import {
    MembershipMarketGroupTypeFromJSON,
    MembershipMarketGroupTypeFromJSONTyped,
    MembershipMarketGroupTypeToJSON,
} from './MembershipMarketGroupType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing existing Membership Market Groups Configurations.
 * @export
 * @interface MembershipMarketGroups
 */
export interface MembershipMarketGroups {
    /**
     * Details for Membership Market Group along with associated Market codes.
     * @type {Array<MembershipMarketGroupType>}
     * @memberof MembershipMarketGroups
     */
    membershipMarketGroups?: Array<MembershipMarketGroupType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipMarketGroups
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipMarketGroups
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipMarketGroups interface.
 */
export function instanceOfMembershipMarketGroups(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipMarketGroupsFromJSON(json: any): MembershipMarketGroups {
    return MembershipMarketGroupsFromJSONTyped(json, false);
}

export function MembershipMarketGroupsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipMarketGroups {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membershipMarketGroups': !exists(json, 'membershipMarketGroups') ? undefined : ((json['membershipMarketGroups'] as Array<any>).map(MembershipMarketGroupTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipMarketGroupsToJSON(value?: MembershipMarketGroups | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membershipMarketGroups': value.membershipMarketGroups === undefined ? undefined : ((value.membershipMarketGroups as Array<any>).map(MembershipMarketGroupTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
