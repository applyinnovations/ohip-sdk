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
 * @interface ConfigCancelPenaltyType
 */
export interface ConfigCancelPenaltyType {
    /**
     * 
     * @type {PolicyAmountPercentType}
     * @memberof ConfigCancelPenaltyType
     */
    amountPercent?: PolicyAmountPercentType;
    /**
     * 
     * @type {PolicyDeadlineType}
     * @memberof ConfigCancelPenaltyType
     */
    deadline?: PolicyDeadlineType;
    /**
     * Formatted Text Rule of the Cancellation Penalty.
     * @type {string}
     * @memberof ConfigCancelPenaltyType
     */
    formattedRule?: string;
    /**
     * Inactive rules are no longer available for attachment to rate codes, reservation types or reservations; however, they are still recorded in the database for historical purposes.
     * @type {boolean}
     * @memberof ConfigCancelPenaltyType
     */
    inactive?: boolean;
    /**
     * Flag to indicate if the cancellation policy is manual.
     * @type {boolean}
     * @memberof ConfigCancelPenaltyType
     */
    manual?: boolean;
    /**
     * Indicates if the amount is refundable if booking is canceled.
     * @type {boolean}
     * @memberof ConfigCancelPenaltyType
     */
    nonRefundable?: boolean;
    /**
     * 
     * @type {OffsetUnitType}
     * @memberof ConfigCancelPenaltyType
     */
    offsetUnit?: OffsetUnitType;
    /**
     * Text description of the Penalty in a given language.
     * @type {string}
     * @memberof ConfigCancelPenaltyType
     */
    penaltyDescription?: string;
    /**
     * Policy Code.
     * @type {string}
     * @memberof ConfigCancelPenaltyType
     */
    policyCode?: string;
    /**
     * The sequence number that determines the position of this rule in the Deposit or Cancellation rules LOV.
     * @type {number}
     * @memberof ConfigCancelPenaltyType
     */
    sequence?: number;
}

/**
 * Check if a given object implements the ConfigCancelPenaltyType interface.
 */
export function instanceOfConfigCancelPenaltyType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConfigCancelPenaltyTypeFromJSON(json: any): ConfigCancelPenaltyType {
    return ConfigCancelPenaltyTypeFromJSONTyped(json, false);
}

export function ConfigCancelPenaltyTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConfigCancelPenaltyType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amountPercent': !exists(json, 'amountPercent') ? undefined : PolicyAmountPercentTypeFromJSON(json['amountPercent']),
        'deadline': !exists(json, 'deadline') ? undefined : PolicyDeadlineTypeFromJSON(json['deadline']),
        'formattedRule': !exists(json, 'formattedRule') ? undefined : json['formattedRule'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'manual': !exists(json, 'manual') ? undefined : json['manual'],
        'nonRefundable': !exists(json, 'nonRefundable') ? undefined : json['nonRefundable'],
        'offsetUnit': !exists(json, 'offsetUnit') ? undefined : OffsetUnitTypeFromJSON(json['offsetUnit']),
        'penaltyDescription': !exists(json, 'penaltyDescription') ? undefined : json['penaltyDescription'],
        'policyCode': !exists(json, 'policyCode') ? undefined : json['policyCode'],
        'sequence': !exists(json, 'sequence') ? undefined : json['sequence'],
    };
}

export function ConfigCancelPenaltyTypeToJSON(value?: ConfigCancelPenaltyType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amountPercent': PolicyAmountPercentTypeToJSON(value.amountPercent),
        'deadline': PolicyDeadlineTypeToJSON(value.deadline),
        'formattedRule': value.formattedRule,
        'inactive': value.inactive,
        'manual': value.manual,
        'nonRefundable': value.nonRefundable,
        'offsetUnit': OffsetUnitTypeToJSON(value.offsetUnit),
        'penaltyDescription': value.penaltyDescription,
        'policyCode': value.policyCode,
        'sequence': value.sequence,
    };
}

