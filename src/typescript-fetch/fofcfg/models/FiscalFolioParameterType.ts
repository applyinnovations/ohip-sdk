/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Provides information about the Fiscal Folio Parameter.
 * @export
 * @interface FiscalFolioParameterType
 */
export interface FiscalFolioParameterType {
    /**
     * Code of the Fiscal Folio Parameter.
     * @type {string}
     * @memberof FiscalFolioParameterType
     */
    code?: string;
    /**
     * Description of the Fiscal Folio Parameter.
     * @type {string}
     * @memberof FiscalFolioParameterType
     */
    description?: string;
    /**
     * Code of the Hotel.
     * @type {string}
     * @memberof FiscalFolioParameterType
     */
    hotelId?: string;
    /**
     * Indicates whether the Fiscal Folio Parameter is user created or from seed data.
     * @type {boolean}
     * @memberof FiscalFolioParameterType
     */
    internal?: boolean;
    /**
     * Fiscal folio parameter associated with Partner.
     * @type {string}
     * @memberof FiscalFolioParameterType
     */
    partner?: string;
    /**
     * Parameter value of the Fiscal Folio Parameter.
     * @type {string}
     * @memberof FiscalFolioParameterType
     */
    value?: string;
}

/**
 * Check if a given object implements the FiscalFolioParameterType interface.
 */
export function instanceOfFiscalFolioParameterType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FiscalFolioParameterTypeFromJSON(json: any): FiscalFolioParameterType {
    return FiscalFolioParameterTypeFromJSONTyped(json, false);
}

export function FiscalFolioParameterTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FiscalFolioParameterType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'internal': !exists(json, 'internal') ? undefined : json['internal'],
        'partner': !exists(json, 'partner') ? undefined : json['partner'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function FiscalFolioParameterTypeToJSON(value?: FiscalFolioParameterType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'hotelId': value.hotelId,
        'internal': value.internal,
        'partner': value.partner,
        'value': value.value,
    };
}

