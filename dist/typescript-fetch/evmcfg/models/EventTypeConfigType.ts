/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TimeWindowType } from './TimeWindowType';
import {
    TimeWindowTypeFromJSON,
    TimeWindowTypeFromJSONTyped,
    TimeWindowTypeToJSON,
} from './TimeWindowType';
import type { TranslationTextType50 } from './TranslationTextType50';
import {
    TranslationTextType50FromJSON,
    TranslationTextType50FromJSONTyped,
    TranslationTextType50ToJSON,
} from './TranslationTextType50';

/**
 * Representation of event record type.
 * @export
 * @interface EventTypeConfigType
 */
export interface EventTypeConfigType {
    /**
     * Indicates if Event Type is coverable or not.
     * @type {boolean}
     * @memberof EventTypeConfigType
     */
    coverable?: boolean;
    /**
     * Description to elaborate the Event Code Type.
     * @type {string}
     * @memberof EventTypeConfigType
     */
    description?: string;
    /**
     * Code Field Value belongs to the Event Type.
     * @type {string}
     * @memberof EventTypeConfigType
     */
    eventTypeCode?: string;
    /**
     * Determines the event type status as active or inactive
     * @type {boolean}
     * @memberof EventTypeConfigType
     */
    inactive?: boolean;
    /**
     * Meal type associated with the event type.
     * @type {string}
     * @memberof EventTypeConfigType
     */
    mealType?: string;
    /**
     * The sequence number of the event.
     * @type {number}
     * @memberof EventTypeConfigType
     */
    sequence?: number;
    /**
     * 
     * @type {TimeWindowType}
     * @memberof EventTypeConfigType
     */
    timeWindow?: TimeWindowType;
    /**
     * 
     * @type {TranslationTextType50}
     * @memberof EventTypeConfigType
     */
    translatableDescription?: TranslationTextType50;
    /**
     * Defines if web booking is allowed or not.
     * @type {boolean}
     * @memberof EventTypeConfigType
     */
    webBookable?: boolean;
}

/**
 * Check if a given object implements the EventTypeConfigType interface.
 */
export function instanceOfEventTypeConfigType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventTypeConfigTypeFromJSON(json: any): EventTypeConfigType {
    return EventTypeConfigTypeFromJSONTyped(json, false);
}

export function EventTypeConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventTypeConfigType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coverable': !exists(json, 'coverable') ? undefined : json['coverable'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'eventTypeCode': !exists(json, 'eventTypeCode') ? undefined : json['eventTypeCode'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'mealType': !exists(json, 'mealType') ? undefined : json['mealType'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'timeWindow': !exists(json, 'timeWindow') ? undefined : TimeWindowTypeFromJSON(json['timeWindow']),
        'translatableDescription': !exists(json, 'translatableDescription') ? undefined : TranslationTextType50FromJSON(json['translatableDescription']),
        'webBookable': !exists(json, 'webBookable') ? undefined : json['webBookable'],
    };
}

export function EventTypeConfigTypeToJSON(value?: EventTypeConfigType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coverable': value.coverable,
        'description': value.description,
        'eventTypeCode': value.eventTypeCode,
        'inactive': value.inactive,
        'mealType': value.mealType,
        'sequence': value.sequence,
        'timeWindow': TimeWindowTypeToJSON(value.timeWindow),
        'translatableDescription': TranslationTextType50ToJSON(value.translatableDescription),
        'webBookable': value.webBookable,
    };
}

