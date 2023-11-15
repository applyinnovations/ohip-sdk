/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Activity API
 * APIs to cater for Sales Activity functionality in OPERA Cloud. <br /><br /> Activities provide you with an account management tool for managing daily tasks such as appointments, sales calls, contact follow-up, and so on.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { GuestHousekeepingServiceRequestType } from './GuestHousekeepingServiceRequestType';
import {
    GuestHousekeepingServiceRequestTypeFromJSON,
    GuestHousekeepingServiceRequestTypeFromJSONTyped,
    GuestHousekeepingServiceRequestTypeToJSON,
} from './GuestHousekeepingServiceRequestType';
import type { PointsType } from './PointsType';
import {
    PointsTypeFromJSON,
    PointsTypeFromJSONTyped,
    PointsTypeToJSON,
} from './PointsType';
import type { PromotionType } from './PromotionType';
import {
    PromotionTypeFromJSON,
    PromotionTypeFromJSONTyped,
    PromotionTypeToJSON,
} from './PromotionType';
import type { ResExpectedTimesType } from './ResExpectedTimesType';
import {
    ResExpectedTimesTypeFromJSON,
    ResExpectedTimesTypeFromJSONTyped,
    ResExpectedTimesTypeToJSON,
} from './ResExpectedTimesType';
import type { ResGuaranteeType } from './ResGuaranteeType';
import {
    ResGuaranteeTypeFromJSON,
    ResGuaranteeTypeFromJSONTyped,
    ResGuaranteeTypeToJSON,
} from './ResGuaranteeType';
import type { ReservationBlockType } from './ReservationBlockType';
import {
    ReservationBlockTypeFromJSON,
    ReservationBlockTypeFromJSONTyped,
    ReservationBlockTypeToJSON,
} from './ReservationBlockType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';

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
export function instanceOfStayInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function StayInfoTypeFromJSON(json: any): StayInfoType {
    return StayInfoTypeFromJSONTyped(json, false);
}

export function StayInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StayInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adultCount': !exists(json, 'adultCount') ? undefined : json['adultCount'],
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'assignedByAI': !exists(json, 'assignedByAI') ? undefined : json['assignedByAI'],
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'childCount': !exists(json, 'childCount') ? undefined : json['childCount'],
        'compBalance': !exists(json, 'compBalance') ? undefined : CurrencyAmountTypeFromJSON(json['compBalance']),
        'componentRoomType': !exists(json, 'componentRoomType') ? undefined : json['componentRoomType'],
        'departureDate': !exists(json, 'departureDate') ? undefined : json['departureDate'],
        'depositPayments': !exists(json, 'depositPayments') ? undefined : CurrencyAmountTypeFromJSON(json['depositPayments']),
        'expectedTimes': !exists(json, 'expectedTimes') ? undefined : ResExpectedTimesTypeFromJSON(json['expectedTimes']),
        'fixedRate': !exists(json, 'fixedRate') ? undefined : json['fixedRate'],
        'guarantee': !exists(json, 'guarantee') ? undefined : ResGuaranteeTypeFromJSON(json['guarantee']),
        'guestServiceStatus': !exists(json, 'guestServiceStatus') ? undefined : GuestHousekeepingServiceRequestTypeFromJSON(json['guestServiceStatus']),
        'linkCode': !exists(json, 'linkCode') ? undefined : json['linkCode'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'marketDescription': !exists(json, 'marketDescription') ? undefined : json['marketDescription'],
        'numberOfRooms': !exists(json, 'numberOfRooms') ? undefined : json['numberOfRooms'],
        'originalTimeSpan': !exists(json, 'originalTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['originalTimeSpan']),
        'points': !exists(json, 'points') ? undefined : PointsTypeFromJSON(json['points']),
        'promotion': !exists(json, 'promotion') ? undefined : PromotionTypeFromJSON(json['promotion']),
        'pseudoRoom': !exists(json, 'pseudoRoom') ? undefined : json['pseudoRoom'],
        'rateAmount': !exists(json, 'rateAmount') ? undefined : CurrencyAmountTypeFromJSON(json['rateAmount']),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'rateSuppressed': !exists(json, 'rateSuppressed') ? undefined : json['rateSuppressed'],
        'reservationBlock': !exists(json, 'reservationBlock') ? undefined : ReservationBlockTypeFromJSON(json['reservationBlock']),
        'roomClass': !exists(json, 'roomClass') ? undefined : json['roomClass'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeCharged': !exists(json, 'roomTypeCharged') ? undefined : json['roomTypeCharged'],
        'scheduledCheckoutTime': !exists(json, 'scheduledCheckoutTime') ? undefined : json['scheduledCheckoutTime'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceCodeDescription': !exists(json, 'sourceCodeDescription') ? undefined : json['sourceCodeDescription'],
        'totalAmount': !exists(json, 'totalAmount') ? undefined : CurrencyAmountTypeFromJSON(json['totalAmount']),
        'upgradedByAI': !exists(json, 'upgradedByAI') ? undefined : json['upgradedByAI'],
    };
}

export function StayInfoTypeToJSON(value?: StayInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adultCount': value.adultCount,
        'arrivalDate': value.arrivalDate,
        'assignedByAI': value.assignedByAI,
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'bookingChannelCode': value.bookingChannelCode,
        'childCount': value.childCount,
        'compBalance': CurrencyAmountTypeToJSON(value.compBalance),
        'componentRoomType': value.componentRoomType,
        'departureDate': value.departureDate,
        'depositPayments': CurrencyAmountTypeToJSON(value.depositPayments),
        'expectedTimes': ResExpectedTimesTypeToJSON(value.expectedTimes),
        'fixedRate': value.fixedRate,
        'guarantee': ResGuaranteeTypeToJSON(value.guarantee),
        'guestServiceStatus': GuestHousekeepingServiceRequestTypeToJSON(value.guestServiceStatus),
        'linkCode': value.linkCode,
        'marketCode': value.marketCode,
        'marketDescription': value.marketDescription,
        'numberOfRooms': value.numberOfRooms,
        'originalTimeSpan': TimeSpanTypeToJSON(value.originalTimeSpan),
        'points': PointsTypeToJSON(value.points),
        'promotion': PromotionTypeToJSON(value.promotion),
        'pseudoRoom': value.pseudoRoom,
        'rateAmount': CurrencyAmountTypeToJSON(value.rateAmount),
        'ratePlanCode': value.ratePlanCode,
        'rateSuppressed': value.rateSuppressed,
        'reservationBlock': ReservationBlockTypeToJSON(value.reservationBlock),
        'roomClass': value.roomClass,
        'roomId': value.roomId,
        'roomNumberLocked': value.roomNumberLocked,
        'roomType': value.roomType,
        'roomTypeCharged': value.roomTypeCharged,
        'scheduledCheckoutTime': value.scheduledCheckoutTime,
        'sourceCode': value.sourceCode,
        'sourceCodeDescription': value.sourceCodeDescription,
        'totalAmount': CurrencyAmountTypeToJSON(value.totalAmount),
        'upgradedByAI': value.upgradedByAI,
    };
}

