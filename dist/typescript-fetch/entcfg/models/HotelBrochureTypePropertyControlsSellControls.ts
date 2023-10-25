/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface HotelBrochureTypePropertyControlsSellControls
 */
export interface HotelBrochureTypePropertyControlsSellControls {
    /**
     * The end date of the hotel.
     * @type {Date}
     * @memberof HotelBrochureTypePropertyControlsSellControls
     */
    endDate?: Date;
    /**
     * The hotel code.
     * @type {string}
     * @memberof HotelBrochureTypePropertyControlsSellControls
     */
    hotelId?: string;
    /**
     * Date when the hotel become valid for use.
     * @type {Date}
     * @memberof HotelBrochureTypePropertyControlsSellControls
     */
    startDate?: Date;
}

/**
 * Check if a given object implements the HotelBrochureTypePropertyControlsSellControls interface.
 */
export function instanceOfHotelBrochureTypePropertyControlsSellControls(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelBrochureTypePropertyControlsSellControlsFromJSON(json: any): HotelBrochureTypePropertyControlsSellControls {
    return HotelBrochureTypePropertyControlsSellControlsFromJSONTyped(json, false);
}

export function HotelBrochureTypePropertyControlsSellControlsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelBrochureTypePropertyControlsSellControls {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'endDate': !exists(json, 'endDate') ? undefined : (new Date(json['endDate'])),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'startDate': !exists(json, 'startDate') ? undefined : (new Date(json['startDate'])),
    };
}

export function HotelBrochureTypePropertyControlsSellControlsToJSON(value?: HotelBrochureTypePropertyControlsSellControls | null): any {
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

