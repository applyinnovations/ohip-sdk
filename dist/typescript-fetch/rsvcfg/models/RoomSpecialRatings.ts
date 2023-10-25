/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { RoomSpecialRatingInfoType } from './RoomSpecialRatingInfoType';
import {
    RoomSpecialRatingInfoTypeFromJSON,
    RoomSpecialRatingInfoTypeFromJSONTyped,
    RoomSpecialRatingInfoTypeToJSON,
} from './RoomSpecialRatingInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying room specials rating details.
 * @export
 * @interface RoomSpecialRatings
 */
export interface RoomSpecialRatings {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomSpecialRatings
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of rooms specials and their ratings.
     * @type {Array<RoomSpecialRatingInfoType>}
     * @memberof RoomSpecialRatings
     */
    roomSpecialRatingsInfo?: Array<RoomSpecialRatingInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomSpecialRatings
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomSpecialRatings interface.
 */
export function instanceOfRoomSpecialRatings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomSpecialRatingsFromJSON(json: any): RoomSpecialRatings {
    return RoomSpecialRatingsFromJSONTyped(json, false);
}

export function RoomSpecialRatingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomSpecialRatings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomSpecialRatingsInfo': !exists(json, 'roomSpecialRatingsInfo') ? undefined : ((json['roomSpecialRatingsInfo'] as Array<any>).map(RoomSpecialRatingInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomSpecialRatingsToJSON(value?: RoomSpecialRatings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomSpecialRatingsInfo': value.roomSpecialRatingsInfo === undefined ? undefined : ((value.roomSpecialRatingsInfo as Array<any>).map(RoomSpecialRatingInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

