/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering API
 * APIs to cater for Cashiering related functionality in OPERA Cloud.<br /><br /> Cashiering provides access to a guest folio, posting journals, receipt histories, currency calculations, credit card settlements, and check a guest out.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Used to hold user defined field of Date Type.
 * @export
 * @interface DateUDFType
 */
export interface DateUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof DateUDFType
     */
    alternateName?: string;
    /**
     * Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
     * @type {string}
     * @memberof DateUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {Date}
     * @memberof DateUDFType
     */
    value?: Date;
}

/**
 * Check if a given object implements the DateUDFType interface.
 */
export function instanceOfDateUDFType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DateUDFTypeFromJSON(json: any): DateUDFType {
    return DateUDFTypeFromJSONTyped(json, false);
}

export function DateUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DateUDFType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateName': !exists(json, 'alternateName') ? undefined : json['alternateName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : (new Date(json['value'])),
    };
}

export function DateUDFTypeToJSON(value?: DateUDFType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'alternateName': value.alternateName,
        'name': value.name,
        'value': value.value === undefined ? undefined : (value.value.toISOString().substring(0,10)),
    };
}
