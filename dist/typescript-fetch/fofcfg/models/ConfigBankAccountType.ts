/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommissionConfigPaymentMethodType } from './CommissionConfigPaymentMethodType';
import {
    CommissionConfigPaymentMethodTypeFromJSON,
    CommissionConfigPaymentMethodTypeFromJSONTyped,
    CommissionConfigPaymentMethodTypeToJSON,
} from './CommissionConfigPaymentMethodType';

/**
 * Indentifier for a Bank Account.
 * @export
 * @interface ConfigBankAccountType
 */
export interface ConfigBankAccountType {
    /**
     * Bank account ID.
     * @type {number}
     * @memberof ConfigBankAccountType
     */
    bankAccountId?: number;
    /**
     * Account number at the bank.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    bankAccountNumber?: string;
    /**
     * Unique code of the bank.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    bankCode?: string;
    /**
     * Name of the bank account.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    bankName?: string;
    /**
     * Code for the branch of the bank.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    branchCode?: string;
    /**
     * Number of lines to be printed on check stub.
     * @type {number}
     * @memberof ConfigBankAccountType
     */
    checkStubLines?: number;
    /**
     * Currency associated with the bank account.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    currency?: string;
    /**
     * Default Bank Account for that resort.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    _default?: boolean;
    /**
     * Used mainly to figure out default bank for resort and currency combination.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    defaultForCurrency?: boolean;
    /**
     * Check number allowed to be edited true/false.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    editCheckNumber?: boolean;
    /**
     * Type of format for Payment Method.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    format?: string;
    /**
     * Property of the bank account.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    hotelId?: string;
    /**
     * Language identification.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    language?: string;
    /**
     * Used to hold last exported date for commission export.
     * @type {Date}
     * @memberof ConfigBankAccountType
     */
    lastExportDate?: Date;
    /**
     * Used to hold last exported filename for commission export.
     * @type {number}
     * @memberof ConfigBankAccountType
     */
    lastExportFileNo?: number;
    /**
     * Minimum amount required to produce a check through commission processing for the selected account.
     * @type {number}
     * @memberof ConfigBankAccountType
     */
    minProcessingAmount?: number;
    /**
     * Next check number used by commission handling module for bank account selected.
     * @type {number}
     * @memberof ConfigBankAccountType
     */
    nextCheckNumber?: number;
    /**
     * 
     * @type {CommissionConfigPaymentMethodType}
     * @memberof ConfigBankAccountType
     */
    paymentMethod?: CommissionConfigPaymentMethodType;
    /**
     * Indicate that the bank account uses Positive Pay Export.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    positivePayExport?: boolean;
    /**
     * Indicates that bank account uses 1099 report.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    report1099?: boolean;
    /**
     * Routing number for the bank account.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    routingNumber?: string;
    /**
     * Source directory for importing commission information.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    sourceImportDirectory?: string;
    /**
     * Target directory where import files will be stored.
     * @type {string}
     * @memberof ConfigBankAccountType
     */
    targetImportDirectory?: string;
    /**
     * Force validation of TA/Source IATA number during commision payment process.
     * @type {boolean}
     * @memberof ConfigBankAccountType
     */
    validateIATANumber?: boolean;
}

/**
 * Check if a given object implements the ConfigBankAccountType interface.
 */
export function instanceOfConfigBankAccountType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigBankAccountTypeFromJSON(json: any): ConfigBankAccountType {
    return ConfigBankAccountTypeFromJSONTyped(json, false);
}

export function ConfigBankAccountTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigBankAccountType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankAccountId': !exists(json, 'bankAccountId') ? undefined : json['bankAccountId'],
        'bankAccountNumber': !exists(json, 'bankAccountNumber') ? undefined : json['bankAccountNumber'],
        'bankCode': !exists(json, 'bankCode') ? undefined : json['bankCode'],
        'bankName': !exists(json, 'bankName') ? undefined : json['bankName'],
        'branchCode': !exists(json, 'branchCode') ? undefined : json['branchCode'],
        'checkStubLines': !exists(json, 'checkStubLines') ? undefined : json['checkStubLines'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        '_default': !exists(json, 'default') ? undefined : json['default'],
        'defaultForCurrency': !exists(json, 'defaultForCurrency') ? undefined : json['defaultForCurrency'],
        'editCheckNumber': !exists(json, 'editCheckNumber') ? undefined : json['editCheckNumber'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'language': !exists(json, 'language') ? undefined : json['language'],
        'lastExportDate': !exists(json, 'lastExportDate') ? undefined : (new Date(json['lastExportDate'])),
        'lastExportFileNo': !exists(json, 'lastExportFileNo') ? undefined : json['lastExportFileNo'],
        'minProcessingAmount': !exists(json, 'minProcessingAmount') ? undefined : json['minProcessingAmount'],
        'nextCheckNumber': !exists(json, 'nextCheckNumber') ? undefined : json['nextCheckNumber'],
        'paymentMethod': !exists(json, 'paymentMethod') ? undefined : CommissionConfigPaymentMethodTypeFromJSON(json['paymentMethod']),
        'positivePayExport': !exists(json, 'positivePayExport') ? undefined : json['positivePayExport'],
        'report1099': !exists(json, 'report1099') ? undefined : json['report1099'],
        'routingNumber': !exists(json, 'routingNumber') ? undefined : json['routingNumber'],
        'sourceImportDirectory': !exists(json, 'sourceImportDirectory') ? undefined : json['sourceImportDirectory'],
        'targetImportDirectory': !exists(json, 'targetImportDirectory') ? undefined : json['targetImportDirectory'],
        'validateIATANumber': !exists(json, 'validateIATANumber') ? undefined : json['validateIATANumber'],
    };
}

export function ConfigBankAccountTypeToJSON(value?: ConfigBankAccountType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankAccountId': value.bankAccountId,
        'bankAccountNumber': value.bankAccountNumber,
        'bankCode': value.bankCode,
        'bankName': value.bankName,
        'branchCode': value.branchCode,
        'checkStubLines': value.checkStubLines,
        'currency': value.currency,
        'default': value._default,
        'defaultForCurrency': value.defaultForCurrency,
        'editCheckNumber': value.editCheckNumber,
        'format': value.format,
        'hotelId': value.hotelId,
        'language': value.language,
        'lastExportDate': value.lastExportDate === undefined ? undefined : (value.lastExportDate.toISOString().substr(0,10)),
        'lastExportFileNo': value.lastExportFileNo,
        'minProcessingAmount': value.minProcessingAmount,
        'nextCheckNumber': value.nextCheckNumber,
        'paymentMethod': CommissionConfigPaymentMethodTypeToJSON(value.paymentMethod),
        'positivePayExport': value.positivePayExport,
        'report1099': value.report1099,
        'routingNumber': value.routingNumber,
        'sourceImportDirectory': value.sourceImportDirectory,
        'targetImportDirectory': value.targetImportDirectory,
        'validateIATANumber': value.validateIATANumber,
    };
}

