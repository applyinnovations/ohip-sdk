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
import type { Links } from './Links';
import {
    LinksFromJSON,
    LinksFromJSONTyped,
    LinksToJSON,
} from './Links';
import type { RoomClassType } from './RoomClassType';
import {
    RoomClassTypeFromJSON,
    RoomClassTypeFromJSONTyped,
    RoomClassTypeToJSON,
} from './RoomClassType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for changing an existing hotel level room class.
 * @export
 * @interface RoomClassToBeChanged
 */
export interface RoomClassToBeChanged {
    /**
     * 
     * @type {Links}
     * @memberof RoomClassToBeChanged
     */
    links?: Links;
    /**
     * 
     * @type {RoomClassType}
     * @memberof RoomClassToBeChanged
     */
    roomClass?: RoomClassType;
    /**
     * 
     * @type {WarningsType}
     * @memberof RoomClassToBeChanged
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RoomClassToBeChanged interface.
 */
export function instanceOfRoomClassToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomClassToBeChangedFromJSON(json: any): RoomClassToBeChanged {
    return RoomClassToBeChangedFromJSONTyped(json, false);
}

export function RoomClassToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomClassToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'roomClass': !exists(json, 'roomClass') ? undefined : RoomClassTypeFromJSON(json['roomClass']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RoomClassToBeChangedToJSON(value?: RoomClassToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'roomClass': RoomClassTypeToJSON(value.roomClass),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
