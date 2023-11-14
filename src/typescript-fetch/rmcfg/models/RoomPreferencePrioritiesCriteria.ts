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
import type { RoomPreferencePrioritiesType } from './RoomPreferencePrioritiesType';
import {
    RoomPreferencePrioritiesTypeFromJSON,
    RoomPreferencePrioritiesTypeFromJSONTyped,
    RoomPreferencePrioritiesTypeToJSON,
} from './RoomPreferencePrioritiesType';
import type { WarningsType } from './WarningsType';
import {
    WarningsTypeFromJSON,
    WarningsTypeFromJSONTyped,
    WarningsTypeToJSON,
} from './WarningsType';

/**
 * Request object for creating Room Preference Priorities.
 * @export
 * @interface RoomPreferencePrioritiesCriteria
 */
export interface RoomPreferencePrioritiesCriteria {
    /**
     * 
     * @type {Links}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    links?: Links;
    /**
     * 
     * @type {RoomPreferencePrioritiesType}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    roomPreferencePriorities?: RoomPreferencePrioritiesType;
    /**
     * 
     * @type {WarningsType}
     * @memberof RoomPreferencePrioritiesCriteria
     */
    warnings?: WarningsType;
}

/**
 * Check if a given object implements the RoomPreferencePrioritiesCriteria interface.
 */
export function instanceOfRoomPreferencePrioritiesCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomPreferencePrioritiesCriteriaFromJSON(json: any): RoomPreferencePrioritiesCriteria {
    return RoomPreferencePrioritiesCriteriaFromJSONTyped(json, false);
}

export function RoomPreferencePrioritiesCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomPreferencePrioritiesCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : LinksFromJSON(json['links']),
        'roomPreferencePriorities': !exists(json, 'roomPreferencePriorities') ? undefined : RoomPreferencePrioritiesTypeFromJSON(json['roomPreferencePriorities']),
        'warnings': !exists(json, 'warnings') ? undefined : WarningsTypeFromJSON(json['warnings']),
    };
}

export function RoomPreferencePrioritiesCriteriaToJSON(value?: RoomPreferencePrioritiesCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': LinksToJSON(value.links),
        'roomPreferencePriorities': RoomPreferencePrioritiesTypeToJSON(value.roomPreferencePriorities),
        'warnings': WarningsTypeToJSON(value.warnings),
    };
}
