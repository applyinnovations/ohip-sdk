/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Sales Event Management API
 * APIs to cater for Event Management functionality in OPERA Cloud. <br /><br />The Events feature in OPERA Cloud is designed to manage any kind of catering activity. Events can be as simple as a one-hour reception or more complex, such as a three-day business meeting with meals, breaks, and specific meeting functionSpaceDetails with setupCode and resource requirements. Any group function can be an Event.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { BillingInstructionType } from './BillingInstructionType';
import {
    BillingInstructionTypeFromJSON,
    BillingInstructionTypeFromJSONTyped,
    BillingInstructionTypeToJSON,
} from './BillingInstructionType';
import type { RoutingInstructionTypeDuration } from './RoutingInstructionTypeDuration';
import {
    RoutingInstructionTypeDurationFromJSON,
    RoutingInstructionTypeDurationFromJSONTyped,
    RoutingInstructionTypeDurationToJSON,
} from './RoutingInstructionTypeDuration';
import type { TrxInfoType } from './TrxInfoType';
import {
    TrxInfoTypeFromJSON,
    TrxInfoTypeFromJSONTyped,
    TrxInfoTypeToJSON,
} from './TrxInfoType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Routing limit can be one of the three: Credit Limit, Percetage Limit, Covers Limit
 * @export
 * @interface RoutingInstructionType
 */
export interface RoutingInstructionType {
    /**
     * Set of Billing Instruction codes.
     * @type {Array<BillingInstructionType>}
     * @memberof RoutingInstructionType
     */
    billingInstructions?: Array<BillingInstructionType>;
    /**
     * Number of covers for this routing instruction.
     * @type {number}
     * @memberof RoutingInstructionType
     */
    covers?: number;
    /**
     * Allowable credit amount for this routing instruction. Null value means no limit, 0 equals zero.
     * @type {number}
     * @memberof RoutingInstructionType
     */
    creditLimit?: number;
    /**
     * 
     * @type {RoutingInstructionTypeDuration}
     * @memberof RoutingInstructionType
     */
    duration?: RoutingInstructionTypeDuration;
    /**
     * Amount of Credit used for this routing instruction.
     * @type {number}
     * @memberof RoutingInstructionType
     */
    limitUsed?: number;
    /**
     * The routing limit percentage allowed for this routing instruction.
     * @type {number}
     * @memberof RoutingInstructionType
     */
    percentageLimit?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof RoutingInstructionType
     */
    routingLinkId?: UniqueIDType;
    /**
     * List of Transaction codes info.
     * @type {Array<TrxInfoType>}
     * @memberof RoutingInstructionType
     */
    transactionCodes?: Array<TrxInfoType>;
}

/**
 * Check if a given object implements the RoutingInstructionType interface.
 */
export function instanceOfRoutingInstructionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RoutingInstructionTypeFromJSON(json: any): RoutingInstructionType {
    return RoutingInstructionTypeFromJSONTyped(json, false);
}

export function RoutingInstructionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): RoutingInstructionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'billingInstructions': !exists(json, 'billingInstructions') ? undefined : ((json['billingInstructions'] as Array<any>).map(BillingInstructionTypeFromJSON)),
        'covers': !exists(json, 'covers') ? undefined : json['covers'],
        'creditLimit': !exists(json, 'creditLimit') ? undefined : json['creditLimit'],
        'duration': !exists(json, 'duration') ? undefined : RoutingInstructionTypeDurationFromJSON(json['duration']),
        'limitUsed': !exists(json, 'limitUsed') ? undefined : json['limitUsed'],
        'percentageLimit': !exists(json, 'percentageLimit') ? undefined : json['percentageLimit'],
        'routingLinkId': !exists(json, 'routingLinkId') ? undefined : UniqueIDTypeFromJSON(json['routingLinkId']),
        'transactionCodes': !exists(json, 'transactionCodes') ? undefined : ((json['transactionCodes'] as Array<any>).map(TrxInfoTypeFromJSON)),
    };
}

export function RoutingInstructionTypeToJSON(value?: RoutingInstructionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'billingInstructions': value.billingInstructions === undefined ? undefined : ((value.billingInstructions as Array<any>).map(BillingInstructionTypeToJSON)),
        'covers': value.covers,
        'creditLimit': value.creditLimit,
        'duration': RoutingInstructionTypeDurationToJSON(value.duration),
        'limitUsed': value.limitUsed,
        'percentageLimit': value.percentageLimit,
        'routingLinkId': UniqueIDTypeToJSON(value.routingLinkId),
        'transactionCodes': value.transactionCodes === undefined ? undefined : ((value.transactionCodes as Array<any>).map(TrxInfoTypeToJSON)),
    };
}

