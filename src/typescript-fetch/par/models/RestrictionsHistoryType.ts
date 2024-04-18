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
import type { RestrictionSetHistoryType } from './RestrictionSetHistoryType';
import {
    RestrictionSetHistoryTypeFromJSON,
    RestrictionSetHistoryTypeFromJSONTyped,
    RestrictionSetHistoryTypeToJSON,
} from './RestrictionSetHistoryType';

/**
 * Restriction history for the requested Hotel.
 * @export
 * @interface RestrictionsHistoryType
 */
export interface RestrictionsHistoryType {
    /**
     * The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    chainCode?: string;
    /**
     * The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    chainName?: string;
    /**
     * The IATA city code; for example DCA, ORD.
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    hotelCityCode?: string;
    /**
     * A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    hotelCodeContext?: string;
    /**
     * The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof RestrictionsHistoryType
     */
    hotelName?: string;
    /**
     * Restriction set for a date range.
     * @type {Array<RestrictionSetHistoryType>}
     * @memberof RestrictionsHistoryType
     */
    restrictionSets?: Array<RestrictionSetHistoryType>;
}

/**
 * Check if a given object implements the RestrictionsHistoryType interface.
 */
export function instanceOfRestrictionsHistoryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RestrictionsHistoryTypeFromJSON(json: any): RestrictionsHistoryType {
    return RestrictionsHistoryTypeFromJSONTyped(json, false);
}

export function RestrictionsHistoryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionsHistoryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !exists(json, 'chainName') ? undefined : json['chainName'],
        'hotelCityCode': !exists(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !exists(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'restrictionSets': !exists(json, 'restrictionSets') ? undefined : ((json['restrictionSets'] as Array<any>).map(RestrictionSetHistoryTypeFromJSON)),
    };
}

export function RestrictionsHistoryTypeToJSON(value?: RestrictionsHistoryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'restrictionSets': value.restrictionSets === undefined ? undefined : ((value.restrictionSets as Array<any>).map(RestrictionSetHistoryTypeToJSON)),
    };
}
