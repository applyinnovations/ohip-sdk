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
import type { CountryNameType } from './CountryNameType';
import {
    CountryNameTypeFromJSON,
    CountryNameTypeFromJSONTyped,
    CountryNameTypeToJSON,
} from './CountryNameType';

/**
 * Provides address information.
 * @export
 * @interface HotelInfoTypeAddress
 */
export interface HotelInfoTypeAddress {
    /**
     * Indicator to define if the Address is validated by the Address Validation System.
     * @type {boolean}
     * @memberof HotelInfoTypeAddress
     */
    isValidated?: boolean;
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @type {Array<string>}
     * @memberof HotelInfoTypeAddress
     */
    addressLine?: Array<string>;
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    cityName?: string;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    postalCode?: string;
    /**
     * Post Office City Extension Code number. City Extension mainly used for UK addresses.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    cityExtension?: string;
    /**
     * County or District Name (e.g., Fairfax). This is read only.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    county?: string;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    state?: string;
    /**
     * 
     * @type {CountryNameType}
     * @memberof HotelInfoTypeAddress
     */
    country?: CountryNameType;
    /**
     * Language identification.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    language?: string;
    /**
     * Defines the type of address (e.g. home, business, other).
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    type?: string;
    /**
     * Describes the type code
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    typeDescription?: string;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof HotelInfoTypeAddress
     */
    primaryInd?: boolean;
    /**
     * Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address.
     * @type {boolean}
     * @memberof HotelInfoTypeAddress
     */
    updateReservations?: boolean;
    /**
     * The postal barcode for the address.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    barCode?: string;
    /**
     * Time stamp of the creation.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    creatorId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    lastModifyDateTime?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    lastModifierId?: string;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    purgeDate?: string;
    /**
     * The region code of the hotel.
     * @type {string}
     * @memberof HotelInfoTypeAddress
     */
    regionCode?: string;
}

/**
 * Check if a given object implements the HotelInfoTypeAddress interface.
 */
export function instanceOfHotelInfoTypeAddress(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypeAddressFromJSON(json: any): HotelInfoTypeAddress {
    return HotelInfoTypeAddressFromJSONTyped(json, false);
}

export function HotelInfoTypeAddressFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypeAddress {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'isValidated': !exists(json, 'isValidated') ? undefined : json['isValidated'],
        'addressLine': !exists(json, 'addressLine') ? undefined : json['addressLine'],
        'cityName': !exists(json, 'cityName') ? undefined : json['cityName'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'cityExtension': !exists(json, 'cityExtension') ? undefined : json['cityExtension'],
        'county': !exists(json, 'county') ? undefined : json['county'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'country': !exists(json, 'country') ? undefined : CountryNameTypeFromJSON(json['country']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'updateReservations': !exists(json, 'updateReservations') ? undefined : json['updateReservations'],
        'barCode': !exists(json, 'barCode') ? undefined : json['barCode'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
    };
}

export function HotelInfoTypeAddressToJSON(value?: HotelInfoTypeAddress | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'isValidated': value.isValidated,
        'addressLine': value.addressLine,
        'cityName': value.cityName,
        'postalCode': value.postalCode,
        'cityExtension': value.cityExtension,
        'county': value.county,
        'state': value.state,
        'country': CountryNameTypeToJSON(value.country),
        'language': value.language,
        'type': value.type,
        'typeDescription': value.typeDescription,
        'primaryInd': value.primaryInd,
        'updateReservations': value.updateReservations,
        'barCode': value.barCode,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'lastModifierId': value.lastModifierId,
        'purgeDate': value.purgeDate,
        'regionCode': value.regionCode,
    };
}
