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
import type { CopyAutoTraceDefinitionCriteriaType } from './CopyAutoTraceDefinitionCriteriaType';
import {
    CopyAutoTraceDefinitionCriteriaTypeFromJSON,
    CopyAutoTraceDefinitionCriteriaTypeFromJSONTyped,
    CopyAutoTraceDefinitionCriteriaTypeToJSON,
} from './CopyAutoTraceDefinitionCriteriaType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for copying trace definition.
 * @export
 * @interface AutoTraceDefinitionCopy
 */
export interface AutoTraceDefinitionCopy {
    /**
     * 
     * @type {CopyAutoTraceDefinitionCriteriaType}
     * @memberof AutoTraceDefinitionCopy
     */
    criteria?: CopyAutoTraceDefinitionCriteriaType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoTraceDefinitionCopy
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AutoTraceDefinitionCopy interface.
 */
export function instanceOfAutoTraceDefinitionCopy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceDefinitionCopyFromJSON(json: any): AutoTraceDefinitionCopy {
    return AutoTraceDefinitionCopyFromJSONTyped(json, false);
}

export function AutoTraceDefinitionCopyFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionCopy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'criteria': !exists(json, 'criteria') ? undefined : CopyAutoTraceDefinitionCriteriaTypeFromJSON(json['criteria']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AutoTraceDefinitionCopyToJSON(value?: AutoTraceDefinitionCopy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'criteria': CopyAutoTraceDefinitionCriteriaTypeToJSON(value.criteria),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

