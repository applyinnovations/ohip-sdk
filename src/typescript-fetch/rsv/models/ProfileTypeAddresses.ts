/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { AddressInfoType } from './AddressInfoType';
import {
    AddressInfoTypeFromJSON,
    AddressInfoTypeFromJSONTyped,
    AddressInfoTypeToJSON,
} from './AddressInfoType';

/**
 * List of customer addresses.
 * @export
 * @interface ProfileTypeAddresses
 */
export interface ProfileTypeAddresses {
    /**
     * Collection of Detailed information on an address for the customer.
     * @type {Array<AddressInfoType>}
     * @memberof ProfileTypeAddresses
     */
    addressInfo?: Array<AddressInfoType>;
    /**
     * Total number of rows returned
     * @type {number}
     * @memberof ProfileTypeAddresses
     */
    count?: number;
    /**
     * Total number of rows queried
     * @type {number}
     * @memberof ProfileTypeAddresses
     */
    totalResults?: number;
}

/**
 * Check if a given object implements the ProfileTypeAddresses interface.
 */
export function instanceOfProfileTypeAddresses(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProfileTypeAddressesFromJSON(json: any): ProfileTypeAddresses {
    return ProfileTypeAddressesFromJSONTyped(json, false);
}

export function ProfileTypeAddressesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProfileTypeAddresses {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressInfo': !exists(json, 'addressInfo') ? undefined : ((json['addressInfo'] as Array<any>).map(AddressInfoTypeFromJSON)),
        'count': !exists(json, 'count') ? undefined : json['count'],
        'totalResults': !exists(json, 'totalResults') ? undefined : json['totalResults'],
    };
}

export function ProfileTypeAddressesToJSON(value?: ProfileTypeAddresses | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressInfo': value.addressInfo === undefined ? undefined : ((value.addressInfo as Array<any>).map(AddressInfoTypeToJSON)),
        'count': value.count,
        'totalResults': value.totalResults,
    };
}

