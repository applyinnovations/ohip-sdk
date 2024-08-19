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
import type { EventInfoType } from './EventInfoType';
import {
    EventInfoTypeFromJSON,
    EventInfoTypeFromJSONTyped,
    EventInfoTypeToJSON,
} from './EventInfoType';
import type { EventItemInfoType } from './EventItemInfoType';
import {
    EventItemInfoTypeFromJSON,
    EventItemInfoTypeFromJSONTyped,
    EventItemInfoTypeToJSON,
} from './EventItemInfoType';
import type { EventMenuInfoType } from './EventMenuInfoType';
import {
    EventMenuInfoTypeFromJSON,
    EventMenuInfoTypeFromJSONTyped,
    EventMenuInfoTypeToJSON,
} from './EventMenuInfoType';

/**
 * Detail information of resource which can be a Menu, Item or Space.
 * @export
 * @interface EventResourceDetailType
 */
export interface EventResourceDetailType {
    /**
     * 
     * @type {EventInfoType}
     * @memberof EventResourceDetailType
     */
    eventDetailInfo?: EventInfoType;
    /**
     * 
     * @type {EventItemInfoType}
     * @memberof EventResourceDetailType
     */
    item?: EventItemInfoType;
    /**
     * 
     * @type {EventMenuInfoType}
     * @memberof EventResourceDetailType
     */
    menu?: EventMenuInfoType;
}

/**
 * Check if a given object implements the EventResourceDetailType interface.
 */
export function instanceOfEventResourceDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EventResourceDetailTypeFromJSON(json: any): EventResourceDetailType {
    return EventResourceDetailTypeFromJSONTyped(json, false);
}

export function EventResourceDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): EventResourceDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'eventDetailInfo': !exists(json, 'eventDetailInfo') ? undefined : EventInfoTypeFromJSON(json['eventDetailInfo']),
        'item': !exists(json, 'item') ? undefined : EventItemInfoTypeFromJSON(json['item']),
        'menu': !exists(json, 'menu') ? undefined : EventMenuInfoTypeFromJSON(json['menu']),
    };
}

export function EventResourceDetailTypeToJSON(value?: EventResourceDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'eventDetailInfo': EventInfoTypeToJSON(value.eventDetailInfo),
        'item': EventItemInfoTypeToJSON(value.item),
        'menu': EventMenuInfoTypeToJSON(value.menu),
    };
}

