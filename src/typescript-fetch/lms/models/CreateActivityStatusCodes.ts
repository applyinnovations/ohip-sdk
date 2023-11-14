/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Leisure Management API
 * APIs to cater for external Leisure Management functionality integrated with OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityStatusCodesType } from './ActivityStatusCodesType';
import {
    ActivityStatusCodesTypeFromJSON,
    ActivityStatusCodesTypeFromJSONTyped,
    ActivityStatusCodesTypeToJSON,
} from './ActivityStatusCodesType';
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for creating Activity Status Codes.
 * @export
 * @interface CreateActivityStatusCodes
 */
export interface CreateActivityStatusCodes {
    /**
     * 
     * @type {ActivityStatusCodesType}
     * @memberof CreateActivityStatusCodes
     */
    activityStatusCodes?: ActivityStatusCodesType;
    /**
     * 
     * @type {Links}
     * @memberof CreateActivityStatusCodes
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof CreateActivityStatusCodes
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the CreateActivityStatusCodes interface.
 */
export function instanceOfCreateActivityStatusCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateActivityStatusCodesFromJSON(json: any): CreateActivityStatusCodes {
    return CreateActivityStatusCodesFromJSONTyped(json, false);
}

export function CreateActivityStatusCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateActivityStatusCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityStatusCodes': !exists(json, 'activityStatusCodes') ? undefined : ActivityStatusCodesTypeFromJSON(json['activityStatusCodes']),
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function CreateActivityStatusCodesToJSON(value?: CreateActivityStatusCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityStatusCodes': ActivityStatusCodesTypeToJSON(value.activityStatusCodes),
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
