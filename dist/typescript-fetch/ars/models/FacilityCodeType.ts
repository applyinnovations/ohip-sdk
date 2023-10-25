/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Facility Housekeeping Code, its description and quantity.
 * @export
 * @interface FacilityCodeType
 */
export interface FacilityCodeType {
    /**
     * Facility code value.
     * @type {string}
     * @memberof FacilityCodeType
     */
    code?: string;
    /**
     * Facility Code.
     * @type {string}
     * @memberof FacilityCodeType
     */
    description?: string;
    /**
     * Signifies the quantity.
     * @type {number}
     * @memberof FacilityCodeType
     */
    quantity?: number;
}

/**
 * Check if a given object implements the FacilityCodeType interface.
 */
export function instanceOfFacilityCodeType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FacilityCodeTypeFromJSON(json: any): FacilityCodeType {
    return FacilityCodeTypeFromJSONTyped(json, false);
}

export function FacilityCodeTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): FacilityCodeType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function FacilityCodeTypeToJSON(value?: FacilityCodeType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'description': value.description,
        'quantity': value.quantity,
    };
}

