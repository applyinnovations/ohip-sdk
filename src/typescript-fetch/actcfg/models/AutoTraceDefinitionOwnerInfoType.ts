/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity Management API
 * APIs to cater for Activity Configuration functionality in OPERA Cloud. In this module you can retrieve, create, update Activity configuration codes, for example create a new Activity Type.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ActivityOwnerType } from './ActivityOwnerType';
import {
    ActivityOwnerTypeFromJSON,
    ActivityOwnerTypeFromJSONTyped,
    ActivityOwnerTypeToJSON,
} from './ActivityOwnerType';
import type { AutoTraceOwnerAssignmentType } from './AutoTraceOwnerAssignmentType';
import {
    AutoTraceOwnerAssignmentTypeFromJSON,
    AutoTraceOwnerAssignmentTypeFromJSONTyped,
    AutoTraceOwnerAssignmentTypeToJSON,
} from './AutoTraceOwnerAssignmentType';

/**
 * Owner Information of Auto Trace.
 * @export
 * @interface AutoTraceDefinitionOwnerInfoType
 */
export interface AutoTraceDefinitionOwnerInfoType {
    /**
     * Custom owner code
     * @type {string}
     * @memberof AutoTraceDefinitionOwnerInfoType
     */
    customOwnerCode?: string;
    /**
     * Detailed information of trace owner assignment.
     * @type {Array<AutoTraceOwnerAssignmentType>}
     * @memberof AutoTraceDefinitionOwnerInfoType
     */
    ownerAssignment?: Array<AutoTraceOwnerAssignmentType>;
    /**
     * Indicates if Owner Assignment exists
     * @type {boolean}
     * @memberof AutoTraceDefinitionOwnerInfoType
     */
    ownerAssignmentExist?: boolean;
    /**
     * 
     * @type {ActivityOwnerType}
     * @memberof AutoTraceDefinitionOwnerInfoType
     */
    ownerofActivity?: ActivityOwnerType;
}

/**
 * Check if a given object implements the AutoTraceDefinitionOwnerInfoType interface.
 */
export function instanceOfAutoTraceDefinitionOwnerInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceDefinitionOwnerInfoTypeFromJSON(json: any): AutoTraceDefinitionOwnerInfoType {
    return AutoTraceDefinitionOwnerInfoTypeFromJSONTyped(json, false);
}

export function AutoTraceDefinitionOwnerInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionOwnerInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customOwnerCode': !exists(json, 'customOwnerCode') ? undefined : json['customOwnerCode'],
        'ownerAssignment': !exists(json, 'ownerAssignment') ? undefined : ((json['ownerAssignment'] as Array<any>).map(AutoTraceOwnerAssignmentTypeFromJSON)),
        'ownerAssignmentExist': !exists(json, 'ownerAssignmentExist') ? undefined : json['ownerAssignmentExist'],
        'ownerofActivity': !exists(json, 'ownerofActivity') ? undefined : ActivityOwnerTypeFromJSON(json['ownerofActivity']),
    };
}

export function AutoTraceDefinitionOwnerInfoTypeToJSON(value?: AutoTraceDefinitionOwnerInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customOwnerCode': value.customOwnerCode,
        'ownerAssignment': value.ownerAssignment === undefined ? undefined : ((value.ownerAssignment as Array<any>).map(AutoTraceOwnerAssignmentTypeToJSON)),
        'ownerAssignmentExist': value.ownerAssignmentExist,
        'ownerofActivity': ActivityOwnerTypeToJSON(value.ownerofActivity),
    };
}
