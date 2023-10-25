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
import type { RoomsSummaryDetailsRooms } from './RoomsSummaryDetailsRooms';
import {
    RoomsSummaryDetailsRoomsFromJSON,
    RoomsSummaryDetailsRoomsFromJSONTyped,
    RoomsSummaryDetailsRoomsToJSON,
} from './RoomsSummaryDetailsRooms';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response object for fetching summary information of existing rooms.
 * @export
 * @interface RoomsSummaryDetails
 */
export interface RoomsSummaryDetails {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomsSummaryDetails
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {RoomsSummaryDetailsRooms}
     * @memberof RoomsSummaryDetails
     */
    rooms?: RoomsSummaryDetailsRooms;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomsSummaryDetails
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomsSummaryDetails interface.
 */
export function instanceOfRoomsSummaryDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomsSummaryDetailsFromJSON(json: any): RoomsSummaryDetails {
    return RoomsSummaryDetailsFromJSONTyped(json, false);
}

export function RoomsSummaryDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomsSummaryDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rooms': !exists(json, 'rooms') ? undefined : RoomsSummaryDetailsRoomsFromJSON(json['rooms']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomsSummaryDetailsToJSON(value?: RoomsSummaryDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rooms': RoomsSummaryDetailsRoomsToJSON(value.rooms),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

