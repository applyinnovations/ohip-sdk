/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TelephoneType } from './TelephoneType';
import {
    TelephoneTypeFromJSON,
    TelephoneTypeFromJSONTyped,
    TelephoneTypeToJSON,
} from './TelephoneType';
import type { URLType } from './URLType';
import {
    URLTypeFromJSON,
    URLTypeFromJSONTyped,
    URLTypeToJSON,
} from './URLType';

/**
 * Communication information of the hotel.
 * @export
 * @interface HotelInfoTypeCommunication
 */
export interface HotelInfoTypeCommunication {
    /**
     * Email address
     * @type {string}
     * @memberof HotelInfoTypeCommunication
     */
    emailAddress?: string;
    /**
     * 
     * @type {TelephoneType}
     * @memberof HotelInfoTypeCommunication
     */
    faxNumber?: TelephoneType;
    /**
     * 
     * @type {TelephoneType}
     * @memberof HotelInfoTypeCommunication
     */
    phoneNumber?: TelephoneType;
    /**
     * 
     * @type {TelephoneType}
     * @memberof HotelInfoTypeCommunication
     */
    tollFreeNumber?: TelephoneType;
    /**
     * 
     * @type {URLType}
     * @memberof HotelInfoTypeCommunication
     */
    webPage?: URLType;
}

/**
 * Check if a given object implements the HotelInfoTypeCommunication interface.
 */
export function instanceOfHotelInfoTypeCommunication(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function HotelInfoTypeCommunicationFromJSON(json: any): HotelInfoTypeCommunication {
    return HotelInfoTypeCommunicationFromJSONTyped(json, false);
}

export function HotelInfoTypeCommunicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): HotelInfoTypeCommunication {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
        'faxNumber': !exists(json, 'faxNumber') ? undefined : TelephoneTypeFromJSON(json['faxNumber']),
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : TelephoneTypeFromJSON(json['phoneNumber']),
        'tollFreeNumber': !exists(json, 'tollFreeNumber') ? undefined : TelephoneTypeFromJSON(json['tollFreeNumber']),
        'webPage': !exists(json, 'webPage') ? undefined : URLTypeFromJSON(json['webPage']),
    };
}

export function HotelInfoTypeCommunicationToJSON(value?: HotelInfoTypeCommunication | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emailAddress': value.emailAddress,
        'faxNumber': TelephoneTypeToJSON(value.faxNumber),
        'phoneNumber': TelephoneTypeToJSON(value.phoneNumber),
        'tollFreeNumber': TelephoneTypeToJSON(value.tollFreeNumber),
        'webPage': URLTypeToJSON(value.webPage),
    };
}
