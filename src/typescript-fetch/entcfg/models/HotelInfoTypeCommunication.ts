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
     * @type {TelephoneType}
     * @memberof HotelInfoTypeCommunication
     */
    faxNumber?: TelephoneType;
    /**
     * Email address
     * @type {string}
     * @memberof HotelInfoTypeCommunication
     */
    emailAddress?: string;
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
        
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : TelephoneTypeFromJSON(json['phoneNumber']),
        'tollFreeNumber': !exists(json, 'tollFreeNumber') ? undefined : TelephoneTypeFromJSON(json['tollFreeNumber']),
        'faxNumber': !exists(json, 'faxNumber') ? undefined : TelephoneTypeFromJSON(json['faxNumber']),
        'emailAddress': !exists(json, 'emailAddress') ? undefined : json['emailAddress'],
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
        
        'phoneNumber': TelephoneTypeToJSON(value.phoneNumber),
        'tollFreeNumber': TelephoneTypeToJSON(value.tollFreeNumber),
        'faxNumber': TelephoneTypeToJSON(value.faxNumber),
        'emailAddress': value.emailAddress,
        'webPage': URLTypeToJSON(value.webPage),
    };
}

