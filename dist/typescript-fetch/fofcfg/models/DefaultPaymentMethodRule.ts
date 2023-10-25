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
import type { InstanceLink } from './InstanceLink';
import {
    InstanceLinkFromJSON,
    InstanceLinkFromJSONTyped,
    InstanceLinkToJSON,
} from './InstanceLink';
import type { PaymentMethodValidationRuleType } from './PaymentMethodValidationRuleType';
import {
    PaymentMethodValidationRuleTypeFromJSON,
    PaymentMethodValidationRuleTypeFromJSONTyped,
    PaymentMethodValidationRuleTypeToJSON,
} from './PaymentMethodValidationRuleType';
import type { WarningType } from './WarningType';
import {
    WarningTypeFromJSON,
    WarningTypeFromJSONTyped,
    WarningTypeToJSON,
} from './WarningType';

/**
 * 
 * @export
 * @interface DefaultPaymentMethodRule
 */
export interface DefaultPaymentMethodRule {
    /**
     * 
     * @type {Array<InstanceLink>}
     * @memberof DefaultPaymentMethodRule
     */
    links?: Array<InstanceLink>;
    /**
     * 
     * @type {PaymentMethodValidationRuleType}
     * @memberof DefaultPaymentMethodRule
     */
    rule?: PaymentMethodValidationRuleType;
    /**
     * Used in conjunction with the Success element to define a business error.
     * @type {Array<WarningType>}
     * @memberof DefaultPaymentMethodRule
     */
    warnings?: Array<WarningType>;
}

/**
 * Check if a given object implements the DefaultPaymentMethodRule interface.
 */
export function instanceOfDefaultPaymentMethodRule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function DefaultPaymentMethodRuleFromJSON(json: any): DefaultPaymentMethodRule {
    return DefaultPaymentMethodRuleFromJSONTyped(json, false);
}

export function DefaultPaymentMethodRuleFromJSONTyped(json: any, ignoreDiscriminator: boolean): DefaultPaymentMethodRule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'links': !exists(json, 'links') ? undefined : ((json['links'] as Array<any>).map(InstanceLinkFromJSON)),
        'rule': !exists(json, 'rule') ? undefined : PaymentMethodValidationRuleTypeFromJSON(json['rule']),
        'warnings': !exists(json, 'warnings') ? undefined : ((json['warnings'] as Array<any>).map(WarningTypeFromJSON)),
    };
}

export function DefaultPaymentMethodRuleToJSON(value?: DefaultPaymentMethodRule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'links': value.links === undefined ? undefined : ((value.links as Array<any>).map(InstanceLinkToJSON)),
        'rule': PaymentMethodValidationRuleTypeToJSON(value.rule),
        'warnings': value.warnings === undefined ? undefined : ((value.warnings as Array<any>).map(WarningTypeToJSON)),
    };
}

