/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Front Desk Configuration API
 * APIs to cater for Front Desk Configuration in OPERA Cloud. Here you can find operations to get, post, put and delete front desk codes such as commission codes, transaction groups, codes & subgroups, articles, payment methods and credit card types.<br /><br /> Compatible with OPERA Cloud release 23.2.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 23.2
 * Contact: hospitality-integrations_ww@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CommissionCodeTransactionType } from './CommissionCodeTransactionType';
import {
    CommissionCodeTransactionTypeFromJSON,
    CommissionCodeTransactionTypeFromJSONTyped,
    CommissionCodeTransactionTypeToJSON,
} from './CommissionCodeTransactionType';
import type { ReservationBasedCommissionType } from './ReservationBasedCommissionType';
import {
    ReservationBasedCommissionTypeFromJSON,
    ReservationBasedCommissionTypeFromJSONTyped,
    ReservationBasedCommissionTypeToJSON,
} from './ReservationBasedCommissionType';

/**
 * Commission calculation type based on details.
 * @export
 * @interface CommissionCalculationType
 */
export interface CommissionCalculationType {
    /**
     * 
     * @type {ReservationBasedCommissionType}
     * @memberof CommissionCalculationType
     */
    reservationBasedCommission?: ReservationBasedCommissionType;
    /**
     * Revenue based commission details.
     * @type {Array<CommissionCodeTransactionType>}
     * @memberof CommissionCalculationType
     */
    revenueBasedCommission?: Array<CommissionCodeTransactionType>;
}

/**
 * Check if a given object implements the CommissionCalculationType interface.
 */
export function instanceOfCommissionCalculationType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CommissionCalculationTypeFromJSON(json: any): CommissionCalculationType {
    return CommissionCalculationTypeFromJSONTyped(json, false);
}

export function CommissionCalculationTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CommissionCalculationType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'reservationBasedCommission': !exists(json, 'reservationBasedCommission') ? undefined : ReservationBasedCommissionTypeFromJSON(json['reservationBasedCommission']),
        'revenueBasedCommission': !exists(json, 'revenueBasedCommission') ? undefined : ((json['revenueBasedCommission'] as Array<any>).map(CommissionCodeTransactionTypeFromJSON)),
    };
}

export function CommissionCalculationTypeToJSON(value?: CommissionCalculationType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'reservationBasedCommission': ReservationBasedCommissionTypeToJSON(value.reservationBasedCommission),
        'revenueBasedCommission': value.revenueBasedCommission === undefined ? undefined : ((value.revenueBasedCommission as Array<any>).map(CommissionCodeTransactionTypeToJSON)),
    };
}
