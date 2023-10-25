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
import type { TitleType } from './TitleType';
import {
    TitleTypeFromJSON,
    TitleTypeFromJSONTyped,
    TitleTypeToJSON,
} from './TitleType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface PostTitlesRequest
 */
export interface PostTitlesRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostTitlesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * List of Titles.
     * @type {Array<TitleType>}
     * @memberof PostTitlesRequest
     */
    titles?: Array<TitleType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostTitlesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostTitlesRequest interface.
 */
export function instanceOfPostTitlesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostTitlesRequestFromJSON(json: any): PostTitlesRequest {
    return PostTitlesRequestFromJSONTyped(json, false);
}

export function PostTitlesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostTitlesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'titles': !exists(json, 'titles') ? undefined : ((json['titles'] as Array<any>).map(TitleTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostTitlesRequestToJSON(value?: PostTitlesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'titles': value.titles === undefined ? undefined : ((value.titles as Array<any>).map(TitleTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

