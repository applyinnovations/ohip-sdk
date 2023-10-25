/* tslint:disable */
/* eslint-disable */
/**
 * OPERA Cloud Customer Relationship Management Outbound API
 * APIs to cater for Customer Relationship Management external (outbound) functionality with OPERA. These APIs facilitate various operations related to getting data from an external system, and inserting it into OPERA.<br /><br /> Compatible with OPERA Cloud release 20.99.99.99.<br /><br /><p> This document and all content within is available under the Universal Permissive License v 1.0 (https://oss.oracle.com/licenses/upl). Copyright (c) 2020, 2023 Oracle and/or its affiliates.</p>
 *
 * The version of the OpenAPI document: 20.99.99.99
 * Contact: hospitality_apis_ww_grp@oracle.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';

/**
 * Configured rule for computing the amount to authorize.
 * @export
 * @interface AuthorizationRuleType
 */
export interface AuthorizationRuleType {
    /**
     * The authorization rule code.
     * @type {number}
     * @memberof AuthorizationRuleType
     */
    code?: number;
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AuthorizationRuleType
     */
    amount?: CurrencyAmountType;
    /**
     * A percentage value if the authorization rule is percentage based.
     * @type {number}
     * @memberof AuthorizationRuleType
     */
    percent?: number;
}

/**
 * Check if a given object implements the AuthorizationRuleType interface.
 */
export function instanceOfAuthorizationRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationRuleTypeFromJSON(json: any): AuthorizationRuleType {
    return AuthorizationRuleTypeFromJSONTyped(json, false);
}

export function AuthorizationRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'code': !exists(json, 'code') ? undefined : json['code'],
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'percent': !exists(json, 'percent') ? undefined : json['percent'],
    };
}

export function AuthorizationRuleTypeToJSON(value?: AuthorizationRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'code': value.code,
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'percent': value.percent,
    };
}

