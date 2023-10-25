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
 * Criteria type for deletion of transactions.
 * @export
 * @interface DeleteTransactionCriteriaType
 */
export interface DeleteTransactionCriteriaType {
    /**
     * The Cashier ID of the Cashier who is currently processing the transaction(s).
     * @type {number}
     * @memberof DeleteTransactionCriteriaType
     */
    cashierId?: number;
    /**
     * Property code where the reservation transaction exists.
     * @type {string}
     * @memberof DeleteTransactionCriteriaType
     */
    hotelId?: string;
    /**
     * The reason code for the deletion.
     * @type {string}
     * @memberof DeleteTransactionCriteriaType
     */
    reasonCode?: string;
    /**
     * The unique transaction number of this transaction.
     * @type {Array<number>}
     * @memberof DeleteTransactionCriteriaType
     */
    transactionList?: Array<number>;
}

/**
 * Check if a given object implements the DeleteTransactionCriteriaType interface.
 */
export function instanceOfDeleteTransactionCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DeleteTransactionCriteriaTypeFromJSON(json: any): DeleteTransactionCriteriaType {
    return DeleteTransactionCriteriaTypeFromJSONTyped(json, false);
}

export function DeleteTransactionCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DeleteTransactionCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cashierId': !exists(json, 'cashierId') ? undefined : json['cashierId'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'reasonCode': !exists(json, 'reasonCode') ? undefined : json['reasonCode'],
        'transactionList': !exists(json, 'transactionList') ? undefined : json['transactionList'],
    };
}

export function DeleteTransactionCriteriaTypeToJSON(value?: DeleteTransactionCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cashierId': value.cashierId,
        'hotelId': value.hotelId,
        'reasonCode': value.reasonCode,
        'transactionList': value.transactionList,
    };
}

