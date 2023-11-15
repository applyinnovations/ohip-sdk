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
 * Reservation Deposit Type.
 * @export
 * @interface ReservationDepositType
 */
export interface ReservationDepositType {
    /**
     * Deposit Amount Owed.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountOwed?: number;
    /**
     * Deposit Amount Paid.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountPaid?: number;
    /**
     * Deposit Amount Required.
     * @type {number}
     * @memberof ReservationDepositType
     */
    amountRequired?: number;
    /**
     * Deposit Due Date.
     * @type {string}
     * @memberof ReservationDepositType
     */
    dueDate?: string;
    /**
     * Resolves whether reservation has outstanding deposit.
     * @type {boolean}
     * @memberof ReservationDepositType
     */
    hasOutstanding?: boolean;
    /**
     * Resolves whether reservation has paid deposit.
     * @type {boolean}
     * @memberof ReservationDepositType
     */
    hasPaid?: boolean;
    /**
     * Deposit Posting Date.
     * @type {string}
     * @memberof ReservationDepositType
     */
    postingDate?: string;
}

/**
 * Check if a given object implements the ReservationDepositType interface.
 */
export function instanceOfReservationDepositType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationDepositTypeFromJSON(json: any): ReservationDepositType {
    return ReservationDepositTypeFromJSONTyped(json, false);
}

export function ReservationDepositTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationDepositType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountOwed': !exists(json, 'amountOwed') ? undefined : json['amountOwed'],
        'amountPaid': !exists(json, 'amountPaid') ? undefined : json['amountPaid'],
        'amountRequired': !exists(json, 'amountRequired') ? undefined : json['amountRequired'],
        'dueDate': !exists(json, 'dueDate') ? undefined : json['dueDate'],
        'hasOutstanding': !exists(json, 'hasOutstanding') ? undefined : json['hasOutstanding'],
        'hasPaid': !exists(json, 'hasPaid') ? undefined : json['hasPaid'],
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
    };
}

export function ReservationDepositTypeToJSON(value?: ReservationDepositType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountOwed': value.amountOwed,
        'amountPaid': value.amountPaid,
        'amountRequired': value.amountRequired,
        'dueDate': value.dueDate,
        'hasOutstanding': value.hasOutstanding,
        'hasPaid': value.hasPaid,
        'postingDate': value.postingDate,
    };
}

