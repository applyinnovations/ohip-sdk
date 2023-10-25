/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { RoomToBeChangedRoom } from './RoomToBeChangedRoom';
import {
    RoomToBeChangedRoomFromJSON,
    RoomToBeChangedRoomFromJSONTyped,
    RoomToBeChangedRoomToJSON,
} from './RoomToBeChangedRoom';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing details of an existing room.
 * @export
 * @interface RoomToBeChanged
 */
export interface RoomToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RoomToBeChangedRoom}
     * @memberof RoomToBeChanged
     */
    room?: RoomToBeChangedRoom;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomToBeChanged interface.
 */
export function instanceOfRoomToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomToBeChangedFromJSON(json: any): RoomToBeChanged {
    return RoomToBeChangedFromJSONTyped(json, false);
}

export function RoomToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'room': !exists(json, 'room') ? undefined : RoomToBeChangedRoomFromJSON(json['room']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomToBeChangedToJSON(value?: RoomToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'room': RoomToBeChangedRoomToJSON(value.room),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

