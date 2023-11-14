/**
 * OPERA Cloud Room Configuration API
 * APIs to cater for room configuration, such as configuring room types, room Classes, creating new room features, or updating housekeeping room maintenance reasons.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { RoomFeaturesType } from './RoomFeaturesType';
import type { RoomTypeComponentsType } from './RoomTypeComponentsType';
import type { RoomTypeTypeSuite } from './RoomTypeTypeSuite';
import type { RoomTypeYieldableType } from './RoomTypeYieldableType';
import type { TranslationTextType2000 } from './TranslationTextType2000';
/**
 * This type represents the room type attributes.
 * @export
 * @interface RoomTypeType
 */
export interface RoomTypeType {
    /**
     * Indicates if room type is accessible.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    accessible?: boolean;
    /**
     * Active date of the room type.
     * @type {Date}
     * @memberof RoomTypeType
     */
    activeDate?: Date;
    /**
     * Creates a new linked Reservation, and proceeds within check-in of the new reservation.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    autoCheckin?: boolean;
    /**
     * Room type is automatically attached when new rate codes are created.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    autoPopulate?: boolean;
    /**
     * Room number is automatically assigned when a reservation is made for this Room Type.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    autoRoomAssign?: boolean;
    /**
     * Bed type of room type.
     * @type {string}
     * @memberof RoomTypeType
     */
    bedType?: string;
    /**
     *
     * @type {RoomTypeComponentsType}
     * @memberof RoomTypeType
     */
    components?: RoomTypeComponentsType;
    /**
     * Default occupancy for the room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    defaultOccupancy?: number;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof RoomTypeType
     */
    description?: TranslationTextType2000;
    /**
     *
     * @type {RoomFeaturesType}
     * @memberof RoomTypeType
     */
    features?: RoomFeaturesType;
    /**
     * Indicates room type is generic.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    generic?: boolean;
    /**
     * Room type shows in house keeping.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    houseKeeping?: boolean;
    /**
     * Is Room type inactive?
     * @type {boolean}
     * @memberof RoomTypeType
     */
    inactive?: boolean;
    /**
     * Room type info URL.
     * @type {string}
     * @memberof RoomTypeType
     */
    infoURL?: string;
    /**
     * Indicates room type is available for maintenance request.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    maintenance?: boolean;
    /**
     * Maximum Adults for the room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    maxAdults?: number;
    /**
     * Maximum Children for the room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    maxChildren?: number;
    /**
     * Maximum occupancy for the room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    maximumOccupancy?: number;
    /**
     * Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    meetingRoom?: boolean;
    /**
     * Minimum occupancy for the room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    minimumOccupancy?: number;
    /**
     * New Room type code. (Used in change template room type operation)
     * @type {string}
     * @memberof RoomTypeType
     */
    newRoomType?: string;
    /**
     * Number of rooms for this room type.
     * @type {number}
     * @memberof RoomTypeType
     */
    numberOfRooms?: number;
    /**
     * Indicates if room type is pseudo.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    pseudo?: boolean;
    /**
     * This value will control the minimum amount that the selected room type can be sold
     * @type {number}
     * @memberof RoomTypeType
     */
    rateFloor?: number;
    /**
     * Room class for the room type code.
     * @type {string}
     * @memberof RoomTypeType
     */
    roomClass?: string;
    /**
     *
     * @type {string}
     * @memberof RoomTypeType
     */
    roomType?: string;
    /**
     * Indicates room types sell sequence.
     * @type {number}
     * @memberof RoomTypeType
     */
    sellSequence?: number;
    /**
     * Indicates room type is sent to interface.
     * @type {boolean}
     * @memberof RoomTypeType
     */
    sendToInterface?: boolean;
    /**
     *
     * @type {TranslationTextType2000}
     * @memberof RoomTypeType
     */
    shortDescription?: TranslationTextType2000;
    /**
     * Specifies the smoking preference for this room type. I.E. SM, NS.
     * @type {string}
     * @memberof RoomTypeType
     */
    smokingPreference?: string;
    /**
     *
     * @type {RoomTypeTypeSuite}
     * @memberof RoomTypeType
     */
    suite?: RoomTypeTypeSuite;
    /**
     * Yield category for this room type (Available when a yield integration add-on license is active and when room type is Yieldable.)
     * @type {string}
     * @memberof RoomTypeType
     */
    yieldCategory?: string;
    /**
     *
     * @type {RoomTypeYieldableType}
     * @memberof RoomTypeType
     */
    yieldStatus?: RoomTypeYieldableType;
}
/**
 * Check if a given object implements the RoomTypeType interface.
 */
export declare function instanceOfRoomTypeType(value: object): boolean;
export declare function RoomTypeTypeFromJSON(json: any): RoomTypeType;
export declare function RoomTypeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomTypeType;
export declare function RoomTypeTypeToJSON(value?: RoomTypeType | null): any;