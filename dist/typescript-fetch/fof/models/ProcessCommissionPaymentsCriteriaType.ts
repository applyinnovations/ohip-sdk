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
import type { TimeSpanType } from './TimeSpanType';
import {
    TimeSpanTypeFromJSON,
    TimeSpanTypeFromJSONTyped,
    TimeSpanTypeToJSON,
} from './TimeSpanType';
import type { UniqueIDType } from './UniqueIDType';
import {
    UniqueIDTypeFromJSON,
    UniqueIDTypeFromJSONTyped,
    UniqueIDTypeToJSON,
} from './UniqueIDType';

/**
 * Generic commission criteria including hotel code, bank account id, agent id, reservation id and/or commission id
 * @export
 * @interface ProcessCommissionPaymentsCriteriaType
 */
export interface ProcessCommissionPaymentsCriteriaType {
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    agentId?: UniqueIDType;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    bankAccountId?: UniqueIDType;
    /**
     * If payment method is check, this serves as the start check number of checks to be printed.
     * @type {number}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    checkNo?: number;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    commissionId?: UniqueIDType;
    /**
     * Property of the commission record .
     * @type {string}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    hotelId?: string;
    /**
     * 
     * @type {UniqueIDType}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    resvNameId?: UniqueIDType;
    /**
     * 
     * @type {TimeSpanType}
     * @memberof ProcessCommissionPaymentsCriteriaType
     */
    timeSpan?: TimeSpanType;
}

/**
 * Check if a given object implements the ProcessCommissionPaymentsCriteriaType interface.
 */
export function instanceOfProcessCommissionPaymentsCriteriaType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ProcessCommissionPaymentsCriteriaTypeFromJSON(json: any): ProcessCommissionPaymentsCriteriaType {
    return ProcessCommissionPaymentsCriteriaTypeFromJSONTyped(json, false);
}

export function ProcessCommissionPaymentsCriteriaTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProcessCommissionPaymentsCriteriaType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agentId': !exists(json, 'agentId') ? undefined : UniqueIDTypeFromJSON(json['agentId']),
        'bankAccountId': !exists(json, 'bankAccountId') ? undefined : UniqueIDTypeFromJSON(json['bankAccountId']),
        'checkNo': !exists(json, 'checkNo') ? undefined : json['checkNo'],
        'commissionId': !exists(json, 'commissionId') ? undefined : UniqueIDTypeFromJSON(json['commissionId']),
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'resvNameId': !exists(json, 'resvNameId') ? undefined : UniqueIDTypeFromJSON(json['resvNameId']),
        'timeSpan': !exists(json, 'timeSpan') ? undefined : TimeSpanTypeFromJSON(json['timeSpan']),
    };
}

export function ProcessCommissionPaymentsCriteriaTypeToJSON(value?: ProcessCommissionPaymentsCriteriaType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agentId': UniqueIDTypeToJSON(value.agentId),
        'bankAccountId': UniqueIDTypeToJSON(value.bankAccountId),
        'checkNo': value.checkNo,
        'commissionId': UniqueIDTypeToJSON(value.commissionId),
        'hotelId': value.hotelId,
        'resvNameId': UniqueIDTypeToJSON(value.resvNameId),
        'timeSpan': TimeSpanTypeToJSON(value.timeSpan),
    };
}

