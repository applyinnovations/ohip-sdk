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
import type { CurrencyAmountType } from './CurrencyAmountType';
import {
    CurrencyAmountTypeFromJSON,
    CurrencyAmountTypeFromJSONTyped,
    CurrencyAmountTypeToJSON,
} from './CurrencyAmountType';
import type { RateCategoryType } from './RateCategoryType';
import {
    RateCategoryTypeFromJSON,
    RateCategoryTypeFromJSONTyped,
    RateCategoryTypeToJSON,
} from './RateCategoryType';
import type { RoomClassCodeInfoType } from './RoomClassCodeInfoType';
import {
    RoomClassCodeInfoTypeFromJSON,
    RoomClassCodeInfoTypeFromJSONTyped,
    RoomClassCodeInfoTypeToJSON,
} from './RoomClassCodeInfoType';
import type { SourceCodeInfoType } from './SourceCodeInfoType';
import {
    SourceCodeInfoTypeFromJSON,
    SourceCodeInfoTypeFromJSONTyped,
    SourceCodeInfoTypeToJSON,
} from './SourceCodeInfoType';

/**
 * Authorization configuration Rule Type.Authorization Rules specify the rule (or rules) that the property uses for credit card authorizations
 * @export
 * @interface AuthorizationConfigRuleType
 */
export interface AuthorizationConfigRuleType {
    /**
     * 
     * @type {CurrencyAmountType}
     * @memberof AuthorizationConfigRuleType
     */
    amount?: CurrencyAmountType;
    /**
     * Guarantee code associated to this rule.
     * @type {string}
     * @memberof AuthorizationConfigRuleType
     */
    guaranteeCode?: string;
    /**
     * Property associated with authorization rule
     * @type {string}
     * @memberof AuthorizationConfigRuleType
     */
    hotelId?: string;
    /**
     * Ignore deposits paid for calculation of the amount to be authorized.
     * @type {boolean}
     * @memberof AuthorizationConfigRuleType
     */
    ignoreDepositsYN?: boolean;
    /**
     * A maximum of two digits to set the number of days to authorize for a credit card. If the field is left blank, authorizations will be done for the entire stay duration of the reservation
     * @type {number}
     * @memberof AuthorizationConfigRuleType
     */
    maxDaysToAuthorize?: number;
    /**
     * Percentage to be applied to all rules with a percentage configured in the formula.
     * @type {number}
     * @memberof AuthorizationConfigRuleType
     */
    percentage?: number;
    /**
     * 
     * @type {RateCategoryType}
     * @memberof AuthorizationConfigRuleType
     */
    rateCategory?: RateCategoryType;
    /**
     * Rate code associated to this rule.
     * @type {string}
     * @memberof AuthorizationConfigRuleType
     */
    rateCode?: string;
    /**
     * 
     * @type {RoomClassCodeInfoType}
     * @memberof AuthorizationConfigRuleType
     */
    roomClass?: RoomClassCodeInfoType;
    /**
     * Authorization rule Room type.
     * @type {string}
     * @memberof AuthorizationConfigRuleType
     */
    roomType?: string;
    /**
     * Rule Number description for current authorization.
     * @type {string}
     * @memberof AuthorizationConfigRuleType
     */
    ruleDescription?: string;
    /**
     * Rule Number for current authorization.
     * @type {number}
     * @memberof AuthorizationConfigRuleType
     */
    ruleNo?: number;
    /**
     * 
     * @type {SourceCodeInfoType}
     * @memberof AuthorizationConfigRuleType
     */
    sourceCode?: SourceCodeInfoType;
}

/**
 * Check if a given object implements the AuthorizationConfigRuleType interface.
 */
export function instanceOfAuthorizationConfigRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AuthorizationConfigRuleTypeFromJSON(json: any): AuthorizationConfigRuleType {
    return AuthorizationConfigRuleTypeFromJSONTyped(json, false);
}

export function AuthorizationConfigRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuthorizationConfigRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : CurrencyAmountTypeFromJSON(json['amount']),
        'guaranteeCode': !exists(json, 'guaranteeCode') ? undefined : json['guaranteeCode'],
        'hotelId': !exists(json, 'hotelId') ? undefined : json['hotelId'],
        'ignoreDepositsYN': !exists(json, 'ignoreDepositsYN') ? undefined : json['ignoreDepositsYN'],
        'maxDaysToAuthorize': !exists(json, 'maxDaysToAuthorize') ? undefined : json['maxDaysToAuthorize'],
        'percentage': !exists(json, 'percentage') ? undefined : json['percentage'],
        'rateCategory': !exists(json, 'rateCategory') ? undefined : RateCategoryTypeFromJSON(json['rateCategory']),
        'rateCode': !exists(json, 'rateCode') ? undefined : json['rateCode'],
        'roomClass': !exists(json, 'roomClass') ? undefined : RoomClassCodeInfoTypeFromJSON(json['roomClass']),
        'roomType': !exists(json, 'roomType') ? undefined : json['roomType'],
        'ruleDescription': !exists(json, 'ruleDescription') ? undefined : json['ruleDescription'],
        'ruleNo': !exists(json, 'ruleNo') ? undefined : json['ruleNo'],
        'sourceCode': !exists(json, 'sourceCode') ? undefined : SourceCodeInfoTypeFromJSON(json['sourceCode']),
    };
}

export function AuthorizationConfigRuleTypeToJSON(value?: AuthorizationConfigRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': CurrencyAmountTypeToJSON(value.amount),
        'guaranteeCode': value.guaranteeCode,
        'hotelId': value.hotelId,
        'ignoreDepositsYN': value.ignoreDepositsYN,
        'maxDaysToAuthorize': value.maxDaysToAuthorize,
        'percentage': value.percentage,
        'rateCategory': RateCategoryTypeToJSON(value.rateCategory),
        'rateCode': value.rateCode,
        'roomClass': RoomClassCodeInfoTypeToJSON(value.roomClass),
        'roomType': value.roomType,
        'ruleDescription': value.ruleDescription,
        'ruleNo': value.ruleNo,
        'sourceCode': SourceCodeInfoTypeToJSON(value.sourceCode),
    };
}

