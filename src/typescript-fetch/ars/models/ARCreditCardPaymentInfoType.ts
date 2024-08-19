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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { ProfileId } from './ProfileId';
import {
    ProfileIdFromJSON,
    ProfileIdFromJSONTyped,
    ProfileIdToJSON,
} from './ProfileId';

/**
 * AR Credit Card payment information.
 * @export
 * @interface ARCreditCardPaymentInfoType
 */
export interface ARCreditCardPaymentInfoType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof ARCreditCardPaymentInfoType
     */
    amount?: CurrencyAmountType;
    /**
     * Bill Number returned by the Fiscal Printer.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    fiscalFolioNo?: number;
    /**
     * The Folio number of this posting, if there was a Folio already generated.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    folioNo?: number;
    /**
     * Guest Name .
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    guestName?: string;
    /**
     * Date of posting.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    postingDate?: string;
    /**
     * 
     * @type {ProfileId}
     * @memberof ARCreditCardPaymentInfoType
     */
    profileId?: ProfileId;
    /**
     * Reference Text for the payment.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    reference?: string;
    /**
     * Remarks for payment.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    remark?: string;
    /**
     * Transaction Date of the payment.
     * @type {string}
     * @memberof ARCreditCardPaymentInfoType
     */
    transactionDate?: string;
    /**
     * Transaction number of the payment.
     * @type {number}
     * @memberof ARCreditCardPaymentInfoType
     */
    transactionNo?: number;
}

/**
 * Check if a given object implements the ARCreditCardPaymentInfoType interface.
 */
export function instanceOfARCreditCardPaymentInfoType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ARCreditCardPaymentInfoTypeFromJSON(json: any): ARCreditCardPaymentInfoType {
    return ARCreditCardPaymentInfoTypeFromJSONTyped(json, false);
}

export function ARCreditCardPaymentInfoTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ARCreditCardPaymentInfoType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'fiscalFolioNo': !exists(json, 'fiscalFolioNo') ? undefined : json['fiscalFolioNo'],
        'folioNo': !exists(json, 'folioNo') ? undefined : json['folioNo'],
        'guestName': !exists(json, 'guestName') ? undefined : json['guestName'],
        'postingDate': !exists(json, 'postingDate') ? undefined : json['postingDate'],
        'profileId': !exists(json, 'profileId') ? undefined : ProfileIdFromJSON(json['profileId']),
        'reference': !exists(json, 'reference') ? undefined : json['reference'],
        'remark': !exists(json, 'remark') ? undefined : json['remark'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : json['transactionDate'],
        'transactionNo': !exists(json, 'transactionNo') ? undefined : json['transactionNo'],
    };
}

export function ARCreditCardPaymentInfoTypeToJSON(value?: ARCreditCardPaymentInfoType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'fiscalFolioNo': value.fiscalFolioNo,
        'folioNo': value.folioNo,
        'guestName': value.guestName,
        'postingDate': value.postingDate,
        'profileId': ProfileIdToJSON(value.profileId),
        'reference': value.reference,
        'remark': value.remark,
        'transactionDate': value.transactionDate,
        'transactionNo': value.transactionNo,
    };
}

