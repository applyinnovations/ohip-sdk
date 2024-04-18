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
import type { CurrentServicingAttendantType } from './CurrentServicingAttendantType';
import type { HousekeepingType } from './HousekeepingType';
import type { RatePlanRatingType } from './RatePlanRatingType';
import type { ReservationInfoType } from './ReservationInfoType';
import type { ReservationShortInfoType } from './ReservationShortInfoType';
import type { RoomDiscrepancyType } from './RoomDiscrepancyType';
import type { RoomFeatureType } from './RoomFeatureType';
import type { RoomHoldType } from './RoomHoldType';
import type { RoomOutOfOrderType } from './RoomOutOfOrderType';
import type { RoomRoomType } from './RoomRoomType';
import type { RoomSectionType } from './RoomSectionType';
import type { RoomTypeShortInfoType } from './RoomTypeShortInfoType';
import type { SitePlanSectionType } from './SitePlanSectionType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import type { TurndownInfoType } from './TurndownInfoType';
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
     * @type {string}
     * @memberof TaskCompanionTaskRoomRoomsInner
     */
    wakeUpTime?: string;
}
/**
 * Check if a given object implements the TaskCompanionTaskRoomRoomsInner interface.
 */
export declare function instanceOfTaskCompanionTaskRoomRoomsInner(value: object): boolean;
export declare function TaskCompanionTaskRoomRoomsInnerFromJSON(json: any): TaskCompanionTaskRoomRoomsInner;
export declare function TaskCompanionTaskRoomRoomsInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCompanionTaskRoomRoomsInner;
export declare function TaskCompanionTaskRoomRoomsInnerToJSON(value?: TaskCompanionTaskRoomRoomsInner | null): any;