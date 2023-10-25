/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Used to hold user defined field of Character/String Type.
 * @export
 * @interface CharacterUDFType
 */
export interface CharacterUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof CharacterUDFType
     */
    alternateName?: string;
    /**
     * Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof CharacterUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {string}
     * @memberof CharacterUDFType
     */
    value?: string;
}

/**
 * Check if a given object implements the CharacterUDFType interface.
 */
export function instanceOfCharacterUDFType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CharacterUDFTypeFromJSON(json: any): CharacterUDFType {
    return CharacterUDFTypeFromJSONTyped(json, false);
}

export function CharacterUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CharacterUDFType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateName': !exists(json, 'alternateName') ? undefined : json['alternateName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CharacterUDFTypeToJSON(value?: CharacterUDFType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateName': value.alternateName,
        'name': value.name,
        'value': value.value,
    };
}

