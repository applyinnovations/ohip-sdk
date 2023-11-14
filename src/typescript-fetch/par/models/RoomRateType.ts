/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ForeignExchangeType } from './ForeignExchangeType';
import {
    ForeignExchangeTypeFromJSON,
    ForeignExchangeTypeFromJSONTyped,
    ForeignExchangeTypeToJSON,
} from './ForeignExchangeType';
import type { GuestCountsType } from './GuestCountsType';
import {
    GuestCountsTypeFromJSON,
    GuestCountsTypeFromJSONTyped,
    GuestCountsTypeToJSON,
} from './GuestCountsType';
import type { MealPlansType } from './MealPlansType';
import {
    MealPlansTypeFromJSON,
    MealPlansTypeFromJSONTyped,
    MealPlansTypeToJSON,
} from './MealPlansType';
import type { PackageElementType } from './PackageElementType';
import {
    PackageElementTypeFromJSON,
    PackageElementTypeFromJSONTyped,
    PackageElementTypeToJSON,
} from './PackageElementType';
import type { PointsType } from './PointsType';
import {
    PointsTypeFromJSON,
    PointsTypeFromJSONTyped,
    PointsTypeToJSON,
} from './PointsType';
import type { RatesType } from './RatesType';
import {
    RatesTypeFromJSON,
    RatesTypeFromJSONTyped,
    RatesTypeToJSON,
} from './RatesType';
import type { ResAwardsType } from './ResAwardsType';
import {
    ResAwardsTypeFromJSON,
    ResAwardsTypeFromJSONTyped,
    ResAwardsTypeToJSON,
} from './ResAwardsType';
import type { ReservationBlockType } from './ReservationBlockType';
import {
    ReservationBlockTypeFromJSON,
    ReservationBlockTypeFromJSONTyped,
    ReservationBlockTypeToJSON,
} from './ReservationBlockType';
import type { ReservationProfileType } from './ReservationProfileType';
import {
    ReservationProfileTypeFromJSON,
    ReservationProfileTypeFromJSONTyped,
    ReservationProfileTypeToJSON,
} from './ReservationProfileType';
import type { RoomRateAvailReasonType } from './RoomRateAvailReasonType';
import {
    RoomRateAvailReasonTypeFromJSON,
    RoomRateAvailReasonTypeFromJSONTyped,
    RoomRateAvailReasonTypeToJSON,
} from './RoomRateAvailReasonType';
import type { TotalType } from './TotalType';
import {
    TotalTypeFromJSON,
    TotalTypeFromJSONTyped,
    TotalTypeToJSON,
} from './TotalType';

/**
 * 
 * @export
 * @interface RoomRateType
 */
export interface RoomRateType {
    /**
     * 
     * @type {RoomRateAvailReasonType}
     * @memberof RoomRateType
     */
    availability?: RoomRateAvailReasonType;
    /**
     * 
     * @type {ResAwardsType}
     * @memberof RoomRateType
     */
    awards?: ResAwardsType;
    /**
     * Best Available rates ranking.
     * @type {number}
     * @memberof RoomRateType
     */
    barRanking?: number;
    /**
     * Indicates if the Rate Code has BOGO(Bye one Get one) indicator.
     * @type {boolean}
     * @memberof RoomRateType
     */
    bogoDiscount?: boolean;
    /**
     * Indicates commission amount used by the rate plan.
     * @type {number}
     * @memberof RoomRateType
     */
    commissionAmount?: number;
    /**
     * Commission Code applicable for commission calculation for Travel Agent/Company.
     * @type {string}
     * @memberof RoomRateType
     */
    commissionCode?: string;
    /**
     * Indicates commission percentage used by the rate plan.
     * @type {number}
     * @memberof RoomRateType
     */
    commissionPercentage?: number;
    /**
     * Indicates Commission is applicable for commission calculation for Travel Agent/Company.
     * @type {boolean}
     * @memberof RoomRateType
     */
    commissionable?: boolean;
    /**
     * Indicates this reservation rate is complimentary.
     * @type {boolean}
     * @memberof RoomRateType
     */
    complimentary?: boolean;
    /**
     * If true, indicates that credentials is required to sell the rate code.
     * @type {boolean}
     * @memberof RoomRateType
     */
    credentialsRequired?: boolean;
    /**
     * Indicates if the Rate Code is discountable i.e discounts are allowed on the rate code.
     * @type {boolean}
     * @memberof RoomRateType
     */
    discountAllowed?: boolean;
    /**
     * The ending value of the date range.
     * @type {Date}
     * @memberof RoomRateType
     */
    end?: Date;
    /**
     * Fixed Rate Indicator.
     * @type {boolean}
     * @memberof RoomRateType
     */
    fixedRate?: boolean;
    /**
     * 
     * @type {ForeignExchangeType}
     * @memberof RoomRateType
     */
    foreignExchange?: ForeignExchangeType;
    /**
     * 
     * @type {GuestCountsType}
     * @memberof RoomRateType
     */
    guestCounts?: GuestCountsType;
    /**
     * Indicates this reservation is for House use.
     * @type {boolean}
     * @memberof RoomRateType
     */
    houseUseOnly?: boolean;
    /**
     * Indicates whether the room type inventory was taken from the allotment or House availability.
     * @type {string}
     * @memberof RoomRateType
     */
    inventoryLender?: string;
    /**
     * The code that relates to the market being sold to (e.g., the corporate market, packages).
     * @type {string}
     * @memberof RoomRateType
     */
    marketCode?: string;
    /**
     * Description of the market code.
     * @type {string}
     * @memberof RoomRateType
     */
    marketCodeDescription?: string;
    /**
     * 
     * @type {MealPlansType}
     * @memberof RoomRateType
     */
    mealPlans?: MealPlansType;
    /**
     * The number of rooms.
     * @type {number}
     * @memberof RoomRateType
     */
    numberOfUnits?: number;
    /**
     * 
     * @type {Array<PackageElementType>}
     * @memberof RoomRateType
     */
    packages?: Array<PackageElementType>;
    /**
     * 
     * @type {string}
     * @memberof RoomRateType
     */
    promotionCode?: string;
    /**
     * True indicates as pseudo room type. This is usually used for a posting master reservation.
     * @type {boolean}
     * @memberof RoomRateType
     */
    pseudoRoom?: boolean;
    /**
     * Rate code description.
     * @type {string}
     * @memberof RoomRateType
     */
    rateDescription?: string;
    /**
     * For RatePlanSet equals BESTAVAILABLERATE, in case Rate Groups are enabled the element provides the rate group for the rate plan code.
     * @type {string}
     * @memberof RoomRateType
     */
    rateGroup?: string;
    /**
     * Rate plan type like Corporate,Regular,Military,Weekend etc.
     * @type {string}
     * @memberof RoomRateType
     */
    rateLevel?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomRateType
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {RatesType}
     * @memberof RoomRateType
     */
    rates?: RatesType;
    /**
     * 
     * @type {ReservationBlockType}
     * @memberof RoomRateType
     */
    reservationBlock?: ReservationBlockType;
    /**
     * A string value representing the unique identification of a room.
     * @type {string}
     * @memberof RoomRateType
     */
    roomId?: string;
    /**
     * Information about the Room Rate Combination.
     * @type {string}
     * @memberof RoomRateType
     */
    roomRateInfo?: string;
    /**
     * 
     * @type {string}
     * @memberof RoomRateType
     */
    roomType?: string;
    /**
     * Room Type used for the Rate calculation.
     * @type {string}
     * @memberof RoomRateType
     */
    roomTypeCharged?: string;
    /**
     * To specify where the business came from e.g. radio, newspaper ad, etc.
     * @type {string}
     * @memberof RoomRateType
     */
    sourceCode?: string;
    /**
     * Description of the source of business.
     * @type {string}
     * @memberof RoomRateType
     */
    sourceCodeDescription?: string;
    /**
     * The starting value of the date range.
     * @type {Date}
     * @memberof RoomRateType
     */
    start?: Date;
    /**
     * Profile associated with the room Stay.
     * @type {Array<ReservationProfileType>}
     * @memberof RoomRateType
     */
    stayProfiles?: Array<ReservationProfileType>;
    /**
     * 
     * @type {boolean}
     * @memberof RoomRateType
     */
    suppressRate?: boolean;
    /**
     * 
     * @type {GuestCountsType}
     * @memberof RoomRateType
     */
    taxFreeGuestCounts?: GuestCountsType;
    /**
     * If true, indicates if tax is included in the rate code.
     * @type {boolean}
     * @memberof RoomRateType
     */
    taxIncluded?: boolean;
    /**
     * 
     * @type {TotalType}
     * @memberof RoomRateType
     */
    total?: TotalType;
    /**
     * 
     * @type {PointsType}
     * @memberof RoomRateType
     */
    totalPoints?: PointsType;
}

/**
 * Check if a given object implements the RoomRateType interface.
 */
export function instanceOfRoomRateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoomRateTypeFromJSON(json: any): RoomRateType {
    return RoomRateTypeFromJSONTyped(json, false);
}

export function RoomRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'availability': !exists(json, 'availability') ? undefined : RoomRateAvailReasonTypeFromJSON(json['availability']),
        'awards': !exists(json, 'awards') ? undefined : ResAwardsTypeFromJSON(json['awards']),
        'barRanking': !exists(json, 'barRanking') ? undefined : json['barRanking'],
        'bogoDiscount': !exists(json, 'bogoDiscount') ? undefined : json['bogoDiscount'],
        'commissionAmount': !exists(json, 'commissionAmount') ? undefined : json['commissionAmount'],
        'commissionCode': !exists(json, 'commissionCode') ? undefined : json['commissionCode'],
        'commissionPercentage': !exists(json, 'commissionPercentage') ? undefined : json['commissionPercentage'],
        'commissionable': !exists(json, 'commissionable') ? undefined : json['commissionable'],
        'complimentary': !exists(json, 'complimentary') ? undefined : json['complimentary'],
        'credentialsRequired': !exists(json, 'credentialsRequired') ? undefined : json['credentialsRequired'],
        'discountAllowed': !exists(json, 'discountAllowed') ? undefined : json['discountAllowed'],
        'end': !exists(json, 'end') ? undefined : (new Date(json['end'])),
        'fixedRate': !exists(json, 'fixedRate') ? undefined : json['fixedRate'],
        'foreignExchange': !exists(json, 'foreignExchange') ? undefined : ForeignExchangeTypeFromJSON(json['foreignExchange']),
        'guestCounts': !exists(json, 'guestCounts') ? undefined : GuestCountsTypeFromJSON(json['guestCounts']),
        'houseUseOnly': !exists(json, 'houseUseOnly') ? undefined : json['houseUseOnly'],
        'inventoryLender': !exists(json, 'inventoryLender') ? undefined : json['inventoryLender'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'marketCodeDescription': !exists(json, 'marketCodeDescription') ? undefined : json['marketCodeDescription'],
        'mealPlans': !exists(json, 'mealPlans') ? undefined : MealPlansTypeFromJSON(json['mealPlans']),
        'numberOfUnits': !exists(json, 'numberOfUnits') ? undefined : json['numberOfUnits'],
        'packages': !exists(json, 'packages') ? undefined : ((json['packages'] as Array<any>).map(PackageElementTypeFromJSON)),
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'pseudoRoom': !exists(json, 'pseudoRoom') ? undefined : json['pseudoRoom'],
        'rateDescription': !exists(json, 'rateDescription') ? undefined : json['rateDescription'],
        'rateGroup': !exists(json, 'rateGroup') ? undefined : json['rateGroup'],
        'rateLevel': !exists(json, 'rateLevel') ? undefined : json['rateLevel'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'rates': !exists(json, 'rates') ? undefined : RatesTypeFromJSON(json['rates']),
        'reservationBlock': !exists(json, 'reservationBlock') ? undefined : ReservationBlockTypeFromJSON(json['reservationBlock']),
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'roomRateInfo': !exists(json, 'roomRateInfo') ? undefined : json['roomRateInfo'],
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'roomTypeCharged': !exists(json, 'roomTypeCharged') ? undefined : json['roomTypeCharged'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceCodeDescription': !exists(json, 'sourceCodeDescription') ? undefined : json['sourceCodeDescription'],
        'start': !exists(json, 'start') ? undefined : (new Date(json['start'])),
        'stayProfiles': !exists(json, 'stayProfiles') ? undefined : ((json['stayProfiles'] as Array<any>).map(ReservationProfileTypeFromJSON)),
        'suppressRate': !exists(json, 'suppressRate') ? undefined : json['suppressRate'],
        'taxFreeGuestCounts': !exists(json, 'taxFreeGuestCounts') ? undefined : GuestCountsTypeFromJSON(json['taxFreeGuestCounts']),
        'taxIncluded': !exists(json, 'taxIncluded') ? undefined : json['taxIncluded'],
        'total': !exists(json, 'total') ? undefined : TotalTypeFromJSON(json['total']),
        'totalPoints': !exists(json, 'totalPoints') ? undefined : PointsTypeFromJSON(json['totalPoints']),
    };
}

export function RoomRateTypeToJSON(value?: RoomRateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'availability': RoomRateAvailReasonTypeToJSON(value.availability),
        'awards': ResAwardsTypeToJSON(value.awards),
        'barRanking': value.barRanking,
        'bogoDiscount': value.bogoDiscount,
        'commissionAmount': value.commissionAmount,
        'commissionCode': value.commissionCode,
        'commissionPercentage': value.commissionPercentage,
        'commissionable': value.commissionable,
        'complimentary': value.complimentary,
        'credentialsRequired': value.credentialsRequired,
        'discountAllowed': value.discountAllowed,
        'end': value.end === undefined ? undefined : (value.end.toISOString().substring(0,10)),
        'fixedRate': value.fixedRate,
        'foreignExchange': ForeignExchangeTypeToJSON(value.foreignExchange),
        'guestCounts': GuestCountsTypeToJSON(value.guestCounts),
        'houseUseOnly': value.houseUseOnly,
        'inventoryLender': value.inventoryLender,
        'marketCode': value.marketCode,
        'marketCodeDescription': value.marketCodeDescription,
        'mealPlans': MealPlansTypeToJSON(value.mealPlans),
        'numberOfUnits': value.numberOfUnits,
        'packages': value.packages === undefined ? undefined : ((value.packages as Array<any>).map(PackageElementTypeToJSON)),
        'promotionCode': value.promotionCode,
        'pseudoRoom': value.pseudoRoom,
        'rateDescription': value.rateDescription,
        'rateGroup': value.rateGroup,
        'rateLevel': value.rateLevel,
        'ratePlanCode': value.ratePlanCode,
        'rates': RatesTypeToJSON(value.rates),
        'reservationBlock': ReservationBlockTypeToJSON(value.reservationBlock),
        'roomId': value.roomId,
        'roomRateInfo': value.roomRateInfo,
        'roomType': value.roomType,
        'roomTypeCharged': value.roomTypeCharged,
        'sourceCode': value.sourceCode,
        'sourceCodeDescription': value.sourceCodeDescription,
        'start': value.start === undefined ? undefined : (value.start.toISOString().substring(0,10)),
        'stayProfiles': value.stayProfiles === undefined ? undefined : ((value.stayProfiles as Array<any>).map(ReservationProfileTypeToJSON)),
        'suppressRate': value.suppressRate,
        'taxFreeGuestCounts': GuestCountsTypeToJSON(value.taxFreeGuestCounts),
        'taxIncluded': value.taxIncluded,
        'total': TotalTypeToJSON(value.total),
        'totalPoints': PointsTypeToJSON(value.totalPoints),
    };
}
