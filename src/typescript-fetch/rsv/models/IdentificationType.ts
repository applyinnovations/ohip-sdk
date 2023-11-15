/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation API
 * APIs to cater for Reservation functionality in OPERA Cloud. <br /><br />OPERA Cloud Reservations provides a complete set of capabilities for creating and updating reservations. Reservations are a central feature of OPERA Cloud. As a key source of information, the reservation specifies a guest&apos;s arrival date, departure date, room type, rate, packages, and many other details. It is also a gateway to dozens of other functions that contribute to the guest&apos;s experience.  All reservations in OPERA Cloud require a guest profile.<br /><br /> You can create profiles while booking a reservation. If a profile already exists, you can look it up (using getProfiles in the Customer Relationship Management module) and attach it to the reservation during the reservation booking process using the profileId.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Identification information of the customer.
 * @export
 * @interface IdentificationType
 */
export interface IdentificationType {
    /**
     * Expiration date of Identification.
     * @type {string}
     * @memberof IdentificationType
     */
    expirationDate?: string;
    /**
     * Identification Number.
     * @type {string}
     * @memberof IdentificationType
     */
    idNumber?: string;
    /**
     * Masked Identification Number.
     * @type {string}
     * @memberof IdentificationType
     */
    idNumberMasked?: string;
    /**
     * Identification Type. Eg Passport, Driving License etc.
     * @type {string}
     * @memberof IdentificationType
     */
    idType?: string;
    /**
     * The country where Identification was issued.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedCountry?: string;
    /**
     * Issued date of Identification.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedDate?: string;
    /**
     * The place where Identification was issued.
     * @type {string}
     * @memberof IdentificationType
     */
    issuedPlace?: string;
    /**
     * Display Order sequence.
     * @type {number}
     * @memberof IdentificationType
     */
    orderSequence?: number;
    /**
     * When true, indicates a primary information.
     * @type {boolean}
     * @memberof IdentificationType
     */
    primaryInd?: boolean;
    /**
     * Property where the identification belongs to.
     * @type {string}
     * @memberof IdentificationType
     */
    registeredProperty?: string;
}

/**
 * Check if a given object implements the IdentificationType interface.
 */
export function instanceOfIdentificationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IdentificationTypeFromJSON(json: any): IdentificationType {
    return IdentificationTypeFromJSONTyped(json, false);
}

export function IdentificationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IdentificationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'expirationDate': !exists(json, 'expirationDate') ? undefined : json['expirationDate'],
        'idNumber': !exists(json, 'idNumber') ? undefined : json['idNumber'],
        'idNumberMasked': !exists(json, 'idNumberMasked') ? undefined : json['idNumberMasked'],
        'idType': !exists(json, 'idType') ? undefined : json['idType'],
        'issuedCountry': !exists(json, 'issuedCountry') ? undefined : json['issuedCountry'],
        'issuedDate': !exists(json, 'issuedDate') ? undefined : json['issuedDate'],
        'issuedPlace': !exists(json, 'issuedPlace') ? undefined : json['issuedPlace'],
        'orderSequence': !exists(json, 'orderSequence') ? undefined : json['orderSequence'],
        'primaryInd': !exists(json, 'primaryInd') ? undefined : json['primaryInd'],
        'registeredProperty': !exists(json, 'registeredProperty') ? undefined : json['registeredProperty'],
    };
}

export function IdentificationTypeToJSON(value?: IdentificationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'expirationDate': value.expirationDate,
        'idNumber': value.idNumber,
        'idNumberMasked': value.idNumberMasked,
        'idType': value.idType,
        'issuedCountry': value.issuedCountry,
        'issuedDate': value.issuedDate,
        'issuedPlace': value.issuedPlace,
        'orderSequence': value.orderSequence,
        'primaryInd': value.primaryInd,
        'registeredProperty': value.registeredProperty,
    };
}

