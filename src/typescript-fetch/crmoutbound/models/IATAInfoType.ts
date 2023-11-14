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
