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
import type { BookingChannelMappingType } from './BookingChannelMappingType';
import type { CancelPenaltyType } from './CancelPenaltyType';
import type { GuaranteePoliciesType } from './GuaranteePoliciesType';
import type { GuaranteeType } from './GuaranteeType';
import type { MealPlansType } from './MealPlansType';
import type { ProfileTypeType } from './ProfileTypeType';
import type { RatePlanChannelInfoType } from './RatePlanChannelInfoType';
import type { RatePlanCommissionType } from './RatePlanCommissionType';
/**
 *
 * @export
 * @interface AvailRatePlanInfoTypeRatePlanInner
 */
export interface AvailRatePlanInfoTypeRatePlanInner {
    /**
     * Booking Channel mapping for the Rate Plan Code.
     * @type {Array<BookingChannelMappingType>}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    bookingChannelMappings?: Array<BookingChannelMappingType>;
    /**
     *
     * @type {CancelPenaltyType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    cancelPenalty?: CancelPenaltyType;
    /**
     * If true, indicates that credentials is required to sell the rate code.
     * @type {boolean}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    credentialsRequired?: boolean;
    /**
     * Currency Code of the rate code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    currencyCode?: string;
    /**
     * Description of the Rate Code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    description?: string;
    /**
     * If true, indicates additional discount could be applied on the Rate.
     * @type {boolean}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    discountAllowed?: boolean;
    /**
     *
     * @type {GuaranteeType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    guarantee?: GuaranteeType;
    /**
     *
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    hotelId?: string;
    /**
     * If true, indicates this rates is not allowed to be sold by CRO. For CRO this is information only.
     * @type {boolean}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    hotelUseOnly?: boolean;
    /**
     * Detail Information of the Rate Code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    longInfo?: string;
    /**
     * Holds the market code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    marketCode?: string;
    /**
     *
     * @type {MealPlansType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    mealPlans?: MealPlansType;
    /**
     *
     * @type {ProfileTypeType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    negotiatedBy?: ProfileTypeType;
    /**
     *
     * @type {RatePlanCommissionType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    rateCommission?: RatePlanCommissionType;
    /**
     *
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    ratePlanCategory?: string;
    /**
     *
     * @type {RatePlanChannelInfoType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    ratePlanChannelInfo?: RatePlanChannelInfoType;
    /**
     *
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    ratePlanCode?: string;
    /**
     * All rate codes are associated with rate plan level ( or rate category )for Channels. So if rate plans are given in the request, get all rate codes associated with the rate plan level.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    ratePlanLevel?: string;
    /**
     *
     * @type {GuaranteePoliciesType}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    resGuarantees?: GuaranteePoliciesType;
    /**
     * Indicates if service fee is included in the rate code amount.
     * @type {boolean}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    serviceFeeInclusive?: boolean;
    /**
     * Brief Information of the Rate Code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    shortInfo?: string;
    /**
     * Holds the source code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    sourceCode?: string;
    /**
     * Indicates if tax is included in the rate code amount.
     * @type {boolean}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    taxInclusive?: boolean;
    /**
     * URL providing more information about the Rate Code.
     * @type {string}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    webPage?: string;
}
/**
 * Check if a given object implements the AvailRatePlanInfoTypeRatePlanInner interface.
 */
export declare function instanceOfAvailRatePlanInfoTypeRatePlanInner(value: object): boolean;
export declare function AvailRatePlanInfoTypeRatePlanInnerFromJSON(json: any): AvailRatePlanInfoTypeRatePlanInner;
export declare function AvailRatePlanInfoTypeRatePlanInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailRatePlanInfoTypeRatePlanInner;
export declare function AvailRatePlanInfoTypeRatePlanInnerToJSON(value?: AvailRatePlanInfoTypeRatePlanInner | null): any;
