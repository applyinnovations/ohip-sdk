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
import type { ForeignExchangeType } from './ForeignExchangeType';
import type { GuestCountsType } from './GuestCountsType';
import type { MealPlanCodeType } from './MealPlanCodeType';
import type { PackageElementType } from './PackageElementType';
import type { PointsType } from './PointsType';
import type { RatesType } from './RatesType';
import type { ResAwardsType } from './ResAwardsType';
import type { ReservationBlockType } from './ReservationBlockType';
import type { ReservationProfileType } from './ReservationProfileType';
import type { RoomRateAvailReasonType } from './RoomRateAvailReasonType';
import type { TotalType } from './TotalType';
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
     * @type {string}
     * @memberof RoomRateType
     */
    end?: string;
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
     * Meal plan codes associated with the rate codes.
     * @type {Array<MealPlanCodeType>}
     * @memberof RoomRateType
     */
    mealPlans?: Array<MealPlanCodeType>;
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
     * @type {string}
     * @memberof RoomRateType
     */
    start?: string;
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
export declare function instanceOfRoomRateType(value: object): boolean;
export declare function RoomRateTypeFromJSON(json: any): RoomRateType;
export declare function RoomRateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoomRateType;
export declare function RoomRateTypeToJSON(value?: RoomRateType | null): any;