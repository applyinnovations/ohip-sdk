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
/**
 * The sell controls information configuration of the hotel.
 * @export
 * @interface HotelInfoTypePropertyControlsSellControls
 */
export interface HotelInfoTypePropertyControlsSellControls {
    /**
     * The end date of the hotel.
     * @type {Date}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    endDate?: Date;
    /**
     * The hotel code.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    hotelId?: string;
    /**
     * Date when the hotel become valid for use.
     * @type {Date}
     * @memberof HotelInfoTypePropertyControlsSellControls
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the HotelInfoTypePropertyControlsSellControls interface.
 */
export function instanceOfHotelInfoTypePropertyControlsSellControls(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypePropertyControlsSellControlsFromJSON(json: any): HotelInfoTypePropertyControlsSellControls {
    return HotelInfoTypePropertyControlsSellControlsFromJSONTyped(json, false);
}

export function HotelInfoTypePropertyControlsSellControlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypePropertyControlsSellControls {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function HotelInfoTypePropertyControlsSellControlsToJSON(value?: HotelInfoTypePropertyControlsSellControls | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'endDate': value.endDate === undefined ? undefined : (value.endDate.toISOString().substr(0,10)),
        'hotelId': value.hotelId,
        'startDate': value.startDate === undefined ? undefined : (value.startDate.toISOString().substr(0,10)),
    };
}

