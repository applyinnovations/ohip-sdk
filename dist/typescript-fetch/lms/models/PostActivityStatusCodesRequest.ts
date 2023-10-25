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
import type { ActivityStatusCodeType } from './ActivityStatusCodeType';
import {
    ActivityStatusCodeTypeFromJSON,
    ActivityStatusCodeTypeFromJSONTyped,
    ActivityStatusCodeTypeToJSON,
} from './ActivityStatusCodeType';
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
 * @interface PostActivityStatusCodesRequest
 */
export interface PostActivityStatusCodesRequest {
    /**
     * Activity Status Codes object.
     * @type {Array<ActivityStatusCodeType>}
     * @memberof PostActivityStatusCodesRequest
     */
    activityStatusCodes?: Array<ActivityStatusCodeType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof PostActivityStatusCodesRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof PostActivityStatusCodesRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the PostActivityStatusCodesRequest interface.
 */
export function instanceOfPostActivityStatusCodesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostActivityStatusCodesRequestFromJSON(json: any): PostActivityStatusCodesRequest {
    return PostActivityStatusCodesRequestFromJSONTyped(json, false);
}

export function PostActivityStatusCodesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostActivityStatusCodesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activityStatusCodes': !exists(json, 'activityStatusCodes') ? undefined : ((json['activityStatusCodes'] as Array<any>).map(ActivityStatusCodeTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function PostActivityStatusCodesRequestToJSON(value?: PostActivityStatusCodesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activityStatusCodes': value.activityStatusCodes === undefined ? undefined : ((value.activityStatusCodes as Array<any>).map(ActivityStatusCodeTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

