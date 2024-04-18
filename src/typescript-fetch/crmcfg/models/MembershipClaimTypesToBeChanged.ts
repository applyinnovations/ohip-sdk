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
import type { MembershipClaimTypeType } from './MembershipClaimTypeType';
import {
    MembershipClaimTypeTypeFromJSON,
    MembershipClaimTypeTypeFromJSONTyped,
    MembershipClaimTypeTypeToJSON,
} from './MembershipClaimTypeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing Membership Claim Types.
 * @export
 * @interface MembershipClaimTypesToBeChanged
 */
export interface MembershipClaimTypesToBeChanged {
    /**
     * List of Membership Claim Types.
     * @type {Array<MembershipClaimTypeType>}
     * @memberof MembershipClaimTypesToBeChanged
     */
    membershipClaimTypes?: Array<MembershipClaimTypeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipClaimTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipClaimTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipClaimTypesToBeChanged interface.
 */
export function instanceOfMembershipClaimTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipClaimTypesToBeChangedFromJSON(json: any): MembershipClaimTypesToBeChanged {
    return MembershipClaimTypesToBeChangedFromJSONTyped(json, false);
}

export function MembershipClaimTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipClaimTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'membershipClaimTypes': !exists(json, 'membershipClaimTypes') ? undefined : ((json['membershipClaimTypes'] as Array<any>).map(MembershipClaimTypeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipClaimTypesToBeChangedToJSON(value?: MembershipClaimTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'membershipClaimTypes': value.membershipClaimTypes === undefined ? undefined : ((value.membershipClaimTypes as Array<any>).map(MembershipClaimTypeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
