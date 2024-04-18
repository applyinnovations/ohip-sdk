/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Accounts Receivables API
 * APIs to cater for Accounts Receivables functionality in OPERA Cloud. <br /><br The OPERA Cloud Accounts Receivable module enables you to manage debtors\' accounts, invoices, and remittance.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * Update info associated to this transaction.
 * @export
 * @interface ARInvoicePostingTypeUpdateInfo
 */
export interface ARInvoicePostingTypeUpdateInfo {
    /**
     * 
     * @type {string}
     * @memberof ARInvoicePostingTypeUpdateInfo
     */
    updateBy?: string;
    /**
     * 
     * @type {string}
     * @memberof ARInvoicePostingTypeUpdateInfo
     */
    updateDate?: string;
}

/**
 * Check if a given object implements the ARInvoicePostingTypeUpdateInfo interface.
 */
export function instanceOfARInvoicePostingTypeUpdateInfo(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARInvoicePostingTypeUpdateInfoFromJSON(json: any): ARInvoicePostingTypeUpdateInfo {
    return ARInvoicePostingTypeUpdateInfoFromJSONTyped(json, false);
}

export function ARInvoicePostingTypeUpdateInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARInvoicePostingTypeUpdateInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'updateBy': !exists(json, 'updateBy') ? undefined : json['updateBy'],
        'updateDate': !exists(json, 'updateDate') ? undefined : json['updateDate'],
    };
}

export function ARInvoicePostingTypeUpdateInfoToJSON(value?: ARInvoicePostingTypeUpdateInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'updateBy': value.updateBy,
        'updateDate': value.updateDate,
    };
}
