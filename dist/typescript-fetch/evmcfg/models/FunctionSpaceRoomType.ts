/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Event Configuration API
 * This API caters for Event Configuration in OPERA Cloud. <br /><There are operations to post, update, fetch and delete codes such as item inventory, function spaces, menu items and many more.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { RoomCapacityType } from './RoomCapacityType';
import {
    RoomCapacityTypeFromJSON,
    RoomCapacityTypeFromJSONTyped,
    RoomCapacityTypeToJSON,
} from './RoomCapacityType';
import type { RoomFeatureType } from './RoomFeatureType';
import {
    RoomFeatureTypeFromJSON,
    RoomFeatureTypeFromJSONTyped,
    RoomFeatureTypeToJSON,
} from './RoomFeatureType';
import type { RoomSizeType } from './RoomSizeType';
import {
    RoomSizeTypeFromJSON,
    RoomSizeTypeFromJSONTyped,
    RoomSizeTypeToJSON,
} from './RoomSizeType';
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
 * @interface FunctionSpaceRoomType
 */
export interface FunctionSpaceRoomType {
    /**
     * Indicates whether the room is accessibility compliant.
     * @type {boolean}
     * @memberof FunctionSpaceRoomType
     */
    accessible?: boolean;
    /**
     * Building associated with the room.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    building?: string;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof FunctionSpaceRoomType
     */
    description?: TranslationTextType2000;
    /**
     * Floor of the Room.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    floorDescription?: string;
    /**
     * Indicates whether the room is a Meeting Room
     * @type {boolean}
     * @memberof FunctionSpaceRoomType
     */
    meetingRoom?: boolean;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof FunctionSpaceRoomType
     */
    roomAssignmentRating?: RatePlanRatingType;
    /**
     * 
     * @type {RoomCapacityType}
     * @memberof FunctionSpaceRoomType
     */
    roomCapacity?: RoomCapacityType;
    /**
     * Detail Long Description Of The Room.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    roomDescription?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof FunctionSpaceRoomType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Code of the room.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    roomId?: string;
    /**
     * Collection of room size information of of the function space group by unit of measurement.
     * @type {Array<RoomSizeType>}
     * @memberof FunctionSpaceRoomType
     */
    roomSize?: Array<RoomSizeType>;
    /**
     * 
     * @type {RoomTypeShortInfoType}
     * @memberof FunctionSpaceRoomType
     */
    roomType?: RoomTypeShortInfoType;
    /**
     * This indicates room smoking preference.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @type {string}
     * @memberof FunctionSpaceRoomType
     */
    smokingPreferenceDescription?: string;
}

/**
 * Check if a given object implements the FunctionSpaceRoomType interface.
 */
export function instanceOfFunctionSpaceRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FunctionSpaceRoomTypeFromJSON(json: any): FunctionSpaceRoomType {
    return FunctionSpaceRoomTypeFromJSONTyped(json, false);
}

export function FunctionSpaceRoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FunctionSpaceRoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessible': !exists(json, 'accessible') ? undefined : json['accessible'],
        'building': !exists(json, 'building') ? undefined : json['building'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !exists(json, 'floorDescription') ? undefined : json['floorDescription'],
        'meetingRoom': !exists(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'roomAssignmentRating': !exists(json, 'roomAssignmentRating') ? undefined : RatePlanRatingTypeFromJSON(json['roomAssignmentRating']),
        'roomCapacity': !exists(json, 'roomCapacity') ? undefined : RoomCapacityTypeFromJSON(json['roomCapacity']),
        'roomDescription': !exists(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomSize': !exists(json, 'roomSize') ? undefined : ((json['roomSize'] as Array<any>).map(RoomSizeTypeFromJSON)),
        'roomType': !exists(json, 'roomType') ? undefined : RoomTypeShortInfoTypeFromJSON(json['roomType']),
        'smokingPreference': !exists(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !exists(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
    };
}

export function FunctionSpaceRoomTypeToJSON(value?: FunctionSpaceRoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessible': value.accessible,
        'building': value.building,
        'description': TranslationTextType2000ToJSON(value.description),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'meetingRoom': value.meetingRoom,
        'roomAssignmentRating': RatePlanRatingTypeToJSON(value.roomAssignmentRating),
        'roomCapacity': RoomCapacityTypeToJSON(value.roomCapacity),
        'roomDescription': value.roomDescription,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomId': value.roomId,
        'roomSize': value.roomSize === undefined ? undefined : ((value.roomSize as Array<any>).map(RoomSizeTypeToJSON)),
        'roomType': RoomTypeShortInfoTypeToJSON(value.roomType),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
    };
}

