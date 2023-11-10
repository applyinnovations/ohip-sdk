/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrentRoomInfoType } from './CurrentRoomInfoType';
import type { GuestCountsType } from './GuestCountsType';
import type { PointsType } from './PointsType';
import type { PrimaryShareTypeType } from './PrimaryShareTypeType';
import type { PromotionType } from './PromotionType';
import type { ResExpectedTimesType } from './ResExpectedTimesType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import type { ResMobileNotificationsType } from './ResMobileNotificationsType';
import type { RoomRateType } from './RoomRateType';
import type { TimeSpanType } from './TimeSpanType';
import type { TotalType } from './TotalType';
import type { UniqueIDType } from './UniqueIDType';
import type { UpsellInfoType } from './UpsellInfoType';
/**
 *
 * @export
 * @interface RoomStayType
 */
export interface RoomStayType {
    /**
     *
     * @type {Date}
     * @memberof RoomStayType
     */
    arrivalDate?: Date;
    /**
     * Number of Upsell Offers Available for this stay. This will only be populated if the Upsell Instruction is included in the Allowed Instruction request
     * @type {number}
     * @memberof RoomStayType
     */
    availableUpsellOfferCount?: number;
    /**
     * Classifies the medium(Channel field on reservation screen) through which the reservation is made.
     * @type {string}
     * @memberof RoomStayType
     */
    bookingMedium?: string;
    /**
     * Description of the booking medium.
     * @type {string}
     * @memberof RoomStayType
     */
    bookingMediumDescription?: string;
    /**
     *
     * @type {CurrentRoomInfoType}
     * @memberof RoomStayType
     */
    currentRoomInfo?: CurrentRoomInfoType;
    /**
     *
     * @type {Date}
     * @memberof RoomStayType
     */
    departureDate?: Date;
    /**
     *
     * @type {ResExpectedTimesType}
     * @memberof RoomStayType
     */
    expectedTimes?: ResExpectedTimesType;
    /**
     *
     * @type {ResGuaranteeType}
     * @memberof RoomStayType
     */
    guarantee?: ResGuaranteeType;
    /**
     *
     * @type {GuestCountsType}
     * @memberof RoomStayType
     */
    guestCounts?: GuestCountsType;
    /**
     *
     * @type {ResMobileNotificationsType}
     * @memberof RoomStayType
     */
    mobileNotifications?: ResMobileNotificationsType;
    /**
     * Informative indicators indicating different values of an attribute exists over the stay.
     * @type {Array<string>}
     * @memberof RoomStayType
     */
    multiValueAttrs?: Array<string>;
    /**
     *
     * @type {TimeSpanType}
     * @memberof RoomStayType
     */
    originalTimeSpan?: TimeSpanType;
    /**
     *
     * @type {PrimaryShareTypeType}
     * @memberof RoomStayType
     */
    primaryShareType?: PrimaryShareTypeType;
    /**
     * This control whether rate info will be printed in confirmation letter.
     * @type {boolean}
     * @memberof RoomStayType
     */
    printRate?: boolean;
    /**
     *
     * @type {PromotionType}
     * @memberof RoomStayType
     */
    promotion?: PromotionType;
    /**
     *
     * @type {UniqueIDType}
     * @memberof RoomStayType
     */
    registrationNumber?: UniqueIDType;
    /**
     * Indicates whether the reservation is pre-registered for internet check-in or not.
     * @type {boolean}
     * @memberof RoomStayType
     */
    remoteCheckInAllowed?: boolean;
    /**
     * When true, indicates a room number cannot be changed. When false, indicates a room number may be changed.
     * @type {boolean}
     * @memberof RoomStayType
     */
    roomNumberLocked?: boolean;
    /**
     * A collection of Room Rates associated with a particular Room Stay. Each Room Rate combination can have multiple rates. Example King room, Rack rate plan, Monday through Thursday, weekday amount, Friday and Saturday, weekend amount.
     * @type {Array<RoomRateType>}
     * @memberof RoomStayType
     */
    roomRates?: Array<RoomRateType>;
    /**
     * Connecting Rooms.
     * @type {string}
     * @memberof RoomStayType
     */
    suiteWith?: string;
    /**
     *
     * @type {TotalType}
     * @memberof RoomStayType
     */
    total?: TotalType;
    /**
     *
     * @type {PointsType}
     * @memberof RoomStayType
     */
    totalPoints?: PointsType;
    /**
     *
     * @type {UpsellInfoType}
     * @memberof RoomStayType
     */
    upsellInfo?: UpsellInfoType;
}
/**
 * Check if a given object implements the RoomStayType interface.
 */
export declare function instanceOfRoomStayType(value: object): boolean;
export declare function RoomStayTypeFromJSON(json: any): RoomStayType;
export declare function RoomStayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomStayType;
export declare function RoomStayTypeToJSON(value?: RoomStayType | null): any;
