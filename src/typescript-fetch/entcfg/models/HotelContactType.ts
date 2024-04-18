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
import type { HotelContactRoleType } from './HotelContactRoleType';
import {
    HotelContactRoleTypeFromJSON,
    HotelContactRoleTypeFromJSONTyped,
    HotelContactRoleTypeToJSON,
} from './HotelContactRoleType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Contact identification details.
 * @export
 * @interface HotelContactType
 */
export interface HotelContactType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof HotelContactType
     */
    nameId?: UniqueIDType;
    /**
     * The code of the hotel.
     * @type {string}
     * @memberof HotelContactType
     */
    hotelId?: string;
    /**
     * Name of the hotel contact.
     * @type {string}
     * @memberof HotelContactType
     */
    name?: string;
    /**
     * Lists of HotelContactRoles of the hotel.
     * @type {Array<HotelContactRoleType>}
     * @memberof HotelContactType
     */
    roles?: Array<HotelContactRoleType>;
    /**
     * The contact's code in the hotel.
     * @type {string}
     * @memberof HotelContactType
     */
    ownerCode?: string;
    /**
     * The preferred method of communication for the contact.
     * @type {string}
     * @memberof HotelContactType
     */
    communicationMethod?: string;
    /**
     * Details about the preferred communication method. Example: email address, fax number, etc.
     * @type {string}
     * @memberof HotelContactType
     */
    communicationAddress?: string;
    /**
     * Primary flag.
     * @type {boolean}
     * @memberof HotelContactType
     */
    primary?: boolean;
}

/**
 * Check if a given object implements the HotelContactType interface.
 */
export function instanceOfHotelContactType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelContactTypeFromJSON(json: any): HotelContactType {
    return HotelContactTypeFromJSONTyped(json, false);
}

export function HotelContactTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelContactType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'nameId': !exists(json, 'nameId') ? undefined : UniqueIDTypeFromJSON(json['nameId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'roles': !exists(json, 'roles') ? undefined : ((json['roles'] as Array<any>).map(HotelContactRoleTypeFromJSON)),
        'ownerCode': !exists(json, 'ownerCode') ? undefined : json['ownerCode'],
        'communicationMethod': !exists(json, 'communicationMethod') ? undefined : json['communicationMethod'],
        'communicationAddress': !exists(json, 'communicationAddress') ? undefined : json['communicationAddress'],
        'primary': !exists(json, 'primary') ? undefined : json['primary'],
    };
}

export function HotelContactTypeToJSON(value?: HotelContactType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'nameId': UniqueIDTypeToJSON(value.nameId),
        'hotelId': value.hotelId,
        'name': value.name,
        'roles': value.roles === undefined ? undefined : ((value.roles as Array<any>).map(HotelContactRoleTypeToJSON)),
        'ownerCode': value.ownerCode,
        'communicationMethod': value.communicationMethod,
        'communicationAddress': value.communicationAddress,
        'primary': value.primary,
    };
}
