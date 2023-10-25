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
import type { BookingChannelMappingType } from './BookingChannelMappingType';
import {
    BookingChannelMappingTypeFromJSON,
    BookingChannelMappingTypeFromJSONTyped,
    BookingChannelMappingTypeToJSON,
} from './BookingChannelMappingType';
import type { CancelPenaltyType } from './CancelPenaltyType';
import {
    CancelPenaltyTypeFromJSON,
    CancelPenaltyTypeFromJSONTyped,
    CancelPenaltyTypeToJSON,
} from './CancelPenaltyType';
import type { GuaranteePolicyType } from './GuaranteePolicyType';
import {
    GuaranteePolicyTypeFromJSON,
    GuaranteePolicyTypeFromJSONTyped,
    GuaranteePolicyTypeToJSON,
} from './GuaranteePolicyType';
import type { GuaranteeType } from './GuaranteeType';
import {
    GuaranteeTypeFromJSON,
    GuaranteeTypeFromJSONTyped,
    GuaranteeTypeToJSON,
} from './GuaranteeType';
import type { MealPlanCodeType } from './MealPlanCodeType';
import {
    MealPlanCodeTypeFromJSON,
    MealPlanCodeTypeFromJSONTyped,
    MealPlanCodeTypeToJSON,
} from './MealPlanCodeType';
import type { ProfileTypeType } from './ProfileTypeType';
import {
    ProfileTypeTypeFromJSON,
    ProfileTypeTypeFromJSONTyped,
    ProfileTypeTypeToJSON,
} from './ProfileTypeType';
import type { RatePlanChannelInfoType } from './RatePlanChannelInfoType';
import {
    RatePlanChannelInfoTypeFromJSON,
    RatePlanChannelInfoTypeFromJSONTyped,
    RatePlanChannelInfoTypeToJSON,
} from './RatePlanChannelInfoType';
import type { RatePlanCommissionType } from './RatePlanCommissionType';
import {
    RatePlanCommissionTypeFromJSON,
    RatePlanCommissionTypeFromJSONTyped,
    RatePlanCommissionTypeToJSON,
} from './RatePlanCommissionType';

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
     * Meal plan codes associated with the rate codes.
     * @type {Array<MealPlanCodeType>}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    mealPlans?: Array<MealPlanCodeType>;
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
     * Guarantee Code information with cancellation penalty and deposit policy information.
     * @type {Array<GuaranteePolicyType>}
     * @memberof AvailRatePlanInfoTypeRatePlanInner
     */
    resGuarantees?: Array<GuaranteePolicyType>;
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
export function instanceOfAvailRatePlanInfoTypeRatePlanInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AvailRatePlanInfoTypeRatePlanInnerFromJSON(json: any): AvailRatePlanInfoTypeRatePlanInner {
    return AvailRatePlanInfoTypeRatePlanInnerFromJSONTyped(json, false);
}

export function AvailRatePlanInfoTypeRatePlanInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AvailRatePlanInfoTypeRatePlanInner {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelMappings': !exists(json, 'bookingChannelMappings') ? undefined : ((json['bookingChannelMappings'] as Array<any>).map(BookingChannelMappingTypeFromJSON)),
        'cancelPenalty': !exists(json, 'cancelPenalty') ? undefined : CancelPenaltyTypeFromJSON(json['cancelPenalty']),
        'credentialsRequired': !exists(json, 'credentialsRequired') ? undefined : json['credentialsRequired'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'discountAllowed': !exists(json, 'discountAllowed') ? undefined : json['discountAllowed'],
        'guarantee': !exists(json, 'guarantee') ? undefined : GuaranteeTypeFromJSON(json['guarantee']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelUseOnly': !exists(json, 'hotelUseOnly') ? undefined : json['hotelUseOnly'],
        'longInfo': !exists(json, 'longInfo') ? undefined : json['longInfo'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'mealPlans': !exists(json, 'mealPlans') ? undefined : ((json['mealPlans'] as Array<any>).map(MealPlanCodeTypeFromJSON)),
        'negotiatedBy': !exists(json, 'negotiatedBy') ? undefined : ProfileTypeTypeFromJSON(json['negotiatedBy']),
        'rateCommission': !exists(json, 'rateCommission') ? undefined : RatePlanCommissionTypeFromJSON(json['rateCommission']),
        'ratePlanCategory': !exists(json, 'ratePlanCategory') ? undefined : json['ratePlanCategory'],
        'ratePlanChannelInfo': !exists(json, 'ratePlanChannelInfo') ? undefined : RatePlanChannelInfoTypeFromJSON(json['ratePlanChannelInfo']),
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanLevel': !exists(json, 'ratePlanLevel') ? undefined : json['ratePlanLevel'],
        'resGuarantees': !exists(json, 'resGuarantees') ? undefined : ((json['resGuarantees'] as Array<any>).map(GuaranteePolicyTypeFromJSON)),
        'serviceFeeInclusive': !exists(json, 'serviceFeeInclusive') ? undefined : json['serviceFeeInclusive'],
        'shortInfo': !exists(json, 'shortInfo') ? undefined : json['shortInfo'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'taxInclusive': !exists(json, 'taxInclusive') ? undefined : json['taxInclusive'],
        'webPage': !exists(json, 'webPage') ? undefined : json['webPage'],
    };
}

export function AvailRatePlanInfoTypeRatePlanInnerToJSON(value?: AvailRatePlanInfoTypeRatePlanInner | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelMappings': value.bookingChannelMappings === undefined ? undefined : ((value.bookingChannelMappings as Array<any>).map(BookingChannelMappingTypeToJSON)),
        'cancelPenalty': CancelPenaltyTypeToJSON(value.cancelPenalty),
        'credentialsRequired': value.credentialsRequired,
        'currencyCode': value.currencyCode,
        'description': value.description,
        'discountAllowed': value.discountAllowed,
        'guarantee': GuaranteeTypeToJSON(value.guarantee),
        'hotelId': value.hotelId,
        'hotelUseOnly': value.hotelUseOnly,
        'longInfo': value.longInfo,
        'marketCode': value.marketCode,
        'mealPlans': value.mealPlans === undefined ? undefined : ((value.mealPlans as Array<any>).map(MealPlanCodeTypeToJSON)),
        'negotiatedBy': ProfileTypeTypeToJSON(value.negotiatedBy),
        'rateCommission': RatePlanCommissionTypeToJSON(value.rateCommission),
        'ratePlanCategory': value.ratePlanCategory,
        'ratePlanChannelInfo': RatePlanChannelInfoTypeToJSON(value.ratePlanChannelInfo),
        'ratePlanCode': value.ratePlanCode,
        'ratePlanLevel': value.ratePlanLevel,
        'resGuarantees': value.resGuarantees === undefined ? undefined : ((value.resGuarantees as Array<any>).map(GuaranteePolicyTypeToJSON)),
        'serviceFeeInclusive': value.serviceFeeInclusive,
        'shortInfo': value.shortInfo,
        'sourceCode': value.sourceCode,
        'taxInclusive': value.taxInclusive,
        'webPage': value.webPage,
    };
}

