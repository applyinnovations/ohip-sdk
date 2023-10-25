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
import type { GuestTitleType } from './GuestTitleType';
import {
    GuestTitleTypeFromJSON,
    GuestTitleTypeFromJSONTyped,
    GuestTitleTypeToJSON,
} from './GuestTitleType';
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
 * @interface PostAlternateLanguageGuestTitlesRequest
 */
export interface PostAlternateLanguageGuestTitlesRequest {
    /**
     * List of Guest Titles.
     * @type {Array<GuestTitleType>}
     * @memberof PostAlternateLanguageGuestTitlesRequest
     */
    alternateLanguageGuestTitles?: Array<GuestTitleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostAlternateLanguageGuestTitlesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostAlternateLanguageGuestTitlesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostAlternateLanguageGuestTitlesRequest interface.
 */
export function instanceOfPostAlternateLanguageGuestTitlesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostAlternateLanguageGuestTitlesRequestFromJSON(json: any): PostAlternateLanguageGuestTitlesRequest {
    return PostAlternateLanguageGuestTitlesRequestFromJSONTyped(json, false);
}

export function PostAlternateLanguageGuestTitlesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostAlternateLanguageGuestTitlesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateLanguageGuestTitles': !exists(json, 'alternateLanguageGuestTitles') ? undefined : ((json['alternateLanguageGuestTitles'] as Array<any>).map(GuestTitleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostAlternateLanguageGuestTitlesRequestToJSON(value?: PostAlternateLanguageGuestTitlesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateLanguageGuestTitles': value.alternateLanguageGuestTitles === undefined ? undefined : ((value.alternateLanguageGuestTitles as Array<any>).map(GuestTitleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

