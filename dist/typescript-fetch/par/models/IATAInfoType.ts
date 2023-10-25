/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * IATA Information of the profile.
 * @export
 * @interface IATAInfoType
 */
export interface IATAInfoType {
    /**
     * IATA Company Detail.
     * @type {string}
     * @memberof IATAInfoType
     */
    iATACompany?: string;
    /**
     * IATA Consortia.
     * @type {string}
     * @memberof IATAInfoType
     */
    iATAConsortia?: string;
    /**
     * IATA Validation Result.
     * @type {boolean}
     * @memberof IATAInfoType
     */
    iATAValidationResult?: boolean;
}

/**
 * Check if a given object implements the IATAInfoType interface.
 */
export function instanceOfIATAInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IATAInfoTypeFromJSON(json: any): IATAInfoType {
    return IATAInfoTypeFromJSONTyped(json, false);
}

export function IATAInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): IATAInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iATACompany': !exists(json, 'iATACompany') ? undefined : json['iATACompany'],
        'iATAConsortia': !exists(json, 'iATAConsortia') ? undefined : json['iATAConsortia'],
        'iATAValidationResult': !exists(json, 'iATAValidationResult') ? undefined : json['iATAValidationResult'],
    };
}

export function IATAInfoTypeToJSON(value?: IATAInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iATACompany': value.iATACompany,
        'iATAConsortia': value.iATAConsortia,
        'iATAValidationResult': value.iATAValidationResult,
    };
}

