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
import type { RoomHierarchyType } from './RoomHierarchyType';
import {
    RoomHierarchyTypeFromJSON,
    RoomHierarchyTypeFromJSONTyped,
    RoomHierarchyTypeToJSON,
} from './RoomHierarchyType';

/**
 * Holds collection of room hierarchies
 * @export
 * @interface CreateRoomHierarchiesType
 */
export interface CreateRoomHierarchiesType {
    /**
     * Setting this flag to true will overwrite all existing hierarchies.
     * @type {boolean}
     * @memberof CreateRoomHierarchiesType
     */
    overwriteExisting?: boolean;
    /**
     * 
     * @type {Array<RoomHierarchyType>}
     * @memberof CreateRoomHierarchiesType
     */
    roomHierarchy?: Array<RoomHierarchyType>;
}

/**
 * Check if a given object implements the CreateRoomHierarchiesType interface.
 */
export function instanceOfCreateRoomHierarchiesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateRoomHierarchiesTypeFromJSON(json: any): CreateRoomHierarchiesType {
    return CreateRoomHierarchiesTypeFromJSONTyped(json, false);
}

export function CreateRoomHierarchiesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRoomHierarchiesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'overwriteExisting': !exists(json, 'overwriteExisting') ? undefined : json['overwriteExisting'],
        'roomHierarchy': !exists(json, 'roomHierarchy') ? undefined : ((json['roomHierarchy'] as Array<any>).map(RoomHierarchyTypeFromJSON)),
    };
}

export function CreateRoomHierarchiesTypeToJSON(value?: CreateRoomHierarchiesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'overwriteExisting': value.overwriteExisting,
        'roomHierarchy': value.roomHierarchy === undefined ? undefined : ((value.roomHierarchy as Array<any>).map(RoomHierarchyTypeToJSON)),
    };
}
