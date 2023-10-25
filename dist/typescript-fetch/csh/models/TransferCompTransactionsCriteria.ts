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
 * Comp transactions transfer criteria.
 * @export
 * @interface TransferCompTransactionsCriteria
 */
export interface TransferCompTransactionsCriteria {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof TransferCompTransactionsCriteria
     */
    cashierId?: number;
    /**
     * Folio window number to where transactions will be transfered.
     * @type {number}
     * @memberof TransferCompTransactionsCriteria
     */
    targetFolioNo?: number;
    /**
     * List of transactions to be transfered.
     * @type {Array<number>}
     * @memberof TransferCompTransactionsCriteria
     */
    transactionList?: Array<number>;
}

/**
 * Check if a given object implements the TransferCompTransactionsCriteria interface.
 */
export function instanceOfTransferCompTransactionsCriteria(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TransferCompTransactionsCriteriaFromJSON(json: any): TransferCompTransactionsCriteria {
    return TransferCompTransactionsCriteriaFromJSONTyped(json, false);
}

export function TransferCompTransactionsCriteriaFromJSONTyped(json: any, ignoreDiscriminator: boolean): TransferCompTransactionsCriteria {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'targetFolioNo': !exists(json, 'targetFolioNo') ? undefined : json['targetFolioNo'],
        'transactionList': !exists(json, 'transactionList') ? undefined : json['transactionList'],
    };
}

export function TransferCompTransactionsCriteriaToJSON(value?: TransferCompTransactionsCriteria | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'targetFolioNo': value.targetFolioNo,
        'transactionList': value.transactionList,
    };
}

