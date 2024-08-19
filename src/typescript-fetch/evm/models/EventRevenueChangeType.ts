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
import type { EventRevenueType } from './EventRevenueType';
import {
    EventRevenueTypeFromJSON,
    EventRevenueTypeFromJSONTyped,
    EventRevenueTypeToJSON,
} from './EventRevenueType';
import type { LogUserInfoType } from './LogUserInfoType';
import {
    LogUserInfoTypeFromJSON,
    LogUserInfoTypeFromJSONTyped,
    LogUserInfoTypeToJSON,
} from './LogUserInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * 
 * @export
 * @interface EventRevenueChangeType
 */
export interface EventRevenueChangeType {
    /**
     * Number of attendees for this event
     * @type {number}
     * @memberof EventRevenueChangeType
     */
    attendees?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventRevenueChangeType
     */
    blockId?: UniqueIDType;
    /**
     * 
     * @type {LogUserInfoType}
     * @memberof EventRevenueChangeType
     */
    changeUserInfo?: LogUserInfoType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventRevenueChangeType
     */
    eventChangeId?: UniqueIDType;
    /**
     * Date of this event
     * @type {string}
     * @memberof EventRevenueChangeType
     */
    eventDate?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventRevenueChangeType
     */
    eventId?: UniqueIDType;
    /**
     * Status of this event
     * @type {string}
     * @memberof EventRevenueChangeType
     */
    eventStatus?: string;
    /**
     * 
     * @type {EventRevenueType}
     * @memberof EventRevenueChangeType
     */
    revenueChange?: EventRevenueType;
}

/**
 * Check if a given object implements the EventRevenueChangeType interface.
 */
export function instanceOfEventRevenueChangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventRevenueChangeTypeFromJSON(json: any): EventRevenueChangeType {
    return EventRevenueChangeTypeFromJSONTyped(json, false);
}

export function EventRevenueChangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventRevenueChangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendees': !exists(json, 'attendees') ? undefined : json['attendees'],
        'blockId': !exists(json, 'blockId') ? undefined : UniqueIDTypeFromJSON(json['blockId']),
        'changeUserInfo': !exists(json, 'changeUserInfo') ? undefined : LogUserInfoTypeFromJSON(json['changeUserInfo']),
        'eventChangeId': !exists(json, 'eventChangeId') ? undefined : UniqueIDTypeFromJSON(json['eventChangeId']),
        'eventDate': !exists(json, 'eventDate') ? undefined : json['eventDate'],
        'eventId': !exists(json, 'eventId') ? undefined : UniqueIDTypeFromJSON(json['eventId']),
        'eventStatus': !exists(json, 'eventStatus') ? undefined : json['eventStatus'],
        'revenueChange': !exists(json, 'revenueChange') ? undefined : EventRevenueTypeFromJSON(json['revenueChange']),
    };
}

export function EventRevenueChangeTypeToJSON(value?: EventRevenueChangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendees': value.attendees,
        'blockId': UniqueIDTypeToJSON(value.blockId),
        'changeUserInfo': LogUserInfoTypeToJSON(value.changeUserInfo),
        'eventChangeId': UniqueIDTypeToJSON(value.eventChangeId),
        'eventDate': value.eventDate,
        'eventId': UniqueIDTypeToJSON(value.eventId),
        'eventStatus': value.eventStatus,
        'revenueChange': EventRevenueTypeToJSON(value.revenueChange),
    };
}

