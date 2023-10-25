/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Price Availability Rate API
 * APIs to cater for Price and Rate Availability functionality in OPERA Cloud. <br /><br />Availability enables you to manage your room inventory by providing a detailed view of all available and sold rooms at a property. Some of the tasks you can perform include defining conditions for stay restrictions, setting room sell limits, and searching for and viewing room availability.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { OffsetUnitType } from './OffsetUnitType';
import {
    OffsetUnitTypeFromJSON,
    OffsetUnitTypeFromJSONTyped,
    OffsetUnitTypeToJSON,
} from './OffsetUnitType';
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
 * The CancelPenalty class defines the cancellation policy of the hotel facility.
 * @export
 * @interface GuaranteePolicyTypeCancelPenalty
 */
export interface GuaranteePolicyTypeCancelPenalty {
    /**
     * 
     * @type {PolicyAmountPercentType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     * 
     * @type {PolicyDeadlineType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    deadline?: PolicyDeadlineType;
    /**
     * Indicator if Cancellation Penalty is currently applicable or not.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    effective?: boolean;
    /**
     * Message.
     * @type {number}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    estimatedAmount?: number;
    /**
     * Formatted Text Rule of the Cancellation Penalty.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    formattedRule?: string;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    manual?: boolean;
    /**
     * Indicates if the amount is refundable if booking is canceled.
     * @type {boolean}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    nonRefundable?: boolean;
    /**
     * 
     * @type {OffsetUnitType}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    offsetUnit?: OffsetUnitType;
    /**
     * Text description of the Penalty in a given language.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    penaltyDescription?: string;
    /**
     * Policy Code.
     * @type {string}
     * @memberof GuaranteePolicyTypeCancelPenalty
     */
    policyCode?: string;
}

/**
 * Check if a given object implements the GuaranteePolicyTypeCancelPenalty interface.
 */
export function instanceOfGuaranteePolicyTypeCancelPenalty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GuaranteePolicyTypeCancelPenaltyFromJSON(json: any): GuaranteePolicyTypeCancelPenalty {
    return GuaranteePolicyTypeCancelPenaltyFromJSONTyped(json, false);
}

export function GuaranteePolicyTypeCancelPenaltyFromJSONTyped(json: any, ignoreDiscriminator: boolean): GuaranteePolicyTypeCancelPenalty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountPercent': !exists(json, 'amountPercent') ? undefined : PolicyAmountPercentTypeFromJSON(json['amountPercent']),
        'deadline': !exists(json, 'deadline') ? undefined : PolicyDeadlineTypeFromJSON(json['deadline']),
        'effective': !exists(json, 'effective') ? undefined : json['effective'],
        'estimatedAmount': !exists(json, 'estimatedAmount') ? undefined : json['estimatedAmount'],
        'formattedRule': !exists(json, 'formattedRule') ? undefined : json['formattedRule'],
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
        'nonRefundable': !exists(json, 'nonRefundable') ? undefined : json['nonRefundable'],
        'offsetUnit': !exists(json, 'offsetUnit') ? undefined : OffsetUnitTypeFromJSON(json['offsetUnit']),
        'penaltyDescription': !exists(json, 'penaltyDescription') ? undefined : json['penaltyDescription'],
        'policyCode': !exists(json, 'policyCode') ? undefined : json['policyCode'],
    };
}

export function GuaranteePolicyTypeCancelPenaltyToJSON(value?: GuaranteePolicyTypeCancelPenalty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountPercent': PolicyAmountPercentTypeToJSON(value.amountPercent),
        'deadline': PolicyDeadlineTypeToJSON(value.deadline),
        'effective': value.effective,
        'estimatedAmount': value.estimatedAmount,
        'formattedRule': value.formattedRule,
        'manual': value.manual,
        'nonRefundable': value.nonRefundable,
        'offsetUnit': OffsetUnitTypeToJSON(value.offsetUnit),
        'penaltyDescription': value.penaltyDescription,
        'policyCode': value.policyCode,
    };
}

