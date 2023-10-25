/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CreateRestrictionType } from './CreateRestrictionType';
import {
    CreateRestrictionTypeFromJSON,
    CreateRestrictionTypeFromJSONTyped,
    CreateRestrictionTypeToJSON,
} from './CreateRestrictionType';
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
 * @interface PostRestrictionRequest
 */
export interface PostRestrictionRequest {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostRestrictionRequest
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {CreateRestrictionType}
     * @memberof PostRestrictionRequest
     */
    restriction?: CreateRestrictionType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostRestrictionRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostRestrictionRequest interface.
 */
export function instanceOfPostRestrictionRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostRestrictionRequestFromJSON(json: any): PostRestrictionRequest {
    return PostRestrictionRequestFromJSONTyped(json, false);
}

export function PostRestrictionRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostRestrictionRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'restriction': !exists(json, 'restriction') ? undefined : CreateRestrictionTypeFromJSON(json['restriction']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostRestrictionRequestToJSON(value?: PostRestrictionRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'restriction': CreateRestrictionTypeToJSON(value.restriction),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

