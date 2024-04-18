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
import type { CurrentServicingAttendantType } from './CurrentServicingAttendantType';
import {
    CurrentServicingAttendantTypeFromJSON,
    CurrentServicingAttendantTypeFromJSONTyped,
    CurrentServicingAttendantTypeToJSON,
} from './CurrentServicingAttendantType';
import type { HousekeepingType } from './HousekeepingType';
import {
    HousekeepingTypeFromJSON,
    HousekeepingTypeFromJSONTyped,
    HousekeepingTypeToJSON,
} from './HousekeepingType';
import type { RatePlanRatingType } from './RatePlanRatingType';
import {
    RatePlanRatingTypeFromJSON,
    RatePlanRatingTypeFromJSONTyped,
    RatePlanRatingTypeToJSON,
} from './RatePlanRatingType';
import type { ReservationShortInfoType } from './ReservationShortInfoType';
import {
    ReservationShortInfoTypeFromJSON,
    ReservationShortInfoTypeFromJSONTyped,
    ReservationShortInfoTypeToJSON,
} from './ReservationShortInfoType';
import type { RoomDiscrepancyType } from './RoomDiscrepancyType';
import {
    RoomDiscrepancyTypeFromJSON,
    RoomDiscrepancyTypeFromJSONTyped,
    RoomDiscrepancyTypeToJSON,
} from './RoomDiscrepancyType';
import type { RoomFeatureType } from './RoomFeatureType';
import {
    RoomFeatureTypeFromJSON,
    RoomFeatureTypeFromJSONTyped,
    RoomFeatureTypeToJSON,
} from './RoomFeatureType';
import type { RoomHoldType } from './RoomHoldType';
import {
    RoomHoldTypeFromJSON,
    RoomHoldTypeFromJSONTyped,
    RoomHoldTypeToJSON,
} from './RoomHoldType';
import type { RoomOutOfOrderType } from './RoomOutOfOrderType';
import {
    RoomOutOfOrderTypeFromJSON,
    RoomOutOfOrderTypeFromJSONTyped,
    RoomOutOfOrderTypeToJSON,
} from './RoomOutOfOrderType';
import type { RoomRoomType } from './RoomRoomType';
import {
    RoomRoomTypeFromJSON,
    RoomRoomTypeFromJSONTyped,
    RoomRoomTypeToJSON,
} from './RoomRoomType';
import type { RoomSectionType } from './RoomSectionType';
import {
    RoomSectionTypeFromJSON,
    RoomSectionTypeFromJSONTyped,
    RoomSectionTypeToJSON,
} from './RoomSectionType';
import type { RoomTypeShortInfoType } from './RoomTypeShortInfoType';
import {
    RoomTypeShortInfoTypeFromJSON,
    RoomTypeShortInfoTypeFromJSONTyped,
    RoomTypeShortInfoTypeToJSON,
} from './RoomTypeShortInfoType';
import type { SitePlanSectionType } from './SitePlanSectionType';
import {
    SitePlanSectionTypeFromJSON,
    SitePlanSectionTypeFromJSONTyped,
    SitePlanSectionTypeToJSON,
} from './SitePlanSectionType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import {
    TranslationTextType2000FromJSON,
    TranslationTextType2000FromJSONTyped,
    TranslationTextType2000ToJSON,
} from './TranslationTextType2000';
import type { TurndownInfoType } from './TurndownInfoType';
import {
    TurndownInfoTypeFromJSON,
    TurndownInfoTypeFromJSONTyped,
    TurndownInfoTypeToJSON,
} from './TurndownInfoType';

/**
 * This type represents the primary room attributes.
 * @export
 * @interface RoomType
 */
export interface RoomType {
    /**
     * Indicates whether the room is accessibility compliant.
     * @type {boolean}
     * @memberof RoomType
     */
    accessible?: boolean;
    /**
     * 
     * @type {Array<CurrentServicingAttendantType>}
     * @memberof RoomType
     */
    attendant?: Array<CurrentServicingAttendantType>;
    /**
     * Building associated with the room.
     * @type {string}
     * @memberof RoomType
     */
    building?: string;
    /**
     * This flag indicates component room.
     * @type {string}
     * @memberof RoomType
     */
    componentRoomNumber?: string;
    /**
     * List of component room numbers.
     * @type {Array<string>}
     * @memberof RoomType
     */
    componentRoomNumbers?: Array<string>;
    /**
     * Collection of rooms.
     * @type {Array<RoomRoomType>}
     * @memberof RoomType
     */
    componentRooms?: Array<RoomRoomType>;
    /**
     * Collection of rooms.
     * @type {Array<RoomRoomType>}
     * @memberof RoomType
     */
    connectingRooms?: Array<RoomRoomType>;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof RoomType
     */
    description?: TranslationTextType2000;
    /**
     * Room Discrepancies between front office and housekeeping room status and number of persons in the room.
     * @type {Array<RoomDiscrepancyType>}
     * @memberof RoomType
     */
    discrepancy?: Array<RoomDiscrepancyType>;
    /**
     * Floor of the Room.
     * @type {string}
     * @memberof RoomType
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @type {string}
     * @memberof RoomType
     */
    floorDescription?: string;
    /**
     * 
     * @type {RoomHoldType}
     * @memberof RoomType
     */
    hold?: RoomHoldType;
    /**
     * 
     * @type {HousekeepingType}
     * @memberof RoomType
     */
    housekeeping?: HousekeepingType;
    /**
     * Indicates whether the room is a Meeting Room
     * @type {boolean}
     * @memberof RoomType
     */
    meetingRoom?: boolean;
    /**
     * Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS).
     * @type {Array<RoomOutOfOrderType>}
     * @memberof RoomType
     */
    outOfOrder?: Array<RoomOutOfOrderType>;
    /**
     * 
     * @type {Array<ReservationShortInfoType>}
     * @memberof RoomType
     */
    resvInfo?: Array<ReservationShortInfoType>;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof RoomType
     */
    roomAssignmentRating?: RatePlanRatingType;
    /**
     * Detail Long Description Of The Room.
     * @type {string}
     * @memberof RoomType
     */
    roomDescription?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof RoomType
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Code of the room.
     * @type {string}
     * @memberof RoomType
     */
    roomId?: string;
    /**
     * 
     * @type {RoomSectionType}
     * @memberof RoomType
     */
    roomSection?: RoomSectionType;
    /**
     * 
     * @type {RoomTypeShortInfoType}
     * @memberof RoomType
     */
    roomType?: RoomTypeShortInfoType;
    /**
     * Rotation room of the room type.
     * @type {string}
     * @memberof RoomType
     */
    rotationRoomId?: string;
    /**
     * 
     * @type {SitePlanSectionType}
     * @memberof RoomType
     */
    sitePlanSection?: SitePlanSectionType;
    /**
     * This indicates room smoking preference.
     * @type {string}
     * @memberof RoomType
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @type {string}
     * @memberof RoomType
     */
    smokingPreferenceDescription?: string;
    /**
     * 
     * @type {TurndownInfoType}
     * @memberof RoomType
     */
    turndownInfo?: TurndownInfoType;
}

/**
 * Check if a given object implements the RoomType interface.
 */
export function instanceOfRoomType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomTypeFromJSON(json: any): RoomType {
    return RoomTypeFromJSONTyped(json, false);
}

export function RoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accessible': !exists(json, 'accessible') ? undefined : json['accessible'],
        'attendant': !exists(json, 'attendant') ? undefined : ((json['attendant'] as Array<any>).map(CurrentServicingAttendantTypeFromJSON)),
        'building': !exists(json, 'building') ? undefined : json['building'],
        'componentRoomNumber': !exists(json, 'componentRoomNumber') ? undefined : json['componentRoomNumber'],
        'componentRoomNumbers': !exists(json, 'componentRoomNumbers') ? undefined : json['componentRoomNumbers'],
        'componentRooms': !exists(json, 'componentRooms') ? undefined : ((json['componentRooms'] as Array<any>).map(RoomRoomTypeFromJSON)),
        'connectingRooms': !exists(json, 'connectingRooms') ? undefined : ((json['connectingRooms'] as Array<any>).map(RoomRoomTypeFromJSON)),
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'discrepancy': !exists(json, 'discrepancy') ? undefined : ((json['discrepancy'] as Array<any>).map(RoomDiscrepancyTypeFromJSON)),
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !exists(json, 'floorDescription') ? undefined : json['floorDescription'],
        'hold': !exists(json, 'hold') ? undefined : RoomHoldTypeFromJSON(json['hold']),
        'housekeeping': !exists(json, 'housekeeping') ? undefined : HousekeepingTypeFromJSON(json['housekeeping']),
        'meetingRoom': !exists(json, 'meetingRoom') ? undefined : json['meetingRoom'],
        'outOfOrder': !exists(json, 'outOfOrder') ? undefined : ((json['outOfOrder'] as Array<any>).map(RoomOutOfOrderTypeFromJSON)),
        'resvInfo': !exists(json, 'resvInfo') ? undefined : ((json['resvInfo'] as Array<any>).map(ReservationShortInfoTypeFromJSON)),
        'roomAssignmentRating': !exists(json, 'roomAssignmentRating') ? undefined : RatePlanRatingTypeFromJSON(json['roomAssignmentRating']),
        'roomDescription': !exists(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomSection': !exists(json, 'roomSection') ? undefined : RoomSectionTypeFromJSON(json['roomSection']),
        'roomType': !exists(json, 'roomType') ? undefined : RoomTypeShortInfoTypeFromJSON(json['roomType']),
        'rotationRoomId': !exists(json, 'rotationRoomId') ? undefined : json['rotationRoomId'],
        'sitePlanSection': !exists(json, 'sitePlanSection') ? undefined : SitePlanSectionTypeFromJSON(json['sitePlanSection']),
        'smokingPreference': !exists(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !exists(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
        'turndownInfo': !exists(json, 'turndownInfo') ? undefined : TurndownInfoTypeFromJSON(json['turndownInfo']),
    };
}

export function RoomTypeToJSON(value?: RoomType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accessible': value.accessible,
        'attendant': value.attendant === undefined ? undefined : ((value.attendant as Array<any>).map(CurrentServicingAttendantTypeToJSON)),
        'building': value.building,
        'componentRoomNumber': value.componentRoomNumber,
        'componentRoomNumbers': value.componentRoomNumbers,
        'componentRooms': value.componentRooms === undefined ? undefined : ((value.componentRooms as Array<any>).map(RoomRoomTypeToJSON)),
        'connectingRooms': value.connectingRooms === undefined ? undefined : ((value.connectingRooms as Array<any>).map(RoomRoomTypeToJSON)),
        'description': TranslationTextType2000ToJSON(value.description),
        'discrepancy': value.discrepancy === undefined ? undefined : ((value.discrepancy as Array<any>).map(RoomDiscrepancyTypeToJSON)),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'hold': RoomHoldTypeToJSON(value.hold),
        'housekeeping': HousekeepingTypeToJSON(value.housekeeping),
        'meetingRoom': value.meetingRoom,
        'outOfOrder': value.outOfOrder === undefined ? undefined : ((value.outOfOrder as Array<any>).map(RoomOutOfOrderTypeToJSON)),
        'resvInfo': value.resvInfo === undefined ? undefined : ((value.resvInfo as Array<any>).map(ReservationShortInfoTypeToJSON)),
        'roomAssignmentRating': RatePlanRatingTypeToJSON(value.roomAssignmentRating),
        'roomDescription': value.roomDescription,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomId': value.roomId,
        'roomSection': RoomSectionTypeToJSON(value.roomSection),
        'roomType': RoomTypeShortInfoTypeToJSON(value.roomType),
        'rotationRoomId': value.rotationRoomId,
        'sitePlanSection': SitePlanSectionTypeToJSON(value.sitePlanSection),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
        'turndownInfo': TurndownInfoTypeToJSON(value.turndownInfo),
    };
}
