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
import type { VIPLevelType } from './VIPLevelType';
import {
    VIPLevelTypeFromJSON,
    VIPLevelTypeFromJSONTyped,
    VIPLevelTypeToJSON,
} from './VIPLevelType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostVIPLevelsRequest
 */
export interface PostVIPLevelsRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostVIPLevelsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of V I P Levels.
     * @type {Array<VIPLevelType>}
     * @memberof PostVIPLevelsRequest
     */
    vIPLevels?: Array<VIPLevelType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostVIPLevelsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostVIPLevelsRequest interface.
 */
export function instanceOfPostVIPLevelsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostVIPLevelsRequestFromJSON(json: any): PostVIPLevelsRequest {
    return PostVIPLevelsRequestFromJSONTyped(json, false);
}

export function PostVIPLevelsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostVIPLevelsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'vIPLevels': !exists(json, 'vIPLevels') ? undefined : ((json['vIPLevels'] as Array<any>).map(VIPLevelTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostVIPLevelsRequestToJSON(value?: PostVIPLevelsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'vIPLevels': value.vIPLevels === undefined ? undefined : ((value.vIPLevels as Array<any>).map(VIPLevelTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

