/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RestrictionStatusType } from './RestrictionStatusType';
import {
    RestrictionStatusTypeFromJSON,
    RestrictionStatusTypeFromJSONTyped,
    RestrictionStatusTypeToJSON,
} from './RestrictionStatusType';
import type { TimeSpanDaysOfWeekType } from './TimeSpanDaysOfWeekType';
import {
    TimeSpanDaysOfWeekTypeFromJSON,
    TimeSpanDaysOfWeekTypeFromJSONTyped,
    TimeSpanDaysOfWeekTypeToJSON,
} from './TimeSpanDaysOfWeekType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

/**
 * Restriction details for a block.
 * @export
 * @interface BlockRestrictionType
 */
export interface BlockRestrictionType {
    /**
     * 
     * @type {TimeSpanType}
     * @memberof BlockRestrictionType
     */
    actualTimeSpan?: TimeSpanType;
    /**
     * 
     * @type {RestrictionStatusType}
     * @memberof BlockRestrictionType
     */
    blockRestrictionStatus?: RestrictionStatusType;
    /**
     * 
     * @type {TimeSpanDaysOfWeekType}
     * @memberof BlockRestrictionType
     */
    restrictionDate?: TimeSpanDaysOfWeekType;
    /**
     * Room Type selected for the block restriction.
     * @type {string}
     * @memberof BlockRestrictionType
     */
    roomType?: string;
}

/**
 * Check if a given object implements the BlockRestrictionType interface.
 */
export function instanceOfBlockRestrictionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BlockRestrictionTypeFromJSON(json: any): BlockRestrictionType {
    return BlockRestrictionTypeFromJSONTyped(json, false);
}

export function BlockRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BlockRestrictionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actualTimeSpan': !exists(json, 'actualTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['actualTimeSpan']),
        'blockRestrictionStatus': !exists(json, 'blockRestrictionStatus') ? undefined : RestrictionStatusTypeFromJSON(json['blockRestrictionStatus']),
        'restrictionDate': !exists(json, 'restrictionDate') ? undefined : TimeSpanDaysOfWeekTypeFromJSON(json['restrictionDate']),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
    };
}

export function BlockRestrictionTypeToJSON(value?: BlockRestrictionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actualTimeSpan': TimeSpanTypeToJSON(value.actualTimeSpan),
        'blockRestrictionStatus': RestrictionStatusTypeToJSON(value.blockRestrictionStatus),
        'restrictionDate': TimeSpanDaysOfWeekTypeToJSON(value.restrictionDate),
        'roomType': value.roomType,
    };
}

