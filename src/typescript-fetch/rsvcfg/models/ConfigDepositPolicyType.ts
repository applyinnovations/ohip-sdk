/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Reservation Master Data Management API
 * APIs to cater for Reservation Configuration in OPERA Cloud. In this module you can retrieve, create, modify or delete configuration related to Reservations, Blocks and Leisure Management.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { DepositCancelRevenueType } from './DepositCancelRevenueType';
import {
    DepositCancelRevenueTypeFromJSON,
    DepositCancelRevenueTypeFromJSONTyped,
    DepositCancelRevenueTypeToJSON,
} from './DepositCancelRevenueType';
import type { PolicyAmountPercentType } from './PolicyAmountPercentType';
import {
    PolicyAmountPercentTypeFromJSON,
    PolicyAmountPercentTypeFromJSONTyped,
    PolicyAmountPercentTypeToJSON,
} from './PolicyAmountPercentType';
import type { PolicyDeadlineType } from './PolicyDeadlineType';
import {
    PolicyDeadlineTypeFromJSON,
    PolicyDeadlineTypeFromJSONTyped,
    PolicyDeadlineTypeToJSON,
} from './PolicyDeadlineType';

/**
 * Used to define the deposit policy, guarantees policy, and/or accepted forms of payment.
 * @export
 * @interface ConfigDepositPolicyType
 */
export interface ConfigDepositPolicyType {
    /**
     * 
     * @type {PolicyAmountPercentType}
     * @memberof ConfigDepositPolicyType
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     * 
     * @type {PolicyDeadlineType}
     * @memberof ConfigDepositPolicyType
     */
    deadline?: PolicyDeadlineType;
    /**
     * Receipt number associated with the deposit policy
     * @type {number}
     * @memberof ConfigDepositPolicyType
     */
    depositReceiptNo?: number;
    /**
     * Flag to indicate if deposit policy is reversed
     * @type {boolean}
     * @memberof ConfigDepositPolicyType
     */
    depositReqReversed?: boolean;
    /**
     * Text description of the Payment in a given language.
     * @type {string}
     * @memberof ConfigDepositPolicyType
     */
    description?: string;
    /**
     * Formatted Text Rule of the deposit policy.
     * @type {string}
     * @memberof ConfigDepositPolicyType
     */
    formattedRule?: string;
    /**
     * Inactive rules are no longer available for attachment to rate codes, reservation types or reservations; however, they are still recorded in the database for historical purposes.
     * @type {boolean}
     * @memberof ConfigDepositPolicyType
     */
    inactive?: boolean;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof ConfigDepositPolicyType
     */
    manual?: boolean;
    /**
     * Deposit Policy Code
     * @type {string}
     * @memberof ConfigDepositPolicyType
     */
    policyCode?: string;
    /**
     * The sequence number that determines the position of this rule in the Deposit or Cancellation rules LOV.
     * @type {number}
     * @memberof ConfigDepositPolicyType
     */
    sequence?: number;
    /**
     * Transaction Date associated with the deposit policy
     * @type {Date}
     * @memberof ConfigDepositPolicyType
     */
    transactionDate?: Date;
    /**
     * 
     * @type {DepositCancelRevenueType}
     * @memberof ConfigDepositPolicyType
     */
    typeOfCharges?: DepositCancelRevenueType;
}

/**
 * Check if a given object implements the ConfigDepositPolicyType interface.
 */
export function instanceOfConfigDepositPolicyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigDepositPolicyTypeFromJSON(json: any): ConfigDepositPolicyType {
    return ConfigDepositPolicyTypeFromJSONTyped(json, false);
}

export function ConfigDepositPolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigDepositPolicyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountPercent': !exists(json, 'amountPercent') ? undefined : PolicyAmountPercentTypeFromJSON(json['amountPercent']),
        'deadline': !exists(json, 'deadline') ? undefined : PolicyDeadlineTypeFromJSON(json['deadline']),
        'depositReceiptNo': !exists(json, 'depositReceiptNo') ? undefined : json['depositReceiptNo'],
        'depositReqReversed': !exists(json, 'depositReqReversed') ? undefined : json['depositReqReversed'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'formattedRule': !exists(json, 'formattedRule') ? undefined : json['formattedRule'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
        'policyCode': !exists(json, 'policyCode') ? undefined : json['policyCode'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'typeOfCharges': !exists(json, 'typeOfCharges') ? undefined : DepositCancelRevenueTypeFromJSON(json['typeOfCharges']),
    };
}

export function ConfigDepositPolicyTypeToJSON(value?: ConfigDepositPolicyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountPercent': PolicyAmountPercentTypeToJSON(value.amountPercent),
        'deadline': PolicyDeadlineTypeToJSON(value.deadline),
        'depositReceiptNo': value.depositReceiptNo,
        'depositReqReversed': value.depositReqReversed,
        'description': value.description,
        'formattedRule': value.formattedRule,
        'inactive': value.inactive,
        'manual': value.manual,
        'policyCode': value.policyCode,
        'sequence': value.sequence,
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substring(0,10)),
        'typeOfCharges': DepositCancelRevenueTypeToJSON(value.typeOfCharges),
    };
}
