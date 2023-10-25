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
import type { MembershipStatusCodeType } from './MembershipStatusCodeType';
import {
    MembershipStatusCodeTypeFromJSON,
    MembershipStatusCodeTypeFromJSONTyped,
    MembershipStatusCodeTypeToJSON,
} from './MembershipStatusCodeType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching Membership Status Codes.
 * @export
 * @interface MembershipStatusCodesDetails
 */
export interface MembershipStatusCodesDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof MembershipStatusCodesDetails
     */
    links?: Array<InstanceLink>;
    /**
     * List of Membership Status Codes.
     * @type {Array<MembershipStatusCodeType>}
     * @memberof MembershipStatusCodesDetails
     */
    membershipStatusCodes?: Array<MembershipStatusCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof MembershipStatusCodesDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the MembershipStatusCodesDetails interface.
 */
export function instanceOfMembershipStatusCodesDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MembershipStatusCodesDetailsFromJSON(json: any): MembershipStatusCodesDetails {
    return MembershipStatusCodesDetailsFromJSONTyped(json, false);
}

export function MembershipStatusCodesDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): MembershipStatusCodesDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'membershipStatusCodes': !exists(json, 'membershipStatusCodes') ? undefined : ((json['membershipStatusCodes'] as Array<any>).map(MembershipStatusCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function MembershipStatusCodesDetailsToJSON(value?: MembershipStatusCodesDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'membershipStatusCodes': value.membershipStatusCodes === undefined ? undefined : ((value.membershipStatusCodes as Array<any>).map(MembershipStatusCodeTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

