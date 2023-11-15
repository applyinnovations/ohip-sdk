/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
     * The postal barcode for the address.
     * @type {string}
     * @memberof AddressType
     */
    barCode?: string;
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
     * Time stamp of the creation.
     * @type {string}
     * @memberof AddressType
     */
    createDateTime?: string;
    /**
     * ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation.
     * @type {string}
     * @memberof AddressType
     */
    creatorId?: string;
    /**
     * Indicator to define if the Address is validated by the Address Validation System.
     * @type {boolean}
     * @memberof AddressType
     */
    isValidated?: boolean;
    /**
     * Language identification.
     * @type {string}
     * @memberof AddressType
     */
    language?: string;
    /**
     * Identifies the last software system or person to modify a record.
     * @type {string}
     * @memberof AddressType
     */
    lastModifierId?: string;
    /**
     * Time stamp of last modification.
     * @type {string}
     * @memberof AddressType
     */
    lastModifyDateTime?: string;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof AddressType
     */
    postalCode?: string;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof AddressType
     */
    primaryInd?: boolean;
    /**
     * Date an item will be purged from a database (e.g., from a live database to an archive).
     * @type {string}
     * @memberof AddressType
     */
    purgeDate?: string;
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
    /**
     * Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address.
     * @type {boolean}
     * @memberof AddressType
     */
    updateReservations?: boolean;
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
        'barCode': !exists(json, 'barCode') ? undefined : json['barCode'],
        'cityExtension': !exists(json, 'cityExtension') ? undefined : json['cityExtension'],
        'cityName': !exists(json, 'cityName') ? undefined : json['cityName'],
        'country': !exists(json, 'country') ? undefined : CountryNameTypeFromJSON(json['country']),
        'county': !exists(json, 'county') ? undefined : json['county'],
        'createDateTime': !exists(json, 'createDateTime') ? undefined : json['createDateTime'],
        'creatorId': !exists(json, 'creatorId') ? undefined : json['creatorId'],
        'isValidated': !exists(json, 'isValidated') ? undefined : json['isValidated'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'lastModifierId': !exists(json, 'lastModifierId') ? undefined : json['lastModifierId'],
        'lastModifyDateTime': !exists(json, 'lastModifyDateTime') ? undefined : json['lastModifyDateTime'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'purgeDate': !exists(json, 'purgeDate') ? undefined : json['purgeDate'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'typeDescription': !exists(json, 'typeDescription') ? undefined : json['typeDescription'],
        'updateReservations': !exists(json, 'updateReservations') ? undefined : json['updateReservations'],
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
        'barCode': value.barCode,
        'cityExtension': value.cityExtension,
        'cityName': value.cityName,
        'country': CountryNameTypeToJSON(value.country),
        'county': value.county,
        'createDateTime': value.createDateTime,
        'creatorId': value.creatorId,
        'isValidated': value.isValidated,
        'language': value.language,
        'lastModifierId': value.lastModifierId,
        'lastModifyDateTime': value.lastModifyDateTime,
        'postalCode': value.postalCode,
        'primaryInd': value.primaryInd,
        'purgeDate': value.purgeDate,
        'state': value.state,
        'type': value.type,
        'typeDescription': value.typeDescription,
        'updateReservations': value.updateReservations,
    };
}

