/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
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

