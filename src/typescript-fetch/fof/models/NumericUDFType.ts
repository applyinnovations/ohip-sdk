/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Used to hold user defined field of Numeric Type. It is highly recommended to use UDFN01, UDFN02,...UDFN40 (Total 40) as Numeric UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required.
 * @export
 * @interface NumericUDFType
 */
export interface NumericUDFType {
    /**
     * Label of user defined field used by vendors or customers.
     * @type {string}
     * @memberof NumericUDFType
     */
    alternateName?: string;
    /**
     * Name of user defined field.
     * @type {string}
     * @memberof NumericUDFType
     */
    name?: string;
    /**
     * Value of user defined field.
     * @type {number}
     * @memberof NumericUDFType
     */
    value?: number;
}

/**
 * Check if a given object implements the NumericUDFType interface.
 */
export function instanceOfNumericUDFType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function NumericUDFTypeFromJSON(json: any): NumericUDFType {
    return NumericUDFTypeFromJSONTyped(json, false);
}

export function NumericUDFTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): NumericUDFType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'alternateName': !exists(json, 'alternateName') ? undefined : json['alternateName'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function NumericUDFTypeToJSON(value?: NumericUDFType | null): any {
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

