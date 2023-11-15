/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Cashiering Outbound API
 * APIs to cater for Cashiering related external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Transaction information being processed by the vendor.
 * @export
 * @interface CompTransactionInfoType
 */
export interface CompTransactionInfoType {
    /**
     * Transaction Number for which request is being submitted.
     * @type {number}
     * @memberof CompTransactionInfoType
     */
    transactionId?: number;
    /**
     * Transaction code.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    transactionCode?: string;
    /**
     * Transaction description.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    transactionDescription?: string;
    /**
     * Room number associated with the transaction.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    roomId?: string;
    /**
     * Confirmation number associated with the transaction.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    confirmationNo?: string;
    /**
     * Approval date of the posting.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    approvalDate?: string;
    /**
     * Approval status of the posting.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    approvalStatus?: string;
    /**
     * Approval code of the posting.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    approvalCode?: string;
    /**
     * Approval message of the posting coming from the vendor.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    approvalMessage?: string;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof CompTransactionInfoType
     */
    amount?: CurrencyAmountType;
    /**
     * Family name, last name or Company Name.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    name?: string;
    /**
     * Given name, first name or names.
     * @type {string}
     * @memberof CompTransactionInfoType
     */
    firstName?: string;
}

/**
 * Check if a given object implements the CompTransactionInfoType interface.
 */
export function instanceOfCompTransactionInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CompTransactionInfoTypeFromJSON(json: any): CompTransactionInfoType {
    return CompTransactionInfoTypeFromJSONTyped(json, false);
}

export function CompTransactionInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CompTransactionInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'transactionId': !exists(json, 'transactionId') ? undefined : json['transactionId'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDescription': !exists(json, 'transactionDescription') ? undefined : json['transactionDescription'],
        'roomId': !exists(json, 'roomId') ? undefined : json['roomId'],
        'confirmationNo': !exists(json, 'confirmationNo') ? undefined : json['confirmationNo'],
        'approvalDate': !exists(json, 'approvalDate') ? undefined : json['approvalDate'],
        'approvalStatus': !exists(json, 'approvalStatus') ? undefined : json['approvalStatus'],
        'approvalCode': !exists(json, 'approvalCode') ? undefined : json['approvalCode'],
        'approvalMessage': !exists(json, 'approvalMessage') ? undefined : json['approvalMessage'],
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
    };
}

export function CompTransactionInfoTypeToJSON(value?: CompTransactionInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'transactionId': value.transactionId,
        'transactionCode': value.transactionCode,
        'transactionDescription': value.transactionDescription,
        'roomId': value.roomId,
        'confirmationNo': value.confirmationNo,
        'approvalDate': value.approvalDate,
        'approvalStatus': value.approvalStatus,
        'approvalCode': value.approvalCode,
        'approvalMessage': value.approvalMessage,
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'name': value.name,
        'firstName': value.firstName,
    };
}

