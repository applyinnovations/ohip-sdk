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
import type { CommissionPaymentActivityStatusCriteriaType } from './CommissionPaymentActivityStatusCriteriaType';
import {
    CommissionPaymentActivityStatusCriteriaTypeFromJSON,
    CommissionPaymentActivityStatusCriteriaTypeFromJSONTyped,
    CommissionPaymentActivityStatusCriteriaTypeToJSON,
} from './CommissionPaymentActivityStatusCriteriaType';
import type { NumberRangeType } from './NumberRangeType';
import {
    NumberRangeTypeFromJSON,
    NumberRangeTypeFromJSONTyped,
    NumberRangeTypeToJSON,
} from './NumberRangeType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Base type for payment activity information
 * @export
 * @interface ChangeCommissionPaymentActivityRangeCriteriaType
 */
export interface ChangeCommissionPaymentActivityRangeCriteriaType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ChangeCommissionPaymentActivityRangeCriteriaType
     */
    bankAccountId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ChangeCommissionPaymentActivityRangeCriteriaType
     */
    batchId?: UniqueIDType;
    /**
     * Property of the commission record.
     * @type {string}
     * @memberof ChangeCommissionPaymentActivityRangeCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {NumberRangeType}
     * @memberof ChangeCommissionPaymentActivityRangeCriteriaType
     */
    paymentActivityRange?: NumberRangeType;
    /**
     * 
     * @type {CommissionPaymentActivityStatusCriteriaType}
     * @memberof ChangeCommissionPaymentActivityRangeCriteriaType
     */
    paymentActivityStatus?: CommissionPaymentActivityStatusCriteriaType;
}

/**
 * Check if a given object implements the ChangeCommissionPaymentActivityRangeCriteriaType interface.
 */
export function instanceOfChangeCommissionPaymentActivityRangeCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChangeCommissionPaymentActivityRangeCriteriaTypeFromJSON(json: any): ChangeCommissionPaymentActivityRangeCriteriaType {
    return ChangeCommissionPaymentActivityRangeCriteriaTypeFromJSONTyped(json, false);
}

export function ChangeCommissionPaymentActivityRangeCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChangeCommissionPaymentActivityRangeCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bankAccountId': !exists(json, 'bankAccountId') ? undefined : UniqueIDTypeFromJSON(json['bankAccountId']),
        'batchId': !exists(json, 'batchId') ? undefined : UniqueIDTypeFromJSON(json['batchId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'paymentActivityRange': !exists(json, 'paymentActivityRange') ? undefined : NumberRangeTypeFromJSON(json['paymentActivityRange']),
        'paymentActivityStatus': !exists(json, 'paymentActivityStatus') ? undefined : CommissionPaymentActivityStatusCriteriaTypeFromJSON(json['paymentActivityStatus']),
    };
}

export function ChangeCommissionPaymentActivityRangeCriteriaTypeToJSON(value?: ChangeCommissionPaymentActivityRangeCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bankAccountId': UniqueIDTypeToJSON(value.bankAccountId),
        'batchId': UniqueIDTypeToJSON(value.batchId),
        'hotelId': value.hotelId,
        'paymentActivityRange': NumberRangeTypeToJSON(value.paymentActivityRange),
        'paymentActivityStatus': CommissionPaymentActivityStatusCriteriaTypeToJSON(value.paymentActivityStatus),
    };
}
