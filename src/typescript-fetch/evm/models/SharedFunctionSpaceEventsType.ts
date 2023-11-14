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
import type { SharedFunctionSpaceEventType } from './SharedFunctionSpaceEventType';
import {
    SharedFunctionSpaceEventTypeFromJSON,
    SharedFunctionSpaceEventTypeFromJSONTyped,
    SharedFunctionSpaceEventTypeToJSON,
} from './SharedFunctionSpaceEventType';

/**
 * Collection of events shared by function space.
 * @export
 * @interface SharedFunctionSpaceEventsType
 */
export interface SharedFunctionSpaceEventsType {
    /**
     * Maximum capcity of the shared function space.
     * @type {number}
     * @memberof SharedFunctionSpaceEventsType
     */
    maxCapacity?: number;
    /**
     * Maximum number of events for the shared function space.
     * @type {number}
     * @memberof SharedFunctionSpaceEventsType
     */
    maxEvents?: number;
    /**
     * Pertain shared event Information.
     * @type {Array<SharedFunctionSpaceEventType>}
     * @memberof SharedFunctionSpaceEventsType
     */
    sharedFunctionSpaceEvent?: Array<SharedFunctionSpaceEventType>;
}

/**
 * Check if a given object implements the SharedFunctionSpaceEventsType interface.
 */
export function instanceOfSharedFunctionSpaceEventsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SharedFunctionSpaceEventsTypeFromJSON(json: any): SharedFunctionSpaceEventsType {
    return SharedFunctionSpaceEventsTypeFromJSONTyped(json, false);
}

export function SharedFunctionSpaceEventsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SharedFunctionSpaceEventsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'maxCapacity': !exists(json, 'maxCapacity') ? undefined : json['maxCapacity'],
        'maxEvents': !exists(json, 'maxEvents') ? undefined : json['maxEvents'],
        'sharedFunctionSpaceEvent': !exists(json, 'sharedFunctionSpaceEvent') ? undefined : ((json['sharedFunctionSpaceEvent'] as Array<any>).map(SharedFunctionSpaceEventTypeFromJSON)),
    };
}

export function SharedFunctionSpaceEventsTypeToJSON(value?: SharedFunctionSpaceEventsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'maxCapacity': value.maxCapacity,
        'maxEvents': value.maxEvents,
        'sharedFunctionSpaceEvent': value.sharedFunctionSpaceEvent === undefined ? undefined : ((value.sharedFunctionSpaceEvent as Array<any>).map(SharedFunctionSpaceEventTypeToJSON)),
    };
}
