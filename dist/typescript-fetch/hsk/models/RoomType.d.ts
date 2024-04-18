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
import type { ReservationShortInfoType } from './ReservationShortInfoType';
import type { RoomDiscrepancyType } from './RoomDiscrepancyType';
import type { RoomFeatureType } from './RoomFeatureType';
import type { RoomHoldType } from './RoomHoldType';
import type { RoomOutOfOrderType } from './RoomOutOfOrderType';
import type { RoomRoomType } from './RoomRoomType';
import type { RoomSectionType } from './RoomSectionType';
import type { RoomTypeShortInfoType } from './RoomTypeShortInfoType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
import type { TurndownInfoType } from './TurndownInfoType';
/**
 * This type represents the primary room attributes.
 * @export
 * @interface RoomType
 */
export interface RoomType {
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
     * Indicates whether the room is accessibility compliant.
     * @type {boolean}
     * @memberof RoomType
     */
    isAccessible?: boolean;
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
export declare function instanceOfRoomType(value: object): boolean;
export declare function RoomTypeFromJSON(json: any): RoomType;
export declare function RoomTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomType;
export declare function RoomTypeToJSON(value?: RoomType | null): any;