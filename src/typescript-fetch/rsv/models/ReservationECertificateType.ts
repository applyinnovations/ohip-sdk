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
import type { ECertificateClassficationType } from './ECertificateClassficationType';
import {
    ECertificateClassficationTypeFromJSON,
    ECertificateClassficationTypeFromJSONTyped,
    ECertificateClassficationTypeToJSON,
} from './ECertificateClassficationType';
import type { RequestActionType } from './RequestActionType';
import {
    RequestActionTypeFromJSON,
    RequestActionTypeFromJSONTyped,
    RequestActionTypeToJSON,
} from './RequestActionType';

/**
 * Reservation ECertificate Type Information.
 * @export
 * @interface ReservationECertificateType
 */
export interface ReservationECertificateType {
    /**
     * 
     * @type {RequestActionType}
     * @memberof ReservationECertificateType
     */
    actionType?: RequestActionType;
    /**
     * ECertificate Number for the reservation.
     * @type {string}
     * @memberof ReservationECertificateType
     */
    eCertificateNo?: string;
    /**
     * 
     * @type {ECertificateClassficationType}
     * @memberof ReservationECertificateType
     */
    eCertificateType?: ECertificateClassficationType;
}

/**
 * Check if a given object implements the ReservationECertificateType interface.
 */
export function instanceOfReservationECertificateType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationECertificateTypeFromJSON(json: any): ReservationECertificateType {
    return ReservationECertificateTypeFromJSONTyped(json, false);
}

export function ReservationECertificateTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationECertificateType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'actionType': !exists(json, 'actionType') ? undefined : RequestActionTypeFromJSON(json['actionType']),
        'eCertificateNo': !exists(json, 'eCertificateNo') ? undefined : json['eCertificateNo'],
        'eCertificateType': !exists(json, 'eCertificateType') ? undefined : ECertificateClassficationTypeFromJSON(json['eCertificateType']),
    };
}

export function ReservationECertificateTypeToJSON(value?: ReservationECertificateType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'actionType': RequestActionTypeToJSON(value.actionType),
        'eCertificateNo': value.eCertificateNo,
        'eCertificateType': ECertificateClassficationTypeToJSON(value.eCertificateType),
    };
}

