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
/**
 * Provides address information for a Relationship.
 * @export
 * @interface RelationshipAddressType
 */
export interface RelationshipAddressType {
    /**
     * When the address is unformatted (FormattedInd="false") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence.
     * @type {Array<string>}
     * @memberof RelationshipAddressType
     */
    addressLine?: Array<string>;
    /**
     * City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address).
     * @type {string}
     * @memberof RelationshipAddressType
     */
    city?: string;
    /**
     * Country name (e.g., Ireland).
     * @type {string}
     * @memberof RelationshipAddressType
     */
    country?: string;
    /**
     * Post Office Code number.
     * @type {string}
     * @memberof RelationshipAddressType
     */
    postalCode?: string;
    /**
     * State or Province name (e.g., Texas).
     * @type {string}
     * @memberof RelationshipAddressType
     */
    state?: string;
}

/**
 * Check if a given object implements the RelationshipAddressType interface.
 */
export function instanceOfRelationshipAddressType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RelationshipAddressTypeFromJSON(json: any): RelationshipAddressType {
    return RelationshipAddressTypeFromJSONTyped(json, false);
}

export function RelationshipAddressTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RelationshipAddressType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'addressLine': !exists(json, 'addressLine') ? undefined : json['addressLine'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'postalCode': !exists(json, 'postalCode') ? undefined : json['postalCode'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function RelationshipAddressTypeToJSON(value?: RelationshipAddressType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'addressLine': value.addressLine,
        'city': value.city,
        'country': value.country,
        'postalCode': value.postalCode,
        'state': value.state,
    };
}

