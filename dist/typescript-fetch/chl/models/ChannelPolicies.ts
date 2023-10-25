/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ChannelPolicyType } from './ChannelPolicyType';
import {
    ChannelPolicyTypeFromJSON,
    ChannelPolicyTypeFromJSONTyped,
    ChannelPolicyTypeToJSON,
} from './ChannelPolicyType';
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
 * Request object for fetching Policies, guarantee, and deposit Details.
 * @export
 * @interface ChannelPolicies
 */
export interface ChannelPolicies {
    /**
     * To list down all the policies associated with the relevant input request.
     * @type {Array<ChannelPolicyType>}
     * @memberof ChannelPolicies
     */
    channelPoliciesInfo?: Array<ChannelPolicyType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChannelPolicies
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChannelPolicies
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChannelPolicies interface.
 */
export function instanceOfChannelPolicies(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPoliciesFromJSON(json: any): ChannelPolicies {
    return ChannelPoliciesFromJSONTyped(json, false);
}

export function ChannelPoliciesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPolicies {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'channelPoliciesInfo': !exists(json, 'channelPoliciesInfo') ? undefined : ((json['channelPoliciesInfo'] as Array<any>).map(ChannelPolicyTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChannelPoliciesToJSON(value?: ChannelPolicies | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'channelPoliciesInfo': value.channelPoliciesInfo === undefined ? undefined : ((value.channelPoliciesInfo as Array<any>).map(ChannelPolicyTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

