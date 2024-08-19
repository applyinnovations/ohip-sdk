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
/**
 * Base details of the country.
 * @export
 * @interface CountryType
 */
export interface CountryType {
    /**
     * Name for the country.
     * @type {string}
     * @memberof CountryType
     */
    name?: string;
    /**
     * Statistic code for the country.
     * @type {string}
     * @memberof CountryType
     */
    statisticCode?: string;
    /**
     * Guest Address format Codes for confirmation letter.
     * @type {string}
     * @memberof CountryType
     */
    guestAddressFormat?: string;
    /**
     * Defines the mode used to invoke address doctor service.
     * @type {string}
     * @memberof CountryType
     */
    addressDoctorMode?: string;
    /**
     * Main Group of Country. Used in statistic reports.
     * @type {string}
     * @memberof CountryType
     */
    mainGroup?: string;
    /**
     * Regin to which the Country belongs.
     * @type {string}
     * @memberof CountryType
     */
    regionCode?: string;
    /**
     * ISO standard code for country.
     * @type {string}
     * @memberof CountryType
     */
    isoCode?: string;
    /**
     * ISO standard name for country.
     * @type {string}
     * @memberof CountryType
     */
    isoName?: string;
    /**
     * Sequence number for displaying the countries.
     * @type {number}
     * @memberof CountryType
     */
    displaySequence?: number;
    /**
     * Print Sequence number for report.
     * @type {number}
     * @memberof CountryType
     */
    printSequence?: number;
    /**
     * Indicates if the country flag should be displayed.
     * @type {boolean}
     * @memberof CountryType
     */
    displayFlag?: boolean;
    /**
     * Country code identifying the country.
     * @type {string}
     * @memberof CountryType
     */
    countryCode?: string;
    /**
     * Hotel code the country belongs to.
     * @type {string}
     * @memberof CountryType
     */
    hotelId?: string;
}

/**
 * Check if a given object implements the CountryType interface.
 */
export function instanceOfCountryType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountryTypeFromJSON(json: any): CountryType {
    return CountryTypeFromJSONTyped(json, false);
}

export function CountryTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountryType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'statisticCode': !exists(json, 'statisticCode') ? undefined : json['statisticCode'],
        'guestAddressFormat': !exists(json, 'guestAddressFormat') ? undefined : json['guestAddressFormat'],
        'addressDoctorMode': !exists(json, 'addressDoctorMode') ? undefined : json['addressDoctorMode'],
        'mainGroup': !exists(json, 'mainGroup') ? undefined : json['mainGroup'],
        'regionCode': !exists(json, 'regionCode') ? undefined : json['regionCode'],
        'isoCode': !exists(json, 'isoCode') ? undefined : json['isoCode'],
        'isoName': !exists(json, 'isoName') ? undefined : json['isoName'],
        'displaySequence': !exists(json, 'displaySequence') ? undefined : json['displaySequence'],
        'printSequence': !exists(json, 'printSequence') ? undefined : json['printSequence'],
        'displayFlag': !exists(json, 'displayFlag') ? undefined : json['displayFlag'],
        'countryCode': !exists(json, 'countryCode') ? undefined : json['countryCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
    };
}

export function CountryTypeToJSON(value?: CountryType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'statisticCode': value.statisticCode,
        'guestAddressFormat': value.guestAddressFormat,
        'addressDoctorMode': value.addressDoctorMode,
        'mainGroup': value.mainGroup,
        'regionCode': value.regionCode,
        'isoCode': value.isoCode,
        'isoName': value.isoName,
        'displaySequence': value.displaySequence,
        'printSequence': value.printSequence,
        'displayFlag': value.displayFlag,
        'countryCode': value.countryCode,
        'hotelId': value.hotelId,
    };
}

