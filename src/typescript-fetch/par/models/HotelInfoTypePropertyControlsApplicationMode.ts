/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Application Mode information configuration of the hotel.
 * @export
 * @interface HotelInfoTypePropertyControlsApplicationMode
 */
export interface HotelInfoTypePropertyControlsApplicationMode {
    /**
     * The hotel's configuration mode if applicable.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsApplicationMode
     */
    configurationMode?: string;
    /**
     * The hotel's country code.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsApplicationMode
     */
    countryMode?: string;
    /**
     * Hotel Code used for third party exports.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsApplicationMode
     */
    expHotelCode?: string;
    /**
     * Indicates if the hotel uses MBS (Marriott Business Services).
     * @type {boolean}
     * @memberof HotelInfoTypePropertyControlsApplicationMode
     */
    mBSSupported?: boolean;
    /**
     * The Tourist Number of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePropertyControlsApplicationMode
     */
    touristNumber?: string;
}

/**
 * Check if a given object implements the HotelInfoTypePropertyControlsApplicationMode interface.
 */
export function instanceOfHotelInfoTypePropertyControlsApplicationMode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypePropertyControlsApplicationModeFromJSON(json: any): HotelInfoTypePropertyControlsApplicationMode {
    return HotelInfoTypePropertyControlsApplicationModeFromJSONTyped(json, false);
}

export function HotelInfoTypePropertyControlsApplicationModeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypePropertyControlsApplicationMode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'configurationMode': !exists(json, 'configurationMode') ? undefined : json['configurationMode'],
        'countryMode': !exists(json, 'countryMode') ? undefined : json['countryMode'],
        'expHotelCode': !exists(json, 'expHotelCode') ? undefined : json['expHotelCode'],
        'mBSSupported': !exists(json, 'mBSSupported') ? undefined : json['mBSSupported'],
        'touristNumber': !exists(json, 'touristNumber') ? undefined : json['touristNumber'],
    };
}

export function HotelInfoTypePropertyControlsApplicationModeToJSON(value?: HotelInfoTypePropertyControlsApplicationMode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configurationMode': value.configurationMode,
        'countryMode': value.countryMode,
        'expHotelCode': value.expHotelCode,
        'mBSSupported': value.mBSSupported,
        'touristNumber': value.touristNumber,
    };
}
