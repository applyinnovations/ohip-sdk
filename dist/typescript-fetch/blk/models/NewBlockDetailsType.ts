/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DateRangeType } from './DateRangeType';
import {
    DateRangeTypeFromJSON,
    DateRangeTypeFromJSONTyped,
    DateRangeTypeToJSON,
} from './DateRangeType';

/**
 * This is used when creating a copy of a block.
 * @export
 * @interface NewBlockDetailsType
 */
export interface NewBlockDetailsType {
    /**
     * Stores the value for no of attendees.
     * @type {number}
     * @memberof NewBlockDetailsType
     */
    attendees?: number;
    /**
     * The block code of the new block.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    blockCode?: string;
    /**
     * 
     * @type {DateRangeType}
     * @memberof NewBlockDetailsType
     */
    blockDatesRange?: DateRangeType;
    /**
     * Origin information of the block PMS/ORS/SC/SFA
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    blockOrigin?: string;
    /**
     * The booking status of the new block.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    blockStatus?: string;
    /**
     * The value in this field will be applied as the catering status of the new Block and all its events.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    cateringStatus?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof NewBlockDetailsType
     */
    gridCategory?: Array<string>;
    /**
     * This is the source grid type, like Original, Current, Pickup, which will be copied to the target Business Block.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    gridType?: string;
    /**
     * The hotel code of the new block.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    hotelId?: string;
    /**
     * This is used to pass the market code when a block copy is done to a different property.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    marketCode?: string;
    /**
     * This is used to pass the Source code when a block copy is done to a different property.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    rateCode?: string;
    /**
     * This is used to pass the Source code when a block copy is done to a different property.
     * @type {string}
     * @memberof NewBlockDetailsType
     */
    sourceCode?: string;
    /**
     * 
     * @type {DateRangeType}
     * @memberof NewBlockDetailsType
     */
    sourceDateRangeToCopy?: DateRangeType;
    /**
     * The start date of the new block.
     * @type {Date}
     * @memberof NewBlockDetailsType
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the NewBlockDetailsType interface.
 */
export function instanceOfNewBlockDetailsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NewBlockDetailsTypeFromJSON(json: any): NewBlockDetailsType {
    return NewBlockDetailsTypeFromJSONTyped(json, false);
}

export function NewBlockDetailsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NewBlockDetailsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attendees': !exists(json, 'attendees') ? undefined : json['attendees'],
        'blockCode': !exists(json, 'blockCode') ? undefined : json['blockCode'],
        'blockDatesRange': !exists(json, 'blockDatesRange') ? undefined : DateRangeTypeFromJSON(json['blockDatesRange']),
        'blockOrigin': !exists(json, 'blockOrigin') ? undefined : json['blockOrigin'],
        'blockStatus': !exists(json, 'blockStatus') ? undefined : json['blockStatus'],
        'cateringStatus': !exists(json, 'cateringStatus') ? undefined : json['cateringStatus'],
        'gridCategory': !exists(json, 'gridCategory') ? undefined : json['gridCategory'],
        'gridType': !exists(json, 'gridType') ? undefined : json['gridType'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'marketCode': !exists(json, 'marketCode') ? undefined : json['marketCode'],
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceDateRangeToCopy': !exists(json, 'sourceDateRangeToCopy') ? undefined : DateRangeTypeFromJSON(json['sourceDateRangeToCopy']),
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function NewBlockDetailsTypeToJSON(value?: NewBlockDetailsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attendees': value.attendees,
        'blockCode': value.blockCode,
        'blockDatesRange': DateRangeTypeToJSON(value.blockDatesRange),
        'blockOrigin': value.blockOrigin,
        'blockStatus': value.blockStatus,
        'cateringStatus': value.cateringStatus,
        'gridCategory': value.gridCategory,
        'gridType': value.gridType,
        'hotelId': value.hotelId,
        'marketCode': value.marketCode,
        'rateCode': value.rateCode,
        'sourceCode': value.sourceCode,
        'sourceDateRangeToCopy': DateRangeTypeToJSON(value.sourceDateRangeToCopy),
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

