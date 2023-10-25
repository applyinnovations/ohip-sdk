/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Block API
 * APIs to cater for Business Block functionality in OPERA Cloud. <br /><br /> A block is a group of rooms held for guests who are attending an event, meeting, or function. You can create blocks for family reunions, business conferences, weddings, and so on. You can also set aside rooms for the event (block).<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';

/**
 * Address Details such as city, state, country, postal code etc.
 * @export
 * @interface AddressSearchType
 */
export interface AddressSearchType {
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof AddressSearchType
     */
    cityName?: string;
    /**
     * 
     * @type {CountryNameType}
     * @memberof AddressSearchType
     */
    country?: CountryNameType;
    /**
     * When true indicates that only profiles with city will be fetched.
     * @type {boolean}
     * @memberof AddressSearchType
     */
    excludeNoCity?: boolean;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof AddressSearchType
     */
    postalCode?: string;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof AddressSearchType
     */
    state?: string;
    /**
     * First Line of Street Address. For profile search it matches the first Address line.
     * @type {string}
     * @memberof AddressSearchType
     */
    streetAddress?: string;
}

/**
 * Check if a given object implements the AddressSearchType interface.
 */
export function instanceOfAddressSearchType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressSearchTypeFromJSON(json: any): AddressSearchType {
    return AddressSearchTypeFromJSONTyped(json, false);
}

export function AddressSearchTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressSearchType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cityName': !exists(json, 'cityName') ? undefined : json['cityName'],
        'country': !exists(json, 'country') ? undefined : CountryNameTypeFromJSON(json['country']),
        'excludeNoCity': !exists(json, 'excludeNoCity') ? undefined : json['excludeNoCity'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'streetAddress': !exists(json, 'streetAddress') ? undefined : json['streetAddress'],
    };
}

export function AddressSearchTypeToJSON(value?: AddressSearchType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cityName': value.cityName,
        'country': CountryNameTypeToJSON(value.country),
        'excludeNoCity': value.excludeNoCity,
        'postalCode': value.postalCode,
        'state': value.state,
        'streetAddress': value.streetAddress,
    };
}

