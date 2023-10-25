/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AutoTraceDefinitionActivityInfoType } from './AutoTraceDefinitionActivityInfoType';
import {
    AutoTraceDefinitionActivityInfoTypeFromJSON,
    AutoTraceDefinitionActivityInfoTypeFromJSONTyped,
    AutoTraceDefinitionActivityInfoTypeToJSON,
} from './AutoTraceDefinitionActivityInfoType';
import type { AutoTraceDefinitionDetailType } from './AutoTraceDefinitionDetailType';
import {
    AutoTraceDefinitionDetailTypeFromJSON,
    AutoTraceDefinitionDetailTypeFromJSONTyped,
    AutoTraceDefinitionDetailTypeToJSON,
} from './AutoTraceDefinitionDetailType';
import type { AutoTraceDefinitionOwnerInfoType } from './AutoTraceDefinitionOwnerInfoType';
import {
    AutoTraceDefinitionOwnerInfoTypeFromJSON,
    AutoTraceDefinitionOwnerInfoTypeFromJSONTyped,
    AutoTraceDefinitionOwnerInfoTypeToJSON,
} from './AutoTraceDefinitionOwnerInfoType';

/**
 * Auto Trace Definition information.
 * @export
 * @interface AutoTraceDefinitionType
 */
export interface AutoTraceDefinitionType {
    /**
     * 
     * @type {AutoTraceDefinitionActivityInfoType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionActivityInfo?: AutoTraceDefinitionActivityInfoType;
    /**
     * 
     * @type {AutoTraceDefinitionDetailType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionDetail?: AutoTraceDefinitionDetailType;
    /**
     * 
     * @type {AutoTraceDefinitionOwnerInfoType}
     * @memberof AutoTraceDefinitionType
     */
    autoTraceDefinitionOwnerInfo?: AutoTraceDefinitionOwnerInfoType;
    /**
     * Determines whether to fetch inactive records or not.
     * @type {boolean}
     * @memberof AutoTraceDefinitionType
     */
    inactive?: boolean;
}

/**
 * Check if a given object implements the AutoTraceDefinitionType interface.
 */
export function instanceOfAutoTraceDefinitionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceDefinitionTypeFromJSON(json: any): AutoTraceDefinitionType {
    return AutoTraceDefinitionTypeFromJSONTyped(json, false);
}

export function AutoTraceDefinitionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoTraceDefinitionActivityInfo': !exists(json, 'autoTraceDefinitionActivityInfo') ? undefined : AutoTraceDefinitionActivityInfoTypeFromJSON(json['autoTraceDefinitionActivityInfo']),
        'autoTraceDefinitionDetail': !exists(json, 'autoTraceDefinitionDetail') ? undefined : AutoTraceDefinitionDetailTypeFromJSON(json['autoTraceDefinitionDetail']),
        'autoTraceDefinitionOwnerInfo': !exists(json, 'autoTraceDefinitionOwnerInfo') ? undefined : AutoTraceDefinitionOwnerInfoTypeFromJSON(json['autoTraceDefinitionOwnerInfo']),
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
    };
}

export function AutoTraceDefinitionTypeToJSON(value?: AutoTraceDefinitionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoTraceDefinitionActivityInfo': AutoTraceDefinitionActivityInfoTypeToJSON(value.autoTraceDefinitionActivityInfo),
        'autoTraceDefinitionDetail': AutoTraceDefinitionDetailTypeToJSON(value.autoTraceDefinitionDetail),
        'autoTraceDefinitionOwnerInfo': AutoTraceDefinitionOwnerInfoTypeToJSON(value.autoTraceDefinitionOwnerInfo),
        'inactive': value.inactive,
    };
}

