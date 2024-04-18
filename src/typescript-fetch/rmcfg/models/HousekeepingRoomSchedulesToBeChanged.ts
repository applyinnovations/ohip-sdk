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
import type { ConfigHousekeepingRoomScheduleType } from './ConfigHousekeepingRoomScheduleType';
import {
    ConfigHousekeepingRoomScheduleTypeFromJSON,
    ConfigHousekeepingRoomScheduleTypeFromJSONTyped,
    ConfigHousekeepingRoomScheduleTypeToJSON,
} from './ConfigHousekeepingRoomScheduleType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for changing housekeeping tasks and housekeeping codes associated to a room type.
 * @export
 * @interface HousekeepingRoomSchedulesToBeChanged
 */
export interface HousekeepingRoomSchedulesToBeChanged {
    /**
     * This type holds a collection of housekeeping tasks attached to a room type.
     * @type {Array<ConfigHousekeepingRoomScheduleType>}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    housekeepingRoomSchedules?: Array<ConfigHousekeepingRoomScheduleType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof HousekeepingRoomSchedulesToBeChanged
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the HousekeepingRoomSchedulesToBeChanged interface.
 */
export function instanceOfHousekeepingRoomSchedulesToBeChanged(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HousekeepingRoomSchedulesToBeChangedFromJSON(json: any): HousekeepingRoomSchedulesToBeChanged {
    return HousekeepingRoomSchedulesToBeChangedFromJSONTyped(json, false);
}

export function HousekeepingRoomSchedulesToBeChangedFromJSONTyped(json: any, ignoreDiscriminator: boolean): HousekeepingRoomSchedulesToBeChanged {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'housekeepingRoomSchedules': !exists(json, 'housekeepingRoomSchedules') ? undefined : ((json['housekeepingRoomSchedules'] as Array<any>).map(ConfigHousekeepingRoomScheduleTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function HousekeepingRoomSchedulesToBeChangedToJSON(value?: HousekeepingRoomSchedulesToBeChanged | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'housekeepingRoomSchedules': value.housekeepingRoomSchedules === undefined ? undefined : ((value.housekeepingRoomSchedules as Array<any>).map(ConfigHousekeepingRoomScheduleTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}
