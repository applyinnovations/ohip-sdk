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
import type { ProfileNameValidationType } from './ProfileNameValidationType';
import {
    ProfileNameValidationTypeFromJSON,
    ProfileNameValidationTypeFromJSONTyped,
    ProfileNameValidationTypeToJSON,
} from './ProfileNameValidationType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostProfileNameValidationsRequest
 */
export interface PostProfileNameValidationsRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostProfileNameValidationsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of the Profile name to be configured or fetched.
     * @type {Array<ProfileNameValidationType>}
     * @memberof PostProfileNameValidationsRequest
     */
    profileNames?: Array<ProfileNameValidationType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostProfileNameValidationsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostProfileNameValidationsRequest interface.
 */
export function instanceOfPostProfileNameValidationsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostProfileNameValidationsRequestFromJSON(json: any): PostProfileNameValidationsRequest {
    return PostProfileNameValidationsRequestFromJSONTyped(json, false);
}

export function PostProfileNameValidationsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostProfileNameValidationsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'profileNames': !exists(json, 'profileNames') ? undefined : ((json['profileNames'] as Array<any>).map(ProfileNameValidationTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostProfileNameValidationsRequestToJSON(value?: PostProfileNameValidationsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'profileNames': value.profileNames === undefined ? undefined : ((value.profileNames as Array<any>).map(ProfileNameValidationTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

