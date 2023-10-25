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
 * Primary Information of the hotel.
 * @export
 * @interface HotelInfoTypePrimaryDetails
 */
export interface HotelInfoTypePrimaryDetails {
    /**
     * Legal owner of the hotel.
     * @type {string}
     * @memberof HotelInfoTypePrimaryDetails
     */
    legalOwner?: string;
}

/**
 * Check if a given object implements the HotelInfoTypePrimaryDetails interface.
 */
export function instanceOfHotelInfoTypePrimaryDetails(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypePrimaryDetailsFromJSON(json: any): HotelInfoTypePrimaryDetails {
    return HotelInfoTypePrimaryDetailsFromJSONTyped(json, false);
}

export function HotelInfoTypePrimaryDetailsFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypePrimaryDetails {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'legalOwner': !exists(json, 'legalOwner') ? undefined : json['legalOwner'],
    };
}

export function HotelInfoTypePrimaryDetailsToJSON(value?: HotelInfoTypePrimaryDetails | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'legalOwner': value.legalOwner,
    };
}

