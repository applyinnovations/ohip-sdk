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
import type { CodeDescriptionType } from './CodeDescriptionType';
import {
    CodeDescriptionTypeFromJSON,
    CodeDescriptionTypeFromJSONTyped,
    CodeDescriptionTypeToJSON,
} from './CodeDescriptionType';

/**
 * Transaction type.
 * @export
 * @interface TransactionType
 */
export interface TransactionType {
    /**
     * Transaction code.
     * @type {string}
     * @memberof TransactionType
     */
    transactionCode?: string;
    /**
     * Transaction date.
     * @type {Date}
     * @memberof TransactionType
     */
    transactionDate?: Date;
    /**
     * Transaction description.
     * @type {string}
     * @memberof TransactionType
     */
    transactionDescription?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof TransactionType
     */
    transactionNo?: CodeDescriptionType;
}

/**
 * Check if a given object implements the TransactionType interface.
 */
export function instanceOfTransactionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransactionTypeFromJSON(json: any): TransactionType {
    return TransactionTypeFromJSONTyped(json, false);
}

export function TransactionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransactionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'transactionDescription': !exists(json, 'transactionDescription') ? undefined : json['transactionDescription'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : CodeDescriptionTypeFromJSON(json['transactionNo']),
    };
}

export function TransactionTypeToJSON(value?: TransactionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0,10)),
        'transactionDescription': value.transactionDescription,
        'transactionNo': CodeDescriptionTypeToJSON(value.transactionNo),
    };
}

