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
import type { EmailType } from './EmailType';
import {
    EmailTypeFromJSON,
    EmailTypeFromJSONTyped,
    EmailTypeToJSON,
} from './EmailType';

/**
 * Information on an email for the customer.
 * @export
 * @interface ReservationPaymentMethodTypeEmailFolioInfo
 */
export interface ReservationPaymentMethodTypeEmailFolioInfo {
    /**
     * 
     * @type {EmailType}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    email?: EmailType;
    /**
     * 
     * @type {boolean}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    emailFolio?: boolean;
    /**
     * A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
     * @type {string}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    id?: string;
    /**
     * A reference to the type of object defined by the UniqueID element.
     * @type {string}
     * @memberof ReservationPaymentMethodTypeEmailFolioInfo
     */
    type?: string;
}

/**
 * Check if a given object implements the ReservationPaymentMethodTypeEmailFolioInfo interface.
 */
export function instanceOfReservationPaymentMethodTypeEmailFolioInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationPaymentMethodTypeEmailFolioInfoFromJSON(json: any): ReservationPaymentMethodTypeEmailFolioInfo {
    return ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json, false);
}

export function ReservationPaymentMethodTypeEmailFolioInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationPaymentMethodTypeEmailFolioInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : EmailTypeFromJSON(json['email']),
        'emailFolio': !exists(json, 'emailFolio') ? undefined : json['emailFolio'],
        'id': !exists(json, 'id') ? undefined : json['id'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ReservationPaymentMethodTypeEmailFolioInfoToJSON(value?: ReservationPaymentMethodTypeEmailFolioInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailTypeToJSON(value.email),
        'emailFolio': value.emailFolio,
        'id': value.id,
        'type': value.type,
    };
}

