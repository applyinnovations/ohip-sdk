/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Housekeeping Service API
 * APIs to cater for Housekeeping functionality in OPERA Cloud. <br /><br />Housekeeping enables you to schedule daily room cleaning, maintenance, and housekeeping staff activities. It provides information on room status, out of order/out of service rooms, and forecasting.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
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
import type { ReservationInfoType } from './ReservationInfoType';
import {
    ReservationInfoTypeFromJSON,
    ReservationInfoTypeFromJSONTyped,
    ReservationInfoTypeToJSON,
} from './ReservationInfoType';
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
 * @interface TaskCompanionTaskRoomRoomsInner
 */
export interface TaskCompanionTaskRoomRoomsInner {
    /**
     * 
     * @type {Array<CurrentServicingAttendantType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    attendant?: Array<CurrentServicingAttendantType>;
    /**
     * Building associated with the room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    building?: string;
    /**
     * The sequence for cleaning this room in the task sheet. This would apply only for Pickup and Dirty rooms.
     * @type {number}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    cleaningSequence?: number;
    /**
     * This flag indicates component room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    componentRoomNumber?: string;
    /**
     * Collection of rooms.
     * @type {Array<RoomRoomType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    componentRooms?: Array<RoomRoomType>;
    /**
     * Collection of rooms.
     * @type {Array<RoomRoomType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    connectingRooms?: Array<RoomRoomType>;
    /**
     * The sequence for this room from configuration.
     * @type {number}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    defaultSequence?: number;
    /**
     * 
     * @type {TranslationTextType2000}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    description?: TranslationTextType2000;
    /**
     * Room Discrepancies between front office and housekeeping room status and number of persons in the room.
     * @type {Array<RoomDiscrepancyType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    discrepancy?: Array<RoomDiscrepancyType>;
    /**
     * Floor of the Room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    floor?: string;
    /**
     * Description for the Floor of the Room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    floorDescription?: string;
    /**
     * The sequence for this room from configuration.
     * @type {boolean}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    hasPriority?: boolean;
    /**
     * 
     * @type {RoomHoldType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    hold?: RoomHoldType;
    /**
     * 
     * @type {HousekeepingType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    housekeeping?: HousekeepingType;
    /**
     * Task Sheet instructions at the room level.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    instructions?: string;
    /**
     * Flag if the Room, and the OperaV5 version, allows Room Maintenance or not.
     * @type {boolean}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    maintenanceAllowed?: boolean;
    /**
     * Date Range and reasons for a room being Out of Order/Out Of Service (If the room is OO/OS).
     * @type {Array<RoomOutOfOrderType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    outOfOrder?: Array<RoomOutOfOrderType>;
    /**
     * 
     * @type {Array<ReservationInfoType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    reservationInfo?: Array<ReservationInfoType>;
    /**
     * 
     * @type {Array<ReservationShortInfoType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    resvInfo?: Array<ReservationShortInfoType>;
    /**
     * 
     * @type {RatePlanRatingType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomAssignmentRating?: RatePlanRatingType;
    /**
     * Detail Long Description Of The Room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomDescription?: string;
    /**
     * A recurring element that identifies the room features.
     * @type {Array<RoomFeatureType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomFeatures?: Array<RoomFeatureType>;
    /**
     * Code of the room.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomNumber?: string;
    /**
     * 
     * @type {RoomSectionType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomSection?: RoomSectionType;
    /**
     * 
     * @type {RoomTypeShortInfoType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    roomType?: RoomTypeShortInfoType;
    /**
     * Information regarding the current servicing of the room.
     * @type {Array<CurrentServicingAttendantType>}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    servicingInfo?: Array<CurrentServicingAttendantType>;
    /**
     * 
     * @type {SitePlanSectionType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    sitePlanSection?: SitePlanSectionType;
    /**
     * This indicates room smoking preference.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    smokingPreference?: string;
    /**
     * This indicates the description of the room smoking preference.
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    smokingPreferenceDescription?: string;
    /**
     * Total credits for this room.
     * @type {number}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    totalCredits?: number;
    /**
     * 
     * @type {TurndownInfoType}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    turndownInfo?: TurndownInfoType;
    /**
     * The wake up time of the current date
     * @type {Date}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    wakeUpTime?: Date;
}

/**
 * Check if a given object implements the TaskCompanionTaskRoomRoomsInner interface.
 */
export function instanceOfTaskCompanionTaskRoomRoomsInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskCompanionTaskRoomRoomsInnerFromJSON(json: any): TaskCompanionTaskRoomRoomsInner {
    return TaskCompanionTaskRoomRoomsInnerFromJSONTyped(json, false);
}

export function TaskCompanionTaskRoomRoomsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCompanionTaskRoomRoomsInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendant': !exists(json, 'attendant') ? undefined : ((json['attendant'] as Array<any>).map(CurrentServicingAttendantTypeFromJSON)),
        'building': !exists(json, 'building') ? undefined : json['building'],
        'cleaningSequence': !exists(json, 'cleaningSequence') ? undefined : json['cleaningSequence'],
        'componentRoomNumber': !exists(json, 'componentRoomNumber') ? undefined : json['componentRoomNumber'],
        'componentRooms': !exists(json, 'componentRooms') ? undefined : ((json['componentRooms'] as Array<any>).map(RoomRoomTypeFromJSON)),
        'connectingRooms': !exists(json, 'connectingRooms') ? undefined : ((json['connectingRooms'] as Array<any>).map(RoomRoomTypeFromJSON)),
        'defaultSequence': !exists(json, 'defaultSequence') ? undefined : json['defaultSequence'],
        'description': !exists(json, 'description') ? undefined : TranslationTextType2000FromJSON(json['description']),
        'discrepancy': !exists(json, 'discrepancy') ? undefined : ((json['discrepancy'] as Array<any>).map(RoomDiscrepancyTypeFromJSON)),
        'floor': !exists(json, 'floor') ? undefined : json['floor'],
        'floorDescription': !exists(json, 'floorDescription') ? undefined : json['floorDescription'],
        'hasPriority': !exists(json, 'hasPriority') ? undefined : json['hasPriority'],
        'hold': !exists(json, 'hold') ? undefined : RoomHoldTypeFromJSON(json['hold']),
        'housekeeping': !exists(json, 'housekeeping') ? undefined : HousekeepingTypeFromJSON(json['housekeeping']),
        'instructions': !exists(json, 'instructions') ? undefined : json['instructions'],
        'maintenanceAllowed': !exists(json, 'maintenanceAllowed') ? undefined : json['maintenanceAllowed'],
        'outOfOrder': !exists(json, 'outOfOrder') ? undefined : ((json['outOfOrder'] as Array<any>).map(RoomOutOfOrderTypeFromJSON)),
        'reservationInfo': !exists(json, 'reservationInfo') ? undefined : ((json['reservationInfo'] as Array<any>).map(ReservationInfoTypeFromJSON)),
        'resvInfo': !exists(json, 'resvInfo') ? undefined : ((json['resvInfo'] as Array<any>).map(ReservationShortInfoTypeFromJSON)),
        'roomAssignmentRating': !exists(json, 'roomAssignmentRating') ? undefined : RatePlanRatingTypeFromJSON(json['roomAssignmentRating']),
        'roomDescription': !exists(json, 'roomDescription') ? undefined : json['roomDescription'],
        'roomFeatures': !exists(json, 'roomFeatures') ? undefined : ((json['roomFeatures'] as Array<any>).map(RoomFeatureTypeFromJSON)),
        'roomNumber': !exists(json, 'roomNumber') ? undefined : json['roomNumber'],
        'roomSection': !exists(json, 'roomSection') ? undefined : RoomSectionTypeFromJSON(json['roomSection']),
        'roomType': !exists(json, 'roomType') ? undefined : RoomTypeShortInfoTypeFromJSON(json['roomType']),
        'servicingInfo': !exists(json, 'servicingInfo') ? undefined : ((json['servicingInfo'] as Array<any>).map(CurrentServicingAttendantTypeFromJSON)),
        'sitePlanSection': !exists(json, 'sitePlanSection') ? undefined : SitePlanSectionTypeFromJSON(json['sitePlanSection']),
        'smokingPreference': !exists(json, 'smokingPreference') ? undefined : json['smokingPreference'],
        'smokingPreferenceDescription': !exists(json, 'smokingPreferenceDescription') ? undefined : json['smokingPreferenceDescription'],
        'totalCredits': !exists(json, 'totalCredits') ? undefined : json['totalCredits'],
        'turndownInfo': !exists(json, 'turndownInfo') ? undefined : TurndownInfoTypeFromJSON(json['turndownInfo']),
        'wakeUpTime': !exists(json, 'wakeUpTime') ? undefined : (new Date(json['wakeUpTime'])),
    };
}

export function TaskCompanionTaskRoomRoomsInnerToJSON(value?: TaskCompanionTaskRoomRoomsInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendant': value.attendant === undefined ? undefined : ((value.attendant as Array<any>).map(CurrentServicingAttendantTypeToJSON)),
        'building': value.building,
        'cleaningSequence': value.cleaningSequence,
        'componentRoomNumber': value.componentRoomNumber,
        'componentRooms': value.componentRooms === undefined ? undefined : ((value.componentRooms as Array<any>).map(RoomRoomTypeToJSON)),
        'connectingRooms': value.connectingRooms === undefined ? undefined : ((value.connectingRooms as Array<any>).map(RoomRoomTypeToJSON)),
        'defaultSequence': value.defaultSequence,
        'description': TranslationTextType2000ToJSON(value.description),
        'discrepancy': value.discrepancy === undefined ? undefined : ((value.discrepancy as Array<any>).map(RoomDiscrepancyTypeToJSON)),
        'floor': value.floor,
        'floorDescription': value.floorDescription,
        'hasPriority': value.hasPriority,
        'hold': RoomHoldTypeToJSON(value.hold),
        'housekeeping': HousekeepingTypeToJSON(value.housekeeping),
        'instructions': value.instructions,
        'maintenanceAllowed': value.maintenanceAllowed,
        'outOfOrder': value.outOfOrder === undefined ? undefined : ((value.outOfOrder as Array<any>).map(RoomOutOfOrderTypeToJSON)),
        'reservationInfo': value.reservationInfo === undefined ? undefined : ((value.reservationInfo as Array<any>).map(ReservationInfoTypeToJSON)),
        'resvInfo': value.resvInfo === undefined ? undefined : ((value.resvInfo as Array<any>).map(ReservationShortInfoTypeToJSON)),
        'roomAssignmentRating': RatePlanRatingTypeToJSON(value.roomAssignmentRating),
        'roomDescription': value.roomDescription,
        'roomFeatures': value.roomFeatures === undefined ? undefined : ((value.roomFeatures as Array<any>).map(RoomFeatureTypeToJSON)),
        'roomNumber': value.roomNumber,
        'roomSection': RoomSectionTypeToJSON(value.roomSection),
        'roomType': RoomTypeShortInfoTypeToJSON(value.roomType),
        'servicingInfo': value.servicingInfo === undefined ? undefined : ((value.servicingInfo as Array<any>).map(CurrentServicingAttendantTypeToJSON)),
        'sitePlanSection': SitePlanSectionTypeToJSON(value.sitePlanSection),
        'smokingPreference': value.smokingPreference,
        'smokingPreferenceDescription': value.smokingPreferenceDescription,
        'totalCredits': value.totalCredits,
        'turndownInfo': TurndownInfoTypeToJSON(value.turndownInfo),
        'wakeUpTime': value.wakeUpTime === undefined ? undefined : (value.wakeUpTime.toISOString().substr(0,10)),
    };
}

