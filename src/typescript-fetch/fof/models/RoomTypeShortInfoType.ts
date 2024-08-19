/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { RatePlanRatingType } from './RatePlanRatingType';
import {
    RatePlanRatingTypeFromJSON,
    RatePlanRatingTypeFromJSONTyped,
    RatePlanRatingTypeToJSON,
} from './RatePlanRatingType';
import type { RoomFeatureType } from './RoomFeatureType';
import {
    RoomFeatureTypeFromJSON,
    RoomFeatureTypeFromJSONTyped,
    RoomFeatureTypeToJSON,
} from './RoomFeatureType';

/**
 * Basic information of room type.
 * @export
 * @interface RoomTypeShortInfoType
 */
export interface RoomTypeShortInfoType {
    /**
     * Indicates if room type is accessible.
     * @type {boolean}
     * @memberof RoomTypeShortInfoType
     */
    accessible?: boolean;
    /**
     * Building associated with the room.
     * @type {string}
     * @memberof RoomTypeShortInfoType
     */
    building?: string;
    /**
     * Indicates if room type of the room is flagged as housekeeping. This is read-only.
     * @type {boolean}
     * @memberof RoomTypeShortInfoType
     */
    houseKeeping?: boolean;
    /**
     * Maximum occupancy for the room type.
     * @type {number}
     * @memberof RoomTypeShortInfoType
     */
    maximumOccupancy?: number;
    /**
     * Indicates whether function space can be meeting room.
     * @type {boolean}
     * @memberof RoomTypeShortInfoType
     */
    meetingRoom?: boolean;
    /**
     * Minimum occupancy for the room type.
     * @type {number}
     * @memberof RoomTypeShortInfoType
     */
    minimumOccupancy?: number;
    /**
     * Indicates if room is a pseudo. This is read-only.
     * @type {boolean}
     * @memberof RoomTypeShortInfoType
     */
    pseudo?: boolean;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof RoomTypeShortInfoType
     */
    roomAssignmentRating?: RatePlanRatingType;
    /**
     * Room Class of the room. This is read-only.
     * @type {string}
     * @memberof RoomTypeShortInfoType
     */
    roomClass?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof RoomTypeShortInfoType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Room type of the room.
     * @type {string}
     * @memberof RoomTypeShortInfoType
     */
    roomType?: string;
    /**
     * Short Description of room type.
     * @type {string}
     * @memberof RoomTypeShortInfoType
     */
    shortDescription?: string;
    /**
     * Specifies the smoking preference for room type of the room.
     * @type {string}
     * @memberof RoomTypeShortInfoType
     */
    smokingPreference?: string;
    /**
     * Indicates if room is a suite. This is read-only.
     * @type {boolean}
     * @memberof RoomTypeShortInfoType
     */
    suite?: boolean;
}

/**
 * Check if a given object implements the RoomTypeShortInfoType interface.
 */
export function instanceOfRoomTypeShortInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeShortInfoTypeFromJSON(json: any): RoomTypeShortInfoType {
    return RoomTypeShortInfoTypeFromJSONTyped(json, false);
}

export function RoomTypeShortInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeShortInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessible': !exists(json, 'accessible') ? undefined : json['accessible'],
        'building': !exists(json, 'building') ? undefined : json['building'],
        'houseKeeping': !exists(json, 'houseKeeping') ? undefined : json['houseKeeping'],
        'maximumOccupancy': !exists(json, 'maximumOccupancy') ? undefined : json['maximumOccupancy'],
        'meetingRoom': !exists(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'minimumOccupancy': !exists(json, 'minimumOccupancy') ? undefined : json['minimumOccupancy'],
        'pseudo': !exists(json, 'pseudo') ? undefined : json['pseudo'],
        'roomAssignmentRating': !exists(json, 'roomAssignmentRating') ? undefined : RatePlanRatingTypeFromJSON(json['roomAssignmentRating']),
        'roomClass': !exists(json, 'roomClass') ? undefined : json['roomClass'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'shortDescription': !exists(json, 'shortDescription') ? undefined : json['shortDescription'],
        'smokingPreference': !exists(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'suite': !exists(json, 'suite') ? undefined : json['suite'],
    };
}

export function RoomTypeShortInfoTypeToJSON(value?: RoomTypeShortInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessible': value.accessible,
        'building': value.building,
        'houseKeeping': value.houseKeeping,
        'maximumOccupancy': value.maximumOccupancy,
        'meetingRoom': value.meetingRoom,
        'minimumOccupancy': value.minimumOccupancy,
        'pseudo': value.pseudo,
        'roomAssignmentRating': RatePlanRatingTypeToJSON(value.roomAssignmentRating),
        'roomClass': value.roomClass,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomType': value.roomType,
        'shortDescription': value.shortDescription,
        'smokingPreference': value.smokingPreference,
        'suite': value.suite,
    };
}

