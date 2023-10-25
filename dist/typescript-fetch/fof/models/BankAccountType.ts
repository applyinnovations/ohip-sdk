/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Operations Service
 * APIs to cater for Front Desk Operations and Front Desk Statistic functionality in OPERA Cloud. <br /><br /> Front Desk features some of the most commonly used operations in OPERA Cloud, such as managing guest arrivals, managing in-house guests, and managing guest departures. Some additional tasks you can complete from the Front Desk menu are room searches, room assignments, and quick check outs as well as opening folios, creating registration cards, setting wake up calls, and sending messages to guests.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
import type { CommissionPaymentMethodType } from './CommissionPaymentMethodType';
import {
    CommissionPaymentMethodTypeFromJSON,
    CommissionPaymentMethodTypeFromJSONTyped,
    CommissionPaymentMethodTypeToJSON,
} from './CommissionPaymentMethodType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Bank account information like Account ID, Bank Name, Currency, etc.
 * @export
 * @interface BankAccountType
 */
export interface BankAccountType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof BankAccountType
     */
    bankAccountId?: UniqueIDType;
    /**
     * Account number at the bank.
     * @type {string}
     * @memberof BankAccountType
     */
    bankAccountNo?: string;
    /**
     * Unique code of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    bankCode?: string;
    /**
     * Name of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    bankName?: string;
    /**
     * Code for the branch of the bank.
     * @type {string}
     * @memberof BankAccountType
     */
    branchCode?: string;
    /**
     * Type of format for Payment Method.
     * @type {string}
     * @memberof BankAccountType
     */
    checkFormat?: string;
    /**
     * 
     * @type {CodeDescriptionType}
     * @memberof BankAccountType
     */
    currency?: CodeDescriptionType;
    /**
     * Current check no of the bank account.
     * @type {number}
     * @memberof BankAccountType
     */
    currentCheckNo?: number;
    /**
     * Whether this bank account is to be the default in case no bank account is associated with the travel agent or source.
     * @type {boolean}
     * @memberof BankAccountType
     */
    _default?: boolean;
    /**
     * Property of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    hotelId?: string;
    /**
     * Property name of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    hotelName?: string;
    /**
     * Whether this bank account is associated with the travel agent or source.
     * @type {boolean}
     * @memberof BankAccountType
     */
    linkedToProfile?: boolean;
    /**
     * 
     * @type {CommissionPaymentMethodType}
     * @memberof BankAccountType
     */
    paymentMethod?: CommissionPaymentMethodType;
}

/**
 * Check if a given object implements the BankAccountType interface.
 */
export function instanceOfBankAccountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BankAccountTypeFromJSON(json: any): BankAccountType {
    return BankAccountTypeFromJSONTyped(json, false);
}

export function BankAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): BankAccountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankAccountId': !exists(json, 'bankAccountId') ? undefined : UniqueIDTypeFromJSON(json['bankAccountId']),
        'bankAccountNo': !exists(json, 'bankAccountNo') ? undefined : json['bankAccountNo'],
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'bankName': !exists(json, 'bankName') ? undefined : json['bankName'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'checkFormat': !exists(json, 'checkFormat') ? undefined : json['checkFormat'],
        'currency': !exists(json, 'currency') ? undefined : CodeDescriptionTypeFromJSON(json['currency']),
        'currentCheckNo': !exists(json, 'currentCheckNo') ? undefined : json['currentCheckNo'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        'linkedToProfile': !exists(json, 'linkedToProfile') ? undefined : json['linkedToProfile'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CommissionPaymentMethodTypeFromJSON(json['paymentMethod']),
    };
}

export function BankAccountTypeToJSON(value?: BankAccountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankAccountId': UniqueIDTypeToJSON(value.bankAccountId),
        'bankAccountNo': value.bankAccountNo,
        'bankCode': value.bankCode,
        'bankName': value.bankName,
        'branchCode': value.branchCode,
        'checkFormat': value.checkFormat,
        'currency': CodeDescriptionTypeToJSON(value.currency),
        'currentCheckNo': value.currentCheckNo,
        'default': value._default,
        'hotelId': value.hotelId,
        'hotelName': value.hotelName,
        'linkedToProfile': value.linkedToProfile,
        'paymentMethod': CommissionPaymentMethodTypeToJSON(value.paymentMethod),
    };
}

