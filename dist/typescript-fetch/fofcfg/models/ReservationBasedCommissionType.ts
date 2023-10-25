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
import type { CommissionPaidDetailsType } from './CommissionPaidDetailsType';
import {
    CommissionPaidDetailsTypeFromJSON,
    CommissionPaidDetailsTypeFromJSONTyped,
    CommissionPaidDetailsTypeToJSON,
} from './CommissionPaidDetailsType';

/**
 * Reservation based commission details.
 * @export
 * @interface ReservationBasedCommissionType
 */
export interface ReservationBasedCommissionType {
    /**
     * 
     * @type {CommissionPaidDetailsType}
     * @memberof ReservationBasedCommissionType
     */
    commissionPaidDetails?: CommissionPaidDetailsType;
}

/**
 * Check if a given object implements the ReservationBasedCommissionType interface.
 */
export function instanceOfReservationBasedCommissionType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReservationBasedCommissionTypeFromJSON(json: any): ReservationBasedCommissionType {
    return ReservationBasedCommissionTypeFromJSONTyped(json, false);
}

export function ReservationBasedCommissionTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReservationBasedCommissionType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commissionPaidDetails': !exists(json, 'commissionPaidDetails') ? undefined : CommissionPaidDetailsTypeFromJSON(json['commissionPaidDetails']),
    };
}

export function ReservationBasedCommissionTypeToJSON(value?: ReservationBasedCommissionType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commissionPaidDetails': CommissionPaidDetailsTypeToJSON(value.commissionPaidDetails),
    };
}

