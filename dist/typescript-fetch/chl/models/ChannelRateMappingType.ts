/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CarrierInfoType } from './CarrierInfoType';
import {
    CarrierInfoTypeFromJSON,
    CarrierInfoTypeFromJSONTyped,
    CarrierInfoTypeToJSON,
} from './CarrierInfoType';
import type { ChannelRateMappingDescriptionType } from './ChannelRateMappingDescriptionType';
import {
    ChannelRateMappingDescriptionTypeFromJSON,
    ChannelRateMappingDescriptionTypeFromJSONTyped,
    ChannelRateMappingDescriptionTypeToJSON,
} from './ChannelRateMappingDescriptionType';
import type { ChannelRateMappingTypeRateTierAttr } from './ChannelRateMappingTypeRateTierAttr';
import {
    ChannelRateMappingTypeRateTierAttrFromJSON,
    ChannelRateMappingTypeRateTierAttrFromJSONTyped,
    ChannelRateMappingTypeRateTierAttrToJSON,
} from './ChannelRateMappingTypeRateTierAttr';
import type { ChannelRateMappingTypeRegionalAvailAttr } from './ChannelRateMappingTypeRegionalAvailAttr';
import {
    ChannelRateMappingTypeRegionalAvailAttrFromJSON,
    ChannelRateMappingTypeRegionalAvailAttrFromJSONTyped,
    ChannelRateMappingTypeRegionalAvailAttrToJSON,
} from './ChannelRateMappingTypeRegionalAvailAttr';
import type { RatePlanPrimaryDetailsType } from './RatePlanPrimaryDetailsType';
import {
    RatePlanPrimaryDetailsTypeFromJSON,
    RatePlanPrimaryDetailsTypeFromJSONTyped,
    RatePlanPrimaryDetailsTypeToJSON,
} from './RatePlanPrimaryDetailsType';

/**
 * Basic details of a hotel-channel rate code mapping.
 * @export
 * @interface ChannelRateMappingType
 */
export interface ChannelRateMappingType {
    /**
     * Indicates if Rate updates to Channel are allowed.
     * @type {boolean}
     * @memberof ChannelRateMappingType
     */
    allowRateUpdate?: boolean;
    /**
     * Indicates if Rate Restrictions are sent to an ADS, GDS, or ODS partner, such as Expedia, via the AVH messaging functionality.
     * @type {boolean}
     * @memberof ChannelRateMappingType
     */
    allowRestrictionUpdate?: boolean;
    /**
     * Begin date of the channel rate code mapping.
     * @type {Date}
     * @memberof ChannelRateMappingType
     */
    beginDate?: Date;
    /**
     * Block Rate Indicator.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    blockRateIndicator?: string;
    /**
     * Booking Channel Code.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    bookingChannelCode?: string;
    /**
     * 
     * @type {CarrierInfoType}
     * @memberof ChannelRateMappingType
     */
    carrierInfo?: CarrierInfoType;
    /**
     * Channel rate category of hotel-channel rate code mapping.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    channelRatePlanCategory?: string;
    /**
     * Channel Room Type.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    channelRatePlanCode?: string;
    /**
     * Order of the channel rate type mapping.
     * @type {number}
     * @memberof ChannelRateMappingType
     */
    channelRatePlanOrder?: number;
    /**
     * Name of channel rate plan code to display on web.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    channelRatePlanWebName?: string;
    /**
     * 
     * @type {ChannelRateMappingDescriptionType}
     * @memberof ChannelRateMappingType
     */
    description?: ChannelRateMappingDescriptionType;
    /**
     * End date of the channel rate code mapping.
     * @type {Date}
     * @memberof ChannelRateMappingType
     */
    endDate?: Date;
    /**
     * True if the mapping has channel negotiated rates, otherwise false.
     * @type {boolean}
     * @memberof ChannelRateMappingType
     */
    hasChannelNegotiatedRates?: boolean;
    /**
     * True if this channel rate plan code has negotiated rates, otherwise false
     * @type {boolean}
     * @memberof ChannelRateMappingType
     */
    hasNegotiatedRates?: boolean;
    /**
     * Hotel Code.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    hotelId?: string;
    /**
     * New Channel Rate Plan Code of the mapping. Used only to change the Channel Rate Plan Code.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    newChannelRatePlanCode?: string;
    /**
     * Promotion Code.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    promotionCode?: string;
    /**
     * Rate Level.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    rateLevel?: string;
    /**
     * Room Type.
     * @type {string}
     * @memberof ChannelRateMappingType
     */
    ratePlanCode?: string;
    /**
     * 
     * @type {RatePlanPrimaryDetailsType}
     * @memberof ChannelRateMappingType
     */
    ratePlanInfo?: RatePlanPrimaryDetailsType;
    /**
     * 
     * @type {ChannelRateMappingTypeRateTierAttr}
     * @memberof ChannelRateMappingType
     */
    rateTierAttr?: ChannelRateMappingTypeRateTierAttr;
    /**
     * 
     * @type {ChannelRateMappingTypeRegionalAvailAttr}
     * @memberof ChannelRateMappingType
     */
    regionalAvailAttr?: ChannelRateMappingTypeRegionalAvailAttr;
    /**
     * 
     * @type {Array<string>}
     * @memberof ChannelRateMappingType
     */
    roomTypes?: Array<string>;
}

/**
 * Check if a given object implements the ChannelRateMappingType interface.
 */
export function instanceOfChannelRateMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelRateMappingTypeFromJSON(json: any): ChannelRateMappingType {
    return ChannelRateMappingTypeFromJSONTyped(json, false);
}

export function ChannelRateMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelRateMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allowRateUpdate': !exists(json, 'allowRateUpdate') ? undefined : json['allowRateUpdate'],
        'allowRestrictionUpdate': !exists(json, 'allowRestrictionUpdate') ? undefined : json['allowRestrictionUpdate'],
        'beginDate': !exists(json, 'beginDate') ? undefined : (new Date(json['beginDate'])),
        'blockRateIndicator': !exists(json, 'blockRateIndicator') ? undefined : json['blockRateIndicator'],
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'carrierInfo': !exists(json, 'carrierInfo') ? undefined : CarrierInfoTypeFromJSON(json['carrierInfo']),
        'channelRatePlanCategory': !exists(json, 'channelRatePlanCategory') ? undefined : json['channelRatePlanCategory'],
        'channelRatePlanCode': !exists(json, 'channelRatePlanCode') ? undefined : json['channelRatePlanCode'],
        'channelRatePlanOrder': !exists(json, 'channelRatePlanOrder') ? undefined : json['channelRatePlanOrder'],
        'channelRatePlanWebName': !exists(json, 'channelRatePlanWebName') ? undefined : json['channelRatePlanWebName'],
        'description': !exists(json, 'description') ? undefined : ChannelRateMappingDescriptionTypeFromJSON(json['description']),
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hasChannelNegotiatedRates': !exists(json, 'hasChannelNegotiatedRates') ? undefined : json['hasChannelNegotiatedRates'],
        'hasNegotiatedRates': !exists(json, 'hasNegotiatedRates') ? undefined : json['hasNegotiatedRates'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'newChannelRatePlanCode': !exists(json, 'newChannelRatePlanCode') ? undefined : json['newChannelRatePlanCode'],
        'promotionCode': !exists(json, 'promotionCode') ? undefined : json['promotionCode'],
        'rateLevel': !exists(json, 'rateLevel') ? undefined : json['rateLevel'],
        'ratePlanCode': !exists(json, 'ratePlanCode') ? undefined : json['ratePlanCode'],
        'ratePlanInfo': !exists(json, 'ratePlanInfo') ? undefined : RatePlanPrimaryDetailsTypeFromJSON(json['ratePlanInfo']),
        'rateTierAttr': !exists(json, 'rateTierAttr') ? undefined : ChannelRateMappingTypeRateTierAttrFromJSON(json['rateTierAttr']),
        'regionalAvailAttr': !exists(json, 'regionalAvailAttr') ? undefined : ChannelRateMappingTypeRegionalAvailAttrFromJSON(json['regionalAvailAttr']),
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
    };
}

export function ChannelRateMappingTypeToJSON(value?: ChannelRateMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allowRateUpdate': value.allowRateUpdate,
        'allowRestrictionUpdate': value.allowRestrictionUpdate,
        'beginDate': value.beginDate === undefined ? undefined : (value.beginDate.toISOString().substr(0,10)),
        'blockRateIndicator': value.blockRateIndicator,
        'bookingChannelCode': value.bookingChannelCode,
        'carrierInfo': CarrierInfoTypeToJSON(value.carrierInfo),
        'channelRatePlanCategory': value.channelRatePlanCategory,
        'channelRatePlanCode': value.channelRatePlanCode,
        'channelRatePlanOrder': value.channelRatePlanOrder,
        'channelRatePlanWebName': value.channelRatePlanWebName,
        'description': ChannelRateMappingDescriptionTypeToJSON(value.description),
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'hasChannelNegotiatedRates': value.hasChannelNegotiatedRates,
        'hasNegotiatedRates': value.hasNegotiatedRates,
        'hotelId': value.hotelId,
        'newChannelRatePlanCode': value.newChannelRatePlanCode,
        'promotionCode': value.promotionCode,
        'rateLevel': value.rateLevel,
        'ratePlanCode': value.ratePlanCode,
        'ratePlanInfo': RatePlanPrimaryDetailsTypeToJSON(value.ratePlanInfo),
        'rateTierAttr': ChannelRateMappingTypeRateTierAttrToJSON(value.rateTierAttr),
        'regionalAvailAttr': ChannelRateMappingTypeRegionalAvailAttrToJSON(value.regionalAvailAttr),
        'roomTypes': value.roomTypes,
    };
}

