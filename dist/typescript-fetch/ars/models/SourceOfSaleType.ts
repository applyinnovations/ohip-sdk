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
 * Point of Sale of reservation. Identifies the entity/channel who made the reservation.
 * @export
 * @interface SourceOfSaleType
 */
export interface SourceOfSaleType {
    /**
     * The entity/channel who made the reservation.
     * @type {string}
     * @memberof SourceOfSaleType
     */
    sourceCode?: string;
    /**
     * Type of entity/channel who made the reservation..
     * @type {string}
     * @memberof SourceOfSaleType
     */
    sourceType?: string;
}

/**
 * Check if a given object implements the SourceOfSaleType interface.
 */
export function instanceOfSourceOfSaleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SourceOfSaleTypeFromJSON(json: any): SourceOfSaleType {
    return SourceOfSaleTypeFromJSONTyped(json, false);
}

export function SourceOfSaleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SourceOfSaleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sourceCode': !exists(json, 'sourceCode') ? undefined : json['sourceCode'],
        'sourceType': !exists(json, 'sourceType') ? undefined : json['sourceType'],
    };
}

export function SourceOfSaleTypeToJSON(value?: SourceOfSaleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sourceCode': value.sourceCode,
        'sourceType': value.sourceType,
    };
}

