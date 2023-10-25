/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
import type { CurrentRoomInfoType } from './CurrentRoomInfoType';
import {
    CurrentRoomInfoTypeFromJSON,
    CurrentRoomInfoTypeFromJSONTyped,
    CurrentRoomInfoTypeToJSON,
} from './CurrentRoomInfoType';
import type { GuestCountsType } from './GuestCountsType';
import {
    GuestCountsTypeFromJSON,
    GuestCountsTypeFromJSONTyped,
    GuestCountsTypeToJSON,
} from './GuestCountsType';
import type { OwnerResTypeType } from './OwnerResTypeType';
import {
    OwnerResTypeTypeFromJSON,
    OwnerResTypeTypeFromJSONTyped,
    OwnerResTypeTypeToJSON,
} from './OwnerResTypeType';
import type { PointsType } from './PointsType';
import {
    PointsTypeFromJSON,
    PointsTypeFromJSONTyped,
    PointsTypeToJSON,
} from './PointsType';
import type { PrimaryShareTypeType } from './PrimaryShareTypeType';
import {
    PrimaryShareTypeTypeFromJSON,
    PrimaryShareTypeTypeFromJSONTyped,
    PrimaryShareTypeTypeToJSON,
} from './PrimaryShareTypeType';
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
import type { ResMobileNotificationsType } from './ResMobileNotificationsType';
import {
    ResMobileNotificationsTypeFromJSON,
    ResMobileNotificationsTypeFromJSONTyped,
    ResMobileNotificationsTypeToJSON,
} from './ResMobileNotificationsType';
import type { RoomRateType } from './RoomRateType';
import {
    RoomRateTypeFromJSON,
    RoomRateTypeFromJSONTyped,
    RoomRateTypeToJSON,
} from './RoomRateType';
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { TotalType } from './TotalType';
import {
    TotalTypeFromJSON,
    TotalTypeFromJSONTyped,
    TotalTypeToJSON,
} from './TotalType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';
import type { UpsellInfoType } from './UpsellInfoType';
import {
    UpsellInfoTypeFromJSON,
    UpsellInfoTypeFromJSONTyped,
    UpsellInfoTypeToJSON,
} from './UpsellInfoType';

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
     * @type {OwnerResTypeType}
     * @memberof RoomStayType
     */
    ownerReservationType?: OwnerResTypeType;
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
export function instanceOfRoomStayType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomStayTypeFromJSON(json: any): RoomStayType {
    return RoomStayTypeFromJSONTyped(json, false);
}

export function RoomStayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomStayType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : (new Date(json['arrivalDate'])),
        'availableUpsellOfferCount': !exists(json, 'availableUpsellOfferCount') ? undefined : json['availableUpsellOfferCount'],
        'bookingMedium': !exists(json, 'bookingMedium') ? undefined : json['bookingMedium'],
        'bookingMediumDescription': !exists(json, 'bookingMediumDescription') ? undefined : json['bookingMediumDescription'],
        'currentRoomInfo': !exists(json, 'currentRoomInfo') ? undefined : CurrentRoomInfoTypeFromJSON(json['currentRoomInfo']),
        'departureDate': !exists(json, 'departureDate') ? undefined : (new Date(json['departureDate'])),
        'expectedTimes': !exists(json, 'expectedTimes') ? undefined : ResExpectedTimesTypeFromJSON(json['expectedTimes']),
        'guarantee': !exists(json, 'guarantee') ? undefined : ResGuaranteeTypeFromJSON(json['guarantee']),
        'guestCounts': !exists(json, 'guestCounts') ? undefined : GuestCountsTypeFromJSON(json['guestCounts']),
        'mobileNotifications': !exists(json, 'mobileNotifications') ? undefined : ResMobileNotificationsTypeFromJSON(json['mobileNotifications']),
        'multiValueAttrs': !exists(json, 'multiValueAttrs') ? undefined : json['multiValueAttrs'],
        'originalTimeSpan': !exists(json, 'originalTimeSpan') ? undefined : TimeSpanTypeFromJSON(json['originalTimeSpan']),
        'ownerReservationType': !exists(json, 'ownerReservationType') ? undefined : OwnerResTypeTypeFromJSON(json['ownerReservationType']),
        'primaryShareType': !exists(json, 'primaryShareType') ? undefined : PrimaryShareTypeTypeFromJSON(json['primaryShareType']),
        'printRate': !exists(json, 'printRate') ? undefined : json['printRate'],
        'promotion': !exists(json, 'promotion') ? undefined : PromotionTypeFromJSON(json['promotion']),
        'registrationNumber': !exists(json, 'registrationNumber') ? undefined : UniqueIDTypeFromJSON(json['registrationNumber']),
        'remoteCheckInAllowed': !exists(json, 'remoteCheckInAllowed') ? undefined : json['remoteCheckInAllowed'],
        'roomNumberLocked': !exists(json, 'roomNumberLocked') ? undefined : json['roomNumberLocked'],
        'roomRates': !exists(json, 'roomRates') ? undefined : ((json['roomRates'] as Array<any>).map(RoomRateTypeFromJSON)),
        'suiteWith': !exists(json, 'suiteWith') ? undefined : json['suiteWith'],
        'total': !exists(json, 'total') ? undefined : TotalTypeFromJSON(json['total']),
        'totalPoints': !exists(json, 'totalPoints') ? undefined : PointsTypeFromJSON(json['totalPoints']),
        'upsellInfo': !exists(json, 'upsellInfo') ? undefined : UpsellInfoTypeFromJSON(json['upsellInfo']),
    };
}

export function RoomStayTypeToJSON(value?: RoomStayType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrivalDate': value.arrivalDate === undefined ? undefined : (value.arrivalDate.toISOString().substr(0,10)),
        'availableUpsellOfferCount': value.availableUpsellOfferCount,
        'bookingMedium': value.bookingMedium,
        'bookingMediumDescription': value.bookingMediumDescription,
        'currentRoomInfo': CurrentRoomInfoTypeToJSON(value.currentRoomInfo),
        'departureDate': value.departureDate === undefined ? undefined : (value.departureDate.toISOString().substr(0,10)),
        'expectedTimes': ResExpectedTimesTypeToJSON(value.expectedTimes),
        'guarantee': ResGuaranteeTypeToJSON(value.guarantee),
        'guestCounts': GuestCountsTypeToJSON(value.guestCounts),
        'mobileNotifications': ResMobileNotificationsTypeToJSON(value.mobileNotifications),
        'multiValueAttrs': value.multiValueAttrs,
        'originalTimeSpan': TimeSpanTypeToJSON(value.originalTimeSpan),
        'ownerReservationType': OwnerResTypeTypeToJSON(value.ownerReservationType),
        'primaryShareType': PrimaryShareTypeTypeToJSON(value.primaryShareType),
        'printRate': value.printRate,
        'promotion': PromotionTypeToJSON(value.promotion),
        'registrationNumber': UniqueIDTypeToJSON(value.registrationNumber),
        'remoteCheckInAllowed': value.remoteCheckInAllowed,
        'roomNumberLocked': value.roomNumberLocked,
        'roomRates': value.roomRates === undefined ? undefined : ((value.roomRates as Array<any>).map(RoomRateTypeToJSON)),
        'suiteWith': value.suiteWith,
        'total': TotalTypeToJSON(value.total),
        'totalPoints': PointsTypeToJSON(value.totalPoints),
        'upsellInfo': UpsellInfoTypeToJSON(value.upsellInfo),
    };
}

