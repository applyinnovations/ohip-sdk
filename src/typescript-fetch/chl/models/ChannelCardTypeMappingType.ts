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
/**
 * Channel-hotel card type mapping information.
 * @export
 * @interface ChannelCardTypeMappingType
 */
export interface ChannelCardTypeMappingType {
    /**
     * Booking channel code of card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    bookingChannelCode?: string;
    /**
     * Card type of card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    cardType?: string;
    /**
     * Channel card type of card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    channelCardType?: string;
    /**
     * Hotel code of card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    hotelId?: string;
    /**
     * Inactive date of card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    inactiveDate?: string;
    /**
     * New channel card type for the existing card type mapping.
     * @type {string}
     * @memberof ChannelCardTypeMappingType
     */
    newChannelCardType?: string;
}

/**
 * Check if a given object implements the ChannelCardTypeMappingType interface.
 */
export function instanceOfChannelCardTypeMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelCardTypeMappingTypeFromJSON(json: any): ChannelCardTypeMappingType {
    return ChannelCardTypeMappingTypeFromJSONTyped(json, false);
}

export function ChannelCardTypeMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelCardTypeMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'cardType': !exists(json, 'cardType') ? undefined : json['cardType'],
        'channelCardType': !exists(json, 'channelCardType') ? undefined : json['channelCardType'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'inactiveDate': !exists(json, 'inactiveDate') ? undefined : json['inactiveDate'],
        'newChannelCardType': !exists(json, 'newChannelCardType') ? undefined : json['newChannelCardType'],
    };
}

export function ChannelCardTypeMappingTypeToJSON(value?: ChannelCardTypeMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'cardType': value.cardType,
        'channelCardType': value.channelCardType,
        'hotelId': value.hotelId,
        'inactiveDate': value.inactiveDate,
        'newChannelCardType': value.newChannelCardType,
    };
}
