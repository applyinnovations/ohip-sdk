/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { ParityRoomRateType } from './ParityRoomRateType';
import {
    ParityRoomRateTypeFromJSON,
    ParityRoomRateTypeFromJSONTyped,
    ParityRoomRateTypeToJSON,
} from './ParityRoomRateType';

/**
 * Channels and Property Group wise Rates for Room Type and Rate Plan combination.
 * @export
 * @interface ParityGroupType
 */
export interface ParityGroupType {
    /**
     * The code that identifies a Booking Channel.
     * @type {string}
     * @memberof ParityGroupType
     */
    bookingChannelCode?: string;
    /**
     * 
     * @type {string}
     * @memberof ParityGroupType
     */
    bookingChannelIconURL?: string;
    /**
     * 
     * @type {string}
     * @memberof ParityGroupType
     */
    bookingChannelURL?: string;
    /**
     * The code that identifies a Hotel.
     * @type {string}
     * @memberof ParityGroupType
     */
    hotelId?: string;
    /**
     * Room Type and Rate Plan combination.
     * @type {Array<ParityRoomRateType>}
     * @memberof ParityGroupType
     */
    parityRoomRates?: Array<ParityRoomRateType>;
}

/**
 * Check if a given object implements the ParityGroupType interface.
 */
export function instanceOfParityGroupType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ParityGroupTypeFromJSON(json: any): ParityGroupType {
    return ParityGroupTypeFromJSONTyped(json, false);
}

export function ParityGroupTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ParityGroupType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'bookingChannelIconURL': !exists(json, 'bookingChannelIconURL') ? undefined : json['bookingChannelIconURL'],
        'bookingChannelURL': !exists(json, 'bookingChannelURL') ? undefined : json['bookingChannelURL'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'parityRoomRates': !exists(json, 'parityRoomRates') ? undefined : ((json['parityRoomRates'] as Array<any>).map(ParityRoomRateTypeFromJSON)),
    };
}

export function ParityGroupTypeToJSON(value?: ParityGroupType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'bookingChannelIconURL': value.bookingChannelIconURL,
        'bookingChannelURL': value.bookingChannelURL,
        'hotelId': value.hotelId,
        'parityRoomRates': value.parityRoomRates === undefined ? undefined : ((value.parityRoomRates as Array<any>).map(ParityRoomRateTypeToJSON)),
    };
}

