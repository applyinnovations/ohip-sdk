/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management API
 * APIs to cater for Customer Relationship Management (profile) functionality in OPERA Cloud.  There are different types of profiles in OPERA Cloud, including Guest, Company, Travel Agent, Source, Group, and Contact profile types.  A profile can store and display a wide range of information about the guest, company, travel agent etc., depending upon the type of profile.  For example, a guest profile can store the guest name, address, contact information, details on billing, membership benefits, preferences and much more.  All profiles in OPERA when created are assigned a ProfileID.  This ID will be used throughout the CRM APIs.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Type provides the hotel stay information.
 * @export
 * @interface HotelStayType
 */
export interface HotelStayType {
    /**
     * Guest arrival date.
     * @type {string}
     * @memberof HotelStayType
     */
    arrivalDate?: string;
    /**
     * Hotel Name.
     * @type {string}
     * @memberof HotelStayType
     */
    hotelName?: string;
    /**
     * Points or Miles.
     * @type {string}
     * @memberof HotelStayType
     */
    pointsMiles?: string;
    /**
     * Guest stay points or miles earned
     * @type {string}
     * @memberof HotelStayType
     */
    pointsMilesEarned?: string;
}

/**
 * Check if a given object implements the HotelStayType interface.
 */
export function instanceOfHotelStayType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelStayTypeFromJSON(json: any): HotelStayType {
    return HotelStayTypeFromJSONTyped(json, false);
}

export function HotelStayTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelStayType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arrivalDate': !exists(json, 'arrivalDate') ? undefined : json['arrivalDate'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'pointsMiles': !exists(json, 'pointsMiles') ? undefined : json['pointsMiles'],
        'pointsMilesEarned': !exists(json, 'pointsMilesEarned') ? undefined : json['pointsMilesEarned'],
    };
}

export function HotelStayTypeToJSON(value?: HotelStayType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arrivalDate': value.arrivalDate,
        'hotelName': value.hotelName,
        'pointsMiles': value.pointsMiles,
        'pointsMilesEarned': value.pointsMilesEarned,
    };
}

