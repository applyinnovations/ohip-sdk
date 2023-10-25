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
import type { RoomFeatureRatingInfoType } from './RoomFeatureRatingInfoType';
import {
    RoomFeatureRatingInfoTypeFromJSON,
    RoomFeatureRatingInfoTypeFromJSONTyped,
    RoomFeatureRatingInfoTypeToJSON,
} from './RoomFeatureRatingInfoType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * Request object for modifying room features rating details.
 * @export
 * @interface RoomFeatureRatings
 */
export interface RoomFeatureRatings {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof RoomFeatureRatings
     */
    links?: Array<InstanceLink>;
    /**
     * Collection of rooms features and their ratings.
     * @type {Array<RoomFeatureRatingInfoType>}
     * @memberof RoomFeatureRatings
     */
    roomFeatureRatingsInfo?: Array<RoomFeatureRatingInfoType>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof RoomFeatureRatings
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the RoomFeatureRatings interface.
 */
export function instanceOfRoomFeatureRatings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomFeatureRatingsFromJSON(json: any): RoomFeatureRatings {
    return RoomFeatureRatingsFromJSONTyped(json, false);
}

export function RoomFeatureRatingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomFeatureRatings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'roomFeatureRatingsInfo': !exists(json, 'roomFeatureRatingsInfo') ? undefined : ((json['roomFeatureRatingsInfo'] as Array<any>).map(RoomFeatureRatingInfoTypeFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function RoomFeatureRatingsToJSON(value?: RoomFeatureRatings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'roomFeatureRatingsInfo': value.roomFeatureRatingsInfo === undefined ? undefined : ((value.roomFeatureRatingsInfo as Array<any>).map(RoomFeatureRatingInfoTypeToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

