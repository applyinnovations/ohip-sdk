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
import type { ECertificateScopeType } from './ECertificateScopeType';
import {
    ECertificateScopeTypeFromJSON,
    ECertificateScopeTypeFromJSONTyped,
    ECertificateScopeTypeToJSON,
} from './ECertificateScopeType';

/**
 * Hotel to which certificate is attached to.
 * @export
 * @interface ECertificateInfoTypeHotels
 */
export interface ECertificateInfoTypeHotels {
    /**
     * 
     * @type {Array<string>}
     * @memberof ECertificateInfoTypeHotels
     */
    code?: Array<string>;
    /**
     * 
     * @type {ECertificateScopeType}
     * @memberof ECertificateInfoTypeHotels
     */
    scope?: ECertificateScopeType;
}

/**
 * Check if a given object implements the ECertificateInfoTypeHotels interface.
 */
export function instanceOfECertificateInfoTypeHotels(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ECertificateInfoTypeHotelsFromJSON(json: any): ECertificateInfoTypeHotels {
    return ECertificateInfoTypeHotelsFromJSONTyped(json, false);
}

export function ECertificateInfoTypeHotelsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ECertificateInfoTypeHotels {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'scope': !exists(json, 'scope') ? undefined : ECertificateScopeTypeFromJSON(json['scope']),
    };
}

export function ECertificateInfoTypeHotelsToJSON(value?: ECertificateInfoTypeHotels | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'scope': ECertificateScopeTypeToJSON(value.scope),
    };
}
