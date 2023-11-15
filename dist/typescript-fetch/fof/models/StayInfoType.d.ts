/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { CurrencyAmountType } from './CurrencyAmountType';
import type { GuestHousekeepingServiceRequestType } from './GuestHousekeepingServiceRequestType';
import type { PointsType } from './PointsType';
import type { PromotionType } from './PromotionType';
import type { ResExpectedTimesType } from './ResExpectedTimesType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import type { ReservationBlockType } from './ReservationBlockType';
import type { TimeSpanType } from './TimeSpanType';
/**
 * Details on the Room Stay including Guest Counts, Time Span of this Room Stay, pointers to Res Guests, guest Memberships, Comments and Special Requests pertaining to this particular Room Stay and finally financial information related to the Room Stay, including Guarantee, Deposit and Payment and Cancellation Penalties.
 * @export
 * @interface StayInfoType
 */
export interface StayInfoType {
    /**
     * A collection of Guest Counts associated with Room Stay.
     * @type {number}
     * @memberof StayInfoType
     */
    adultCount?: number;
    /**
     *
     * @type {string}
     * @memberof StayInfoType
     */
    arrivalDate?: string;
    /**
     * Represents the room was assigned by AI Room Assignment.
     * @type {boolean}
     * @memberof StayInfoType
     */
    assignedByAI?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof StayInfoType
     */
    balance?: CurrencyAmountType;
    /**
     * Booking channel code
     * @type {string}
     * @memberof StayInfoType
     */
    bookingChannelCode?: string;
    /**
     * A collection of Child Counts associated with Room Stay.
     * @type {number}
     * @memberof StayInfoType
     */
    childCount?: number;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof StayInfoType
     */
    compBalance?: CurrencyAmountType;
    /**
     * True indicates room type is a component type.
     * @type {boolean}
     * @memberof StayInfoType
     */
    componentRoomType?: boolean;
    /**
     *
     * @type {string}
     * @memberof StayInfoType
     */
    departureDate?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof StayInfoType
     */
    depositPayments?: CurrencyAmountType;
    /**
     *
     * @type {ResExpectedTimesType}
     * @memberof StayInfoType
     */
    expectedTimes?: ResExpectedTimesType;
    /**
     * True if the rate is a fixed rate, otherwise false
     * @type {boolean}
     * @memberof StayInfoType
     */
    fixedRate?: boolean;
    /**
     *
     * @type {ResGuaranteeType}
     * @memberof StayInfoType
     */
    guarantee?: ResGuaranteeType;
    /**
     *
     * @type {GuestHousekeepingServiceRequestType}
     * @memberof StayInfoType
     */
    guestServiceStatus?: GuestHousekeepingServiceRequestType;
    /**
     * Party code
     * @type {string}
     * @memberof StayInfoType
     */
    linkCode?: string;
    /**
     * Market code
     * @type {string}
     * @memberof StayInfoType
     */
    marketCode?: string;
    /**
     * Description of Market code
     * @type {string}
     * @memberof StayInfoType
     */
    marketDescription?: string;
    /**
     * Room Id
     * @type {number}
     * @memberof StayInfoType
     */
    numberOfRooms?: number;
    /**
     *
     * @type {TimeSpanType}
     * @memberof StayInfoType
     */
    originalTimeSpan?: TimeSpanType;
    /**
     *
     * @type {PointsType}
     * @memberof StayInfoType
     */
    points?: PointsType;
    /**
     *
     * @type {PromotionType}
     * @memberof StayInfoType
     */
    promotion?: PromotionType;
    /**
     * True indicates as pseudo room type. This is usually used for a posting master reservation.
     * @type {boolean}
     * @memberof StayInfoType
     */
    pseudoRoom?: boolean;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof StayInfoType
     */
    rateAmount?: CurrencyAmountType;
    /**
     * Rate plan code
     * @type {string}
     * @memberof StayInfoType
     */
    ratePlanCode?: string;
    /**
     * Whether this rate should be suppressed from view
     * @type {boolean}
     * @memberof StayInfoType
     */
    rateSuppressed?: boolean;
    /**
     *
     * @type {ReservationBlockType}
     * @memberof StayInfoType
     */
    reservationBlock?: ReservationBlockType;
    /**
     * Room class code
     * @type {string}
     * @memberof StayInfoType
     */
    roomClass?: string;
    /**
     * Room Id
     * @type {string}
     * @memberof StayInfoType
     */
    roomId?: string;
    /**
     * When true, indicates a room number cannot be changed. When false, indicates a room number may be changed.
     * @type {boolean}
     * @memberof StayInfoType
     */
    roomNumberLocked?: boolean;
    /**
     * Room type code
     * @type {string}
     * @memberof StayInfoType
     */
    roomType?: string;
    /**
     * Room type code that was charged
     * @type {string}
     * @memberof StayInfoType
     */
    roomTypeCharged?: string;
    /**
     * Indicates that this reservation is scheduled for automated check out.
     * @type {string}
     * @memberof StayInfoType
     */
    scheduledCheckoutTime?: string;
    /**
     * Source of business
     * @type {string}
     * @memberof StayInfoType
     */
    sourceCode?: string;
    /**
     * Description of the source of business.
     * @type {string}
     * @memberof StayInfoType
     */
    sourceCodeDescription?: string;
    /**
     *
     * @type {CurrencyAmountType}
     * @memberof StayInfoType
     */
    totalAmount?: CurrencyAmountType;
    /**
     * Represents the room was assigned by AI Room Assignment.
     * @type {boolean}
     * @memberof StayInfoType
     */
    upgradedByAI?: boolean;
}
/**
 * Check if a given object implements the StayInfoType interface.
 */
export declare function instanceOfStayInfoType(value: object): boolean;
export declare function StayInfoTypeFromJSON(json: any): StayInfoType;
export declare function StayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayInfoType;
export declare function StayInfoTypeToJSON(value?: StayInfoType | null): any;
