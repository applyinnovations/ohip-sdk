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
import type { RestrictionSetType } from './RestrictionSetType';
import {
    RestrictionSetTypeFromJSON,
    RestrictionSetTypeFromJSONTyped,
    RestrictionSetTypeToJSON,
} from './RestrictionSetType';

/**
 * Restriction by date range for the requested Hotel.
 * @export
 * @interface RestrictionsByDateRangeType
 */
export interface RestrictionsByDateRangeType {
    /**
     * The code that identifies a hotel chain or management group. The hotel chain code is decided between vendors. This attribute is optional if the hotel is an independent property that can be identified by the HotelCode attribute.
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    chainCode?: string;
    /**
     * The name of the hotel chain (e.g., Hilton, Marriott, Hyatt).
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    chainName?: string;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof RestrictionsByDateRangeType
     */
    count?: number;
    /**
     * Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response.
     * @type {boolean}
     * @memberof RestrictionsByDateRangeType
     */
    hasMore?: boolean;
    /**
     * The IATA city code; for example DCA, ORD.
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    hotelCityCode?: string;
    /**
     * A text field used to communicate the context (or source of - ex Sabre, Galileo, Worldspan, Amadeus) the HotelReferenceGroup codes.
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    hotelCodeContext?: string;
    /**
     * The code that uniquely identifies a single hotel property. The hotel code is decided between vendors.
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    hotelId?: string;
    /**
     * A text field used to communicate the proper name of the hotel.
     * @type {string}
     * @memberof RestrictionsByDateRangeType
     */
    hotelName?: string;
    /**
     * Restriction set for a date range.
     * @type {Array<RestrictionSetType>}
     * @memberof RestrictionsByDateRangeType
     */
    restrictionSets?: Array<RestrictionSetType>;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof RestrictionsByDateRangeType
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the RestrictionsByDateRangeType interface.
 */
export function instanceOfRestrictionsByDateRangeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RestrictionsByDateRangeTypeFromJSON(json: any): RestrictionsByDateRangeType {
    return RestrictionsByDateRangeTypeFromJSONTyped(json, false);
}

export function RestrictionsByDateRangeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RestrictionsByDateRangeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chainCode': !exists(json, 'chainCode') ? undefined : json['chainCode'],
        'chainName': !exists(json, 'chainName') ? undefined : json['chainName'],
        'count': !exists(json, 'count') ? undefined : json['count'],
        'hasMore': !exists(json, 'hasMore') ? undefined : json['hasMore'],
        'hotelCityCode': !exists(json, 'hotelCityCode') ? undefined : json['hotelCityCode'],
        'hotelCodeContext': !exists(json, 'hotelCodeContext') ? undefined : json['hotelCodeContext'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'restrictionSets': !exists(json, 'restrictionSets') ? undefined : ((json['restrictionSets'] as Array<any>).map(RestrictionSetTypeFromJSON)),
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function RestrictionsByDateRangeTypeToJSON(value?: RestrictionsByDateRangeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chainCode': value.chainCode,
        'chainName': value.chainName,
        'count': value.count,
        'hasMore': value.hasMore,
        'hotelCityCode': value.hotelCityCode,
        'hotelCodeContext': value.hotelCodeContext,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'restrictionSets': value.restrictionSets === undefined ? undefined : ((value.restrictionSets as Array<any>).map(RestrictionSetTypeToJSON)),
        'totalResults': value.totalResults,
    };
}
