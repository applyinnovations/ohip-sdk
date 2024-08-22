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
import type { CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinition } from './CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinition';
import {
    CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionFromJSON,
    CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionFromJSONTyped,
    CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionToJSON,
} from './CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinition';

/**
 * Criteria to copy multiple trace definitions from one property to another.
 * @export
 * @interface CopyAutoTraceDefinitionCriteriaType
 */
export interface CopyAutoTraceDefinitionCriteriaType {
    /**
     * 
     * @type {CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinition}
     * @memberof CopyAutoTraceDefinitionCriteriaType
     */
    copyAutoTraceDefinition?: CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinition;
}

/**
 * Check if a given object implements the CopyAutoTraceDefinitionCriteriaType interface.
 */
export function instanceOfCopyAutoTraceDefinitionCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CopyAutoTraceDefinitionCriteriaTypeFromJSON(json: any): CopyAutoTraceDefinitionCriteriaType {
    return CopyAutoTraceDefinitionCriteriaTypeFromJSONTyped(json, false);
}

export function CopyAutoTraceDefinitionCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CopyAutoTraceDefinitionCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'copyAutoTraceDefinition': !exists(json, 'copyAutoTraceDefinition') ? undefined : CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionFromJSON(json['copyAutoTraceDefinition']),
    };
}

export function CopyAutoTraceDefinitionCriteriaTypeToJSON(value?: CopyAutoTraceDefinitionCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'copyAutoTraceDefinition': CopyAutoTraceDefinitionCriteriaTypeCopyAutoTraceDefinitionToJSON(value.copyAutoTraceDefinition),
    };
}

