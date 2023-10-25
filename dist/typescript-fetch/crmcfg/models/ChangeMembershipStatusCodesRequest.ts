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
 * 
 * @export
 * @interface ChangeMembershipStatusCodesRequest
 */
export interface ChangeMembershipStatusCodesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeMembershipStatusCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of Membership Status Codes.
     * @type {Array<MembershipStatusCodeType>}
     * @memberof ChangeMembershipStatusCodesRequest
     */
    membershipStatusCodes?: Array<MembershipStatusCodeType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeMembershipStatusCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeMembershipStatusCodesRequest interface.
 */
export function instanceOfChangeMembershipStatusCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeMembershipStatusCodesRequestFromJSON(json: any): ChangeMembershipStatusCodesRequest {
    return ChangeMembershipStatusCodesRequestFromJSONTyped(json, false);
}

export function ChangeMembershipStatusCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeMembershipStatusCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'membershipStatusCodes': !exists(json, 'membershipStatusCodes') ? undefined : ((json['membershipStatusCodes'] as Array<any>).map(MembershipStatusCodeTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeMembershipStatusCodesRequestToJSON(value?: ChangeMembershipStatusCodesRequest | null): any {
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

