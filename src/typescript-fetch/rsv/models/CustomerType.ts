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
import type { AnonymizationType } from './AnonymizationType';
import {
    AnonymizationTypeFromJSON,
    AnonymizationTypeFromJSONTyped,
    AnonymizationTypeToJSON,
} from './AnonymizationType';
import type { CustomerTypeIdentifications } from './CustomerTypeIdentifications';
import {
    CustomerTypeIdentificationsFromJSON,
    CustomerTypeIdentificationsFromJSONTyped,
    CustomerTypeIdentificationsToJSON,
} from './CustomerTypeIdentifications';
import type { PersonNameType } from './PersonNameType';
import {
    PersonNameTypeFromJSON,
    PersonNameTypeFromJSONTyped,
    PersonNameTypeToJSON,
} from './PersonNameType';

/**
 * Contains basic data on the customer's identity, location, relationships, finances, memberships, etc.
 * @export
 * @interface CustomerType
 */
export interface CustomerType {
    /**
     * 
     * @type {AnonymizationType}
     * @memberof CustomerType
     */
    anonymization?: AnonymizationType;
    /**
     * Indicates the date of birth as indicated in the document, in ISO 8601 prescribed format.
     * @type {Date}
     * @memberof CustomerType
     */
    birthDate?: Date;
    /**
     * Indicates the date of birth as masked.
     * @type {string}
     * @memberof CustomerType
     */
    birthDateMasked?: string;
    /**
     * Place of birth.
     * @type {string}
     * @memberof CustomerType
     */
    birthPlace?: string;
    /**
     * This element tells if profile is blacklisted or not.
     * @type {boolean}
     * @memberof CustomerType
     */
    blacklist?: boolean;
    /**
     * Credit Rating of the customer.
     * @type {string}
     * @memberof CustomerType
     */
    creditRating?: string;
    /**
     * The supplier's ranking of the customer (e.g., VIP, numerical ranking).
     * @type {string}
     * @memberof CustomerType
     */
    customerValue?: string;
    /**
     * Identifies the profile gender code selected from Gender types List of values. Gender types LOV provides the values configured at gender configuration.
     * @type {string}
     * @memberof CustomerType
     */
    gender?: string;
    /**
     * 
     * @type {CustomerTypeIdentifications}
     * @memberof CustomerType
     */
    identifications?: CustomerTypeIdentifications;
    /**
     * Language identification.
     * @type {string}
     * @memberof CustomerType
     */
    language?: string;
    /**
     * Nationality code identification
     * @type {string}
     * @memberof CustomerType
     */
    nationality?: string;
    /**
     * Nationality code description
     * @type {string}
     * @memberof CustomerType
     */
    nationalityDescription?: string;
    /**
     * Detailed name information for the customer.
     * @type {Array<PersonNameType>}
     * @memberof CustomerType
     */
    personName?: Array<PersonNameType>;
    /**
     * This element tells profile is property exclusive or not.
     * @type {boolean}
     * @memberof CustomerType
     */
    privateProfile?: boolean;
    /**
     * Description of the VIP status.
     * @type {string}
     * @memberof CustomerType
     */
    vipDescription?: string;
    /**
     * VIP status of the customer.
     * @type {string}
     * @memberof CustomerType
     */
    vipStatus?: string;
}

/**
 * Check if a given object implements the CustomerType interface.
 */
export function instanceOfCustomerType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerTypeFromJSON(json: any): CustomerType {
    return CustomerTypeFromJSONTyped(json, false);
}

export function CustomerTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'anonymization': !exists(json, 'anonymization') ? undefined : AnonymizationTypeFromJSON(json['anonymization']),
        'birthDate': !exists(json, 'birthDate') ? undefined : (new Date(json['birthDate'])),
        'birthDateMasked': !exists(json, 'birthDateMasked') ? undefined : json['birthDateMasked'],
        'birthPlace': !exists(json, 'birthPlace') ? undefined : json['birthPlace'],
        'blacklist': !exists(json, 'blacklist') ? undefined : json['blacklist'],
        'creditRating': !exists(json, 'creditRating') ? undefined : json['creditRating'],
        'customerValue': !exists(json, 'customerValue') ? undefined : json['customerValue'],
        'gender': !exists(json, 'gender') ? undefined : json['gender'],
        'identifications': !exists(json, 'identifications') ? undefined : CustomerTypeIdentificationsFromJSON(json['identifications']),
        'language': !exists(json, 'language') ? undefined : json['language'],
        'nationality': !exists(json, 'nationality') ? undefined : json['nationality'],
        'nationalityDescription': !exists(json, 'nationalityDescription') ? undefined : json['nationalityDescription'],
        'personName': !exists(json, 'personName') ? undefined : ((json['personName'] as Array<any>).map(PersonNameTypeFromJSON)),
        'privateProfile': !exists(json, 'privateProfile') ? undefined : json['privateProfile'],
        'vipDescription': !exists(json, 'vipDescription') ? undefined : json['vipDescription'],
        'vipStatus': !exists(json, 'vipStatus') ? undefined : json['vipStatus'],
    };
}

export function CustomerTypeToJSON(value?: CustomerType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'anonymization': AnonymizationTypeToJSON(value.anonymization),
        'birthDate': value.birthDate === undefined ? undefined : (value.birthDate.toISOString().substring(0,10)),
        'birthDateMasked': value.birthDateMasked,
        'birthPlace': value.birthPlace,
        'blacklist': value.blacklist,
        'creditRating': value.creditRating,
        'customerValue': value.customerValue,
        'gender': value.gender,
        'identifications': CustomerTypeIdentificationsToJSON(value.identifications),
        'language': value.language,
        'nationality': value.nationality,
        'nationalityDescription': value.nationalityDescription,
        'personName': value.personName === undefined ? undefined : ((value.personName as Array<any>).map(PersonNameTypeToJSON)),
        'privateProfile': value.privateProfile,
        'vipDescription': value.vipDescription,
        'vipStatus': value.vipStatus,
    };
}
