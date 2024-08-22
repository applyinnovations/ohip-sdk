/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';
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
import type { RoomTypeShortInfoType } from './RoomTypeShortInfoType';
import {
    RoomTypeShortInfoTypeFromJSON,
    RoomTypeShortInfoTypeFromJSONTyped,
    RoomTypeShortInfoTypeToJSON,
} from './RoomTypeShortInfoType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';

/**
 * This type represents the primary room attributes.
 * @export
 * @interface RoomRoomType
 */
export interface RoomRoomType {
    /**
     * Building associated with the room.
     * @type {string}
     * @memberof RoomRoomType
     */
    building?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof RoomRoomType
     */
    description?: TranslationTextType2000;
    /**
     * Floor of the Room.
     * @type {string}
     * @memberof RoomRoomType
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @type {string}
     * @memberof RoomRoomType
     */
    floorDescription?: string;
    /**
     * Indicates whether the room is accessibility compliant.
     * @type {boolean}
     * @memberof RoomRoomType
     */
    isAccessible?: boolean;
    /**
     * Indicates whether the room is a Meeting Room
     * @type {boolean}
     * @memberof RoomRoomType
     */
    meetingRoom?: boolean;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof RoomRoomType
     */
    roomAssignmentRating?: RatePlanRatingType;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof RoomRoomType
     */
    roomCondition?: CodeDescriptionType;
    /**
     * Detail Long Description Of The Room.
     * @type {string}
     * @memberof RoomRoomType
     */
    roomDescription?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof RoomRoomType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Code of the room.
     * @type {string}
     * @memberof RoomRoomType
     */
    roomId?: string;
    /**
     * 
     * @type {RoomTypeShortInfoType}
     * @memberof RoomRoomType
     */
    roomType?: RoomTypeShortInfoType;
    /**
     * This indicates room smoking preference.
     * @type {string}
     * @memberof RoomRoomType
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @type {string}
     * @memberof RoomRoomType
     */
    smokingPreferenceDescription?: string;
}

/**
 * Check if a given object implements the RoomRoomType interface.
 */
export function instanceOfRoomRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRoomTypeFromJSON(json: any): RoomRoomType {
    return RoomRoomTypeFromJSONTyped(json, false);
}

export function RoomRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'building': !exists(json, 'building') ? undefined : json['building'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !exists(json, 'floorDescription') ? undefined : json['floorDescription'],
        'isAccessible': !exists(json, 'isAccessible') ? undefined : json['isAccessible'],
        'meetingRoom': !exists(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'roomAssignmentRating': !exists(json, 'roomAssignmentRating') ? undefined : RatePlanRatingTypeFromJSON(json['roomAssignmentRating']),
        'roomCondition': !exists(json, 'roomCondition') ? undefined : CodeDescriptionTypeFromJSON(json['roomCondition']),
        'roomDescription': !exists(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomType': !exists(json, 'roomType') ? undefined : RoomTypeShortInfoTypeFromJSON(json['roomType']),
        'smokingPreference': !exists(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !exists(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
    };
}

export function RoomRoomTypeToJSON(value?: RoomRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'building': value.building,
        'description': TranslationTextType2000ToJSON(value.description),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'isAccessible': value.isAccessible,
        'meetingRoom': value.meetingRoom,
        'roomAssignmentRating': RatePlanRatingTypeToJSON(value.roomAssignmentRating),
        'roomCondition': CodeDescriptionTypeToJSON(value.roomCondition),
        'roomDescription': value.roomDescription,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomId': value.roomId,
        'roomType': RoomTypeShortInfoTypeToJSON(value.roomType),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
    };
}

