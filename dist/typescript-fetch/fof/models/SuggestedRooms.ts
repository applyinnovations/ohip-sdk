/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { SuggestedRoomType } from './SuggestedRoomType';
import {
    SuggestedRoomTypeFromJSON,
    SuggestedRoomTypeFromJSONTyped,
    SuggestedRoomTypeToJSON,
} from './SuggestedRoomType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Response of fetch suggested rooms operation.
 * @export
 * @interface SuggestedRooms
 */
export interface SuggestedRooms {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof SuggestedRooms
     */
    links?: Array<InstanceLink>;
    /**
     * List of suggested rooms for room assignment.
     * @type {Array<SuggestedRoomType>}
     * @memberof SuggestedRooms
     */
    suggestedRoomsType?: Array<SuggestedRoomType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof SuggestedRooms
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the SuggestedRooms interface.
 */
export function instanceOfSuggestedRooms(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SuggestedRoomsFromJSON(json: any): SuggestedRooms {
    return SuggestedRoomsFromJSONTyped(json, false);
}

export function SuggestedRoomsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SuggestedRooms {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'suggestedRoomsType': !exists(json, 'suggestedRoomsType') ? undefined : ((json['suggestedRoomsType'] as Array<any>).map(SuggestedRoomTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function SuggestedRoomsToJSON(value?: SuggestedRooms | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'suggestedRoomsType': value.suggestedRoomsType === undefined ? undefined : ((value.suggestedRoomsType as Array<any>).map(SuggestedRoomTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

