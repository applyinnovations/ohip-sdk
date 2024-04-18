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
import type { AutoTraceDefinitionType } from './AutoTraceDefinitionType';
import {
    AutoTraceDefinitionTypeFromJSON,
    AutoTraceDefinitionTypeFromJSONTyped,
    AutoTraceDefinitionTypeToJSON,
} from './AutoTraceDefinitionType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating/changing Auto Trace Definitions.
 * @export
 * @interface AutoTraceDefinitionsInfo
 */
export interface AutoTraceDefinitionsInfo {
    /**
     * Auto Trace Definition.
     * @type {Array<AutoTraceDefinitionType>}
     * @memberof AutoTraceDefinitionsInfo
     */
    autoTraceDefinitions?: Array<AutoTraceDefinitionType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof AutoTraceDefinitionsInfo
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the AutoTraceDefinitionsInfo interface.
 */
export function instanceOfAutoTraceDefinitionsInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoTraceDefinitionsInfoFromJSON(json: any): AutoTraceDefinitionsInfo {
    return AutoTraceDefinitionsInfoFromJSONTyped(json, false);
}

export function AutoTraceDefinitionsInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoTraceDefinitionsInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'autoTraceDefinitions': !exists(json, 'autoTraceDefinitions') ? undefined : ((json['autoTraceDefinitions'] as Array<any>).map(AutoTraceDefinitionTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function AutoTraceDefinitionsInfoToJSON(value?: AutoTraceDefinitionsInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'autoTraceDefinitions': value.autoTraceDefinitions === undefined ? undefined : ((value.autoTraceDefinitions as Array<any>).map(AutoTraceDefinitionTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
