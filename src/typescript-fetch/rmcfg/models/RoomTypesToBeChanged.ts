/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
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
import type { RoomTypesToBeChangedRoomType } from './RoomTypesToBeChangedRoomType';
import {
    RoomTypesToBeChangedRoomTypeFromJSON,
    RoomTypesToBeChangedRoomTypeFromJSONTyped,
    RoomTypesToBeChangedRoomTypeToJSON,
} from './RoomTypesToBeChangedRoomType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for Modifying Room Type.
 * @export
 * @interface RoomTypesToBeChanged
 */
export interface RoomTypesToBeChanged {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomTypesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RoomTypesToBeChangedRoomType}
     * @memberof RoomTypesToBeChanged
     */
    roomType?: RoomTypesToBeChangedRoomType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomTypesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomTypesToBeChanged interface.
 */
export function instanceOfRoomTypesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypesToBeChangedFromJSON(json: any): RoomTypesToBeChanged {
    return RoomTypesToBeChangedFromJSONTyped(json, false);
}

export function RoomTypesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomType': !exists(json, 'roomType') ? undefined : RoomTypesToBeChangedRoomTypeFromJSON(json['roomType']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomTypesToBeChangedToJSON(value?: RoomTypesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomType': RoomTypesToBeChangedRoomTypeToJSON(value.roomType),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
