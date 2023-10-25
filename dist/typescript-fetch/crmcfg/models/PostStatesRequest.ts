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
import type { StateType } from './StateType';
import {
    StateTypeFromJSON,
    StateTypeFromJSONTyped,
    StateTypeToJSON,
} from './StateType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostStatesRequest
 */
export interface PostStatesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostStatesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Lists of states.
     * @type {Array<StateType>}
     * @memberof PostStatesRequest
     */
    states?: Array<StateType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostStatesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostStatesRequest interface.
 */
export function instanceOfPostStatesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostStatesRequestFromJSON(json: any): PostStatesRequest {
    return PostStatesRequestFromJSONTyped(json, false);
}

export function PostStatesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostStatesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'states': !exists(json, 'states') ? undefined : ((json['states'] as Array<any>).map(StateTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostStatesRequestToJSON(value?: PostStatesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'states': value.states === undefined ? undefined : ((value.states as Array<any>).map(StateTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

