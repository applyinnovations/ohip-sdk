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
import type { CashierInfoType } from './CashierInfoType';
import {
    CashierInfoTypeFromJSON,
    CashierInfoTypeFromJSONTyped,
    CashierInfoTypeToJSON,
} from './CashierInfoType';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { ResPaymentCardType } from './ResPaymentCardType';
import {
    ResPaymentCardTypeFromJSON,
    ResPaymentCardTypeFromJSONTyped,
    ResPaymentCardTypeToJSON,
} from './ResPaymentCardType';

/**
 * Details of an AR Payment.
 * @export
 * @interface ARPaymentType
 */
export interface ARPaymentType {
    /**
     * The Aging age of the payment.
     * @type {number}
     * @memberof ARPaymentType
     */
    age?: number;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    amount?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    amountUsed?: CurrencyAmountType;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ARPaymentType
     */
    balance?: CurrencyAmountType;
    /**
     * 
     * @type {CashierInfoType}
     * @memberof ARPaymentType
     */
    cashierInfo?: CashierInfoType;
    /**
     * Property code.
     * @type {string}
     * @memberof ARPaymentType
     */
    hotelId?: string;
    /**
     * 
     * @type {ResPaymentCardType}
     * @memberof ARPaymentType
     */
    paymentCard?: ResPaymentCardType;
    /**
     * Posting date of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    postingDate?: string;
    /**
     * User-defined posting reference.
     * @type {string}
     * @memberof ARPaymentType
     */
    reference?: string;
    /**
     * User-defined posting remark.
     * @type {string}
     * @memberof ARPaymentType
     */
    remark?: string;
    /**
     * Revenue date ID of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    revenueDate?: string;
    /**
     * When this PostingType is used to return the postings generated by a batch request, the sequence number is used to relate to the Request's sequence number.
     * @type {number}
     * @memberof ARPaymentType
     */
    sequenceNo?: number;
    /**
     * Transaction code of the Payment.
     * @type {string}
     * @memberof ARPaymentType
     */
    transactionCode?: string;
    /**
     * Date of the Payment.
     * @type {string}
     * @memberof ARPaymentType
     */
    transactionDate?: string;
    /**
     * Unique Transaction Identifier of the Payment.
     * @type {number}
     * @memberof ARPaymentType
     */
    transactionNo?: number;
    /**
     * Transfer of the invoice.
     * @type {string}
     * @memberof ARPaymentType
     */
    transferDate?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ARPaymentType
     */
    transferredIn?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ARPaymentType
     */
    transferredOut?: boolean;
}

/**
 * Check if a given object implements the ARPaymentType interface.
 */
export function instanceOfARPaymentType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARPaymentTypeFromJSON(json: any): ARPaymentType {
    return ARPaymentTypeFromJSONTyped(json, false);
}

export function ARPaymentTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARPaymentType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'age': !exists(json, 'age') ? undefined : json['age'],
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'amountUsed': !exists(json, 'amountUsed') ? undefined : CurrencyAmountTypeFromJSON(json['amountUsed']),
        'balance': !exists(json, 'balance') ? undefined : CurrencyAmountTypeFromJSON(json['balance']),
        'cashierInfo': !exists(json, 'cashierInfo') ? undefined : CashierInfoTypeFromJSON(json['cashierInfo']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentCard': !exists(json, 'paymentCard') ? undefined : ResPaymentCardTypeFromJSON(json['paymentCard']),
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'revenueDate': !exists(json, 'revenueDate') ? undefined : json['revenueDate'],
        'sequenceNo': !exists(json, 'sequenceNo') ? undefined : json['sequenceNo'],
        'transactionCode': !exists(json, 'transactionCode') ? undefined : json['transactionCode'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
        'transferDate': !exists(json, 'transferDate') ? undefined : json['transferDate'],
        'transferredIn': !exists(json, 'transferredIn') ? undefined : json['transferredIn'],
        'transferredOut': !exists(json, 'transferredOut') ? undefined : json['transferredOut'],
    };
}

export function ARPaymentTypeToJSON(value?: ARPaymentType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'age': value.age,
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'amountUsed': CurrencyAmountTypeToJSON(value.amountUsed),
        'balance': CurrencyAmountTypeToJSON(value.balance),
        'cashierInfo': CashierInfoTypeToJSON(value.cashierInfo),
        'hotelId': value.hotelId,
        'paymentCard': ResPaymentCardTypeToJSON(value.paymentCard),
        'postingDate': value.postingDate,
        'reference': value.reference,
        'remark': value.remark,
        'revenueDate': value.revenueDate,
        'sequenceNo': value.sequenceNo,
        'transactionCode': value.transactionCode,
        'transactionDate': value.transactionDate,
        'transactionNo': value.transactionNo,
        'transferDate': value.transferDate,
        'transferredIn': value.transferredIn,
        'transferredOut': value.transferredOut,
    };
}

