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
 * Existing Operations Responses will eventually be modified to be extended from this type.
 * @export
 * @interface AutoTraceOwnerAssignmentsStatus
 */
export interface AutoTraceOwnerAssignmentsStatus {
    /**
     * 
     * @type {Links}
     * @memberof AutoTraceOwnerAssignmentsStatus
     */
    links?: Links;
    /**
     * 
     * @type {WarningsType}
     * @memberof AutoTraceOwnerAssignmentsStatus
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the AutoTraceOwnerAssignmentsStatus interface.
 */
export function instanceOfAutoTraceOwnerAssignmentsStatus(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceOwnerAssignmentsStatusFromJSON(json: any): AutoTraceOwnerAssignmentsStatus {
    return AutoTraceOwnerAssignmentsStatusFromJSONTyped(json, false);
}

export function AutoTraceOwnerAssignmentsStatusFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceOwnerAssignmentsStatus {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function AutoTraceOwnerAssignmentsStatusToJSON(value?: AutoTraceOwnerAssignmentsStatus | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
