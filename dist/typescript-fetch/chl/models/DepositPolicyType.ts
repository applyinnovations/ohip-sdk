/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Channel Configuration API
 * APIs to cater for Channel Management functionality in OPERA Cloud. <br /><br /> Channel Management allows a property to configure and administer channels such as OTAs, and web channels, covering functionality such as channel configuration, availability, inventory and restrictions.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
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
 * @interface DepositPolicyType
 */
export interface DepositPolicyType {
    /**
     * 
     * @type {PolicyAmountPercentType}
     * @memberof DepositPolicyType
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     * 
     * @type {PolicyDeadlineType}
     * @memberof DepositPolicyType
     */
    deadline?: PolicyDeadlineType;
    /**
     * Receipt number associated with the deposit policy
     * @type {number}
     * @memberof DepositPolicyType
     */
    depositReceiptNo?: number;
    /**
     * Flag to indicate if deposit policy is reversed
     * @type {boolean}
     * @memberof DepositPolicyType
     */
    depositReqReversed?: boolean;
    /**
     * Text description of the Payment in a given language.
     * @type {string}
     * @memberof DepositPolicyType
     */
    description?: string;
    /**
     * Formatted Text Rule of the deposit policy.
     * @type {string}
     * @memberof DepositPolicyType
     */
    formattedRule?: string;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof DepositPolicyType
     */
    manual?: boolean;
    /**
     * Deposit Policy Code
     * @type {string}
     * @memberof DepositPolicyType
     */
    policyCode?: string;
    /**
     * Transaction Date associated with the deposit policy
     * @type {Date}
     * @memberof DepositPolicyType
     */
    transactionDate?: Date;
    /**
     * 
     * @type {DepositCancelRevenueType}
     * @memberof DepositPolicyType
     */
    typeOfCharges?: DepositCancelRevenueType;
}

/**
 * Check if a given object implements the DepositPolicyType interface.
 */
export function instanceOfDepositPolicyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DepositPolicyTypeFromJSON(json: any): DepositPolicyType {
    return DepositPolicyTypeFromJSONTyped(json, false);
}

export function DepositPolicyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): DepositPolicyType {
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
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
        'policyCode': !exists(json, 'policyCode') ? undefined : json['policyCode'],
        'transactionDate': !exists(json, 'transactionDate') ? undefined : (new Date(json['transactionDate'])),
        'typeOfCharges': !exists(json, 'typeOfCharges') ? undefined : DepositCancelRevenueTypeFromJSON(json['typeOfCharges']),
    };
}

export function DepositPolicyTypeToJSON(value?: DepositPolicyType | null): any {
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
        'manual': value.manual,
        'policyCode': value.policyCode,
        'transactionDate': value.transactionDate === undefined ? undefined : (value.transactionDate.toISOString().substr(0,10)),
        'typeOfCharges': DepositCancelRevenueTypeToJSON(value.typeOfCharges),
    };
}

