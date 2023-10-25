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
 * @interface EventStatusChangeType
 */
export interface EventStatusChangeType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventStatusChangeType
     */
    blockId?: UniqueIDType;
    /**
     * 
     * @type {LogUserInfoType}
     * @memberof EventStatusChangeType
     */
    changeUserInfo?: LogUserInfoType;
    /**
     * Current Status of this event
     * @type {string}
     * @memberof EventStatusChangeType
     */
    currentStatus?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventStatusChangeType
     */
    eventChangeId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof EventStatusChangeType
     */
    eventId?: UniqueIDType;
    /**
     * Prior Status of this event
     * @type {string}
     * @memberof EventStatusChangeType
     */
    priorStatus?: string;
}

/**
 * Check if a given object implements the EventStatusChangeType interface.
 */
export function instanceOfEventStatusChangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventStatusChangeTypeFromJSON(json: any): EventStatusChangeType {
    return EventStatusChangeTypeFromJSONTyped(json, false);
}

export function EventStatusChangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventStatusChangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : UniqueIDTypeFromJSON(json['blockId']),
        'changeUserInfo': !exists(json, 'changeUserInfo') ? undefined : LogUserInfoTypeFromJSON(json['changeUserInfo']),
        'currentStatus': !exists(json, 'currentStatus') ? undefined : json['currentStatus'],
        'eventChangeId': !exists(json, 'eventChangeId') ? undefined : UniqueIDTypeFromJSON(json['eventChangeId']),
        'eventId': !exists(json, 'eventId') ? undefined : UniqueIDTypeFromJSON(json['eventId']),
        'priorStatus': !exists(json, 'priorStatus') ? undefined : json['priorStatus'],
    };
}

export function EventStatusChangeTypeToJSON(value?: EventStatusChangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': UniqueIDTypeToJSON(value.blockId),
        'changeUserInfo': LogUserInfoTypeToJSON(value.changeUserInfo),
        'currentStatus': value.currentStatus,
        'eventChangeId': UniqueIDTypeToJSON(value.eventChangeId),
        'eventId': UniqueIDTypeToJSON(value.eventId),
        'priorStatus': value.priorStatus,
    };
}

