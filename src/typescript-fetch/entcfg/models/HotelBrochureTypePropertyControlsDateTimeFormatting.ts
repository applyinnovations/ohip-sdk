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
 * Date Time Formatting information configuration of the hotel
 * @export
 * @interface HotelBrochureTypePropertyControlsDateTimeFormatting
 */
export interface HotelBrochureTypePropertyControlsDateTimeFormatting {
    /**
     * Long date format of the hotel.
     * @type {string}
     * @memberof HotelBrochureTypePropertyControlsDateTimeFormatting
     */
    longDateFormat?: string;
    /**
     * Short date format of the hotel.
     * @type {string}
     * @memberof HotelBrochureTypePropertyControlsDateTimeFormatting
     */
    shortDateFormat?: string;
    /**
     * Time format for the hotel.
     * @type {string}
     * @memberof HotelBrochureTypePropertyControlsDateTimeFormatting
     */
    timeFormat?: string;
    /**
     * Time zone region of the hotel.
     * @type {string}
     * @memberof HotelBrochureTypePropertyControlsDateTimeFormatting
     */
    timeZoneRegion?: string;
}

/**
 * Check if a given object implements the HotelBrochureTypePropertyControlsDateTimeFormatting interface.
 */
export function instanceOfHotelBrochureTypePropertyControlsDateTimeFormatting(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelBrochureTypePropertyControlsDateTimeFormattingFromJSON(json: any): HotelBrochureTypePropertyControlsDateTimeFormatting {
    return HotelBrochureTypePropertyControlsDateTimeFormattingFromJSONTyped(json, false);
}

export function HotelBrochureTypePropertyControlsDateTimeFormattingFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelBrochureTypePropertyControlsDateTimeFormatting {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'longDateFormat': !exists(json, 'longDateFormat') ? undefined : json['longDateFormat'],
        'shortDateFormat': !exists(json, 'shortDateFormat') ? undefined : json['shortDateFormat'],
        'timeFormat': !exists(json, 'timeFormat') ? undefined : json['timeFormat'],
        'timeZoneRegion': !exists(json, 'timeZoneRegion') ? undefined : json['timeZoneRegion'],
    };
}

export function HotelBrochureTypePropertyControlsDateTimeFormattingToJSON(value?: HotelBrochureTypePropertyControlsDateTimeFormatting | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'longDateFormat': value.longDateFormat,
        'shortDateFormat': value.shortDateFormat,
        'timeFormat': value.timeFormat,
        'timeZoneRegion': value.timeZoneRegion,
    };
}
