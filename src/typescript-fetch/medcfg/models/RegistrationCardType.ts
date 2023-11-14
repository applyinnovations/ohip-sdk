/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Content Service
 * Opera Content Service offers capability to manage large content such as images and files.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Registration card details, including PDF report.
 * @export
 * @interface RegistrationCardType
 */
export interface RegistrationCardType {
    /**
     * Hotel code for the registration card.
     * @type {string}
     * @memberof RegistrationCardType
     */
    hotelId?: string;
    /**
     * Registration card PDF.
     * @type {string}
     * @memberof RegistrationCardType
     */
    registrationCard?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RegistrationCardType
     */
    reservationId?: UniqueIDType;
}

/**
 * Check if a given object implements the RegistrationCardType interface.
 */
export function instanceOfRegistrationCardType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegistrationCardTypeFromJSON(json: any): RegistrationCardType {
    return RegistrationCardTypeFromJSONTyped(json, false);
}

export function RegistrationCardTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegistrationCardType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'registrationCard': !exists(json, 'registrationCard') ? undefined : json['registrationCard'],
        'reservationId': !exists(json, 'reservationId') ? undefined : UniqueIDTypeFromJSON(json['reservationId']),
    };
}

export function RegistrationCardTypeToJSON(value?: RegistrationCardType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'hotelId': value.hotelId,
        'registrationCard': value.registrationCard,
        'reservationId': UniqueIDTypeToJSON(value.reservationId),
    };
}
