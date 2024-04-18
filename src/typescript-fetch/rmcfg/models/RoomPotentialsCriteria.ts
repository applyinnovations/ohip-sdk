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
import type { RoomPotentialType } from './RoomPotentialType';
import {
    RoomPotentialTypeFromJSON,
    RoomPotentialTypeFromJSONTyped,
    RoomPotentialTypeToJSON,
} from './RoomPotentialType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for creating Room Potentials.
 * @export
 * @interface RoomPotentialsCriteria
 */
export interface RoomPotentialsCriteria {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomPotentialsCriteria
     */
    links?: Array<InstanceLink>;
    /**
     * List of Room Potentials.
     * @type {Array<RoomPotentialType>}
     * @memberof RoomPotentialsCriteria
     */
    roomPotentials?: Array<RoomPotentialType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomPotentialsCriteria
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomPotentialsCriteria interface.
 */
export function instanceOfRoomPotentialsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomPotentialsCriteriaFromJSON(json: any): RoomPotentialsCriteria {
    return RoomPotentialsCriteriaFromJSONTyped(json, false);
}

export function RoomPotentialsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomPotentialsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomPotentials': !exists(json, 'roomPotentials') ? undefined : ((json['roomPotentials'] as Array<any>).map(RoomPotentialTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomPotentialsCriteriaToJSON(value?: RoomPotentialsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomPotentials': value.roomPotentials === undefined ? undefined : ((value.roomPotentials as Array<any>).map(RoomPotentialTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
