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
import type { ARAccountCriteriaType } from './ARAccountCriteriaType';
import {
    ARAccountCriteriaTypeFromJSON,
    ARAccountCriteriaTypeFromJSONTyped,
    ARAccountCriteriaTypeToJSON,
} from './ARAccountCriteriaType';
import type { ARInvoiceType } from './ARInvoiceType';
import {
    ARInvoiceTypeFromJSON,
    ARInvoiceTypeFromJSONTyped,
    ARInvoiceTypeToJSON,
} from './ARInvoiceType';

/**
 * Criteria type compressing invoices i.e grouping multiple invoices into one,for an Account.
 * @export
 * @interface ARCompressInvoicesType
 */
export interface ARCompressInvoicesType {
    /**
     * 
     * @type {ARAccountCriteriaType}
     * @memberof ARCompressInvoicesType
     */
    account?: ARAccountCriteriaType;
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof ARCompressInvoicesType
     */
    cashierId?: number;
    /**
     * Folio Type for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    folioTypeName?: string;
    /**
     * A collection of AR Invoices.
     * @type {Array<ARInvoiceType>}
     * @memberof ARCompressInvoicesType
     */
    invoices?: Array<ARInvoiceType>;
    /**
     * Reference Text for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    reference?: string;
    /**
     * Remarks for the Master Invoice which will be created.
     * @type {string}
     * @memberof ARCompressInvoicesType
     */
    remark?: string;
}

/**
 * Check if a given object implements the ARCompressInvoicesType interface.
 */
export function instanceOfARCompressInvoicesType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARCompressInvoicesTypeFromJSON(json: any): ARCompressInvoicesType {
    return ARCompressInvoicesTypeFromJSONTyped(json, false);
}

export function ARCompressInvoicesTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARCompressInvoicesType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account': !exists(json, 'account') ? undefined : ARAccountCriteriaTypeFromJSON(json['account']),
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'folioTypeName': !exists(json, 'folioTypeName') ? undefined : json['folioTypeName'],
        'invoices': !exists(json, 'invoices') ? undefined : ((json['invoices'] as Array<any>).map(ARInvoiceTypeFromJSON)),
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
    };
}

export function ARCompressInvoicesTypeToJSON(value?: ARCompressInvoicesType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account': ARAccountCriteriaTypeToJSON(value.account),
        'cashierId': value.cashierId,
        'folioTypeName': value.folioTypeName,
        'invoices': value.invoices === undefined ? undefined : ((value.invoices as Array<any>).map(ARInvoiceTypeToJSON)),
        'reference': value.reference,
        'remark': value.remark,
    };
}

