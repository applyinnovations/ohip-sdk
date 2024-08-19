/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ExclusionReasonType } from './ExclusionReasonType';
import {
    ExclusionReasonTypeFromJSON,
    ExclusionReasonTypeFromJSONTyped,
    ExclusionReasonTypeToJSON,
} from './ExclusionReasonType';

/**
 * Specifies all the enabled dates.
 * @export
 * @interface ExcludedDateType
 */
export interface ExcludedDateType {
    /**
     * Contains exclusion date.
     * @type {string}
     * @memberof ExcludedDateType
     */
    date?: string;
    /**
     * 
     * @type {ExclusionReasonType}
     * @memberof ExcludedDateType
     */
    reason?: ExclusionReasonType;
}

/**
 * Check if a given object implements the ExcludedDateType interface.
 */
export function instanceOfExcludedDateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ExcludedDateTypeFromJSON(json: any): ExcludedDateType {
    return ExcludedDateTypeFromJSONTyped(json, false);
}

export function ExcludedDateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExcludedDateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'date': !exists(json, 'date') ? undefined : json['date'],
        'reason': !exists(json, 'reason') ? undefined : ExclusionReasonTypeFromJSON(json['reason']),
    };
}

export function ExcludedDateTypeToJSON(value?: ExcludedDateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'date': value.date,
        'reason': ExclusionReasonTypeToJSON(value.reason),
    };
}

