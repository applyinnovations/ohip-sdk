/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
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
     * Property of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    hotelId?: string;
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
     * Code for the branch of the bank.
     * @type {string}
     * @memberof BankAccountType
     */
    branchCode?: string;
    /**
     * Name of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    bankName?: string;
    /**
     * 
     * @type {CommissionPaymentMethodType}
     * @memberof BankAccountType
     */
    paymentMethod?: CommissionPaymentMethodType;
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
     * Property name of the bank account.
     * @type {string}
     * @memberof BankAccountType
     */
    hotelName?: string;
    /**
     * Whether this bank account is to be the default in case no bank account is associated with the travel agent or source.
     * @type {boolean}
     * @memberof BankAccountType
     */
    _default?: boolean;
    /**
     * Whether this bank account is associated with the travel agent or source.
     * @type {boolean}
     * @memberof BankAccountType
     */
    linkedToProfile?: boolean;
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
        
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'bankAccountId': !exists(json, 'bankAccountId') ? undefined : UniqueIDTypeFromJSON(json['bankAccountId']),
        'bankAccountNo': !exists(json, 'bankAccountNo') ? undefined : json['bankAccountNo'],
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'bankName': !exists(json, 'bankName') ? undefined : json['bankName'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CommissionPaymentMethodTypeFromJSON(json['paymentMethod']),
        'checkFormat': !exists(json, 'checkFormat') ? undefined : json['checkFormat'],
        'currency': !exists(json, 'currency') ? undefined : CodeDescriptionTypeFromJSON(json['currency']),
        'currentCheckNo': !exists(json, 'currentCheckNo') ? undefined : json['currentCheckNo'],
        'hotelName': !exists(json, 'hotelName') ? undefined : json['hotelName'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'linkedToProfile': !exists(json, 'linkedToProfile') ? undefined : json['linkedToProfile'],
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
        
        'hotelId': value.hotelId,
        'bankAccountId': UniqueIDTypeToJSON(value.bankAccountId),
        'bankAccountNo': value.bankAccountNo,
        'bankCode': value.bankCode,
        'branchCode': value.branchCode,
        'bankName': value.bankName,
        'paymentMethod': CommissionPaymentMethodTypeToJSON(value.paymentMethod),
        'checkFormat': value.checkFormat,
        'currency': CodeDescriptionTypeToJSON(value.currency),
        'currentCheckNo': value.currentCheckNo,
        'hotelName': value.hotelName,
        'default': value._default,
        'linkedToProfile': value.linkedToProfile,
    };
}

