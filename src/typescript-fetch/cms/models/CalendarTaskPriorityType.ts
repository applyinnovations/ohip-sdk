/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud API for Customer Management Service
 * This API deals with the different aspect of the CustomerManagement.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
import type { PriorityColorType } from './PriorityColorType';
import {
    PriorityColorTypeFromJSON,
    PriorityColorTypeFromJSONTyped,
    PriorityColorTypeToJSON,
} from './PriorityColorType';

/**
 * Calendar Task code, description and color This will be used for calendar task priorities.
 * @export
 * @interface CalendarTaskPriorityType
 */
export interface CalendarTaskPriorityType {
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof CalendarTaskPriorityType
     */
    code?: CodeDescriptionType;
    /**
     * 
     * @type {PriorityColorType}
     * @memberof CalendarTaskPriorityType
     */
    priorityColor?: PriorityColorType;
}

/**
 * Check if a given object implements the CalendarTaskPriorityType interface.
 */
export function instanceOfCalendarTaskPriorityType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CalendarTaskPriorityTypeFromJSON(json: any): CalendarTaskPriorityType {
    return CalendarTaskPriorityTypeFromJSONTyped(json, false);
}

export function CalendarTaskPriorityTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CalendarTaskPriorityType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : CodeDescriptionTypeFromJSON(json['code']),
        'priorityColor': !exists(json, 'priorityColor') ? undefined : PriorityColorTypeFromJSON(json['priorityColor']),
    };
}

export function CalendarTaskPriorityTypeToJSON(value?: CalendarTaskPriorityType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': CodeDescriptionTypeToJSON(value.code),
        'priorityColor': PriorityColorTypeToJSON(value.priorityColor),
    };
}
