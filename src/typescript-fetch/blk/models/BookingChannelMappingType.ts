/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * 
 * @export
 * @interface BookingChannelMappingType
 */
export interface BookingChannelMappingType {
    /**
     * 
     * @type {string}
     * @memberof BookingChannelMappingType
     */
    bookingChannelCode?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingChannelMappingType
     */
    code?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingChannelMappingType
     */
    description?: string;
    /**
     * 
     * @type {string}
     * @memberof BookingChannelMappingType
     */
    name?: string;
}

/**
 * Check if a given object implements the BookingChannelMappingType interface.
 */
export function instanceOfBookingChannelMappingType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BookingChannelMappingTypeFromJSON(json: any): BookingChannelMappingType {
    return BookingChannelMappingTypeFromJSONTyped(json, false);
}

export function BookingChannelMappingTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BookingChannelMappingType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bookingChannelCode': !exists(json, 'bookingChannelCode') ? undefined : json['bookingChannelCode'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function BookingChannelMappingTypeToJSON(value?: BookingChannelMappingType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bookingChannelCode': value.bookingChannelCode,
        'code': value.code,
        'description': value.description,
        'name': value.name,
    };
}

