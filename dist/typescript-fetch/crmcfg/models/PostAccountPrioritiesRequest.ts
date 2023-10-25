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
import type { AccountPriorityType } from './AccountPriorityType';
import {
    AccountPriorityTypeFromJSON,
    AccountPriorityTypeFromJSONTyped,
    AccountPriorityTypeToJSON,
} from './AccountPriorityType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostAccountPrioritiesRequest
 */
export interface PostAccountPrioritiesRequest {
    /**
     * List of Account Priorities.
     * @type {Array<AccountPriorityType>}
     * @memberof PostAccountPrioritiesRequest
     */
    accountPriorities?: Array<AccountPriorityType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostAccountPrioritiesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostAccountPrioritiesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostAccountPrioritiesRequest interface.
 */
export function instanceOfPostAccountPrioritiesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostAccountPrioritiesRequestFromJSON(json: any): PostAccountPrioritiesRequest {
    return PostAccountPrioritiesRequestFromJSONTyped(json, false);
}

export function PostAccountPrioritiesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAccountPrioritiesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accountPriorities': !exists(json, 'accountPriorities') ? undefined : ((json['accountPriorities'] as Array<any>).map(AccountPriorityTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostAccountPrioritiesRequestToJSON(value?: PostAccountPrioritiesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accountPriorities': value.accountPriorities === undefined ? undefined : ((value.accountPriorities as Array<any>).map(AccountPriorityTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

