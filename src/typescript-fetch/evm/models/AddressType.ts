/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Provides address information.
 * @export
 * @interface AddressType
 */
export interface AddressType {
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @type {Array<string>}
     * @memberof AddressType
     */
    addressLine?: Array<string>;
    /**
     * Post Office City Extension Code number. City Extension mainly used for UK addresses.
     * @type {string}
     * @memberof AddressType
     */
    cityExtension?: string;
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof AddressType
     */
    cityName?: string;
    /**
     * 
     * @type {CountryNameType}
     * @memberof AddressType
     */
    country?: CountryNameType;
    /**
     * County or District Name (e.g., Fairfax). This is read only.
     * @type {string}
     * @memberof AddressType
     */
    county?: string;
    /**
     * Indicator to define if the Address is validated by the Address Validation System.
     * @type {boolean}
     * @memberof AddressType
     */
    isValidated?: boolean;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof AddressType
     */
    postalCode?: string;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof AddressType
     */
    state?: string;
    /**
     * Defines the type of address (e.g. home, business, other).
     * @type {string}
     * @memberof AddressType
     */
    type?: string;
    /**
     * Describes the type code
     * @type {string}
     * @memberof AddressType
     */
    typeDescription?: string;
}

/**
 * Check if a given object implements the AddressType interface.
 */
export function instanceOfAddressType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AddressTypeFromJSON(json: any): AddressType {
    return AddressTypeFromJSONTyped(json, false);
}

export function AddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AddressType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressLine': !exists(json, 'addressLine') ? undefined : json['addressLine'],
        'cityExtension': !exists(json, 'cityExtension') ? undefined : json['cityExtension'],
        'cityName': !exists(json, 'cityName') ? undefined : json['cityName'],
        'country': !exists(json, 'country') ? undefined : CountryNameTypeFromJSON(json['country']),
        'county': !exists(json, 'county') ? undefined : json['county'],
        'isValidated': !exists(json, 'isValidated') ? undefined : json['isValidated'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
    };
}

export function AddressTypeToJSON(value?: AddressType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressLine': value.addressLine,
        'cityExtension': value.cityExtension,
        'cityName': value.cityName,
        'country': CountryNameTypeToJSON(value.country),
        'county': value.county,
        'isValidated': value.isValidated,
        'postalCode': value.postalCode,
        'state': value.state,
        'type': value.type,
        'typeDescription': value.typeDescription,
    };
}
