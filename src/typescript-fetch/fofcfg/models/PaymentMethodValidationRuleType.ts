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
import type { CardRangeType } from './CardRangeType';
import {
    CardRangeTypeFromJSON,
    CardRangeTypeFromJSONTyped,
    CardRangeTypeToJSON,
} from './CardRangeType';
import type { CardValidationRuleTypeType } from './CardValidationRuleTypeType';
import {
    CardValidationRuleTypeTypeFromJSON,
    CardValidationRuleTypeTypeFromJSONTyped,
    CardValidationRuleTypeTypeToJSON,
} from './CardValidationRuleTypeType';

/**
 * Payment method card validation rules.
 * @export
 * @interface PaymentMethodValidationRuleType
 */
export interface PaymentMethodValidationRuleType {
    /**
     * Formula used for card validation. Only valid in case of user defined validation.
     * @type {string}
     * @memberof PaymentMethodValidationRuleType
     */
    formula?: string;
    /**
     * Valid lengths of card number.
     * @type {string}
     * @memberof PaymentMethodValidationRuleType
     */
    length?: string;
    /**
     * Valid card number prefix.
     * @type {string}
     * @memberof PaymentMethodValidationRuleType
     */
    prefix?: string;
    /**
     * Card number start and end range.
     * @type {Array<CardRangeType>}
     * @memberof PaymentMethodValidationRuleType
     */
    ranges?: Array<CardRangeType>;
    /**
     * 
     * @type {CardValidationRuleTypeType}
     * @memberof PaymentMethodValidationRuleType
     */
    rule?: CardValidationRuleTypeType;
}

/**
 * Check if a given object implements the PaymentMethodValidationRuleType interface.
 */
export function instanceOfPaymentMethodValidationRuleType(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PaymentMethodValidationRuleTypeFromJSON(json: any): PaymentMethodValidationRuleType {
    return PaymentMethodValidationRuleTypeFromJSONTyped(json, false);
}

export function PaymentMethodValidationRuleTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PaymentMethodValidationRuleType {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'formula': !exists(json, 'formula') ? undefined : json['formula'],
        'length': !exists(json, 'length') ? undefined : json['length'],
        'prefix': !exists(json, 'prefix') ? undefined : json['prefix'],
        'ranges': !exists(json, 'ranges') ? undefined : ((json['ranges'] as Array<any>).map(CardRangeTypeFromJSON)),
        'rule': !exists(json, 'rule') ? undefined : CardValidationRuleTypeTypeFromJSON(json['rule']),
    };
}

export function PaymentMethodValidationRuleTypeToJSON(value?: PaymentMethodValidationRuleType | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'formula': value.formula,
        'length': value.length,
        'prefix': value.prefix,
        'ranges': value.ranges === undefined ? undefined : ((value.ranges as Array<any>).map(CardRangeTypeToJSON)),
        'rule': CardValidationRuleTypeTypeToJSON(value.rule),
    };
}

