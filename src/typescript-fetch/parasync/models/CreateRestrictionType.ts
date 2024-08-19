/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate Async API
 * APIs to cater for Price and Rate Availability Asynchronous functionality in OPERA Cloud.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BlockId } from './BlockId';
import {
    BlockIdFromJSON,
    BlockIdFromJSONTyped,
    BlockIdToJSON,
} from './BlockId';
import type { RestrictionStatusType } from './RestrictionStatusType';
import {
    RestrictionStatusTypeFromJSON,
    RestrictionStatusTypeFromJSONTyped,
    RestrictionStatusTypeToJSON,
} from './RestrictionStatusType';
import type { RoomTypeYieldableType } from './RoomTypeYieldableType';
import {
    RoomTypeYieldableTypeFromJSON,
    RoomTypeYieldableTypeFromJSONTyped,
    RoomTypeYieldableTypeToJSON,
} from './RoomTypeYieldableType';

/**
 * 
 * @export
 * @interface CreateRestrictionType
 */
export interface CreateRestrictionType {
    /**
     * 
     * @type {BlockId}
     * @memberof CreateRestrictionType
     */
    blockId?: BlockId;
    /**
     * Booking channel on request.
     * @type {string}
     * @memberof CreateRestrictionType
     */
    bookingChannelOnRequest?: string;
    /**
     * Booking channel.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    bookingChannels?: Array<string>;
    /**
     * The ending value of the date range.
     * @type {string}
     * @memberof CreateRestrictionType
     */
    dateRangeEnd?: string;
    /**
     * The starting value of the date range.
     * @type {string}
     * @memberof CreateRestrictionType
     */
    dateRangeStart?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    friday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    monday?: boolean;
    /**
     * The rate class for which the restriction will be applied.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    rateClasses?: Array<string>;
    /**
     * The rate category for which the restriction will be applied.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    ratePlanCategories?: Array<string>;
    /**
     * The rate code for which the restriction will be applied.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    ratePlanCodes?: Array<string>;
    /**
     * 
     * @type {RestrictionStatusType}
     * @memberof CreateRestrictionType
     */
    restrictionStatus?: RestrictionStatusType;
    /**
     * The room class for which the restriction will be applied.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    roomClasses?: Array<string>;
    /**
     * The room type for which the restriction will be applied.
     * @type {Array<string>}
     * @memberof CreateRestrictionType
     */
    roomTypes?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    saturday?: boolean;
    /**
     * The season code during which the restrictions are valid.
     * @type {string}
     * @memberof CreateRestrictionType
     */
    seasonCode?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    sunday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    thursday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    tuesday?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CreateRestrictionType
     */
    wednesday?: boolean;
    /**
     * 
     * @type {RoomTypeYieldableType}
     * @memberof CreateRestrictionType
     */
    yieldStatus?: RoomTypeYieldableType;
}

/**
 * Check if a given object implements the CreateRestrictionType interface.
 */
export function instanceOfCreateRestrictionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateRestrictionTypeFromJSON(json: any): CreateRestrictionType {
    return CreateRestrictionTypeFromJSONTyped(json, false);
}

export function CreateRestrictionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateRestrictionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blockId': !exists(json, 'blockId') ? undefined : BlockIdFromJSON(json['blockId']),
        'bookingChannelOnRequest': !exists(json, 'bookingChannelOnRequest') ? undefined : json['bookingChannelOnRequest'],
        'bookingChannels': !exists(json, 'bookingChannels') ? undefined : json['bookingChannels'],
        'dateRangeEnd': !exists(json, 'dateRangeEnd') ? undefined : json['dateRangeEnd'],
        'dateRangeStart': !exists(json, 'dateRangeStart') ? undefined : json['dateRangeStart'],
        'friday': !exists(json, 'friday') ? undefined : json['friday'],
        'monday': !exists(json, 'monday') ? undefined : json['monday'],
        'rateClasses': !exists(json, 'rateClasses') ? undefined : json['rateClasses'],
        'ratePlanCategories': !exists(json, 'ratePlanCategories') ? undefined : json['ratePlanCategories'],
        'ratePlanCodes': !exists(json, 'ratePlanCodes') ? undefined : json['ratePlanCodes'],
        'restrictionStatus': !exists(json, 'restrictionStatus') ? undefined : RestrictionStatusTypeFromJSON(json['restrictionStatus']),
        'roomClasses': !exists(json, 'roomClasses') ? undefined : json['roomClasses'],
        'roomTypes': !exists(json, 'roomTypes') ? undefined : json['roomTypes'],
        'saturday': !exists(json, 'saturday') ? undefined : json['saturday'],
        'seasonCode': !exists(json, 'seasonCode') ? undefined : json['seasonCode'],
        'sunday': !exists(json, 'sunday') ? undefined : json['sunday'],
        'thursday': !exists(json, 'thursday') ? undefined : json['thursday'],
        'tuesday': !exists(json, 'tuesday') ? undefined : json['tuesday'],
        'wednesday': !exists(json, 'wednesday') ? undefined : json['wednesday'],
        'yieldStatus': !exists(json, 'yieldStatus') ? undefined : RoomTypeYieldableTypeFromJSON(json['yieldStatus']),
    };
}

export function CreateRestrictionTypeToJSON(value?: CreateRestrictionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blockId': BlockIdToJSON(value.blockId),
        'bookingChannelOnRequest': value.bookingChannelOnRequest,
        'bookingChannels': value.bookingChannels,
        'dateRangeEnd': value.dateRangeEnd,
        'dateRangeStart': value.dateRangeStart,
        'friday': value.friday,
        'monday': value.monday,
        'rateClasses': value.rateClasses,
        'ratePlanCategories': value.ratePlanCategories,
        'ratePlanCodes': value.ratePlanCodes,
        'restrictionStatus': RestrictionStatusTypeToJSON(value.restrictionStatus),
        'roomClasses': value.roomClasses,
        'roomTypes': value.roomTypes,
        'saturday': value.saturday,
        'seasonCode': value.seasonCode,
        'sunday': value.sunday,
        'thursday': value.thursday,
        'tuesday': value.tuesday,
        'wednesday': value.wednesday,
        'yieldStatus': RoomTypeYieldableTypeToJSON(value.yieldStatus),
    };
}

