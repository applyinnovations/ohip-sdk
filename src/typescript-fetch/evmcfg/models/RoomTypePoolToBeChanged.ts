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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RoomTypePoolTypes } from './RoomTypePoolTypes';
import {
    RoomTypePoolTypesFromJSON,
    RoomTypePoolTypesFromJSONTyped,
    RoomTypePoolTypesToJSON,
} from './RoomTypePoolTypes';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing existing room pool.
 * @export
 * @interface RoomTypePoolToBeChanged
 */
export interface RoomTypePoolToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof RoomTypePoolToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {RoomTypePoolTypes}
     * @memberof RoomTypePoolToBeChanged
     */
    roomPoolTypes?: RoomTypePoolTypes;
    /**
     * 
     * @type {WarningsType}
     * @memberof RoomTypePoolToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RoomTypePoolToBeChanged interface.
 */
export function instanceOfRoomTypePoolToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypePoolToBeChangedFromJSON(json: any): RoomTypePoolToBeChanged {
    return RoomTypePoolToBeChangedFromJSONTyped(json, false);
}

export function RoomTypePoolToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypePoolToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'roomPoolTypes': !exists(json, 'roomPoolTypes') ? undefined : RoomTypePoolTypesFromJSON(json['roomPoolTypes']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RoomTypePoolToBeChangedToJSON(value?: RoomTypePoolToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'roomPoolTypes': RoomTypePoolTypesToJSON(value.roomPoolTypes),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
