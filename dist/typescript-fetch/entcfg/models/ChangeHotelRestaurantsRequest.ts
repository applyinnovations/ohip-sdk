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
import type { HotelRestaurantType } from './HotelRestaurantType';
import {
    HotelRestaurantTypeFromJSON,
    HotelRestaurantTypeFromJSONTyped,
    HotelRestaurantTypeToJSON,
} from './HotelRestaurantType';
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface ChangeHotelRestaurantsRequest
 */
export interface ChangeHotelRestaurantsRequest {
    /**
     * 
     * @type {Array<HotelRestaurantType>}
     * @memberof ChangeHotelRestaurantsRequest
     */
    hotelRestaurants?: Array<HotelRestaurantType>;
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof ChangeHotelRestaurantsRequest
     */
    links?: Array<InstanceLink>;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof ChangeHotelRestaurantsRequest
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the ChangeHotelRestaurantsRequest interface.
 */
export function instanceOfChangeHotelRestaurantsRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeHotelRestaurantsRequestFromJSON(json: any): ChangeHotelRestaurantsRequest {
    return ChangeHotelRestaurantsRequestFromJSONTyped(json, false);
}

export function ChangeHotelRestaurantsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeHotelRestaurantsRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelRestaurants': !exists(json, 'hotelRestaurants') ? undefined : ((json['hotelRestaurants'] as Array<any>).map(HotelRestaurantTypeFromJSON)),
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function ChangeHotelRestaurantsRequestToJSON(value?: ChangeHotelRestaurantsRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelRestaurants': value.hotelRestaurants === undefined ? undefined : ((value.hotelRestaurants as Array<any>).map(HotelRestaurantTypeToJSON)),
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

