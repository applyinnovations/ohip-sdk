/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Enterprise Configuration API
 * APIs to cater for Enterprise Configuration functionality in OPERA Cloud. <br /><br In this module, you can configure a variety of options related to your properties such as their locations, facilities, and local attractions. The available options are dependant on the active controls at your property.<br /><br /> Compatible with OPERA Cloud release 23.4.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.4
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * Base details of the marketing city.
 * @export
 * @interface MarketingCityConfigType
 */
export interface MarketingCityConfigType {
    /**
     * Description of the marketing city.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    description?: string;
    /**
     * Distance from the hotel to the marketing city.
     * @type {number}
     * @memberof MarketingCityConfigType
     */
    distance?: number;
    /**
     * Unit of distance for the Distance measurement.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    distanceType?: string;
    /**
     * Driving time from the hotel to the marketing city.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    drivingTime?: string;
    /**
     * Direction of the marketing city in relation to the hotel.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    direction?: string;
    /**
     * Sequence number for displaying the marketing city.
     * @type {number}
     * @memberof MarketingCityConfigType
     */
    sequence?: number;
    /**
     * Flag to indicate whether the marketing city is inactive or not.
     * @type {boolean}
     * @memberof MarketingCityConfigType
     */
    inactive?: boolean;
    /**
     * Marketing city code.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    marketingCity?: string;
    /**
     * Region that the marketing city belongs to.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    regionCode?: string;
    /**
     * Hotel the marketing city belongs to.
     * @type {string}
     * @memberof MarketingCityConfigType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the MarketingCityConfigType interface.
 */
export function instanceOfMarketingCityConfigType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function MarketingCityConfigTypeFromJSON(json: any): MarketingCityConfigType {
    return MarketingCityConfigTypeFromJSONTyped(json, false);
}

export function MarketingCityConfigTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): MarketingCityConfigType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'description': !exists(json, 'description') ? undefined : json['description'],
        'distance': !exists(json, 'distance') ? undefined : json['distance'],
        'distanceType': !exists(json, 'distanceType') ? undefined : json['distanceType'],
        'drivingTime': !exists(json, 'drivingTime') ? undefined : json['drivingTime'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'marketingCity': !exists(json, 'marketingCity') ? undefined : json['marketingCity'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function MarketingCityConfigTypeToJSON(value?: MarketingCityConfigType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'description': value.description,
        'distance': value.distance,
        'distanceType': value.distanceType,
        'drivingTime': value.drivingTime,
        'direction': value.direction,
        'sequence': value.sequence,
        'inactive': value.inactive,
        'marketingCity': value.marketingCity,
        'regionCode': value.regionCode,
        'hotelId': value.hotelId,
    };
}

