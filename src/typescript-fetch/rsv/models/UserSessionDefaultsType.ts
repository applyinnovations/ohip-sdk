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
/**
 * 
 * @export
 * @interface UserSessionDefaultsType
 */
export interface UserSessionDefaultsType {
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    baseLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    currencyCode?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    currencyFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    dbDateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    defaultLanguage?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    javaDateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    javaTimeFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    oracleDateFormat?: string;
    /**
     * 
     * @type {string}
     * @memberof UserSessionDefaultsType
     */
    oracleTimeFormat?: string;
}

/**
 * Check if a given object implements the UserSessionDefaultsType interface.
 */
export function instanceOfUserSessionDefaultsType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserSessionDefaultsTypeFromJSON(json: any): UserSessionDefaultsType {
    return UserSessionDefaultsTypeFromJSONTyped(json, false);
}

export function UserSessionDefaultsTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserSessionDefaultsType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'baseLanguage': !exists(json, 'baseLanguage') ? undefined : json['baseLanguage'],
        'currencyCode': !exists(json, 'currencyCode') ? undefined : json['currencyCode'],
        'currencyFormat': !exists(json, 'currencyFormat') ? undefined : json['currencyFormat'],
        'dbDateFormat': !exists(json, 'dbDateFormat') ? undefined : json['dbDateFormat'],
        'defaultLanguage': !exists(json, 'defaultLanguage') ? undefined : json['defaultLanguage'],
        'javaDateFormat': !exists(json, 'javaDateFormat') ? undefined : json['javaDateFormat'],
        'javaTimeFormat': !exists(json, 'javaTimeFormat') ? undefined : json['javaTimeFormat'],
        'oracleDateFormat': !exists(json, 'oracleDateFormat') ? undefined : json['oracleDateFormat'],
        'oracleTimeFormat': !exists(json, 'oracleTimeFormat') ? undefined : json['oracleTimeFormat'],
    };
}

export function UserSessionDefaultsTypeToJSON(value?: UserSessionDefaultsType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'baseLanguage': value.baseLanguage,
        'currencyCode': value.currencyCode,
        'currencyFormat': value.currencyFormat,
        'dbDateFormat': value.dbDateFormat,
        'defaultLanguage': value.defaultLanguage,
        'javaDateFormat': value.javaDateFormat,
        'javaTimeFormat': value.javaTimeFormat,
        'oracleDateFormat': value.oracleDateFormat,
        'oracleTimeFormat': value.oracleTimeFormat,
    };
}

