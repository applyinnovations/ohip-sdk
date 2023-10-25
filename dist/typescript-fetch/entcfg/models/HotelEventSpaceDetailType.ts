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
 * The detail info of hotel event space
 * @export
 * @interface HotelEventSpaceDetailType
 */
export interface HotelEventSpaceDetailType {
    /**
     * The code of hotel event space.
     * @type {string}
     * @memberof HotelEventSpaceDetailType
     */
    code?: string;
    /**
     * Th description of the hotel event space
     * @type {string}
     * @memberof HotelEventSpaceDetailType
     */
    description?: string;
    /**
     * Th max capacity of the hotel event space
     * @type {number}
     * @memberof HotelEventSpaceDetailType
     */
    maxCapacity?: number;
    /**
     * List of event space max occupancy.
     * @type {Array<number>}
     * @memberof HotelEventSpaceDetailType
     */
    maxOccupancies?: Array<number>;
}

/**
 * Check if a given object implements the HotelEventSpaceDetailType interface.
 */
export function instanceOfHotelEventSpaceDetailType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelEventSpaceDetailTypeFromJSON(json: any): HotelEventSpaceDetailType {
    return HotelEventSpaceDetailTypeFromJSONTyped(json, false);
}

export function HotelEventSpaceDetailTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelEventSpaceDetailType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'maxCapacity': !exists(json, 'maxCapacity') ? undefined : json['maxCapacity'],
        'maxOccupancies': !exists(json, 'maxOccupancies') ? undefined : json['maxOccupancies'],
    };
}

export function HotelEventSpaceDetailTypeToJSON(value?: HotelEventSpaceDetailType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'maxCapacity': value.maxCapacity,
        'maxOccupancies': value.maxOccupancies,
    };
}

